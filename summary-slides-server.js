/**
 * WIS Physics Learning Hub - Independent Summary Slides Backend Module
 *
 * Strictly scoped to Grade 9 and Grade 12 (KH-Physics & EN-Physics).
 * Uses zero external dependencies (Node.js built-ins only).
 * Stores Grade 9 and Grade 12 files and manifests in completely isolated paths:
 *   - summary_slides/grade9/   & summary_slides/manifest-g9.json
 *   - summary_slides/grade12/  & summary_slides/manifest-g12.json
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
                        return resolve(expectedPdf);
                    }
                    return resolve(null);
                }
            );
        } catch (e) {
            return resolve(null);
        }
    });
}

function ensureGradeStorage(baseDir, grade) {
    const rootDir = path.join(baseDir, 'summary_slides');
    const gradeDir = path.join(rootDir, `grade${grade}`);
    const manifestPath = path.join(rootDir, `manifest-g${grade}.json`);
    if (!fs.existsSync(rootDir)) fs.mkdirSync(rootDir, { recursive: true });
    if (!fs.existsSync(gradeDir)) fs.mkdirSync(gradeDir, { recursive: true });
    if (!fs.existsSync(manifestPath)) {
        fs.writeFileSync(manifestPath, JSON.stringify({ grade, slides: [] }, null, 2), 'utf8');
    }
    return { rootDir, gradeDir, manifestPath };
}

function readManifest(baseDir, grade) {
    const { manifestPath } = ensureGradeStorage(baseDir, grade);
    try {
        const raw = fs.readFileSync(manifestPath, 'utf8');
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.slides)) {
            return parsed.slides.filter(s => s && String(s.grade) === String(grade));
        }
    } catch (e) {}
    return [];
}

function writeManifest(baseDir, grade, slides) {
    const { manifestPath } = ensureGradeStorage(baseDir, grade);
    const cleanSlides = (Array.isArray(slides) ? slides : []).filter(s => s && String(s.grade) === String(grade));
    const tmpPath = `${manifestPath}.${crypto.randomBytes(4).toString('hex')}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify({
        grade: String(grade),
        updatedAt: new Date().toISOString(),
        slides: cleanSlides
    }, null, 2), 'utf8');
    fs.renameSync(tmpPath, manifestPath);
    return cleanSlides;
}

function sanitizeFileName(name) {
    const base = path.basename(String(name || 'slide')).trim();
    const cleaned = base.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_').replace(/\s+/g, '_');
    return cleaned || 'summary-slide';
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

async function handleSummarySlidesRequest(req, res, ctx) {
    const { pathname, method, parsedUrl, baseDir, sendJson } = ctx;
    const params = parsedUrl.searchParams;

    // 1. Capabilities check (used by frontend to confirm Node persistence backend is active)
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

    // 2. List slides strictly isolated per grade (9 or 12)
    if (pathname === '/api/summary-slides' && method === 'GET') {
        if (!canViewSlides(ctx)) {
            return sendJson(res, 401, { success: false, error: 'Unauthorized: Website access password required.' });
        }
        const grade = String(params.get('grade') || '').trim();
        if (!ALLOWED_GRADES.has(grade)) {
            return sendJson(res, 400, { success: false, message: 'Summary Slides only supports Grade 9 and Grade 12.' });
        }
        const lang = params.get('lang') ? String(params.get('lang')).trim().toLowerCase() : null;
        let slides = readManifest(baseDir, grade);
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
        const slides = readManifest(baseDir, grade);
        const item = slides.find(s => s.id === slideId);
        if (!item) {
            return sendJson(res, 404, { error: 'Summary slide record not found.' });
        }

        const { gradeDir } = ensureGradeStorage(baseDir, grade);
        if (variant === 'pdf-preview' && item.previewPdfName) {
            const pdfPreviewPath = path.normalize(path.join(gradeDir, path.basename(item.previewPdfName)));
            if (pdfPreviewPath.startsWith(gradeDir) && fs.existsSync(pdfPreviewPath)) {
                return sendFileWithRanges(req, res, pdfPreviewPath, 'application/pdf', `${item.title || 'slides'}.pdf`);
            }
        }

        const storedPath = path.normalize(path.join(gradeDir, path.basename(item.storedName || '')));
        if (!storedPath.startsWith(gradeDir)) {
            return sendJson(res, 403, { error: 'Invalid slide file path.' });
        }
        return sendFileWithRanges(
            req,
            res,
            storedPath,
            SLIDE_MIME_TYPES[item.ext] || 'application/octet-stream',
            item.originalName
        );
    }

    // 4. Upload a new slide file (strictly Grade 9 or 12, KH-Physics or EN-Physics)
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

            const { gradeDir } = ensureGradeStorage(baseDir, grade);
            const id = `g${grade}-${lang}-${Date.now().toString(36)}-${crypto.randomBytes(4).toString('hex')}`;
            const storedName = `${id}-${safeOrig}`;
            const targetPath = path.join(gradeDir, storedName);
            fs.writeFileSync(targetPath, buffer);

            let previewPdfName = null;
            if (ext === '.ppt' || ext === '.pptx') {
                const loBin = await detectLibreOffice();
                if (loBin) {
                    const convertedPdfPath = await tryConvertOfficeToPdf(loBin, targetPath, gradeDir);
                    if (convertedPdfPath) {
                        previewPdfName = path.basename(convertedPdfPath);
                    }
                }
            }

            const existingSlides = readManifest(baseDir, grade);
            const nowIso = new Date().toISOString();
            const displayTitle = title || path.basename(rawFilename, path.extname(rawFilename)).replace(/[_-]+/g, ' ').trim() || safeOrig;

            const record = {
                id,
                grade,
                language: lang,
                title: displayTitle,
                description,
                chapter: chapterTag,
                originalName: rawFilename,
                storedName,
                previewPdfName,
                ext,
                size: buffer.length,
                createdAt: nowIso,
                updatedAt: nowIso
            };

            existingSlides.unshift(record);
            writeManifest(baseDir, grade, existingSlides);

            return sendJson(res, 200, {
                success: true,
                message: 'Summary slide uploaded and saved permanently.',
                slide: record
            });
        } catch (uploadErr) {
            return sendJson(res, 400, { success: false, message: uploadErr.message || 'Upload failed.' });
        }
    }

    // 5. Replace an existing slide's file safely (write new first, then unlink old)
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

        const slides = readManifest(baseDir, grade);
        const idx = slides.findIndex(s => s.id === slideId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'Target slide not found in this grade.' });
        }

        try {
            const buffer = await readBinaryUpload(req, MAX_UPLOAD_BYTES);
            if (!buffer || buffer.length < 16) {
                return sendJson(res, 400, { success: false, message: 'Replacement file appears to be empty.' });
            }

            const { gradeDir } = ensureGradeStorage(baseDir, grade);
            const newSuffix = `${Date.now().toString(36)}-${crypto.randomBytes(3).toString('hex')}`;
            const newStoredName = `${slideId}-${newSuffix}-${safeOrig}`;
            const newTargetPath = path.join(gradeDir, newStoredName);
            fs.writeFileSync(newTargetPath, buffer);

            let newPreviewPdfName = null;
            if (ext === '.ppt' || ext === '.pptx') {
                const loBin = await detectLibreOffice();
                if (loBin) {
                    const convertedPdfPath = await tryConvertOfficeToPdf(loBin, newTargetPath, gradeDir);
                    if (convertedPdfPath) {
                        newPreviewPdfName = path.basename(convertedPdfPath);
                    }
                }
            }

            const oldItem = slides[idx];
            const oldStoredPath = oldItem.storedName ? path.join(gradeDir, path.basename(oldItem.storedName)) : null;
            const oldPreviewPath = oldItem.previewPdfName ? path.join(gradeDir, path.basename(oldItem.previewPdfName)) : null;

            const updated = {
                ...oldItem,
                title: (title !== null && title.length > 0) ? title : oldItem.title,
                description: description !== null ? description : (oldItem.description || ''),
                chapter: chapterTag !== null ? chapterTag : (oldItem.chapter || ''),
                originalName: rawFilename,
                storedName: newStoredName,
                previewPdfName: newPreviewPdfName,
                ext,
                size: buffer.length,
                updatedAt: new Date().toISOString()
            };

            slides[idx] = updated;
            writeManifest(baseDir, grade, slides);

            if (oldStoredPath && oldStoredPath !== newTargetPath) safeUnlink(oldStoredPath);
            if (oldPreviewPath && path.basename(oldPreviewPath) !== newPreviewPdfName) safeUnlink(oldPreviewPath);

            return sendJson(res, 200, {
                success: true,
                message: 'Summary slide file replaced successfully.',
                slide: updated
            });
        } catch (err) {
            return sendJson(res, 400, { success: false, message: err.message || 'Replace failed.' });
        }
    }

    // 6. Update slide metadata (title, description, chapter, or language inside same grade)
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

        const slides = readManifest(baseDir, grade);
        const idx = slides.findIndex(s => s.id === slideId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'Target slide not found.' });
        }

        const current = slides[idx];
        const nextLang = (body.language && ALLOWED_LANGS.has(String(body.language).toLowerCase()))
            ? String(body.language).toLowerCase()
            : current.language;

        const updated = {
            ...current,
            language: nextLang,
            title: (typeof body.title === 'string' && body.title.trim()) ? body.title.trim() : current.title,
            description: typeof body.description === 'string' ? body.description.trim() : (current.description || ''),
            chapter: typeof body.chapter === 'string' ? body.chapter.trim() : (current.chapter || ''),
            updatedAt: new Date().toISOString()
        };

        slides[idx] = updated;
        writeManifest(baseDir, grade, slides);
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

        const slides = readManifest(baseDir, grade);
        const idx = slides.findIndex(s => s.id === slideId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'Slide not found.' });
        }

        const [removed] = slides.splice(idx, 1);
        writeManifest(baseDir, grade, slides);

        const { gradeDir } = ensureGradeStorage(baseDir, grade);
        if (removed.storedName) safeUnlink(path.join(gradeDir, path.basename(removed.storedName)));
        if (removed.previewPdfName) safeUnlink(path.join(gradeDir, path.basename(removed.previewPdfName)));

        return sendJson(res, 200, { success: true, message: 'Summary slide deleted.' });
    }

    return sendJson(res, 404, { success: false, error: 'Summary Slides endpoint not found.' });
}

module.exports = handleSummarySlidesRequest;
