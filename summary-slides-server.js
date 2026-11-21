/**
 * WIS Physics Learning Hub - Independent Summary Slides Backend & Folder Sync Module
 *
 * Strictly scoped to Grade 9 and Grade 12 (KH-Physics & EN-Physics).
 * Uses zero external dependencies (Node.js built-ins only).
 *
 * Folder Layout (matching ebooks/ & worksheets/ for easy file replacement & GitHub push):
 *   - summary_slides/grade9/kh/      (Grade 9 KH-Physics slides)
 *   - summary_slides/grade9/en/      (Grade 9 EN-Physics slides)
 *   - summary_slides/grade9/catalog.json
 *   - summary_slides/grade12/kh/     (Grade 12 KH-Physics slides)
 *   - summary_slides/grade12/en/     (Grade 12 EN-Physics slides)
 *   - summary_slides/grade12/catalog.json
 *
 * Automatically syncs files dropped/replaced directly in File Explorer into catalog.json
 * so uploading to GitHub serves them directly without requiring Node.js on GitHub Pages.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFile } = require('child_process');

const MAX_UPLOAD_BYTES = 100 * 1024 * 1024; // 100 MB
const ALLOWED_GRADES = new Set(['9', '12']);
const ALLOWED_LANGS = new Set(['kh', 'en']);
const ALLOWED_EXTS = new Set(['.pdf', '.pptx', '.ppt']);

const SLIDE_MIME_TYPES = {
    '.pdf': 'application/pdf',
    '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    '.ppt': 'application/vnd.ms-powerpoint'
};

let libreOfficeCheckDone = false;
let libreOfficeBinary = null;

function detectLibreOffice() {
    if (libreOfficeCheckDone) return Promise.resolve(libreOfficeBinary);
    return new Promise((resolve) => {
        const candidates = process.platform === 'win32'
            ? [
                'soffice',
                'C:\\Program Files\\LibreOffice\\program\\soffice.exe',
                'C:\\Program Files (x86)\\LibreOffice\\program\\soffice.exe'
            ]
            : ['soffice', 'libreoffice'];

        let idx = 0;
        function tryNext() {
            if (idx >= candidates.length) {
                libreOfficeCheckDone = true;
                libreOfficeBinary = null;
                return resolve(null);
            }
            const bin = candidates[idx++];
            try {
                execFile(bin, ['--version'], { timeout: 2500 }, (err) => {
                    if (!err) {
                        libreOfficeCheckDone = true;
                        libreOfficeBinary = bin;
                        return resolve(bin);
                    }
                    tryNext();
                });
            } catch (e) {
                tryNext();
            }
        }
        tryNext();
    });
}

function tryConvertOfficeToPdf(bin, sourcePath, outDir) {
    return new Promise((resolve) => {
        if (!bin) return resolve(null);
        try {
            execFile(
                bin,
                ['--headless', '--norestore', '--convert-to', 'pdf', '--outdir', outDir, sourcePath],
                { timeout: 45000 },
                (err) => {
                    if (err) return resolve(null);
                    const base = path.basename(sourcePath, path.extname(sourcePath));
                    const expectedPdf = path.join(outDir, `${base}.pdf`);
                    if (fs.existsSync(expectedPdf)) {
                        const renamedPreview = path.join(outDir, `${base}.lo-preview.pdf`);
                        try {
                            if (fs.existsSync(renamedPreview)) fs.unlinkSync(renamedPreview);
                            fs.renameSync(expectedPdf, renamedPreview);
                            return resolve(renamedPreview);
                        } catch (e) {
                            return resolve(expectedPdf);
                        }
                    }
                    return resolve(null);
                }
            );
        } catch (e) {
            return resolve(null);
        }
    });
}

function getGradePaths(baseDir, grade) {
    const rootDir = path.join(baseDir, 'summary_slides');
    const gradeDir = path.join(rootDir, `grade${grade}`);
    const khDir = path.join(gradeDir, 'kh');
    const enDir = path.join(gradeDir, 'en');
    const catalogPath = path.join(gradeDir, 'catalog.json');
    return { rootDir, gradeDir, khDir, enDir, catalogPath };
}

function ensureGradeStorage(baseDir, grade) {
    const paths = getGradePaths(baseDir, grade);
    if (!fs.existsSync(paths.rootDir)) fs.mkdirSync(paths.rootDir, { recursive: true });
    if (!fs.existsSync(paths.gradeDir)) fs.mkdirSync(paths.gradeDir, { recursive: true });
    if (!fs.existsSync(paths.khDir)) fs.mkdirSync(paths.khDir, { recursive: true });
    if (!fs.existsSync(paths.enDir)) fs.mkdirSync(paths.enDir, { recursive: true });
    if (!fs.existsSync(paths.catalogPath)) {
        fs.writeFileSync(paths.catalogPath, JSON.stringify({
            grade: String(grade),
            updatedAt: new Date().toISOString(),
            slides: []
        }, null, 2), 'utf8');
    }
    return paths;
}

function readRawCatalog(baseDir, grade) {
    const { catalogPath } = ensureGradeStorage(baseDir, grade);
    try {
        const raw = fs.readFileSync(catalogPath, 'utf8');
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.slides)) {
            return parsed.slides.filter(s => s && String(s.grade) === String(grade));
        }
    } catch (e) {}
    return [];
}

function writeCatalog(baseDir, grade, slides) {
    const { catalogPath } = ensureGradeStorage(baseDir, grade);
    const cleanSlides = (Array.isArray(slides) ? slides : []).filter(s => s && String(s.grade) === String(grade));
    const tmpPath = `${catalogPath}.${crypto.randomBytes(4).toString('hex')}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify({
        grade: String(grade),
        updatedAt: new Date().toISOString(),
        slides: cleanSlides
    }, null, 2), 'utf8');
    fs.renameSync(tmpPath, catalogPath);
    return cleanSlides;
}

function deriveTitleFromFilename(filename) {
    return path.basename(String(filename || ''), path.extname(String(filename || '')))
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim() || String(filename || 'Summary Slides');
}

function deriveChapterTagFromFilename(filename) {
    const m = String(filename || '').match(/(?:ch(?:apter)?[\s_-]*(\d+))(?:[\s_-]*l(?:esson)?[\s_-]*(\d+))?/i);
    if (!m) return '';
    return m[2] ? `Chapter ${m[1]} • Lesson ${m[2]}` : `Chapter ${m[1]}`;
}

function isSlideAssetFile(fileName) {
    if (!fileName || fileName.startsWith('.')) return false;
    if (fileName.endsWith('.lo-preview.pdf')) return false;
    const lower = fileName.toLowerCase();
    return lower.endsWith('.pdf') || lower.endsWith('.pptx') || lower.endsWith('.ppt');
}

/**
 * Reconciles summary_slides/grade{9|12}/{kh,en}/ folders on disk with catalog.json.
 * - Detects newly added files pasted manually into kh/ or en/
 * - Detects replaced files (updated size / mtime)
 * - Removes records whose file was manually deleted from disk
 */
