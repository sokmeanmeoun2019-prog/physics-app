/**
 * WIS Physics Learning Hub - Independent KH-Ebook Backend & Folder Sync Module
 *
 * Scoped to Grades 7, 8, 9, 10, 11, and 12 (Khmer-language Physics Textbooks & PDFs).
 * Strictly independent from English Ebook records (ebooks/, Physics_Grade7,8,10,11/)
 * and Summary Slides (summary_slides/). Zero external dependencies.
 *
 * Folder Layout:
 *   - kh_ebooks/grade7/   (*.pdf, catalog.json)
 *   - kh_ebooks/grade8/   (*.pdf, catalog.json)
 *   - kh_ebooks/grade9/   (*.pdf, catalog.json)
 *   - kh_ebooks/grade10/  (*.pdf, catalog.json)
 *   - kh_ebooks/grade11/  (*.pdf, catalog.json)
 *   - kh_ebooks/grade12/  (*.pdf, catalog.json)
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const MAX_UPLOAD_BYTES = 150 * 1024 * 1024; // 150 MB per textbook PDF
const ALLOWED_GRADES = new Set(['7', '8', '9', '10', '11', '12']);

function getGradePaths(baseDir, grade) {
    const rootDir = path.join(baseDir, 'kh_ebooks');
    const gradeDir = path.join(rootDir, `grade${grade}`);
    const catalogPath = path.join(gradeDir, 'catalog.json');
    const gitkeepPath = path.join(gradeDir, '.gitkeep');
    return { rootDir, gradeDir, catalogPath, gitkeepPath };
}

function ensureGradeStorage(baseDir, grade) {
    const paths = getGradePaths(baseDir, grade);
    if (!fs.existsSync(paths.rootDir)) fs.mkdirSync(paths.rootDir, { recursive: true });
    if (!fs.existsSync(paths.gradeDir)) fs.mkdirSync(paths.gradeDir, { recursive: true });
    if (!fs.existsSync(paths.gitkeepPath)) {
        try { fs.writeFileSync(paths.gitkeepPath, '', 'utf8'); } catch (e) {}
    }
    if (!fs.existsSync(paths.catalogPath)) {
        fs.writeFileSync(paths.catalogPath, JSON.stringify({
            grade: String(grade),
            updatedAt: new Date().toISOString(),
            ebooks: []
        }, null, 2), 'utf8');
    }
    return paths;
}

function readRawCatalog(baseDir, grade) {
    const { catalogPath } = ensureGradeStorage(baseDir, grade);
    try {
        const raw = fs.readFileSync(catalogPath, 'utf8');
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.ebooks)) {
            return parsed.ebooks.filter(item => item && String(item.grade) === String(grade));
        }
    } catch (e) {}
    return [];
}

function writeCombinedCatalogJs(baseDir) {
    try {
        const rootDir = path.join(baseDir, 'kh_ebooks');
        if (!fs.existsSync(rootDir)) fs.mkdirSync(rootDir, { recursive: true });

        const combined = {};
        for (const g of ALLOWED_GRADES) {
            combined[g] = readRawCatalog(baseDir, g);
        }

        const outPath = path.join(rootDir, 'catalog.js');
        const tmpPath = `${outPath}.${crypto.randomBytes(4).toString('hex')}.tmp`;
        const content =
            `// Auto-generated KH-Ebook catalog index (supports offline file:// & GitHub Pages)\n` +
            `window.KH_EBOOKS_CATALOG = ${JSON.stringify(combined, null, 2)};\n`;
        fs.writeFileSync(tmpPath, content, 'utf8');
        fs.renameSync(tmpPath, outPath);
    } catch (e) {}
}

function writeCatalog(baseDir, grade, ebooks) {
    const { catalogPath } = ensureGradeStorage(baseDir, grade);
    const cleanList = (Array.isArray(ebooks) ? ebooks : []).filter(item => item && String(item.grade) === String(grade));
    const tmpPath = `${catalogPath}.${crypto.randomBytes(4).toString('hex')}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify({
        grade: String(grade),
        updatedAt: new Date().toISOString(),
        ebooks: cleanList
    }, null, 2), 'utf8');
    fs.renameSync(tmpPath, catalogPath);
    writeCombinedCatalogJs(baseDir);
    return cleanList;
}

function isPdfAssetFilename(fileName) {
    if (!fileName || fileName.startsWith('.')) return false;
    const low = fileName.toLowerCase();
    return low.endsWith('.pdf') || low.endsWith('.pdf.pdf');
}

function deriveTitleFromFilename(filename) {
    return path.basename(String(filename || ''), path.extname(String(filename || '')))
        .replace(/\.pdf$/i, '')
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim() || String(filename || 'KH-Ebook');
}

function deriveChapterFromFilename(filename) {
    const m = String(filename || '').match(/(?:ch(?:apter)?[\s_-]*(\d+))(?:[\s_-]*l(?:esson)?[\s_-]*(\d+))?/i);
    if (!m) return 'Full Textbook';
    return m[2] ? `Chapter ${m[1]} • Lesson ${m[2]}` : `Chapter ${m[1]}`;
}

/**
 * Reconciles kh_ebooks/grade{7..12}/ PDF files on disk with catalog.json.
 * Detects manually dropped/replaced/deleted PDFs automatically.
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

    let fileNames = [];
    try {
        fileNames = fs.readdirSync(paths.gradeDir)
            .filter(isPdfAssetFilename)
            .sort((a, b) => a.localeCompare(b));
    } catch (e) {
        fileNames = [];
    }

    const diskBooks = [];
    for (const fileName of fileNames) {
        const fullPath = path.join(paths.gradeDir, fileName);
        let stats;
        try {
            stats = fs.statSync(fullPath);
            if (!stats.isFile()) continue;
        } catch (e) {
            continue;
        }

        const relUrl = `kh_ebooks/grade${g}/${fileName}`;
        const prev = existingByRelUrl.get(relUrl);
        const mtimeIso = stats.mtime ? stats.mtime.toISOString() : new Date().toISOString();

        if (prev) {
            diskBooks.push({
                ...prev,
                id: prev.id || `kheb-g${g}-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                grade: g,
                originalName: prev.originalName || fileName,
                storedName: fileName,
                url: relUrl,
                ext: '.pdf',
                size: stats.size,
                chapter: prev.chapter || deriveChapterFromFilename(fileName),
                updatedAt: (prev.size !== stats.size) ? mtimeIso : (prev.updatedAt || mtimeIso)
            });
        } else {
            diskBooks.push({
                id: `kheb-g${g}-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                grade: g,
                title: deriveTitleFromFilename(fileName),
                chapter: deriveChapterFromFilename(fileName),
                description: '',
                originalName: fileName,
                storedName: fileName,
                url: relUrl,
                ext: '.pdf',
                size: stats.size,
                createdAt: stats.birthtime ? stats.birthtime.toISOString() : mtimeIso,
                updatedAt: mtimeIso
            });
        }
    }

    const prevJson = JSON.stringify(existing);
    const nextJson = JSON.stringify(diskBooks);
    if (prevJson !== nextJson) {
        return writeCatalog(baseDir, g, diskBooks);
    }
    return diskBooks;
}

function syncAllCatalogs(baseDir) {
    for (const g of ALLOWED_GRADES) {
        syncGradeCatalog(baseDir, g);
    }
    writeCombinedCatalogJs(baseDir);
}

function sanitizeFileName(name) {
    const base = path.basename(String(name || 'kh-ebook.pdf')).trim();
    const cleaned = base.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_').replace(/\s+/g, '-');
    if (!cleaned) return 'kh-ebook.pdf';
    return cleaned.toLowerCase().endsWith('.pdf') ? cleaned : `${cleaned}.pdf`;
}

function getUniqueTargetFilename(dirPath, cleanFilename) {
    const ext = path.extname(cleanFilename) || '.pdf';
    const stem = path.basename(cleanFilename, ext);
    let candidate = cleanFilename;
    let counter = 2;
    while (fs.existsSync(path.join(dirPath, candidate))) {
        candidate = `${stem}-${counter}${ext}`;
        counter++;
    }
    return candidate;
}

function isValidPdfBuffer(buf) {
    if (!buf || buf.length < 16) return false;
    // Standard PDF signature "%PDF-" within first 1024 bytes
    const head = buf.slice(0, Math.min(buf.length, 1024)).toString('latin1');
    return head.includes('%PDF-');
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
                reject(new Error(`PDF exceeds maximum allowed size of ${Math.round(maxBytes / (1024 * 1024))} MB.`));
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

function canViewEbooks(ctx) {
    return Boolean(ctx.isHost || ctx.adminSession || ctx.studentSession);
}

function canManageEbooks(ctx) {
    return Boolean(ctx.isHost || ctx.adminSession);
}

function sendPdfWithRanges(req, res, filePath, originalName) {
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify({ error: 'KH-Ebook PDF not found on disk.' }));
        }

        const safeDispName = encodeURIComponent(originalName || path.basename(filePath));
        const baseHeaders = {
            'Content-Type': 'application/pdf',
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

function resolveDiskPdfPath(baseDir, grade, ebookItem) {
    const paths = ensureGradeStorage(baseDir, grade);
    if (ebookItem.url) {
        const uPath = path.normalize(path.join(baseDir, ebookItem.url));
        if (uPath.startsWith(paths.gradeDir) && fs.existsSync(uPath)) {
            return uPath;
        }
    }
    const fallback = path.normalize(path.join(paths.gradeDir, path.basename(ebookItem.storedName || '')));
    if (fallback.startsWith(paths.gradeDir) && fs.existsSync(fallback)) {
        return fallback;
    }
    return null;
}

async function handleKhEbooksRequest(req, res, ctx) {
    const { pathname, method, parsedUrl, baseDir, sendJson } = ctx;
    const params = parsedUrl.searchParams;

    // 1. Capabilities check
    if (pathname === '/api/kh-ebooks/capabilities' && method === 'GET') {
        return sendJson(res, 200, {
            success: true,
            backendPersistence: true,
            canManage: canManageEbooks(ctx),
            maxUploadMb: Math.round(MAX_UPLOAD_BYTES / (1024 * 1024)),
            supportedGrades: ['7', '8', '9', '10', '11', '12']
        });
    }

    // 2. List KH-Ebooks strictly by grade
    if (pathname === '/api/kh-ebooks' && method === 'GET') {
        if (!canViewEbooks(ctx)) {
            return sendJson(res, 401, { success: false, error: 'Unauthorized: Website access password required.' });
        }
        const grade = String(params.get('grade') || '').trim();
        if (!ALLOWED_GRADES.has(grade)) {
            return sendJson(res, 400, { success: false, message: 'Invalid grade. Choose Grade 7 through 12.' });
        }
        const ebooks = syncGradeCatalog(baseDir, grade);
        return sendJson(res, 200, {
            success: true,
            grade,
            canManage: canManageEbooks(ctx),
            ebooks
        });
    }

    // 3. Stream PDF binary inline (HTTP 206 Range supported, no forced download)
    const fileMatch = pathname.match(/^\/api\/kh-ebooks\/file\/(7|8|9|10|11|12)\/([a-zA-Z0-9_-]+)$/);
    if (fileMatch && method === 'GET') {
        if (!canViewEbooks(ctx)) {
            return sendJson(res, 401, { error: 'Unauthorized: Website access password required.' });
        }
        const grade = fileMatch[1];
        const ebookId = fileMatch[2];
        const ebooks = syncGradeCatalog(baseDir, grade);
        const item = ebooks.find(b => b.id === ebookId);
        if (!item) {
            return sendJson(res, 404, { error: 'KH-Ebook record not found.' });
        }
        const diskPath = resolveDiskPdfPath(baseDir, grade, item);
        if (!diskPath) {
            return sendJson(res, 404, { error: 'KH-Ebook PDF file not found on disk.' });
        }
        return sendPdfWithRanges(req, res, diskPath, item.originalName || `${item.title || 'kh-ebook'}.pdf`);
    }

    // 4. Upload a new KH-Ebook PDF strictly into kh_ebooks/grade{7..12}/
    if (pathname === '/api/kh-ebooks/upload' && method === 'POST') {
        if (!canManageEbooks(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can upload KH-Ebooks.' });
        }

        const grade = String(params.get('grade') || '').trim();
        const rawFilename = params.get('filename') || 'kh-ebook.pdf';
        const title = String(params.get('title') || '').trim();
        const chapter = String(params.get('chapter') || '').trim();
        const description = String(params.get('description') || '').trim();

        if (!ALLOWED_GRADES.has(grade)) {
            return sendJson(res, 400, { success: false, message: 'Invalid grade. Choose Grade 7 through 12.' });
        }

        const lowName = String(rawFilename).toLowerCase();
        if (!lowName.endsWith('.pdf') && !lowName.endsWith('.pdf.pdf')) {
            return sendJson(res, 400, { success: false, message: 'Only PDF files (.pdf) are supported for KH-Ebook.' });
        }

        try {
            const buffer = await readBinaryUpload(req, MAX_UPLOAD_BYTES);
            if (!isValidPdfBuffer(buffer)) {
                return sendJson(res, 400, { success: false, message: 'Uploaded file does not appear to be a valid PDF document.' });
            }

            const paths = ensureGradeStorage(baseDir, grade);
            const cleanName = sanitizeFileName(rawFilename);
            const storedName = getUniqueTargetFilename(paths.gradeDir, cleanName);
            const targetPath = path.join(paths.gradeDir, storedName);
            fs.writeFileSync(targetPath, buffer);

            const existing = syncGradeCatalog(baseDir, grade);
            const nowIso = new Date().toISOString();
            const relUrl = `kh_ebooks/grade${grade}/${storedName}`;

            const record = {
                id: `kheb-g${grade}-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                grade,
                title: title || deriveTitleFromFilename(rawFilename),
                chapter: chapter || deriveChapterFromFilename(rawFilename),
                description,
                originalName: rawFilename,
                storedName,
                url: relUrl,
                ext: '.pdf',
                size: buffer.length,
                createdAt: nowIso,
                updatedAt: nowIso
            };

            const nextList = existing.filter(b => b.url !== relUrl);
            nextList.unshift(record);
            writeCatalog(baseDir, grade, nextList);

            return sendJson(res, 200, {
                success: true,
                message: `KH-Ebook uploaded successfully to Grade ${grade}.`,
                ebook: record
            });
        } catch (err) {
            return sendJson(res, 400, { success: false, message: err.message || 'KH-Ebook upload failed.' });
        }
    }

    // 5. Replace an existing KH-Ebook PDF file
    if (pathname === '/api/kh-ebooks/replace' && method === 'POST') {
        if (!canManageEbooks(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can replace KH-Ebooks.' });
        }

        const grade = String(params.get('grade') || '').trim();
        const ebookId = String(params.get('id') || '').trim();
        const rawFilename = params.get('filename') || 'kh-ebook.pdf';
        const title = params.get('title') !== null ? String(params.get('title')).trim() : null;
        const chapter = params.get('chapter') !== null ? String(params.get('chapter')).trim() : null;
        const description = params.get('description') !== null ? String(params.get('description')).trim() : null;

        if (!ALLOWED_GRADES.has(grade) || !ebookId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/ebook ID.' });
        }

        const lowName = String(rawFilename).toLowerCase();
        if (!lowName.endsWith('.pdf') && !lowName.endsWith('.pdf.pdf')) {
            return sendJson(res, 400, { success: false, message: 'Only PDF files (.pdf) are supported.' });
        }

        const ebooks = syncGradeCatalog(baseDir, grade);
        const idx = ebooks.findIndex(b => b.id === ebookId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'KH-Ebook not found in this grade.' });
        }

        try {
            const buffer = await readBinaryUpload(req, MAX_UPLOAD_BYTES);
            if (!isValidPdfBuffer(buffer)) {
                return sendJson(res, 400, { success: false, message: 'Replacement file is not a valid PDF document.' });
            }

            const oldItem = ebooks[idx];
            const paths = ensureGradeStorage(baseDir, grade);
            const cleanName = sanitizeFileName(rawFilename);
            const oldDiskPath = oldItem.url ? path.normalize(path.join(baseDir, oldItem.url)) : null;

            const newStoredName = (oldItem.storedName === cleanName)
                ? cleanName
                : getUniqueTargetFilename(paths.gradeDir, cleanName);
            const newTargetPath = path.join(paths.gradeDir, newStoredName);
            fs.writeFileSync(newTargetPath, buffer);

            const newRelUrl = `kh_ebooks/grade${grade}/${newStoredName}`;
            const updated = {
                ...oldItem,
                id: `kheb-g${grade}-${crypto.createHash('md5').update(newRelUrl).digest('hex').slice(0, 10)}`,
                title: (title !== null && title.length > 0) ? title : oldItem.title,
                chapter: (chapter !== null && chapter.length > 0) ? chapter : (oldItem.chapter || 'Full Textbook'),
                description: description !== null ? description : (oldItem.description || ''),
                originalName: rawFilename,
                storedName: newStoredName,
                url: newRelUrl,
                ext: '.pdf',
                size: buffer.length,
                updatedAt: new Date().toISOString()
            };

            ebooks[idx] = updated;
            writeCatalog(baseDir, grade, ebooks);

            if (oldDiskPath && path.resolve(oldDiskPath) !== path.resolve(newTargetPath)) {
                safeUnlink(oldDiskPath);
            }

            return sendJson(res, 200, {
                success: true,
                message: 'KH-Ebook PDF replaced successfully.',
                ebook: updated
            });
        } catch (err) {
            return sendJson(res, 400, { success: false, message: err.message || 'Replace failed.' });
        }
    }

    // 6. Update KH-Ebook title / chapter / description
    if (pathname === '/api/kh-ebooks/update' && method === 'POST') {
        if (!canManageEbooks(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can update KH-Ebooks.' });
        }
        const body = await readSmallJson(req);
        const grade = String(body.grade || '').trim();
        const ebookId = String(body.id || '').trim();

        if (!ALLOWED_GRADES.has(grade) || !ebookId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/ebook ID.' });
        }

        const ebooks = syncGradeCatalog(baseDir, grade);
        const idx = ebooks.findIndex(b => b.id === ebookId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'KH-Ebook not found in this grade.' });
        }

        const cur = ebooks[idx];
        const updated = {
            ...cur,
            title: (typeof body.title === 'string' && body.title.trim()) ? body.title.trim() : cur.title,
            chapter: (typeof body.chapter === 'string' && body.chapter.trim()) ? body.chapter.trim() : (cur.chapter || 'Full Textbook'),
            description: typeof body.description === 'string' ? body.description.trim() : (cur.description || ''),
            updatedAt: new Date().toISOString()
        };

        ebooks[idx] = updated;
        writeCatalog(baseDir, grade, ebooks);
        return sendJson(res, 200, { success: true, message: 'KH-Ebook details updated.', ebook: updated });
    }

    // 7. Delete a KH-Ebook strictly within its grade
    if (pathname === '/api/kh-ebooks/delete' && (method === 'POST' || method === 'DELETE')) {
        if (!canManageEbooks(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can delete KH-Ebooks.' });
        }
        const body = method === 'POST' ? await readSmallJson(req) : {};
        const grade = String(body.grade || params.get('grade') || '').trim();
        const ebookId = String(body.id || params.get('id') || '').trim();

        if (!ALLOWED_GRADES.has(grade) || !ebookId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/ebook ID.' });
        }

        const ebooks = syncGradeCatalog(baseDir, grade);
        const idx = ebooks.findIndex(b => b.id === ebookId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'KH-Ebook not found.' });
        }

        const [removed] = ebooks.splice(idx, 1);
        writeCatalog(baseDir, grade, ebooks);

        const paths = ensureGradeStorage(baseDir, grade);
        if (removed.url) {
            const diskPath = path.normalize(path.join(baseDir, removed.url));
            if (diskPath.startsWith(paths.gradeDir)) safeUnlink(diskPath);
        }

        return sendJson(res, 200, { success: true, message: 'KH-Ebook deleted.' });
    }

    return sendJson(res, 404, { success: false, error: 'KH-Ebook endpoint not found.' });
}

handleKhEbooksRequest.syncAll = syncAllCatalogs;

module.exports = handleKhEbooksRequest;
