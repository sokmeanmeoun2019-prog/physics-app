/**
 * WIS Physics Learning Hub - Independent My Textbook Backend & Folder Sync
 *
 * Strictly scoped to Grades 9, 10, 11, and 12 ONLY (Grades 7 & 8 excluded).
 * Independent from existing Ebook, KH-Ebook, Worksheet, Outstanding Worksheet, Summary Slides, and MOEYS Supplementary.
 * Zero external npm dependencies (native Node.js built-ins only).
 *
 * Folder Layout:
 *   - my_textbooks/grade9/   (*.pdf, catalog.json, .gitkeep)
 *   - my_textbooks/grade10/  (*.pdf, catalog.json, .gitkeep)
 *   - my_textbooks/grade11/  (*.pdf, catalog.json, .gitkeep)
 *   - my_textbooks/grade12/  (*.pdf, catalog.json, .gitkeep)
 *   - my_textbooks/catalog.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const MAX_UPLOAD_BYTES = 150 * 1024 * 1024;
const ALLOWED_GRADES = new Set(['9', '10', '11', '12']);

function getGradePaths(baseDir, grade) {
    const rootDir = path.join(baseDir, 'my_textbooks');
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
            textbooks: []
        }, null, 2), 'utf8');
    }
    return paths;
}

function readRawCatalog(baseDir, grade) {
    const { catalogPath } = ensureGradeStorage(baseDir, grade);
    try {
        const raw = fs.readFileSync(catalogPath, 'utf8');
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.textbooks)) {
            return parsed.textbooks.filter(item => item && String(item.grade) === String(grade));
        }
    } catch (e) {}
    return [];
}

function writeCombinedCatalogJs(baseDir) {
    try {
        const rootDir = path.join(baseDir, 'my_textbooks');
        if (!fs.existsSync(rootDir)) fs.mkdirSync(rootDir, { recursive: true });

        const combined = {};
        for (const g of ALLOWED_GRADES) {
            combined[g] = readRawCatalog(baseDir, g);
        }

        const outPath = path.join(rootDir, 'catalog.js');
        const content =
            `// Auto-generated My Textbook catalog index (Grades 9-12 only)\n` +
            `window.MY_TEXTBOOKS_CATALOG = ${JSON.stringify(combined, null, 2)};\n`;
        const existing = fs.existsSync(outPath) ? fs.readFileSync(outPath, 'utf8') : '';
        if (existing !== content) {
            const tmpPath = `${outPath}.${crypto.randomBytes(4).toString('hex')}.tmp`;
            fs.writeFileSync(tmpPath, content, 'utf8');
            fs.renameSync(tmpPath, outPath);
        }
    } catch (e) {}
}

function writeCatalog(baseDir, grade, textbooks) {
    const { catalogPath } = ensureGradeStorage(baseDir, grade);
    const cleanList = (Array.isArray(textbooks) ? textbooks : [])
        .filter(item => item && String(item.grade) === String(grade));
    const tmpPath = `${catalogPath}.${crypto.randomBytes(4).toString('hex')}.tmp`;
    fs.writeFileSync(tmpPath, JSON.stringify({
        grade: String(grade),
        updatedAt: new Date().toISOString(),
        textbooks: cleanList
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
        .trim() || 'Physics Textbook';
}

function deriveChapterFromFilename(filename) {
    const m = String(filename || '').match(/(?:^|[^a-z])(?:ch(?:apter)?[\s_-]*(\d+))/i);
    if (m) return `Chapter ${m[1]}`;
    if (/full|complete|whole/i.test(String(filename || ''))) return 'Full Textbook';
    return 'General Chapters';
}

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

        const relUrl = `my_textbooks/grade${g}/${fileName}`;
        const prev = existingByRelUrl.get(relUrl);
        const mtimeIso = stats.mtime ? stats.mtime.toISOString() : new Date().toISOString();

        if (prev) {
            diskItems.push({
                ...prev,
                id: prev.id || `mt-g${g}-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                grade: g,
                subject: prev.subject || 'Physics',
                chapter: prev.chapter || deriveChapterFromFilename(fileName),
                originalName: prev.originalName || fileName,
                storedName: fileName,
                url: relUrl,
                ext: '.pdf',
                size: stats.size,
                updatedAt: (prev.size !== stats.size) ? mtimeIso : (prev.updatedAt || mtimeIso)
            });
        } else {
            diskItems.push({
                id: `mt-g${g}-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                grade: g,
                title: deriveTitleFromFilename(fileName),
                subject: 'Physics',
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

    if (JSON.stringify(existing) !== JSON.stringify(diskItems)) {
        return writeCatalog(baseDir, g, diskItems);
    }
    writeCombinedCatalogJs(baseDir);
    return diskItems;
}

function syncAllCatalogs(baseDir) {
    for (const g of ALLOWED_GRADES) {
        syncGradeCatalog(baseDir, g);
    }
    writeCombinedCatalogJs(baseDir);
}

function sanitizeFileName(name) {
    const base = path.basename(String(name || 'my-textbook.pdf')).trim();
    const cleaned = base.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_').replace(/\s+/g, '-');
    if (!cleaned) return 'my-textbook.pdf';
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
            return res.end(JSON.stringify({ error: 'My Textbook PDF not found on disk.' }));
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

function resolveDiskPdfPath(baseDir, grade, item) {
    const paths = ensureGradeStorage(baseDir, grade);
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

async function handleMyTextbooksRequest(req, res, ctx) {
    const { pathname, method, parsedUrl, baseDir, sendJson } = ctx;
    const params = parsedUrl.searchParams;

    // 1. Capabilities
    if (pathname === '/api/my-textbooks/capabilities' && method === 'GET') {
        return sendJson(res, 200, {
            success: true,
            backendPersistence: true,
            canManage: canManage(ctx),
            maxUploadMb: Math.round(MAX_UPLOAD_BYTES / (1024 * 1024)),
            supportedGrades: ['9', '10', '11', '12']
        });
    }

    // 2. List by Grade (Grades 9-12 Only)
    if (pathname === '/api/my-textbooks' && method === 'GET') {
        if (!canView(ctx)) {
            return sendJson(res, 401, { success: false, error: 'Unauthorized: Website access password required.' });
        }
        const grade = String(params.get('grade') || '').trim();
        if (!ALLOWED_GRADES.has(grade)) {
            return sendJson(res, 400, { success: false, message: 'My Textbook is available strictly for Grades 9, 10, 11, and 12.' });
        }
        const textbooks = syncGradeCatalog(baseDir, grade);
        return sendJson(res, 200, {
            success: true,
            grade,
            canManage: canManage(ctx),
            textbooks
        });
    }

    // 3. Inline Range PDF Stream (no forced download)
    const fileMatch = pathname.match(/^\/api\/my-textbooks\/file\/(9|10|11|12)\/([a-zA-Z0-9_-]+)$/);
    if (fileMatch && method === 'GET') {
        if (!canView(ctx)) {
            return sendJson(res, 401, { error: 'Unauthorized: Website access password required.' });
        }
        const grade = fileMatch[1];
        const bookId = fileMatch[2];
        const items = syncGradeCatalog(baseDir, grade);
        const item = items.find(b => b.id === bookId);
        if (!item) {
            return sendJson(res, 404, { error: 'My Textbook record not found.' });
        }
        const diskPath = resolveDiskPdfPath(baseDir, grade, item);
        if (!diskPath) {
            return sendJson(res, 404, { error: 'My Textbook PDF file not found on disk.' });
        }
        return sendPdfWithRanges(req, res, diskPath, item.originalName || `${item.title || 'my-textbook'}.pdf`);
    }

    // 4. Upload PDF strictly to Grade 9, 10, 11, or 12
    if (pathname === '/api/my-textbooks/upload' && method === 'POST') {
        if (!canManage(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can upload textbooks.' });
        }

        const grade = String(params.get('grade') || '').trim();
        const rawFilename = params.get('filename') || 'my-textbook.pdf';
        const title = String(params.get('title') || '').trim();
        const subject = String(params.get('subject') || '').trim();
        const chapter = String(params.get('chapter') || '').trim();
        const description = String(params.get('description') || '').trim();

        if (!ALLOWED_GRADES.has(grade)) {
            return sendJson(res, 400, { success: false, message: 'My Textbook supports only Grades 9, 10, 11, and 12.' });
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

            const paths = ensureGradeStorage(baseDir, grade);
            const cleanName = sanitizeFileName(rawFilename);
            const storedName = getUniqueTargetFilename(paths.gradeDir, cleanName);
            const targetPath = path.join(paths.gradeDir, storedName);
            fs.writeFileSync(targetPath, buffer);

            const existing = syncGradeCatalog(baseDir, grade);
            const nowIso = new Date().toISOString();
            const relUrl = `my_textbooks/grade${grade}/${storedName}`;

            const record = {
                id: `mt-g${grade}-${crypto.createHash('md5').update(relUrl).digest('hex').slice(0, 10)}`,
                grade,
                title: title || deriveTitleFromFilename(rawFilename),
                subject: subject || 'Physics',
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
                message: `Textbook uploaded successfully to Grade ${grade}.`,
                textbook: record
            });
        } catch (err) {
            return sendJson(res, 400, { success: false, message: err.message || 'Upload failed.' });
        }
    }

    // 5. Replace PDF binary
    if (pathname === '/api/my-textbooks/replace' && method === 'POST') {
        if (!canManage(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can replace textbooks.' });
        }

        const grade = String(params.get('grade') || '').trim();
        const bookId = String(params.get('id') || '').trim();
        const rawFilename = params.get('filename') || 'my-textbook.pdf';
        const title = params.get('title') !== null ? String(params.get('title')).trim() : null;
        const subject = params.get('subject') !== null ? String(params.get('subject')).trim() : null;
        const chapter = params.get('chapter') !== null ? String(params.get('chapter')).trim() : null;
        const description = params.get('description') !== null ? String(params.get('description')).trim() : null;

        if (!ALLOWED_GRADES.has(grade) || !bookId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/textbook ID.' });
        }

        const lowName = String(rawFilename).toLowerCase();
        if (!lowName.endsWith('.pdf') && !lowName.endsWith('.pdf.pdf')) {
            return sendJson(res, 400, { success: false, message: 'Only PDF (.pdf) files are supported.' });
        }

        const items = syncGradeCatalog(baseDir, grade);
        const idx = items.findIndex(b => b.id === bookId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'Textbook not found in this grade.' });
        }

        try {
            const buffer = await readBinaryUpload(req, MAX_UPLOAD_BYTES);
            if (!isValidPdfBuffer(buffer)) {
                return sendJson(res, 400, { success: false, message: 'Replacement file is not a valid PDF document.' });
            }

            const oldItem = items[idx];
            const paths = ensureGradeStorage(baseDir, grade);
            const cleanName = sanitizeFileName(rawFilename);
            const oldDiskPath = oldItem.url ? path.normalize(path.join(baseDir, oldItem.url)) : null;

            const newStoredName = (oldItem.storedName === cleanName)
                ? cleanName
                : getUniqueTargetFilename(paths.gradeDir, cleanName);
            const newTargetPath = path.join(paths.gradeDir, newStoredName);
            fs.writeFileSync(newTargetPath, buffer);

            const newRelUrl = `my_textbooks/grade${grade}/${newStoredName}`;
            const updated = {
                ...oldItem,
                id: `mt-g${grade}-${crypto.createHash('md5').update(newRelUrl).digest('hex').slice(0, 10)}`,
                grade,
                title: (title !== null && title.length > 0) ? title : oldItem.title,
                subject: (subject !== null && subject.length > 0) ? subject : (oldItem.subject || 'Physics'),
                chapter: (chapter !== null && chapter.length > 0) ? chapter : (oldItem.chapter || 'General Chapters'),
                description: description !== null ? description : (oldItem.description || ''),
                originalName: rawFilename,
                storedName: newStoredName,
                url: newRelUrl,
                ext: '.pdf',
                size: buffer.length,
                updatedAt: new Date().toISOString()
            };

            items[idx] = updated;
            writeCatalog(baseDir, grade, items);

            if (oldDiskPath && path.resolve(oldDiskPath) !== path.resolve(newTargetPath)) {
                safeUnlink(oldDiskPath);
            }

            return sendJson(res, 200, {
                success: true,
                message: 'Textbook PDF replaced successfully.',
                textbook: updated
            });
        } catch (err) {
            return sendJson(res, 400, { success: false, message: err.message || 'Replace failed.' });
        }
    }

    // 6. Update Metadata
    if (pathname === '/api/my-textbooks/update' && method === 'POST') {
        if (!canManage(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can update textbooks.' });
        }
        const body = await readSmallJson(req);
        const grade = String(body.grade || '').trim();
        const bookId = String(body.id || '').trim();

        if (!ALLOWED_GRADES.has(grade) || !bookId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/textbook ID.' });
        }

        const items = syncGradeCatalog(baseDir, grade);
        const idx = items.findIndex(b => b.id === bookId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'Textbook not found in this grade.' });
        }

        const cur = items[idx];
        const updated = {
            ...cur,
            grade,
            title: (typeof body.title === 'string' && body.title.trim()) ? body.title.trim() : cur.title,
            subject: (typeof body.subject === 'string' && body.subject.trim()) ? body.subject.trim() : (cur.subject || 'Physics'),
            chapter: (typeof body.chapter === 'string' && body.chapter.trim()) ? body.chapter.trim() : (cur.chapter || 'General Chapters'),
            description: typeof body.description === 'string' ? body.description.trim() : (cur.description || ''),
            updatedAt: new Date().toISOString()
        };

        items[idx] = updated;
        writeCatalog(baseDir, grade, items);
        return sendJson(res, 200, { success: true, message: 'Textbook updated.', textbook: updated });
    }

    // 7. Delete Textbook
    if (pathname === '/api/my-textbooks/delete' && (method === 'POST' || method === 'DELETE')) {
        if (!canManage(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Only the administrator can delete textbooks.' });
        }
        const body = method === 'POST' ? await readSmallJson(req) : {};
        const grade = String(body.grade || params.get('grade') || '').trim();
        const bookId = String(body.id || params.get('id') || '').trim();

        if (!ALLOWED_GRADES.has(grade) || !bookId) {
            return sendJson(res, 400, { success: false, message: 'Missing or invalid grade/textbook ID.' });
        }

        const items = syncGradeCatalog(baseDir, grade);
        const idx = items.findIndex(b => b.id === bookId);
        if (idx === -1) {
            return sendJson(res, 404, { success: false, message: 'Textbook not found.' });
        }

        const [removed] = items.splice(idx, 1);
        writeCatalog(baseDir, grade, items);

        const paths = ensureGradeStorage(baseDir, grade);
        if (removed.url) {
            const diskPath = path.normalize(path.join(baseDir, removed.url));
            if (diskPath.startsWith(paths.gradeDir)) safeUnlink(diskPath);
        }

        return sendJson(res, 200, { success: true, message: 'Textbook deleted.' });
    }

    return sendJson(res, 404, { success: false, error: 'My Textbook endpoint not found.' });
}

handleMyTextbooksRequest.syncAll = syncAllCatalogs;

module.exports = handleMyTextbooksRequest;