function syncGradeCatalog(baseDir, grade) {
    const g = String(grade);
    if (!ALLOWED_GRADES.has(g)) return [];

    const paths = ensureGradeStorage(baseDir, g);
    const existing = readRawCatalog(baseDir, g);

    const existingByRelUrl = new Map();
    for (const item of existing) {
        if (item && item.url) existingByRelUrl.set(item.url, item);
    }

    const diskSlides = [];
    const seenRelUrls = new Set();

    for (const lang of ['kh', 'en']) {
        const langDir = lang === 'kh' ? paths.khDir : paths.enDir;
        let fileNames = [];
        try {
            fileNames = fs.readdirSync(langDir).filter(isSlideAssetFile).sort((a, b) => a.localeCompare(b));
        } catch (e) {
            fileNames = [];
        }

        for (const fileName of fileNames) {
            const fullPath = path.join(langDir, fileName);
            let stats;
            try {
                stats = fs.statSync(fullPath);
                if (!stats.isFile()) continue;
            } catch (e) {
                continue;
            }

            const relUrl = `summary_slides/grade${g}/${lang}/${fileName}`;
            seenRelUrls.add(relUrl);

            const ext = fileName.toLowerCase().endsWith('.pdf.pdf') ? '.pdf' : path.extname(fileName).toLowerCase();
            const prev = existingByRelUrl.get(relUrl);
            const mtimeIso = stats.mtime ? stats.mtime.toISOString() : new Date().toISOString();

            const previewCandidate = `${path.basename(fileName, path.extname(fileName))}.lo-preview.pdf`;
            const previewUrl = fs.existsSync(path.join(langDir, previewCandidate))
                ? `summary_slides/grade${g}/${lang}/${previewCandidate}`
                : null;

            if (prev) {
                diskSlides.push({
                    ...prev,
                    id: prev.id || `g${g}-${lang}-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                    grade: g,
                    language: lang,
                    originalName: prev.originalName || fileName,
                    storedName: fileName,
                    url: relUrl,
                    previewUrl: previewUrl || null,
                    ext,
                    size: stats.size,
                    updatedAt: (prev.size !== stats.size) ? mtimeIso : (prev.updatedAt || mtimeIso)
                });
            } else {
                diskSlides.push({
                    id: `g${g}-${lang}-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                    grade: g,
                    language: lang,
                    title: deriveTitleFromFilename(fileName),
                    description: '',
                    chapter: deriveChapterTagFromFilename(fileName),
                    originalName: fileName,
                    storedName: fileName,
                    url: relUrl,
                    previewUrl,
                    ext,
                    size: stats.size,
                    createdAt: stats.birthtime ? stats.birthtime.toISOString() : mtimeIso,
                    updatedAt: mtimeIso
                });
            }
        }
    }

    // Write only if entries changed to avoid needless disk writes
    const prevJson = JSON.stringify(existing);
    const nextJson = JSON.stringify(diskSlides);
    if (prevJson !== nextJson) {
        return writeCatalog(baseDir, g, diskSlides);
    }
    return diskSlides;
}

