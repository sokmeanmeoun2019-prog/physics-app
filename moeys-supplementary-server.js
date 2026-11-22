/**
 * WIS Physics Learning Hub - Independent MOEYS Supplementary Backend & Folder Sync
 *
 * Strictly scoped to Grade 12 ONLY.
 * Independent from existing Ebook, KH-Ebook, EN-Worksheet, KH-Worksheet, Outstanding Worksheet, and Summary Slides.
 * Zero external npm dependencies (native Node.js built-ins only).
 *
 * Folder Layout:
 *   - moeys_supplementary/grade12/  (*.pdf, catalog.json, .gitkeep)
 *   - moeys_supplementary/catalog.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const MAX_UPLOAD_BYTES = 150 * 1024 * 1024;
const ALLOWED_GRADE = '12';

function getStoragePaths(baseDir) {
    const rootDir = path.join(baseDir, 'moeys_supplementary');
    const gradeDir = path.join(rootDir, 'grade12');
    const catalogPath = path.join(gradeDir, 'catalog.json');
    const gitkeepPath = path.join(gradeDir, '.gitkeep');
    return { rootDir, gradeDir, catalogPath, gitkeepPath };
}

function ensureStorage(baseDir) {
    const paths = getStoragePaths(baseDir);
    if (!fs.existsSync(paths.rootDir)) fs.mkdirSync(paths.rootDir, { recursive: true });
    if (!fs.existsSync(paths.gradeDir)) fs.mkdirSync(paths.gradeDir, { recursive: true });
    if (!fs.existsSync(paths.gitkeepPath)) {
        try { fs.writeFileSync(paths.gitkeepPath, '', 'utf8'); } catch (e) {}
    }
    if (!fs.existsSync(paths.catalogPath)) {
        fs.writeFileSync(paths.catalogPath, JSON.stringify({
            grade: ALLOWED_GRADE,
            updatedAt: new Date().toISOString(),
            materials: []
        }, null, 2), 'utf8');
    }
    return paths;
}

function readRawCatalog(baseDir) {
    const { catalogPath } = ensureStorage(baseDir);
    try {
        const raw = fs.readFileSync(catalogPath, 'utf8');
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.materials)) {
            return parsed.materials.filter(item => item && String(item.grade) === ALLOWED_GRADE);
        }
    } catch (e) {}
    return [];
}

function writeCombinedCatalogJs(baseDir) {
    try {
        const { rootDir } = getStoragePaths(baseDir);
        if (!fs.existsSync(rootDir)) fs.mkdirSync(rootDir, { recursive: true });

        const combined = {
            '12': readRawCatalog(baseDir)
        };

        const outPath = path.join(rootDir, 'catalog.js');
        const content =
            `// Auto-generated MOEYS Supplementary catalog index (Grade 12 only)\n` +
            `window.MOEYS_SUPPLEMENTARY_CATALOG = ${JSON.stringify(combined, null, 2)};\n`;
        const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : '';
        if (existing !== content) {
            const tmpPath = `${outPath}.${crypto.randomBytes(4).toString('hex')}.tmp`;
            fs.writeFileSync(tmpPath, content, 'utf8');
            fs.renameSync(tmpPath, outPath);
        }
    } catch (e) {}
}

function writeCatalog(baseDir, materials) {
    const { catalogPath } = ensureStorage(baseDir);
    const cleanList = (Array.isArray(materials) ? materials : [])
        .filter(item => item && String(item.grade) === ALLOWED_GRADE);
    const tmpPath = `${catalogPath}.${crypto.randomBytes(4).toString('hex')}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify({
        grade: ALLOWED_GRADE,
        updatedAt: new Date().toISOString(),
        materials: cleanList
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
        .trim() || 'MOEYS Supplementary';
}

function deriveChapterFromFilename(filename) {
    const m = String(filename || '').match(/(?:^|[^a-z])(?:ch(?:apter)?[\s_-]*(\d+))/i);
    return m ? `Chapter ${m[1]}` : 'General Chapter';
}

function deriveLessonFromFilename(filename) {
    const m = String(filename || '').match(/(?:^|[^a-z])(?:l(?:esson)?[\s_-]*(\d+))/i);
    return m ? `Lesson ${m[1]}` : 'All Lessons';
}

function syncGrade12Catalog(baseDir) {
    const paths = ensureStorage(baseDir);
    const existing = readRawCatalog(baseDir);

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

    const diskItems = [];
    for (const fileName of fileNames) {
        const fullPath = path.join(paths.gradeDir, fileName);
        let stats;
        try {
            stats = fs.statSync(fullPath);
            if (!stats.isFile()) continue;
        } catch (e) {
            continue;
        }

        const relUrl = `moeys_supplementary/grade12/${fileName}`;
        const prev = existingByRelUrl.get(relUrl);
        const mtimeIso = stats.mtime ? stats.mtime.toISOString() : new Date().toISOString();

        if (prev) {
            diskItems.push({
                ...prev,
                id: prev.id || `ms-g12-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                grade: ALLOWED_GRADE,
                chapter: prev.chapter || deriveChapterFromFilename(fileName),
                topic: prev.topic || 'Core Physics',
                lesson: prev.lesson || deriveLessonFromFilename(fileName),
                originalName: prev.originalName || fileName,
                storedName: fileName,
                url: relUrl,
                ext: '.pdf',
                size: stats.size,
                updatedAt: (prev.size !== stats.size) ? mtimeIso : (prev.updatedAt || mtimeIso)
            });
        } else {
            diskItems.push({
                id: `ms-g12-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                grade: ALLOWED_GRADE,
                title: deriveTitleFromFilename(fileName),
                chapter: deriveChapterFromFilename(fileName),
                topic: 'Core Physics',
                lesson: deriveLessonFromFilename(fileName),
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

    if (JSON.stringify(existing) !== JSON.stringify(diskItems)) {
        return writeCatalog(baseDir, diskItems);
    }
    writeCombinedCatalogJs(baseDir);
    return diskItems;
}

function sanitizeFileName(name) {
    const base = path.basename(String(name || 'moeys-supplementary.pdf')).trim();
    const cleaned = base.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_').replace(/\s+/g, '-');
    if (!cleaned) return 'moeys-supplementary.pdf';
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

function canView(ctx) {
    return Boolean(ctx.isHost || ctx.adminSession || ctx.studentSession);
}

function canManage(ctx) {
    return Boolean(ctx.isHost || ctx.adminSession);
}

function sendPdfWithRanges(req, res, filePath, originalName) {
    fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
            res.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
            return res.end(JSON.stringify({ error: 'MOEYS Supplementary PDF not found on disk.' }));
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

function resolveDiskPdfPath(baseDir, item) {
    const paths = ensureStorage(baseDir);
    if (item.url) {
        const uPath = path.normalize(path.join(baseDir, item.url));
        if (uPath.startsWith(paths.gradeDir) && fs.existsSync(uPath)) {
            return uPath;
        }
    }
    const fallback = path.normalize(path.join(paths.gradeDir, path.basename(item.storedName || '')));
    if (fallback.startsWith(paths.gradeDir) && fs.existsSync(fallback)) {
        return fallback;
    }
    return null;
}

async function handleMoeysSupplementaryRequest(req, res, ctx) {
    const { pathname, method, parsedUrl, baseDir, sendJson } = ctx;
    const params = parsedUrl.searchParams;

    // 1. Capabilities
    if (pathname === '/api/moeys-supplementary/capabilities' && method === 'GET') {
        return sendJson(res, 200, {
            success: true,
            backendPersistence: true,
            canManage: canManage(ctx),
            maxUploadMb: Math.round(MAX_UPLOAD_BYTES / (1024 * 1024)),
            supportedGrades: [ALLOWED_GRADE]
        });
    }

    // 2. List Grade 12 Materials ONLY
    if (pathname === '/api/moeys-supplementary' && method === 'GET') {
        if (!canView(ctx)) {
            return sendJson(res, 401, { success: false, error: 'Unauthorized: Website access password required.' });
        }
        const grade = String(params.get('grade') || ALLOWED_GRADE).trim();
        if (grade !== ALLOWED_GRADE) {
            return sendJson(res, 400, { success: false, message: 'MOEYS Supplementary is available strictly for Grade 12 only.' });
        }
        const materials = syncGrade12Catalog(baseDir);
        return sendJson(res, 200, {
            success: true,
            grade: ALLOWED_GRADE,
            canManage: canManage(ctx),
            materials
        });
    }

    // 3. Inline Range PDF Stream (no forced download)
    const fileMatch = pathname.match(/^\/api\/moeys-supplementary\/file\/12\/([a-zA-Z0-9_-]+)$/);
    if (fileMatch && method === 'GET') {
        if (!canView(ctx)) {
            return sendJson(res, 401, { error: 'Unauthorized: Website access password required.' });
        }
        const docId = fileMatch[1];
        const items = syncGrade12Catalog(baseDir);
        const item = items.find(m => m.id === docId);
        if (!item) {
            return sendJson(res, 404, { error: 'MOEYS Supplementary document record not found.' });
        }
        const diskPath = resolveDiskPdfPath(baseDir, item);
        if (!diskPath) {
            return sendJson(res, 404, { error: 'MOEYS Supplementary PDF file not found on disk.' });
        }
        return sendPdfWithRanges(req, res, diskPath, item.originalName || `${item.title || 'moeys-supplementary'}.pdf`);
    }

    // 4. Upload PDF strictly to Grade 12
    if (pathname === '/api/moeys-supplementary/upload' && method === 'POST') {
        if (!canManage(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can upload MOEYS Supplementary materials.' });
        }

        const grade = String(params.get('grade') || ALLOWED_GRADE).trim();
        const rawFilename = params.get('filename') || 'moeys-supplementary.pdf';
        const title = String(params.get('title') || '').trim();
        const chapter = String(params.get('chapter') || '').trim();
        const topic = String(params.get('topic') || '').trim();
        const lesson = String(params.get('lesson') || '').trim();
        const description = String(params.get('description') || '').trim();

        if (grade !== ALLOWED_GRADE) {
            return sendJson(res, 400, { success: false, message: 'MOEYS Supplementary supports Grade 12 only.' });
        }

        const lowName = String(rawFilename).toLowerCase();
        if (!lowName.endsWith('.pdf') && !lowName.endsWith('.pdf.pdf')) {
            return sendJson(res, 400, { success: false, message: 'Only PDF (.pdf) files are supported.' });
        }

        try {
            const buffer = await readBinaryUpload(req, MAX_UPLOAD_BYTES);
            if (!isValidPdfBuffer(buffer)) {
                return sendJson(res, 400, { success: false, message: 'Uploaded file is not a valid PDF document.' });
            }

            const paths = ensureStorage(baseDir);
            const cleanName = sanitizeFileName(rawFilename);
            const storedName = getUniqueTargetFilename(paths.gradeDir, cleanName);
            const targetPath = path.join(paths.gradeDir, storedName);
            fs.writeFileSync(targetPath, buffer);

            const existing = syncGrade12Catalog(baseDir);
            const nowIso = new Date().toISOString();
            const relUrl = `moeys_supplementary/grade12/${storedName}`;

            const record = {
                id: `ms-g12-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                grade: ALLOWED_GRADE,
                title: title || deriveTitleFromFilename(rawFilename),
                chapter: chapter || deriveChapterFromFilename(rawFilename),
                topic: topic || 'Core Physics',
                lesson: lesson || deriveLessonFromFilename(rawFilename),
                description,
                originalName: rawFilename,
                storedName,
                url: relUrl,
                ext: '.pdf',
                size: buffer.length,
                createdAt: nowIso,
                updatedAt: nowIso
            };

            const nextList = existing.filter(m => m.url !== relUrl);
            nextList.unshift(record);
            writeCatalog(baseDir, nextList);

            return sendJson(res, 200, {
                success: true,
                message: 'MOEYS Supplementary material uploaded successfully to Grade 12.',
                material: record
            });
        } catch (err) {
            return sendJson(res, 400, { success: false, message: err.message || 'Upload failed.' });
        }
    }

    // 5. Replace PDF binary
    if (pathname === '/api/moeys-supplementary/replace' && method === 'POST') {
        if (!canManage(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can replace MOEYS Supplementary materials.' });
        }

        const grade = String(params.get('grade') || ALLOWED_GRADE).trim();
        const docId = String(params.get('id') || '').trim();
        const rawFilename = params.get('filename') || 'moeys-supplementary.pdf';
        const title = params.get('title') !== null ? String(params.get('title')).trim() : null;
        const chapter = params.get('chapter') !== null ? String(params.get('chapter')).trim() : null;
        const topic = params.get('topic') !== null ? String(params.get('topic')).trim() : null;
        const lesson = params.get('lesson') !== null ? String(params.get('lesson')).trim() : null;
        const description = params.get('description') !== null ? String(params.get('description')).trim() : null;

        if (grade !== ALLOWED_GRADE || !docId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/document ID.' });
        }

        const lowName = String(rawFilename).toLowerCase();
        if (!lowName.endsWith('.pdf') && !lowName.endsWith('.pdf.pdf')) {
            return sendJson(res, 400, { success: false, message: 'Only PDF (.pdf) files are supported.' });
        }

        const items = syncGrade12Catalog(baseDir);
        const idx = items.findIndex(m => m.id === docId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'MOEYS Supplementary document not found in Grade 12.' });
        }

        try {
            const buffer = await readBinaryUpload(req, MAX_UPLOAD_BYTES);
            if (!isValidPdfBuffer(buffer)) {
                return sendJson(res, 400, { success: false, message: 'Replacement file is not a valid PDF document.' });
            }

            const oldItem = items[idx];
            const paths = ensureStorage(baseDir);
            const cleanName = sanitizeFileName(rawFilename);
            const oldDiskPath = oldItem.url ? path.normalize(path.join(baseDir, oldItem.url)) : null;

            const newStoredName = (oldItem.storedName === cleanName)
                ? cleanName
                : getUniqueTargetFilename(paths.gradeDir, cleanName);
            const newTargetPath = path.join(paths.gradeDir, newStoredName);
            fs.writeFileSync(newTargetPath, buffer);

            const newRelUrl = `moeys_supplementary/grade12/${newStoredName}`;
            const updated = {
                ...oldItem,
                id: `ms-g12-${crypto.createHash('md5').update(newRelUrl).digest('hex').slice(0, 10)}`,
                grade: ALLOWED_GRADE,
                title: (title !== null && title.length > 0) ? title : oldItem.title,
                chapter: (chapter !== null && chapter.length > 0) ? chapter : (oldItem.chapter || 'General Chapter'),
                topic: (topic !== null && topic.length > 0) ? topic : (oldItem.topic || 'Core Physics'),
                lesson: (lesson !== null && lesson.length > 0) ? lesson : (oldItem.lesson || 'All Lessons'),
                description: description !== null ? description : (oldItem.description || ''),
                originalName: rawFilename,
                storedName: newStoredName,
                url: newRelUrl,
                ext: '.pdf',
                size: buffer.length,
                updatedAt: new Date().toISOString()
            };

            items[idx] = updated;
            writeCatalog(baseDir, items);

            if (oldDiskPath && path.resolve(oldDiskPath) !== path.resolve(newTargetPath)) {
                safeUnlink(oldDiskPath);
            }

            return sendJson(res, 200, {
                success: true,
                message: 'MOEYS Supplementary PDF replaced successfully.',
                material: updated
            });
        } catch (err) {
            return sendJson(res, 400, { success: false, message: err.message || 'Replace failed.' });
        }
    }

    // 6. Update Metadata
    if (pathname === '/api/moeys-supplementary/update' && method === 'POST') {
        if (!canManage(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can update MOEYS Supplementary materials.' });
        }
        const body = await readSmallJson(req);
        const grade = String(body.grade || ALLOWED_GRADE).trim();
        const docId = String(body.id || '').trim();

        if (grade !== ALLOWED_GRADE || !docId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/document ID.' });
        }

        const items = syncGrade12Catalog(baseDir);
        const idx = items.findIndex(m => m.id === docId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'MOEYS Supplementary document not found in Grade 12.' });
        }

        const cur = items[idx];
        const updated = {
            ...cur,
            grade: ALLOWED_GRADE,
            title: (typeof body.title === 'string' && body.title.trim()) ? body.title.trim() : cur.title,
            chapter: (typeof body.chapter === 'string' && body.chapter.trim()) ? body.chapter.trim() : (cur.chapter || 'General Chapter'),
            topic: (typeof body.topic === 'string' && body.topic.trim()) ? body.topic.trim() : (cur.topic || 'Core Physics'),
            lesson: (typeof body.lesson === 'string' && body.lesson.trim()) ? body.lesson.trim() : (cur.lesson || 'All Lessons'),
            description: typeof body.description === 'string' ? body.description.trim() : (cur.description || ''),
            updatedAt: new Date().toISOString()
        };

        items[idx] = updated;
        writeCatalog(baseDir, items);
        return sendJson(res, 200, { success: true, message: 'MOEYS Supplementary document updated.', material: updated });
    }

    // 7. Delete Document
    if (pathname === '/api/moeys-supplementary/delete' && (method === 'POST' || method === 'DELETE')) {
        if (!canManage(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can delete MOEYS Supplementary materials.' });
        }
        const body = method === 'POST' ? await readSmallJson(req) : {};
        const grade = String(body.grade || params.get('grade') || ALLOWED_GRADE).trim();
        const docId = String(body.id || params.get('id') || '').trim();

        if (grade !== ALLOWED_GRADE || !docId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/document ID.' });
        }

        const items = syncGrade12Catalog(baseDir);
        const idx = items.findIndex(m => m.id === docId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'MOEYS Supplementary document not found.' });
        }

        const [removed] = items.splice(idx, 1);
        writeCatalog(baseDir, items);

        const paths = ensureStorage(baseDir);
        if (removed.url) {
            const diskPath = path.normalize(path.join(baseDir, removed.url));
            if (diskPath.startsWith(paths.gradeDir)) safeUnlink(diskPath);
        }

        return sendJson(res, 200, { success: true, message: 'MOEYS Supplementary document deleted.' });
    }

    return sendJson(res, 404, { success: false, error: 'MOEYS Supplementary endpoint not found.' });
}

handleMoeysSupplementaryRequest.syncAll = syncGrade12Catalog;

module.exports = handleMoeysSupplementaryRequest;
