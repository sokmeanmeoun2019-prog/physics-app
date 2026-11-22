/**
 * WIS Physics Learning Hub - Grade 9 KH-Phy Diploma Folder Sync & Upload Helper
 *
 * Strictly scoped to Grade 9 KH-Phy Diploma only.
 * Zero external npm dependencies (native Node.js built-ins only).
 *
 * Scans:
 *   - exams/          (any PDF with KH/Khmer markers not already handled by built-in cards)
 *   - exams/kh-phy/   (any PDF)
 *   - exams/kh_phy/   (any PDF)
 *
 * Generates:
 *   - exams/kh-phy-catalog.js
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const MAX_UPLOAD_BYTES = 150 * 1024 * 1024;

// Built-in National Diploma & Grade 12 BacII base stems (never include in KH-Phy)
const EXCLUDED_NON_KH_STEMS = new Set([
    'g9-diploma-prep',
    'g9-diploma-exam',
    'g12-bacii-prep',
    'g12-bacii-exam'
]);

// Built-in KH-Phy card #1 (`g9-kh-phy-diploma-exam`) aliases already handled by index.html
const BUILTIN_KH_EXAM_STEMS = new Set([
    'g9-kh-phy-diploma',
    'g9-kh-phy-diploma-exam',
    'kh-phy-diploma',
    'kh-phy diploma',
    'g9-kh-phy',
    'kh-phy'
]);

// Built-in KH-Phy card #2 (`g9-kh-phy-diploma-prep`) aliases already handled by index.html
const BUILTIN_KH_PREP_STEMS = new Set([
    'g9-kh-phy-diploma-prep',
    'g9-kh-phy-prep',
    'kh-phy-prep',
    'kh-phy diploma prep',
    'kh-phy-mock'
]);

function isPdfAssetFilename(fileName) {
    if (!fileName || fileName.startsWith('.')) return false;
    const low = fileName.toLowerCase();
    return low.endsWith('.pdf') || low.endsWith('.pdf.pdf');
}

function stripPdfExtensions(fileName) {
    return String(fileName || '')
        .replace(/\.pdf\.pdf$/i, '')
        .replace(/\.pdf$/i, '')
        .trim();
}

function normalizeStemKey(fileName) {
    return stripPdfExtensions(fileName).toLowerCase().replace(/\s+/g, ' ').trim();
}

function deriveTitleFromFilename(fileName) {
    const clean = stripPdfExtensions(path.basename(String(fileName || '')))
        .replace(/[_-]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
    if (!clean) return 'KH-Phy Diploma Paper';
    return clean;
}

function formatBytes(bytes) {
    const n = Number(bytes) || 0;
    if (n <= 0) return 'PDF';
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
    return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

function isKhPhyRootFilename(fileName) {
    const stem = normalizeStemKey(fileName);
    if (!stem) return false;
    if (EXCLUDED_NON_KH_STEMS.has(stem)) return false;
    if (/\b(bacii|g12|grade[\s_-]*12|national)\b/i.test(stem) && !/\bkh/i.test(stem)) {
        return false;
    }
    return /(kh|khmer)/i.test(stem);
}

function getExamsPaths(baseDir) {
    const examsDir = path.join(baseDir, 'exams');
    const khPhyDir = path.join(examsDir, 'kh-phy');
    const khPhyAltDir = path.join(examsDir, 'kh_phy');
    const catalogJsPath = path.join(examsDir, 'kh-phy-catalog.js');
    const metadataPath = path.join(khPhyDir, 'catalog.json');
    return { examsDir, khPhyDir, khPhyAltDir, catalogJsPath, metadataPath };
}

function ensureStorage(baseDir) {
    const paths = getExamsPaths(baseDir);
    if (!fs.existsSync(paths.examsDir)) fs.mkdirSync(paths.examsDir, { recursive: true });
    if (!fs.existsSync(paths.khPhyDir)) fs.mkdirSync(paths.khPhyDir, { recursive: true });
    const gitkeep = path.join(paths.khPhyDir, '.gitkeep');
    if (!fs.existsSync(gitkeep)) {
        try { fs.writeFileSync(gitkeep, '', 'utf8'); } catch (e) {}
    }
    return paths;
}

function readCustomMetadata(metadataPath) {
    try {
        if (fs.existsSync(metadataPath)) {
            const parsed = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
            if (parsed && typeof parsed.items === 'object') return parsed.items;
        }
    } catch (e) {}
    return {};
}

function writeCustomMetadata(metadataPath, itemsMap) {
    try {
        const tmpPath = `${metadataPath}.${crypto.randomBytes(4).toString('hex')}.tmp`;
        fs.writeFileSync(tmpPath, JSON.stringify({
            updatedAt: new Date().toISOString(),
            items: itemsMap || {}
        }, null, 2), 'utf8');
        fs.renameSync(tmpPath, metadataPath);
    } catch (e) {}
}

function scanDirectoryPdfs(dirPath, relPrefix, onlyMatchingRootRule) {
    if (!fs.existsSync(dirPath)) return [];
    let entries = [];
    try {
        entries = fs.readdirSync(dirPath).filter(isPdfAssetFilename).sort((a, b) => a.localeCompare(b));
    } catch (e) {
        return [];
    }

    // Deduplicate .pdf and .pdf.pdf variants in the same directory
    const byStem = new Map();
    for (const fileName of entries) {
        if (onlyMatchingRootRule && !isKhPhyRootFilename(fileName)) continue;
        const fullPath = path.join(dirPath, fileName);
        let stats;
        try {
            stats = fs.statSync(fullPath);
            if (!stats.isFile()) continue;
        } catch (e) {
            continue;
        }

        const stem = normalizeStemKey(fileName);
        const existing = byStem.get(stem);
        const isSingleExt = fileName.toLowerCase().endsWith('.pdf') && !fileName.toLowerCase().endsWith('.pdf.pdf');
        if (!existing || isSingleExt) {
            byStem.set(stem, {
                fileName,
                stem,
                relUrl: `${relPrefix}/${fileName}`,
                size: stats.size,
                mtimeIso: stats.mtime ? stats.mtime.toISOString() : new Date().toISOString(),
                inSubfolder: !onlyMatchingRootRule
            });
        }
    }
    return Array.from(byStem.values());
}

function syncCatalog(baseDir) {
    const paths = ensureStorage(baseDir);
    const meta = readCustomMetadata(paths.metadataPath);

    const rootMatches = scanDirectoryPdfs(paths.examsDir, 'exams', true);
    const subMatches = scanDirectoryPdfs(paths.khPhyDir, 'exams/kh-phy', false);
    const altSubMatches = scanDirectoryPdfs(paths.khPhyAltDir, 'exams/kh_phy', false);

    const allDiscovered = [...rootMatches, ...subMatches, ...altSubMatches];
    const builtinStatus = {
        examFile: null,
        prepFile: null
    };

    const extraItems = [];
    const seenUrls = new Set();

    for (const entry of allDiscovered) {
        if (!entry.inSubfolder) {
            if (BUILTIN_KH_EXAM_STEMS.has(entry.stem)) {
                builtinStatus.examFile = { url: entry.relUrl, size: entry.size, fileName: entry.fileName };
                continue;
            }
            if (BUILTIN_KH_PREP_STEMS.has(entry.stem)) {
                builtinStatus.prepFile = { url: entry.relUrl, size: entry.size, fileName: entry.fileName };
                continue;
            }
        }

        if (seenUrls.has(entry.relUrl.toLowerCase())) continue;
        seenUrls.add(entry.relUrl.toLowerCase());

        const custom = meta[entry.relUrl] || {};
        const idHash = crypto.createHash('md5').update(entry.relUrl).digest('hex').slice(0, 10);
        const derivedTitle = deriveTitleFromFilename(entry.fileName);
        const isPrep = /\b(prep|practice|mock)\b/i.test(entry.stem);

        extraItems.push({
            id: `g9-kh-phy-extra-${idHash}`,
            title: custom.title || derivedTitle,
            subtitle: custom.subtitle || `${isPrep ? 'KH-Phy Preparation' : 'KH-Phy Diploma Paper'} • ${formatBytes(entry.size)}`,
            type: custom.type || (isPrep ? 'Preparation & Practice' : 'KH-Phy Past Exam'),
            category: 'kh-phy',
            year: custom.year || 'KH-Phy Diploma',
            description: custom.description || `Grade 9 Khmer Physics (KH-Phy) Diploma document (${entry.fileName}). Protected view-only PDF.`,
            url: entry.relUrl,
            altUrl: entry.relUrl.toLowerCase().endsWith('.pdf.pdf') ? entry.relUrl.slice(0, -4) : `${entry.relUrl}.pdf`,
            size: entry.size,
            storedName: entry.fileName,
            deletable: entry.inSubfolder,
            isDiscovered: true,
            updatedAt: entry.mtimeIso
        });
    }

    const content =
        `// Auto-generated Grade 9 KH-Phy Diploma catalog index\n` +
        `window.KH_PHY_DIPLOMA_EXTRA_RESOURCES = ${JSON.stringify(extraItems, null, 2)};\n` +
        `window.KH_PHY_DIPLOMA_BUILTINS = ${JSON.stringify(builtinStatus, null, 2)};\n`;

    try {
        const existing = fs.existsSync(paths.catalogJsPath) ? fs.readFileSync(paths.catalogJsPath, 'utf8') : '';
        if (existing !== content) {
            const tmpPath = `${paths.catalogJsPath}.${crypto.randomBytes(4).toString('hex')}.tmp`;
            fs.writeFileSync(tmpPath, content, 'utf8');
            fs.renameSync(tmpPath, paths.catalogJsPath);
        }
    } catch (e) {}

    return { extraItems, builtinStatus };
}

function sanitizeFileName(name) {
    const base = path.basename(String(name || 'kh-phy-diploma.pdf')).trim();
    const cleaned = base.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_').replace(/\s+/g, '-');
    if (!cleaned) return 'kh-phy-diploma.pdf';
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

function canManage(ctx) {
    return Boolean(ctx.isHost || ctx.adminSession);
}

async function handleKhPhyDiplomaRequest(req, res, ctx) {
    const { pathname, method, parsedUrl, baseDir, sendJson } = ctx;
    const params = parsedUrl.searchParams;

    if (pathname === '/api/kh-phy-diploma' && method === 'GET') {
        const result = syncCatalog(baseDir);
        return sendJson(res, 200, {
            success: true,
            canManage: canManage(ctx),
            items: result.extraItems,
            builtins: result.builtinStatus
        });
    }

    if (pathname === '/api/kh-phy-diploma/upload' && method === 'POST') {
        if (!canManage(ctx)) {
            return sendJson(res, 403, {
                success: false,
                message: 'Access Denied: Only the administrator on the host computer can upload KH-Phy Diploma files.'
            });
        }

        const rawFilename = params.get('filename') || 'kh-phy-diploma.pdf';
        const title = String(params.get('title') || '').trim();
        const type = String(params.get('type') || '').trim();

        let fileBuf;
        try {
            fileBuf = await readBinaryUpload(req);
        } catch (err) {
            return sendJson(res, 413, { success: false, message: err.message });
        }

        if (!isValidPdfBuffer(fileBuf)) {
            return sendJson(res, 400, {
                success: false,
                message: 'Invalid file: Please upload a valid PDF document (.pdf).'
            });
        }

        const paths = ensureStorage(baseDir);
        const cleanName = sanitizeFileName(rawFilename);
        const storedName = getUniqueTargetFilename(paths.khPhyDir, cleanName);
        const targetPath = path.join(paths.khPhyDir, storedName);

        try {
            fs.writeFileSync(targetPath, fileBuf);
        } catch (err) {
            return sendJson(res, 500, { success: false, message: 'Failed to save PDF to exams/kh-phy/.' });
        }

        const relUrl = `exams/kh-phy/${storedName}`;
        if (title || type) {
            const meta = readCustomMetadata(paths.metadataPath);
            meta[relUrl] = {
                title: title || deriveTitleFromFilename(storedName),
                type: type || 'KH-Phy Past Exam'
            };
            writeCustomMetadata(paths.metadataPath, meta);
        }

        const synced = syncCatalog(baseDir);
        const created = synced.extraItems.find(it => it.url === relUrl) || null;
        return sendJson(res, 200, {
            success: true,
            item: created,
            items: synced.extraItems,
            message: 'KH-Phy Diploma PDF uploaded and synced successfully.'
        });
    }

    const delMatch = pathname.match(/^\/api\/kh-phy-diploma\/([a-zA-Z0-9_-]+)$/);
    if (delMatch && method === 'DELETE') {
        if (!canManage(ctx)) {
            return sendJson(res, 403, { success: false, message: 'Access Denied: Administrator authentication required.' });
        }

        const itemId = delMatch[1];
        const paths = ensureStorage(baseDir);
        const synced = syncCatalog(baseDir);
        const target = synced.extraItems.find(it => it.id === itemId);
        if (!target || !target.deletable) {
            return sendJson(res, 404, { success: false, message: 'Uploaded KH-Phy Diploma item not found or cannot be deleted here.' });
        }

        const diskPath = path.normalize(path.join(baseDir, target.url));
        if (!diskPath.startsWith(paths.khPhyDir) && !diskPath.startsWith(paths.khPhyAltDir)) {
            return sendJson(res, 403, { success: false, message: 'Invalid file path.' });
        }

        try {
            if (fs.existsSync(diskPath)) fs.unlinkSync(diskPath);
        } catch (err) {
            return sendJson(res, 500, { success: false, message: 'Failed to delete PDF from disk.' });
        }

        const meta = readCustomMetadata(paths.metadataPath);
        if (meta[target.url]) {
            delete meta[target.url];
            writeCustomMetadata(paths.metadataPath, meta);
        }

        const updated = syncCatalog(baseDir);
        return sendJson(res, 200, {
            success: true,
            items: updated.extraItems,
            message: 'KH-Phy Diploma PDF deleted.'
        });
    }

    return sendJson(res, 404, { success: false, message: 'KH-Phy Diploma endpoint not found.' });
}

handleKhPhyDiplomaRequest.syncAll = syncCatalog;
module.exports = handleKhPhyDiplomaRequest;