function syncAllCatalogs(baseDir) {
    syncGradeCatalog(baseDir, '9');
    syncGradeCatalog(baseDir, '12');
}

function sanitizeFileName(name) {
    const base = path.basename(String(name || 'slide')).trim();
    const cleaned = base.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_').replace(/\s+/g, '-');
    return cleaned || 'summary-slide.pdf';
}

function getUniqueTargetFilename(dirPath, cleanFilename) {
    const ext = path.extname(cleanFilename);
    const stem = path.basename(cleanFilename, ext);
    let candidate = cleanFilename;
    let counter = 2;
    while (fs.existsSync(path.join(dirPath, candidate))) {
        candidate = `${stem}-${counter}${ext}`;
        counter++;
    }
    return candidate;
}

function readBinaryUpload(req, maxBytes = MAX_UPLOAD_BYTES) {
    return new Promise((resolve, reject) => {
        const chunks = [];
        let total = 0;
        let settled = false;

        req.on('data', (chunk) => {
            if (settled) return;
            total += chunk.length;
            if (total > maxBytes) {
                settled = true;
                reject(new Error(`File exceeds maximum allowed size of ${Math.round(maxBytes / (1024 * 1024))} MB.`));
                try { req.destroy(); } catch (e) {}
                return;
            }
            chunks.push(chunk);
        });
        req.on('end', () => {
            if (!settled) {
                settled = true;
                resolve(Buffer.concat(chunks));
            }
        });
        req.on('error', (err) => {
            if (!settled) {
                settled = true;
                reject(err);
            }
        });
    });
}

function readSmallJson(req) {
    return readBinaryUpload(req, 1024 * 1024).then((buf) => {
        try {
            return JSON.parse(buf.toString('utf8') || '{}');
        } catch (e) {
            return {};
        }
    });
}

function safeUnlink(filePath) {
    if (!filePath) return;
    try {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
    } catch (e) {}
}

function canViewSlides(ctx) {
    return Boolean(ctx.isHost || ctx.adminSession || ctx.studentSession);
}

function canManageSlides(ctx) {
    return Boolean(ctx.isHost || ctx.adminSession);
}

function sendFileWithRanges(req, res, filePath, contentType, originalName) {
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify({ error: 'Slide file not found on disk.' }));
        }

        const safeDispName = encodeURIComponent(originalName || path.basename(filePath));
        const baseHeaders = {
            'Content-Type': contentType || 'application/octet-stream',
            'Accept-Ranges': 'bytes',
            'Cache-Control': 'private, no-cache',
            'Content-Disposition': `inline; filename*=UTF-8''${safeDispName}`
        };

        const range = req.headers.range;
        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;
            if (isNaN(start) || isNaN(end) || start >= stats.size || end >= stats.size || start > end) {
                res.writeHead(416, { 'Content-Range': `bytes */${stats.size}` });
                return res.end();
            }
            res.writeHead(206, {
                ...baseHeaders,
                'Content-Range': `bytes ${start}-${end}/${stats.size}`,
                'Content-Length': (end - start) + 1
            });
            return fs.createReadStream(filePath, { start, end }).pipe(res);
        }

        res.writeHead(200, {
            ...baseHeaders,
            'Content-Length': stats.size
        });
        return fs.createReadStream(filePath).pipe(res);
    });
}

function resolveSlideDiskPath(baseDir, grade, slideItem, usePreview) {
    const paths = ensureGradeStorage(baseDir, grade);
    const langDir = slideItem.language === 'en' ? paths.enDir : paths.khDir;
    if (usePreview && slideItem.previewUrl) {
        const pPath = path.normalize(path.join(baseDir, slideItem.previewUrl));
        if (pPath.startsWith(paths.gradeDir) && fs.existsSync(pPath)) {
            return { diskPath: pPath, isPreview: true };
        }
    }
    if (slideItem.url) {
        const uPath = path.normalize(path.join(baseDir, slideItem.url));
        if (uPath.startsWith(paths.gradeDir) && fs.existsSync(uPath)) {
            return { diskPath: uPath, isPreview: false };
        }
    }
    const fallbackPath = path.normalize(path.join(langDir, path.basename(slideItem.storedName || '')));
    if (fallbackPath.startsWith(langDir) && fs.existsSync(fallbackPath)) {
        return { diskPath: fallbackPath, isPreview: false };
    }
    return null;
}

async function handleSummarySlidesRequest(req, res, ctx) {
    const { pathname, method, parsedUrl, baseDir, sendJson } = ctx;
    const params = parsedUrl.searchParams;

    // 1. Capabilities check
    if (pathname === '/api/summary-slides/capabilities' && method === 'GET') {
        const loBin = await detectLibreOffice();
        return sendJson(res, 200, {
            success: true,
            backendPersistence: true,
            canManage: canManageSlides(ctx),
            libreOfficeAvailable: Boolean(loBin),
            maxUploadMb: Math.round(MAX_UPLOAD_BYTES / (1024 * 1024)),
            supportedGrades: ['9', '12'],
            supportedLanguages: ['kh', 'en']
        });
    }

    // 2. List slides (auto-syncs summary_slides/grade{9|12}/{kh,en}/ on disk)
    if (pathname === '/api/summary-slides' && method === 'GET') {
        if (!canViewSlides(ctx)) {
            return sendJson(res, 401, { success: false, error: 'Unauthorized: Website access password required.' });
        }
        const grade = String(params.get('grade') || '').trim();
        if (!ALLOWED_GRADES.has(grade)) {
            return sendJson(res, 400, { success: false, message: 'Summary Slides only supports Grade 9 and Grade 12.' });
        }
        const lang = params.get('lang') ? String(params.get('lang')).trim().toLowerCase() : null;
        let slides = syncGradeCatalog(baseDir, grade);
        if (lang && ALLOWED_LANGS.has(lang)) {
            slides = slides.filter(s => s.language === lang);
        }
        return sendJson(res, 200, {
            success: true,
            grade,
            canManage: canManageSlides(ctx),
            slides
        });
    }

    // 3. Stream slide binary or converted PDF preview
    const fileMatch = pathname.match(/^\/api\/summary-slides\/file\/(9|12)\/([a-zA-Z0-9_-]+)$/);
    if (fileMatch && method === 'GET') {
        if (!canViewSlides(ctx)) {
            return sendJson(res, 401, { error: 'Unauthorized: Website access password required.' });
        }
        const grade = fileMatch[1];
        const slideId = fileMatch[2];
        const variant = params.get('variant') || 'original';
        const slides = syncGradeCatalog(baseDir, grade);
        const item = slides.find(s => s.id === slideId);
        if (!item) {
            return sendJson(res, 404, { error: 'Summary slide record not found.' });
        }

        const resolved = resolveSlideDiskPath(baseDir, grade, item, variant === 'pdf-preview');
        if (!resolved) {
            return sendJson(res, 404, { error: 'Slide file not found on disk.' });
        }

        return sendFileWithRanges(
            req,
            res,
            resolved.diskPath,
            resolved.isPreview ? 'application/pdf' : (SLIDE_MIME_TYPES[item.ext] || 'application/octet-stream'),
            resolved.isPreview ? `${item.title || 'slides'}.pdf` : item.originalName
        );
    }

    // 4. Upload a new slide file directly into summary_slides/grade{9|12}/{kh|en}/
    if (pathname === '/api/summary-slides/upload' && method === 'POST') {
        if (!canManageSlides(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the host/administrator can upload summary slides.' });
        }

        const grade = String(params.get('grade') || '').trim();
        const lang = String(params.get('lang') || '').trim().toLowerCase();
        const rawFilename = params.get('filename') || 'summary-slide.pdf';
        const title = String(params.get('title') || '').trim();
        const description = String(params.get('description') || '').trim();
        const chapterTag = String(params.get('chapter') || '').trim();

        if (!ALLOWED_GRADES.has(grade)) {
            return sendJson(res, 400, { success: false, message: 'Invalid grade. Only Grade 9 and Grade 12 are supported.' });
        }
        if (!ALLOWED_LANGS.has(lang)) {
            return sendJson(res, 400, { success: false, message: 'Invalid language category. Choose KH-Physics or EN-Physics.' });
        }

        const safeOrig = sanitizeFileName(rawFilename);
        const ext = path.extname(safeOrig).toLowerCase();
        if (!ALLOWED_EXTS.has(ext)) {
            return sendJson(res, 400, { success: false, message: 'Unsupported file format. Only PDF (.pdf) and PowerPoint (.pptx, .ppt) are allowed.' });
        }

        try {
            const buffer = await readBinaryUpload(req, MAX_UPLOAD_BYTES);
            if (!buffer || buffer.length < 16) {
                return sendJson(res, 400, { success: false, message: 'Uploaded file appears to be empty.' });
            }

            const paths = ensureGradeStorage(baseDir, grade);
            const targetDir = lang === 'en' ? paths.enDir : paths.khDir;
            const storedName = getUniqueTargetFilename(targetDir, safeOrig);
            const targetPath = path.join(targetDir, storedName);
            fs.writeFileSync(targetPath, buffer);

            let previewUrl = null;
            if (ext === '.ppt' || ext === '.pptx') {
                const loBin = await detectLibreOffice();
                if (loBin) {
                    const convertedPdfPath = await tryConvertOfficeToPdf(loBin, targetPath, targetDir);
                    if (convertedPdfPath) {
                        previewUrl = `summary_slides/grade${grade}/${lang}/${path.basename(convertedPdfPath)}`;
                    }
                }
            }

            const existingSlides = syncGradeCatalog(baseDir, grade);
            const nowIso = new Date().toISOString();
            const relUrl = `summary_slides/grade${grade}/${lang}/${storedName}`;
            const displayTitle = title || deriveTitleFromFilename(rawFilename);

            const record = {
                id: `g${grade}-${lang}-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                grade,
                language: lang,
                title: displayTitle,
                description,
                chapter: chapterTag || deriveChapterTagFromFilename(rawFilename),
                originalName: rawFilename,
                storedName,
                url: relUrl,
                previewUrl,
                ext,
                size: buffer.length,
                createdAt: nowIso,
                updatedAt: nowIso
            };

            const filtered = existingSlides.filter(s => s.url !== relUrl);
            filtered.unshift(record);
            writeCatalog(baseDir, grade, filtered);

            return sendJson(res, 200, {
                success: true,
                message: 'Summary slide uploaded and saved to folder.',
                slide: record
            });
        } catch (uploadErr) {
            return sendJson(res, 400, { success: false, message: uploadErr.message || 'Upload failed.' });
        }
    }

    // 5. Replace an existing slide file safely
    if (pathname === '/api/summary-slides/replace' && method === 'POST') {
        if (!canManageSlides(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the host/administrator can replace slides.' });
        }

        const grade = String(params.get('grade') || '').trim();
        const slideId = String(params.get('id') || '').trim();
        const rawFilename = params.get('filename') || 'updated-slide.pdf';
        const title = params.get('title') !== null ? String(params.get('title')).trim() : null;
        const description = params.get('description') !== null ? String(params.get('description')).trim() : null;
        const chapterTag = params.get('chapter') !== null ? String(params.get('chapter')).trim() : null;

        if (!ALLOWED_GRADES.has(grade) || !slideId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/slide ID.' });
        }

        const safeOrig = sanitizeFileName(rawFilename);
        const ext = path.extname(safeOrig).toLowerCase();
        if (!ALLOWED_EXTS.has(ext)) {
            return sendJson(res, 400, { success: false, message: 'Unsupported file format. Only PDF (.pdf) and PowerPoint (.pptx, .ppt) are allowed.' });
        }

        const slides = syncGradeCatalog(baseDir, grade);
        const idx = slides.findIndex(s => s.id === slideId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'Target slide not found in this grade.' });
        }

        try {
            const buffer = await readBinaryUpload(req, MAX_UPLOAD_BYTES);
            if (!buffer || buffer.length < 16) {
                return sendJson(res, 400, { success: false, message: 'Replacement file appears to be empty.' });
            }

            const oldItem = slides[idx];
            const lang = oldItem.language === 'en' ? 'en' : 'kh';
            const paths = ensureGradeStorage(baseDir, grade);
            const langDir = lang === 'en' ? paths.enDir : paths.khDir;

            const oldDiskPath = oldItem.url ? path.normalize(path.join(baseDir, oldItem.url)) : null;
            const oldPreviewPath = oldItem.previewUrl ? path.normalize(path.join(baseDir, oldItem.previewUrl)) : null;

            const newStoredName = (oldItem.storedName === safeOrig)
                ? safeOrig
                : getUniqueTargetFilename(langDir, safeOrig);
            const newTargetPath = path.join(langDir, newStoredName);
            fs.writeFileSync(newTargetPath, buffer);

            let newPreviewUrl = null;
            if (ext === '.ppt' || ext === '.pptx') {
                const loBin = await detectLibreOffice();
                if (loBin) {
                    const convertedPdfPath = await tryConvertOfficeToPdf(loBin, newTargetPath, langDir);
                    if (convertedPdfPath) {
                        newPreviewUrl = `summary_slides/grade${grade}/${lang}/${path.basename(convertedPdfPath)}`;
                    }
                }
            }

            const newRelUrl = `summary_slides/grade${grade}/${lang}/${newStoredName}`;
            const updated = {
                ...oldItem,
                id: `g${grade}-${lang}-${crypto.createHash('md5').update(newRelUrl).digest('hex').slice(0, 10)}`,
                title: (title !== null && title.length > 0) ? title : oldItem.title,
                description: description !== null ? description : (oldItem.description || ''),
                chapter: chapterTag !== null ? chapterTag : (oldItem.chapter || ''),
                originalName: rawFilename,
                storedName: newStoredName,
                url: newRelUrl,
                previewUrl: newPreviewUrl,
                ext,
                size: buffer.length,
                updatedAt: new Date().toISOString()
            };

            slides[idx] = updated;
            writeCatalog(baseDir, grade, slides);

            if (oldDiskPath && path.resolve(oldDiskPath) !== path.resolve(newTargetPath)) safeUnlink(oldDiskPath);
            if (oldPreviewPath && (!newPreviewUrl || path.basename(oldPreviewPath) !== path.basename(newPreviewUrl))) safeUnlink(oldPreviewPath);

            return sendJson(res, 200, {
                success: true,
                message: 'Summary slide file replaced successfully.',
                slide: updated
            });
        } catch (err) {
            return sendJson(res, 400, { success: false, message: err.message || 'Replace failed.' });
        }
    }

    // 6. Update slide metadata (moves file to kh/ or en/ folder if language changed)
    if (pathname === '/api/summary-slides/update' && method === 'POST') {
        if (!canManageSlides(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the host/administrator can update slides.' });
        }
        const body = await readSmallJson(req);
        const grade = String(body.grade || '').trim();
        const slideId = String(body.id || '').trim();

        if (!ALLOWED_GRADES.has(grade) || !slideId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/slide ID.' });
        }

        const slides = syncGradeCatalog(baseDir, grade);
        const idx = slides.findIndex(s => s.id === slideId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'Target slide not found.' });
        }

        const current = slides[idx];
        const nextLang = (body.language && ALLOWED_LANGS.has(String(body.language).toLowerCase()))
            ? String(body.language).toLowerCase()
            : current.language;

        let nextStoredName = current.storedName;
        let nextUrl = current.url;
        let nextPreviewUrl = current.previewUrl || null;

        if (nextLang !== current.language) {
            const paths = ensureGradeStorage(baseDir, grade);
            const fromDir = current.language === 'en' ? paths.enDir : paths.khDir;
            const toDir = nextLang === 'en' ? paths.enDir : paths.khDir;
            const srcFile = path.join(fromDir, path.basename(current.storedName));
            if (fs.existsSync(srcFile)) {
                nextStoredName = getUniqueTargetFilename(toDir, path.basename(current.storedName));
                fs.renameSync(srcFile, path.join(toDir, nextStoredName));
                nextUrl = `summary_slides/grade${grade}/${nextLang}/${nextStoredName}`;
            }
            if (current.previewUrl) {
                const srcPrev = path.join(baseDir, current.previewUrl);
                if (fs.existsSync(srcPrev)) {
                    const prevName = path.basename(srcPrev);
                    fs.renameSync(srcPrev, path.join(toDir, prevName));
                    nextPreviewUrl = `summary_slides/grade${grade}/${nextLang}/${prevName}`;
                }
            }
        }

        const updated = {
            ...current,
            id: `g${grade}-${nextLang}-${crypto.createHash('md5').update(nextUrl).digest('hex').slice(0, 10)}`,
            language: nextLang,
            storedName: nextStoredName,
            url: nextUrl,
            previewUrl: nextPreviewUrl,
            title: (typeof body.title === 'string' && body.title.trim()) ? body.title.trim() : current.title,
            description: typeof body.description === 'string' ? body.description.trim() : (current.description || ''),
            chapter: typeof body.chapter === 'string' ? body.chapter.trim() : (current.chapter || ''),
            updatedAt: new Date().toISOString()
        };

        slides[idx] = updated;
        writeCatalog(baseDir, grade, slides);
        return sendJson(res, 200, { success: true, message: 'Slide details updated.', slide: updated });
    }

    // 7. Delete a slide strictly within its grade
    if (pathname === '/api/summary-slides/delete' && (method === 'POST' || method === 'DELETE')) {
        if (!canManageSlides(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the host/administrator can delete slides.' });
        }
        const body = method === 'POST' ? await readSmallJson(req) : {};
        const grade = String(body.grade || params.get('grade') || '').trim();
        const slideId = String(body.id || params.get('id') || '').trim();

        if (!ALLOWED_GRADES.has(grade) || !slideId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/slide ID.' });
        }

        const slides = syncGradeCatalog(baseDir, grade);
        const idx = slides.findIndex(s => s.id === slideId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'Slide not found.' });
        }

        const [removed] = slides.splice(idx, 1);
        writeCatalog(baseDir, grade, slides);

        const paths = ensureGradeStorage(baseDir, grade);
        if (removed.url) {
            const diskFile = path.normalize(path.join(baseDir, removed.url));
            if (diskFile.startsWith(paths.gradeDir)) safeUnlink(diskFile);
        }
        if (removed.previewUrl) {
            const prevFile = path.normalize(path.join(baseDir, removed.previewUrl));
            if (prevFile.startsWith(paths.gradeDir)) safeUnlink(prevFile);
        }

        return sendJson(res, 200, { success: true, message: 'Summary slide deleted.' });
    }

    return sendJson(res, 404, { success: false, error: 'Summary Slides endpoint not found.' });
}

handleSummarySlidesRequest.syncAll = syncAllCatalogs;

module.exports = handleSummarySlidesRequest;
