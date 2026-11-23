/**
 * WIS Physics Learning Hub - My Textbook Section (Grades 9-12 Only)
 *
 * Strictly scoped to Grades 9, 10, 11, and 12 ONLY (Grades 7 & 8 excluded).
 * Reuses the exact layout, UI classes, and PDF.js viewing experience as the existing Ebook section,
 * with independent per-grade storage, Subject & Chapter organization, and Admin upload/replace/edit/delete.
 */
(function (global) {
    'use strict';

    const ALLOWED_GRADES = ['9', '10', '11', '12'];
    const IDB_NAME = 'wis_my_textbook_v1';
    const IDB_STORE = 'textbooks';
    const IDB_VERSION = 1;
    const MAX_UPLOAD_MB = 150;

    const state = {
        activeGrade: null,
        capabilitiesChecked: false,
        backendAvailable: false,
        canManage: false,
        itemsByGrade: {},
        loadingGrade: {},
        selectedIdByGrade: {},
        filterByGrade: {},
        modalState: null,
        reader: {
            grade: null,
            itemId: null,
            pdfDoc: null,
            numPages: 0,
            currentScale: 1.0,
            baseW: 0,
            baseH: 0,
            generation: 0,
            observer: null,
            activeTasks: {},
            renderedPages: new Set(),
            cleanups: []
        }
    };

    let cachedWorkerBlobUrl = null;

    // --------------------------------------------------------------------------
    // Helpers & Strict Grade 9-12 Isolation
    // --------------------------------------------------------------------------
    function normalizeGrade(val) {
        const s = String(val == null ? '' : val).trim();
        return ALLOWED_GRADES.includes(s) ? s : null;
    }

    function escapeHtml(str) {
        return String(str == null ? '' : str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function resolveUrl(relPath) {
        try {
            if (!relPath) return '';
            if (/^(https?:|blob:|data:)/i.test(relPath)) return relPath;
            if (typeof global.resolveAppUrl === 'function') {
                return global.resolveAppUrl(relPath);
            }
            return new URL(String(relPath).replace(/^\/+/, ''), global.location.href).href;
        } catch (e) {
            return relPath;
        }
    }

    function formatBytes(bytes) {
        const n = Number(bytes) || 0;
        if (n <= 0) return 'PDF';
        if (n < 1024) return `${n} B`;
        if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
        return `${(n / (1024 * 1024)).toFixed(1)} MB`;
    }

    function deriveTitleFromName(name) {
        return String(name || 'Physics Textbook')
            .replace(/\.pdf$/i, '')
            .replace(/[_-]+/g, ' ')
            .trim() || 'Physics Textbook';
    }

    function deriveChapterFromName(name) {
        const m = String(name || '').match(/(?:^|[^a-z])(?:ch(?:apter)?[\s_-]*(\d+))/i);
        if (m) return `Chapter ${m[1]}`;
        if (/full|complete|whole/i.test(String(name || ''))) return 'Full Textbook';
        return 'General Chapters';
    }

    function isLocalHostEnv() {
        const h = (global.location && global.location.hostname || '').toLowerCase();
        return !h || h === 'localhost' || h === '127.0.0.1' || h === '[::1]' || h.endsWith('.local');
    }

    function getGitHubRepoInfo() {
        try {
            const host = (global.location.hostname || '').toLowerCase();
            if (!host.endsWith('.github.io')) return null;
            const owner = host.split('.')[0];
            const pathParts = (global.location.pathname || '/').split('/').filter(Boolean);
            const repo = pathParts.length > 0 ? pathParts[0] : `${owner}.github.io`;
            return { owner, repo };
        } catch (e) {
            return null;
        }
    }

    function isAdminUser() {
        try {
            if (state.canManage) return true;
            if (document.body && document.body.classList.contains('is-admin')) return true;
            if (global.WISAuth && typeof global.WISAuth.isAdmin === 'function' && global.WISAuth.isAdmin()) return true;
            if (global.WISAuth && typeof global.WISAuth.getRole === 'function' && global.WISAuth.getRole() === 'admin') return true;
            if (!state.backendAvailable && isLocalHostEnv()) return true;
        } catch (e) {}
        return false;
    }

    function getFilterState(grade) {
        if (!state.filterByGrade[grade]) {
            state.filterByGrade[grade] = {
                subject: 'All',
                chapter: 'All',
                query: ''
            };
        }
        return state.filterByGrade[grade];
    }

    function getUniqueValues(items, field, fallback) {
        const set = new Set();
        for (const item of items) {
            const val = String((item && item[field]) || fallback || '').trim();
            if (val) set.add(val);
        }
        return ['All', ...Array.from(set)];
    }

    // --------------------------------------------------------------------------
    // IndexedDB Offline Fallback (Isolated Per Grade)
    // --------------------------------------------------------------------------
    function openIdb() {
        return new Promise((resolve, reject) => {
            if (!global.indexedDB) {
                reject(new Error('IndexedDB not supported'));
                return;
            }
            const req = global.indexedDB.open(IDB_NAME, IDB_VERSION);
            req.onupgradeneeded = (ev) => {
                const db = ev.target.result;
                if (!db.objectStoreNames.contains(IDB_STORE)) {
                    const store = db.createObjectStore(IDB_STORE, { keyPath: 'id' });
                    store.createIndex('grade', 'grade', { unique: false });
                }
            };
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error || new Error('IndexedDB error'));
        });
    }

    async function idbListGrade(grade) {
        const db = await openIdb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, 'readonly');
            const req = tx.objectStore(IDB_STORE).index('grade').getAll(String(grade));
            req.onsuccess = () => resolve(Array.isArray(req.result) ? req.result : []);
            req.onerror = () => reject(req.error);
        });
    }

    async function idbGetById(id) {
        const db = await openIdb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, 'readonly');
            const req = tx.objectStore(IDB_STORE).get(id);
            req.onsuccess = () => resolve(req.result || null);
            req.onerror = () => reject(req.error);
        });
    }

    async function idbPutRecord(record) {
        const db = await openIdb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, 'readwrite');
            const req = tx.objectStore(IDB_STORE).put(record);
            req.onsuccess = () => resolve(record);
            req.onerror = () => reject(req.error);
        });
    }

    async function idbDeleteRecord(id) {
        const db = await openIdb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, 'readwrite');
            const req = tx.objectStore(IDB_STORE).delete(id);
            req.onsuccess = () => resolve(true);
            req.onerror = () => reject(req.error);
        });
    }

    // --------------------------------------------------------------------------
    // Data Discovery (Backend API / Static Catalog / GitHub API / IDB)
    // --------------------------------------------------------------------------
    async function checkCapabilities() {
        state.capabilitiesChecked = true;
        if (!global.location || !global.location.protocol.startsWith('http')) {
            state.backendAvailable = false;
            return;
        }
        try {
            const res = await fetch(resolveUrl('api/my-textbooks/capabilities'), {
                method: 'GET',
                credentials: 'include',
                cache: 'no-store'
            });
            if (res.ok) {
                const data = await res.json();
                if (data && data.success) {
                    state.backendAvailable = true;
                    state.canManage = Boolean(data.canManage);
                    return;
                }
            }
        } catch (e) {}
        state.backendAvailable = false;
    }

    async function fetchGithubFolderItems(grade) {
        const discovered = [];
        const gh = getGitHubRepoInfo();
        if (!gh) return discovered;
        try {
            const apiUrl = `https://api.github.com/repos/${gh.owner}/${gh.repo}/contents/my_textbooks/grade${grade}`;
            const res = await fetch(apiUrl, { method: 'GET', cache: 'no-store' });
            if (!res.ok) return discovered;
            const entries = await res.json();
            if (!Array.isArray(entries)) return discovered;
            for (const entry of entries) {
                if (!entry || entry.type !== 'file') continue;
                const name = String(entry.name || '');
                if (!name.toLowerCase().endsWith('.pdf')) continue;
                discovered.push({
                    id: `gh-mt-g${grade}-${name.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
                    grade: String(grade),
                    title: deriveTitleFromName(name),
                    subject: 'Physics',
                    chapter: deriveChapterFromName(name),
                    description: '',
                    originalName: name,
                    storedName: name,
                    url: `my_textbooks/grade${grade}/${encodeURIComponent(name)}`,
                    size: Number(entry.size) || 0,
                    source: 'folder'
                });
            }
        } catch (e) {}
        return discovered;
    }

    async function fetchLocalHttpDirItems(grade) {
        const discovered = [];
        if (!isLocalHostEnv() || !global.location.protocol.startsWith('http')) return discovered;
        try {
            const dirUrl = resolveUrl(`my_textbooks/grade${grade}/`);
            const res = await fetch(dirUrl, { method: 'GET', cache: 'no-store' });
            if (!res.ok) return discovered;
            const ct = (res.headers.get('content-type') || '').toLowerCase();
            if (!ct.includes('text/html')) return discovered;
            const html = await res.text();
            const doc = new DOMParser().parseFromString(html, 'text/html');
            const links = Array.from(doc.querySelectorAll('a[href]'));
            const seen = new Set();
            for (const a of links) {
                const href = a.getAttribute('href') || '';
                if (!href || href.startsWith('?') || href.startsWith('#') || href.endsWith('/')) continue;
                const decodedName = decodeURIComponent(href.split('/').pop().split('?')[0]);
                if (!decodedName.toLowerCase().endsWith('.pdf') || seen.has(decodedName)) continue;
                seen.add(decodedName);
                discovered.push({
                    id: `dir-mt-g${grade}-${decodedName.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
                    grade: String(grade),
                    title: deriveTitleFromName(decodedName),
                    subject: 'Physics',
                    chapter: deriveChapterFromName(decodedName),
                    description: '',
                    originalName: decodedName,
                    storedName: decodedName,
                    url: `my_textbooks/grade${grade}/${encodeURIComponent(decodedName)}`,
                    size: 0,
                    source: 'folder'
                });
            }
        } catch (e) {}
        return discovered;
    }

    async function fetchStaticFolderCatalog(grade) {
        let catalogItems = [];
        try {
            const url = resolveUrl(`my_textbooks/grade${grade}/catalog.json?t=${Date.now()}`);
            const res = await fetch(url, { method: 'GET', cache: 'no-store' });
            if (res.ok) {
                const data = await res.json();
                if (data && Array.isArray(data.textbooks)) {
                    catalogItems = data.textbooks
                        .filter(item => item && String(item.grade) === String(grade) && item.url)
                        .map(item => ({ ...item, source: 'folder' }));
                }
            }
        } catch (e) {}

        let autoItems = await fetchGithubFolderItems(grade);
        if (autoItems.length === 0) {
            autoItems = await fetchLocalHttpDirItems(grade);
        }
        if (autoItems.length === 0) {
            if (catalogItems.length > 0) return catalogItems;
            const bundled = global.MY_TEXTBOOKS_CATALOG && global.MY_TEXTBOOKS_CATALOG[String(grade)];
            if (Array.isArray(bundled)) {
                return bundled
                    .filter(item => item && String(item.grade) === String(grade) && item.url)
                    .map(item => ({ ...item, source: 'folder' }));
            }
            return [];
        }

        const catalogByUrl = new Map(catalogItems.map(item => [decodeURIComponent(item.url), item]));
        const merged = [];
        const usedUrls = new Set();

        for (const item of autoItems) {
            const decodedUrl = decodeURIComponent(item.url);
            usedUrls.add(decodedUrl);
            const meta = catalogByUrl.get(decodedUrl);
            merged.push(meta ? { ...item, ...meta, url: item.url, size: item.size || meta.size || 0 } : item);
        }
        for (const item of catalogItems) {
            const decodedUrl = decodeURIComponent(item.url);
            if (!usedUrls.has(decodedUrl)) merged.push(item);
        }
        return merged;
    }

    async function fetchTextbooksForGrade(grade) {
        const g = normalizeGrade(grade);
        if (!g) return [];
        state.loadingGrade[g] = true;

        if (!state.capabilitiesChecked) {
            await checkCapabilities();
        }

        try {
            if (state.backendAvailable) {
                const res = await fetch(resolveUrl(`api/my-textbooks?grade=${encodeURIComponent(g)}`), {
                    method: 'GET',
                    credentials: 'include',
                    cache: 'no-store'
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data && Array.isArray(data.textbooks)) {
                        state.itemsByGrade[g] = data.textbooks
                            .filter(item => item && String(item.grade) === g)
                            .map(item => ({ ...item, source: 'server-folder' }));
                        if (typeof data.canManage === 'boolean') {
                            state.canManage = data.canManage || state.canManage;
                        }
                        return state.itemsByGrade[g];
                    }
                }
            }

            const folderItems = await fetchStaticFolderCatalog(g);
            let localItems = [];
            try {
                localItems = await idbListGrade(g);
            } catch (e) {
                localItems = [];
            }

            const cleanLocal = localItems.map(item => {
                const copy = { ...item, source: 'idb' };
                delete copy.fileData;
                return copy;
            });

            const folderIds = new Set(folderItems.map(item => item.id));
            state.itemsByGrade[g] = [
                ...folderItems,
                ...cleanLocal.filter(item => !folderIds.has(item.id))
            ];
            return state.itemsByGrade[g];
        } catch (e) {
            state.itemsByGrade[g] = state.itemsByGrade[g] || [];
            return state.itemsByGrade[g];
        } finally {
            state.loadingGrade[g] = false;
        }
    }

    // --------------------------------------------------------------------------
    // Admin Upload / Replace / Update / Delete Operations
    // --------------------------------------------------------------------------
    async function uploadTextbookFile(grade, file, meta) {
        const g = normalizeGrade(grade);
        if (!g) throw new Error('My Textbook supports Grades 9–12 only.');
        if (!file) throw new Error('Please choose a PDF file.');
        if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
            throw new Error('Only PDF (.pdf) files are supported.');
        }
        if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
            throw new Error(`PDF exceeds ${MAX_UPLOAD_MB} MB limit.`);
        }

        if (!state.capabilitiesChecked) await checkCapabilities();

        const title = (meta.title || '').trim() || deriveTitleFromName(file.name);
        const subject = (meta.subject || '').trim() || 'Physics';
        const chapter = (meta.chapter || '').trim() || deriveChapterFromName(file.name);
        const description = (meta.description || '').trim();

        if (state.backendAvailable) {
            const buf = await file.arrayBuffer();
            const qs = new URLSearchParams({
                grade: g,
                filename: file.name,
                title,
                subject,
                chapter,
                description
            });
            const res = await fetch(resolveUrl(`api/my-textbooks/upload?${qs.toString()}`), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/pdf' },
                body: buf
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.success) {
                throw new Error(data.message || data.error || `Upload failed (${res.status})`);
            }
            await fetchTextbooksForGrade(g);
            return data.textbook;
        }

        const buf = await file.arrayBuffer();
        const id = `local-mt-${g}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const now = new Date().toISOString();
        const record = {
            id,
            grade: g,
            title,
            subject,
            chapter,
            description,
            originalName: file.name,
            storedName: file.name,
            size: file.size,
            createdAt: now,
            updatedAt: now,
            source: 'idb',
            fileData: buf
        };
        await idbPutRecord(record);
        await fetchTextbooksForGrade(g);
        return record;
    }

    async function replaceTextbookFile(grade, id, file, meta) {
        const g = normalizeGrade(grade);
        if (!g || !id) throw new Error('Missing textbook reference.');
        if (!file) throw new Error('Please choose a replacement PDF file.');
        if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
            throw new Error('Only PDF (.pdf) files are supported.');
        }

        const existing = (state.itemsByGrade[g] || []).find(item => item.id === id);

        if (state.backendAvailable && existing && existing.source !== 'idb') {
            const buf = await file.arrayBuffer();
            const qs = new URLSearchParams({
                grade: g,
                id,
                filename: file.name,
                title: (meta.title || '').trim(),
                subject: (meta.subject || '').trim(),
                chapter: (meta.chapter || '').trim(),
                description: (meta.description || '').trim()
            });
            const res = await fetch(resolveUrl(`api/my-textbooks/replace?${qs.toString()}`), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/pdf' },
                body: buf
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.success) {
                throw new Error(data.message || data.error || `Replace failed (${res.status})`);
            }
            await fetchTextbooksForGrade(g);
            return data.textbook;
        }

        const buf = await file.arrayBuffer();
        const currentIdb = await idbGetById(id);
        const now = new Date().toISOString();
        const updated = {
            ...(currentIdb || existing || {}),
            id,
            grade: g,
            title: (meta.title || '').trim() || deriveTitleFromName(file.name),
            subject: (meta.subject || '').trim() || 'Physics',
            chapter: (meta.chapter || '').trim() || deriveChapterFromName(file.name),
            description: (meta.description || '').trim(),
            originalName: file.name,
            storedName: file.name,
            size: file.size,
            updatedAt: now,
            createdAt: (currentIdb && currentIdb.createdAt) || now,
            source: 'idb',
            fileData: buf
        };
        await idbPutRecord(updated);
        await fetchTextbooksForGrade(g);
        return updated;
    }

    async function updateTextbookMetadata(grade, id, meta) {
        const g = normalizeGrade(grade);
        if (!g || !id) throw new Error('Missing textbook reference.');
        const existing = (state.itemsByGrade[g] || []).find(item => item.id === id);

        if (state.backendAvailable && existing && existing.source !== 'idb') {
            const res = await fetch(resolveUrl('api/my-textbooks/update'), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    grade: g,
                    id,
                    title: (meta.title || '').trim(),
                    subject: (meta.subject || '').trim(),
                    chapter: (meta.chapter || '').trim(),
                    description: (meta.description || '').trim()
                })
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.success) {
                throw new Error(data.message || data.error || `Update failed (${res.status})`);
            }
            await fetchTextbooksForGrade(g);
            return data.textbook;
        }

        const currentIdb = await idbGetById(id);
        if (!currentIdb) {
            throw new Error('Static folder textbooks can only be updated while running the Node server.');
        }
        const updated = {
            ...currentIdb,
            title: (meta.title || '').trim() || currentIdb.title,
            subject: (meta.subject || '').trim() || currentIdb.subject || 'Physics',
            chapter: (meta.chapter || '').trim() || currentIdb.chapter,
            description: (meta.description || '').trim(),
            updatedAt: new Date().toISOString()
        };
        await idbPutRecord(updated);
        await fetchTextbooksForGrade(g);
        return updated;
    }

    async function deleteTextbookItem(grade, id) {
        const g = normalizeGrade(grade);
        if (!g || !id) return;
        const existing = (state.itemsByGrade[g] || []).find(item => item.id === id);

        if (state.backendAvailable && existing && existing.source !== 'idb') {
            const res = await fetch(resolveUrl('api/my-textbooks/delete'), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ grade: g, id })
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.success) {
                throw new Error(data.message || data.error || `Delete failed (${res.status})`);
            }
        } else {
            await idbDeleteRecord(id);
        }

        if (state.reader.itemId === id) {
            cleanupReaderSession();
            state.reader.itemId = null;
        }
        if (state.selectedIdByGrade[g] === id) {
            delete state.selectedIdByGrade[g];
        }
        await fetchTextbooksForGrade(g);
    }

    // --------------------------------------------------------------------------
    // Ebook-Consistent PDF.js Viewer Lifecycle
    // --------------------------------------------------------------------------
    function ensurePdfJsWorker(pdfjs) {
        if (!pdfjs || !pdfjs.GlobalWorkerOptions) return;
        const ver = pdfjs.version || '3.11.174';
        const cdnWorker = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${ver}/pdf.worker.min.js`;
        const existingSrc = pdfjs.GlobalWorkerOptions.workerSrc || '';
        if (existingSrc.startsWith('blob:')) return;

        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        if (isIOS) {
            pdfjs.GlobalWorkerOptions.workerSrc = cdnWorker;
            return;
        }
        if (cachedWorkerBlobUrl) {
            pdfjs.GlobalWorkerOptions.workerSrc = cachedWorkerBlobUrl;
            return;
        }
        try {
            const blob = new Blob([`importScripts("${cdnWorker}");`], { type: 'application/javascript' });
            cachedWorkerBlobUrl = URL.createObjectURL(blob);
            pdfjs.GlobalWorkerOptions.workerSrc = cachedWorkerBlobUrl;
        } catch (e) {
            pdfjs.GlobalWorkerOptions.workerSrc = cdnWorker;
        }
    }

    function fetchPdfArrayBuffer(url, useCredentials) {
        return new Promise((resolve, reject) => {
            function tryXhr() {
                try {
                    const xhr = new XMLHttpRequest();
                    xhr.open('GET', url, true);
                    xhr.responseType = 'arraybuffer';
                    if (useCredentials) xhr.withCredentials = true;
                    xhr.onload = () => {
                        if (((xhr.status >= 200 && xhr.status < 300) || xhr.status === 0) && xhr.response && xhr.response.byteLength > 100) {
                            resolve(xhr.response);
                        } else {
                            reject(new Error(`HTTP/XHR ${xhr.status || 0}`));
                        }
                    };
                    xhr.onerror = () => reject(new Error('Network/CORS error loading PDF'));
                    xhr.send();
                } catch (e) {
                    reject(e);
                }
            }

            if (typeof fetch === 'function' && !(global.location && global.location.protocol === 'file:')) {
                fetch(url, {
                    method: 'GET',
                    credentials: useCredentials ? 'include' : 'same-origin',
                    cache: 'no-store'
                }).then(res => {
                    if (!res.ok) throw new Error(`HTTP ${res.status}`);
                    return res.arrayBuffer();
                }).then(buf => {
                    if (buf && buf.byteLength > 100) resolve(buf);
                    else throw new Error('Empty PDF payload');
                }).catch(() => tryXhr());
            } else {
                tryXhr();
            }
        });
    }

    function cleanupReaderSession() {
        state.reader.generation += 1;
        if (state.reader.observer) {
            try { state.reader.observer.disconnect(); } catch (e) {}
            state.reader.observer = null;
        }
        Object.values(state.reader.activeTasks).forEach(t => {
            try { if (t && typeof t.cancel === 'function') t.cancel(); } catch (e) {}
        });
        state.reader.activeTasks = {};
        state.reader.renderedPages.clear();

        while (state.reader.cleanups.length) {
            const fn = state.reader.cleanups.pop();
            try { fn(); } catch (e) {}
        }

        if (state.reader.pdfDoc) {
            try { state.reader.pdfDoc.destroy(); } catch (e) {}
            state.reader.pdfDoc = null;
        }
        state.reader.numPages = 0;
        document.body.classList.remove('pdf-modal-open');
    }

    async function initReader(grade, item) {
        const g = normalizeGrade(grade);
        if (!g || !item) return;

        cleanupReaderSession();
        const gen = ++state.reader.generation;
        state.reader.grade = g;
        state.reader.itemId = item.id;

        const wrapper = document.getElementById('mt-pdf-viewer-wrapper');
        const scrollContainer = document.getElementById('mt-pdf-scroll-container');
        const mount = document.getElementById('mt-pdf-pages-mount');
        const mainLoading = document.getElementById('mt-pdf-loading-card');
        const loadingStatus = document.getElementById('mt-pdf-loading-status');
        const totalPagesEl = document.getElementById('mt-pdf-total-pages');
        const pageInput = document.getElementById('mt-pdf-page-input');
        const zoomLabel = document.getElementById('mt-pdf-zoom-label');
        const prevBtn = document.getElementById('mt-pdf-prev-btn');
        const nextBtn = document.getElementById('mt-pdf-next-btn');
        const zoomInBtn = document.getElementById('mt-pdf-zoom-in-btn');
        const zoomOutBtn = document.getElementById('mt-pdf-zoom-out-btn');
        const fitWidthBtn = document.getElementById('mt-pdf-fit-width-btn');
        const fsBtn = document.getElementById('mt-pdf-fullscreen-btn');
        const fsIcon = document.getElementById('mt-pdf-fs-icon');
        const fsText = document.getElementById('mt-pdf-fs-text');
        const topFsBtn = document.getElementById('mt-fullscreen-action-btn');
        const floatingExitBtn = document.getElementById('mt-pdf-floating-exit-btn');

        if (!wrapper || !scrollContainer || !mount) return;
        if (loadingStatus) loadingStatus.textContent = 'Loading My Textbook pages...';

        function regListener(target, type, fn, opts) {
            if (!target) return;
            target.addEventListener(type, fn, opts);
            state.reader.cleanups.push(() => {
                try { target.removeEventListener(type, fn, opts); } catch (e) {}
            });
        }

        try {
            const pdfjs = global.pdfjsLib || global['pdfjs-dist/build/pdf'] || global.PDFJS;
            if (!pdfjs) throw new Error('PDF viewer engine (PDF.js) is still loading.');
            ensurePdfJsWorker(pdfjs);

            const ver = pdfjs.version || '3.11.174';
            const cMapUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${ver}/cmaps/`;
            const standardFontDataUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${ver}/standard_fonts/`;

            let pdfDoc = null;
            let lastErr = null;

            if (item.source === 'idb') {
                const rec = await idbGetById(item.id);
                if (!rec || !rec.fileData) throw new Error('Textbook binary not found in browser storage.');
                const bytes = new Uint8Array(rec.fileData.slice(0));
                try {
                    pdfDoc = await pdfjs.getDocument({
                        data: bytes,
                        cMapUrl,
                        cMapPacked: true,
                        standardFontDataUrl,
                        useSystemFonts: true,
                        disableWorker: false
                    }).promise;
                } catch (eWorker) {
                    pdfDoc = await pdfjs.getDocument({
                        data: bytes.slice(0),
                        cMapUrl,
                        cMapPacked: true,
                        standardFontDataUrl,
                        useSystemFonts: true,
                        disableWorker: true
                    }).promise;
                }
            } else {
                const candidates = [];
                if (state.backendAvailable && item.source === 'server-folder') {
                    candidates.push(resolveUrl(`api/my-textbooks/file/${encodeURIComponent(g)}/${encodeURIComponent(item.id)}`));
                }
                if (item.url) {
                    const u = resolveUrl(item.url);
                    if (!candidates.includes(u)) candidates.push(u);
                }

                // Tier 1: HTTP Range Streaming
                if (global.location && global.location.protocol.startsWith('http')) {
                    for (const u of candidates) {
                        if (gen !== state.reader.generation) return;
                        try {
                            pdfDoc = await pdfjs.getDocument({
                                url: u,
                                withCredentials: state.backendAvailable,
                                cMapUrl,
                                cMapPacked: true,
                                standardFontDataUrl,
                                useSystemFonts: true,
                                rangeChunkSize: 65536 * 4,
                                disableAutoFetch: false,
                                disableStream: false,
                                disableWorker: false
                            }).promise;
                            if (pdfDoc) break;
                        } catch (e1) {
                            lastErr = e1;
                        }
                    }
                }

                // Tier 2 & 3: Direct ArrayBuffer + Blob Worker / disableWorker: true fallback
                if (!pdfDoc) {
                    for (const u of candidates) {
                        if (gen !== state.reader.generation) return;
                        try {
                            const buf = await fetchPdfArrayBuffer(u, state.backendAvailable);
                            if (gen !== state.reader.generation) return;
                            try {
                                pdfDoc = await pdfjs.getDocument({
                                    data: new Uint8Array(buf),
                                    cMapUrl,
                                    cMapPacked: true,
                                    standardFontDataUrl,
                                    useSystemFonts: true,
                                    disableWorker: false
                                }).promise;
                            } catch (eWorker) {
                                pdfDoc = await pdfjs.getDocument({
                                    data: new Uint8Array(buf),
                                    cMapUrl,
                                    cMapPacked: true,
                                    standardFontDataUrl,
                                    useSystemFonts: true,
                                    disableWorker: true
                                }).promise;
                            }
                            if (pdfDoc) break;
                        } catch (e2) {
                            lastErr = e2;
                        }
                    }
                }
            }

            if (!pdfDoc) throw lastErr || new Error('Unable to load textbook PDF.');
            if (gen !== state.reader.generation) {
                try { pdfDoc.destroy(); } catch (e) {}
                return;
            }

            state.reader.pdfDoc = pdfDoc;
            state.reader.numPages = pdfDoc.numPages;

            if (totalPagesEl) totalPagesEl.textContent = pdfDoc.numPages;
            if (pageInput) {
                pageInput.max = pdfDoc.numPages;
                pageInput.value = 1;
            }

            const firstPage = await pdfDoc.getPage(1);
            if (gen !== state.reader.generation) return;

            const unscaled = firstPage.getViewport({ scale: 1.0 });
            const baseW = unscaled.width;
            const baseH = unscaled.height;
            state.reader.baseW = baseW;
            state.reader.baseH = baseH;

            function getOptimalFitScale() {
                const rect = scrollContainer ? scrollContainer.getBoundingClientRect() : null;
                const availW = Math.max((rect && rect.width) ? rect.width : (global.innerWidth || 800), 280);
                const pad = availW < 640 ? 16 : 48;
                const fit = (availW - pad) / baseW;
                return Math.min(Math.max(fit, 0.35), 2.2);
            }

            let currentScale = getOptimalFitScale();
            state.reader.currentScale = currentScale;
            if (zoomLabel) zoomLabel.textContent = `${Math.round(currentScale * 100)}%`;

            mount.innerHTML = '';
            const frag = document.createDocumentFragment();
            for (let p = 1; p <= pdfDoc.numPages; p++) {
                const card = document.createElement('div');
                card.className = 'pdf-page-card';
                card.id = `mt-pdf-page-${p}`;
                card.dataset.page = String(p);
                card.style.width = `${Math.floor(baseW * currentScale)}px`;
                card.style.height = `${Math.floor(baseH * currentScale)}px`;
                card.innerHTML = `
                    <div class="pdf-loading-card" style="position:absolute;inset:0;">
                        <i class="fa-solid fa-circle-notch fa-spin"></i>
                        <span>Rendering Page ${p}...</span>
                    </div>
                    <canvas class="pdf-page-canvas" style="display:none;pointer-events:none;"></canvas>
                    <div class="pdf-page-number-badge">${p} / ${pdfDoc.numPages}</div>
                `;
                frag.appendChild(card);
            }
            mount.appendChild(frag);
            if (mainLoading) mainLoading.style.display = 'none';

            async function renderPage(pNum) {
                if (gen !== state.reader.generation || !state.reader.pdfDoc) return;
                if (state.reader.renderedPages.has(pNum)) return;

                const card = document.getElementById(`mt-pdf-page-${pNum}`);
                if (!card) return;
                const canvas = card.querySelector('.pdf-page-canvas');
                const ph = card.querySelector('.pdf-loading-card');

                if (state.reader.activeTasks[pNum]) {
                    try { state.reader.activeTasks[pNum].cancel(); } catch (e) {}
                }

                try {
                    const page = await state.reader.pdfDoc.getPage(pNum);
                    if (gen !== state.reader.generation) return;

                    const dpr = Math.min(global.devicePixelRatio || 1, 2.5);
                    const pVp1 = page.getViewport({ scale: 1.0 });
                    card.dataset.baseW = String(pVp1.width);
                    card.dataset.baseH = String(pVp1.height);
                    const cssVp = page.getViewport({ scale: currentScale });
                    const hiVp = page.getViewport({ scale: currentScale * dpr });
                    const isReRender = canvas.dataset.hasRender === '1' && canvas.width > 0 && canvas.style.display !== 'none';
                    const targetCanvas = isReRender ? document.createElement('canvas') : canvas;

                    card.style.width = `${Math.floor(cssVp.width)}px`;
                    card.style.height = `${Math.floor(cssVp.height)}px`;
                    targetCanvas.width = Math.floor(hiVp.width);
                    targetCanvas.height = Math.floor(hiVp.height);
                    canvas.style.width = '100%';
                    canvas.style.height = 'auto';

                    const ctx = targetCanvas.getContext('2d', { alpha: false });
                    ctx.fillStyle = '#ffffff';
                    ctx.fillRect(0, 0, targetCanvas.width, targetCanvas.height);

                    const task = page.render({ canvasContext: ctx, viewport: hiVp });
                    state.reader.activeTasks[pNum] = task;
                    await task.promise;

                    if (gen !== state.reader.generation) return;
                    if (isReRender && global.WISPdfViewport) {
                        global.WISPdfViewport.blitCanvas(canvas, targetCanvas);
                    }
                    canvas.dataset.hasRender = '1';
                    canvas.style.display = 'block';
                    if (ph) ph.style.display = 'none';
                    state.reader.renderedPages.add(pNum);
                } catch (err) {
                    if (!err || err.name !== 'RenderingCancelledException') {
                        console.warn(`My Textbook page ${pNum} render warning:`, err);
                    }
                }
            }

            if ('IntersectionObserver' in global) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && gen === state.reader.generation) {
                            const p = parseInt(entry.target.dataset.page, 10);
                            if (p) renderPage(p);
                        }
                    });
                }, { root: scrollContainer, rootMargin: '800px 0px', threshold: 0.01 });
                state.reader.observer = observer;
                mount.querySelectorAll('.pdf-page-card').forEach(c => observer.observe(c));
            } else {
                for (let i = 1; i <= Math.min(pdfDoc.numPages, 4); i++) renderPage(i);
            }

            renderPage(1);
            if (pdfDoc.numPages >= 2) renderPage(2);

            let scrollTimer = null;
            regListener(scrollContainer, 'scroll', () => {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    if (gen !== state.reader.generation) return;
                    const cards = mount.querySelectorAll('.pdf-page-card');
                    const sTop = scrollContainer.getBoundingClientRect().top;
                    let closest = 1;
                    let bestDiff = Infinity;
                    cards.forEach(c => {
                        const diff = Math.abs(c.getBoundingClientRect().top - sTop);
                        if (diff < bestDiff) {
                            bestDiff = diff;
                            closest = parseInt(c.dataset.page, 10) || closest;
                        }
                    });
                    if (pageInput && document.activeElement !== pageInput) pageInput.value = closest;
                }, 60);
            }, { passive: true });

            function scrollToPage(p) {
                const clamped = Math.min(Math.max(p, 1), pdfDoc.numPages);
                const card = document.getElementById(`mt-pdf-page-${clamped}`);
                if (card) {
                    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    if (pageInput) pageInput.value = clamped;
                    renderPage(clamped);
                    if (clamped < pdfDoc.numPages) renderPage(clamped + 1);
                    if (clamped > 1) renderPage(clamped - 1);
                }
            }

            if (prevBtn) regListener(prevBtn, 'click', () => {
                const cur = parseInt(pageInput.value, 10) || 1;
                scrollToPage(cur - 1);
            });
            if (nextBtn) regListener(nextBtn, 'click', () => {
                const cur = parseInt(pageInput.value, 10) || 1;
                scrollToPage(cur + 1);
            });
            if (pageInput) regListener(pageInput, 'change', () => {
                scrollToPage(parseInt(pageInput.value, 10) || 1);
            });

            let lastFitScale = currentScale;
            let viewportCtrl = null;

            function flushVisiblePages() {
                if (gen !== state.reader.generation) return;
                const cur = parseInt(pageInput.value, 10) || 1;
                if (global.WISPdfViewport) {
                    global.WISPdfViewport.renderVisibleCards(scrollContainer, '.pdf-page-card', renderPage, cur, pdfDoc.numPages, 550);
                } else {
                    renderPage(cur);
                    if (cur < pdfDoc.numPages) renderPage(cur + 1);
                    if (cur > 1) renderPage(cur - 1);
                }
            }

            function applyZoom(newScale, zoomMeta) {
                if (gen !== state.reader.generation) return;
                const vpc = global.WISPdfViewport;
                const anchor = (zoomMeta && zoomMeta.anchor)
                    || (vpc && vpc.captureAnchor(scrollContainer, '.pdf-page-card', zoomMeta && zoomMeta.clientX, zoomMeta && zoomMeta.clientY))
                    || null;

                currentScale = Math.min(Math.max(newScale, 0.35), 3.0);
                state.reader.currentScale = currentScale;
                if (zoomLabel) zoomLabel.textContent = `${Math.round(currentScale * 100)}%`;

                Object.values(state.reader.activeTasks).forEach(t => {
                    try { t.cancel(); } catch (e) {}
                });
                state.reader.renderedPages.clear();

                mount.querySelectorAll('.pdf-page-card').forEach(c => {
                    const box = vpc && vpc.computeCardBox
                        ? vpc.computeCardBox(c, baseW, baseH, currentScale)
                        : { width: Math.floor(baseW * currentScale), height: Math.floor(baseH * currentScale) };
                    c.style.width = `${box.width}px`;
                    c.style.height = `${box.height}px`;
                    const cv = c.querySelector('.pdf-page-canvas');
                    const hasCanvas = cv && cv.dataset.hasRender === '1' && cv.width > 0;
                    if (cv) {
                        cv.style.width = '100%';
                        cv.style.height = 'auto';
                        cv.style.display = hasCanvas ? 'block' : 'none';
                    }
                    const ph = c.querySelector('.pdf-loading-card');
                    if (ph) ph.style.display = hasCanvas ? 'none' : 'flex';
                });

                if (vpc && anchor) {
                    vpc.restoreAnchor(scrollContainer, anchor);
                }

                if (!zoomMeta || !zoomMeta.quickResize) {
                    flushVisiblePages();
                }
            }

            function applyWidthChangePreservingZoom(anchor) {
                if (gen !== state.reader.generation || !scrollContainer || !baseW) return;
                const newFit = getOptimalFitScale();
                const wasAtFit = Math.abs(currentScale - lastFitScale) < 0.08;
                const nextScale = wasAtFit
                    ? newFit
                    : currentScale * (newFit / Math.max(0.1, lastFitScale));
                lastFitScale = newFit;
                applyZoom(nextScale, { anchor: anchor });
            }

            if (zoomInBtn) regListener(zoomInBtn, 'click', () => applyZoom(currentScale + 0.15));
            if (zoomOutBtn) regListener(zoomOutBtn, 'click', () => applyZoom(currentScale - 0.15));
            if (fitWidthBtn) regListener(fitWidthBtn, 'click', () => {
                const newFit = getOptimalFitScale();
                lastFitScale = newFit;
                applyZoom(newFit);
            });

            if (global.WISPdfViewport) {
                viewportCtrl = global.WISPdfViewport.attach({
                    scrollContainer: scrollContainer,
                    contentTarget: mount,
                    cardSelector: '.pdf-page-card',
                    minScale: 0.35,
                    maxScale: 3.0,
                    getScale: () => currentScale,
                    onPreviewScale: (cand) => {
                        if (zoomLabel) zoomLabel.textContent = `${Math.round(cand * 100)}%`;
                    },
                    onApplyZoom: (nextScale, zoomMeta) => applyZoom(nextScale, zoomMeta),
                    onFlushRender: flushVisiblePages,
                    onWidthChange: (newW, prevW, anchor) => applyWidthChangePreservingZoom(anchor)
                });
                state.reader.cleanups.push(() => {
                    if (viewportCtrl) {
                        viewportCtrl.destroy();
                        viewportCtrl = null;
                    }
                });
            }

            // Fullscreen Management (matching Ebook section)
            function toggleFullscreen(forceState) {
                const isActive = wrapper.classList.contains('pdf-fullscreen-active');
                const target = typeof forceState === 'boolean' ? forceState : !isActive;
                const fsAnchor = global.WISPdfViewport ? global.WISPdfViewport.captureAnchor(scrollContainer, '.pdf-page-card') : null;
                if (target) {
                    wrapper.classList.add('pdf-fullscreen-active');
                    document.body.classList.add('pdf-modal-open');
                    if (fsIcon) fsIcon.className = 'fa-solid fa-xmark';
                    if (fsText) fsText.textContent = 'Exit Fullscreen';
                    if (fsBtn) fsBtn.classList.add('pdf-btn-exit-fullscreen');
                    if (topFsBtn) {
                        topFsBtn.classList.add('pdf-btn-exit-fullscreen');
                        topFsBtn.innerHTML = '<i class="fa-solid fa-xmark"></i> <span>Exit Fullscreen</span>';
                    }
                    try {
                        const reqFs = wrapper.requestFullscreen || wrapper.webkitRequestFullscreen;
                        if (reqFs && !document.fullscreenElement && !document.webkitFullscreenElement) {
                            const p = reqFs.call(wrapper);
                            if (p && p.catch) p.catch(() => {});
                        }
                    } catch (e) {}
                    setTimeout(() => {
                        applyWidthChangePreservingZoom(fsAnchor);
                        if (viewportCtrl) viewportCtrl.resetWidthTracking();
                    }, 120);
                } else {
                    wrapper.classList.remove('pdf-fullscreen-active');
                    document.body.classList.remove('pdf-modal-open');
                    if (fsIcon) fsIcon.className = 'fa-solid fa-expand';
                    if (fsText) fsText.textContent = 'Fullscreen';
                    if (fsBtn) fsBtn.classList.remove('pdf-btn-exit-fullscreen');
                    if (topFsBtn) {
                        topFsBtn.classList.remove('pdf-btn-exit-fullscreen');
                        topFsBtn.innerHTML = '<i class="fa-solid fa-expand"></i> <span>Fullscreen Reading View</span>';
                    }
                    try {
                        const exitFs = document.exitFullscreen || document.webkitExitFullscreen;
                        if ((document.fullscreenElement || document.webkitFullscreenElement) && exitFs) {
                            const p2 = exitFs.call(document);
                            if (p2 && p2.catch) p2.catch(() => {});
                        }
                    } catch (e) {}
                    setTimeout(() => {
                        applyWidthChangePreservingZoom(fsAnchor);
                        if (viewportCtrl) viewportCtrl.resetWidthTracking();
                    }, 120);
                }
            }

            if (fsBtn) regListener(fsBtn, 'click', () => toggleFullscreen());
            if (topFsBtn) regListener(topFsBtn, 'click', () => toggleFullscreen());
            if (floatingExitBtn) regListener(floatingExitBtn, 'click', () => toggleFullscreen(false));

            const onNativeFsChange = () => {
                if (gen !== state.reader.generation) return;
                const isNativeFs = Boolean(document.fullscreenElement || document.webkitFullscreenElement);
                if (!isNativeFs && wrapper.classList.contains('pdf-fullscreen-active')) {
                    toggleFullscreen(false);
                } else if (isNativeFs && wrapper.classList.contains('pdf-fullscreen-active')) {
                    requestAnimationFrame(() => {
                        if (gen !== state.reader.generation) return;
                        applyWidthChangePreservingZoom(null);
                        if (viewportCtrl) viewportCtrl.resetWidthTracking();
                    });
                }
            };
            regListener(document, 'fullscreenchange', onNativeFsChange);
            regListener(document, 'webkitfullscreenchange', onNativeFsChange);

            regListener(global, 'keydown', (e) => {
                const tabPane = document.getElementById('tab-my-textbook');
                if (!tabPane || tabPane.classList.contains('hidden')) return;
                if (e.key === 'Escape' && wrapper.classList.contains('pdf-fullscreen-active')) {
                    toggleFullscreen(false);
                } else if (document.activeElement !== pageInput && !/input|textarea|select/i.test((document.activeElement && document.activeElement.tagName) || '')) {
                    if (e.key === 'ArrowRight' || e.key === 'PageDown') {
                        const cur = parseInt(pageInput.value, 10) || 1;
                        if (cur < pdfDoc.numPages) scrollToPage(cur + 1);
                    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                        const cur = parseInt(pageInput.value, 10) || 1;
                        if (cur > 1) scrollToPage(cur - 1);
                    }
                }
            });

            // Deterrents matching existing Ebook viewer (no forced download/copy)
            const preventAction = (e) => { e.preventDefault(); return false; };
            regListener(wrapper, 'contextmenu', preventAction);
            regListener(wrapper, 'copy', preventAction);
            regListener(wrapper, 'cut', preventAction);
            regListener(wrapper, 'selectstart', preventAction);
            regListener(wrapper, 'dragstart', preventAction);
        } catch (err) {
            if (gen !== state.reader.generation) return;
            if (mainLoading) {
                const isFile = Boolean(global.location && global.location.protocol === 'file:');
                const openUrl = item.url ? resolveUrl(item.url) : '';
                mainLoading.style.display = 'flex';
                mainLoading.innerHTML = `
                    <i class="fa-solid fa-file-circle-exclamation" style="font-size:2rem;color:#fbbf24;"></i>
                    <span style="font-weight:700;">${isFile ? 'Open via Preview_Website_Locally.bat (http://localhost:3000)' : escapeHtml((err && err.message) || 'Unable to load textbook PDF.')}</span>
                    ${openUrl ? `<a href="${escapeHtml(openUrl)}" target="_blank" rel="noopener noreferrer" class="mt-btn mt-btn-primary" style="text-decoration:none;margin-top:0.5rem;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open PDF Directly</a>` : ''}
                `;
            }
        }
    }

    // --------------------------------------------------------------------------
    // Admin Modal (Upload / Replace / Edit)
    // --------------------------------------------------------------------------
    function openModal(mode, itemOpt) {
        const g = state.activeGrade;
        if (!g) return;
        state.modalState = {
            mode,
            grade: g,
            item: itemOpt || null,
            file: null,
            files: [],
            progressText: '',
            submitting: false,
            error: ''
        };
        renderModal();
    }

    function closeModal() {
        state.modalState = null;
        const root = document.getElementById('mt-modal-root');
        if (root) root.innerHTML = '';
    }

    function renderModal() {
        const root = document.getElementById('mt-modal-root');
        if (!root) return;
        const ms = state.modalState;
        if (!ms) {
            root.innerHTML = '';
            return;
        }

        const isEdit = ms.mode === 'edit';
        const isReplace = ms.mode === 'replace';
        const isUpload = ms.mode === 'upload';
        const selectedFiles = (ms.files && ms.files.length) ? ms.files : (ms.file ? [ms.file] : []);
        const isMulti = isUpload && selectedFiles.length > 1;

        const heading = isEdit
            ? `Edit Textbook Details (Grade ${ms.grade})`
            : isReplace
                ? `Replace Textbook PDF (Grade ${ms.grade})`
                : `Upload Physics Textbooks (Grade ${ms.grade})`;

        const curTitle = ms.item ? ms.item.title : (selectedFiles.length === 1 ? deriveTitleFromName(selectedFiles[0].name) : '');
        const curSubject = ms.item ? (ms.item.subject || 'Physics') : 'Physics';
        const curChapter = ms.item ? (ms.item.chapter || 'General Chapters') : (selectedFiles.length === 1 ? deriveChapterFromName(selectedFiles[0].name) : '');
        const curDesc = ms.item ? (ms.item.description || '') : '';

        const dropLabelHtml = selectedFiles.length === 0
            ? (isUpload
                ? 'Click or drop <strong>one or multiple PDF textbooks</strong> here (up to 150 MB each)'
                : 'Click or drop a PDF file here (up to 150 MB)')
            : selectedFiles.length === 1
                ? `<strong>${escapeHtml(selectedFiles[0].name)}</strong> (${formatBytes(selectedFiles[0].size)})`
                : `<strong>${selectedFiles.length} PDF files selected</strong>
                   <div style="margin-top:0.4rem;font-size:0.78rem;text-align:left;max-height:110px;overflow:auto;background:#ffffff;border:1px solid #ddd6fe;border-radius:6px;padding:0.4rem 0.6rem;color:#1e293b;">
                       ${selectedFiles.map((f, i) => `<div>${i + 1}. ${escapeHtml(f.name)} (${formatBytes(f.size)})</div>`).join('')}
                   </div>`;

        root.innerHTML = `
            <div class="mt-modal-backdrop" id="mt-modal-backdrop">
                <div class="mt-modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(heading)}">
                    <div class="mt-modal-header">
                        <h3><i class="fa-solid fa-book"></i> ${escapeHtml(heading)}</h3>
                        <button type="button" class="mt-modal-close" id="mt-modal-close" title="Close"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <form id="mt-modal-form">
                        <div class="mt-modal-body">
                            ${!isEdit ? `
                                <div class="mt-field">
                                    <label>Textbook PDF File${isUpload ? '(s) *' : ' *'}</label>
                                    <div class="mt-dropzone" id="mt-dropzone">
                                        <i class="fa-solid fa-file-pdf" style="font-size:1.6rem;margin-bottom:0.3rem;display:block;"></i>
                                        <div id="mt-dropzone-label">${dropLabelHtml}</div>
                                        <input type="file" id="mt-file-input" accept="application/pdf,.pdf" ${isUpload ? 'multiple' : ''} style="display:none;">
                                    </div>
                                </div>
                            ` : ''}

                            <div class="mt-field">
                                <label for="mt-input-title">${isMulti ? 'Title Prefix (optional — each file keeps its own title)' : 'Textbook Title *'}</label>
                                <input type="text" id="mt-input-title" value="${escapeHtml(curTitle)}" placeholder="${isMulti ? 'Leave blank to use each PDF filename automatically' : 'e.g. Grade 12 Physics Full Textbook'}" ${isMulti ? '' : 'required'}>
                            </div>

                            <div class="mt-field-row">
                                <div class="mt-field">
                                    <label for="mt-input-subject">Subject</label>
                                    <input type="text" id="mt-input-subject" value="${escapeHtml(curSubject)}" placeholder="e.g. Physics">
                                </div>
                                <div class="mt-field">
                                    <label for="mt-input-chapter">Chapter</label>
                                    <input type="text" id="mt-input-chapter" value="${escapeHtml(curChapter)}" placeholder="${isMulti ? 'Auto per file or e.g. Full Textbook' : 'e.g. Chapter 1 or Full Textbook'}">
                                </div>
                            </div>

                            <div class="mt-field">
                                <label for="mt-input-desc">Description (optional)</label>
                                <textarea id="mt-input-desc" rows="2" placeholder="Textbook overview, covered units, or edition notes...">${escapeHtml(curDesc)}</textarea>
                            </div>

                            ${ms.progressText ? `<div style="padding:0.5rem 0.75rem;border-radius:8px;background:#f5f3ff;color:#5b21b6;border:1px solid #ddd6fe;font-size:0.84rem;"><i class="fa-solid fa-spinner fa-spin"></i> ${escapeHtml(ms.progressText)}</div>` : ''}
                            ${ms.error ? `<div style="padding:0.55rem 0.75rem;border-radius:8px;background:#fef2f2;color:#b91c1c;border:1px solid #fecaca;font-size:0.84rem;">${escapeHtml(ms.error)}</div>` : ''}
                        </div>
                        <div class="mt-modal-footer">
                            <button type="button" class="mt-btn mt-btn-secondary" id="mt-modal-cancel" ${ms.submitting ? 'disabled' : ''}>Cancel</button>
                            <button type="submit" class="mt-btn mt-btn-primary" id="mt-modal-submit" ${ms.submitting ? 'disabled' : ''}>
                                <i class="fa-solid ${ms.submitting ? 'fa-spinner fa-spin' : 'fa-check'}"></i>
                                ${ms.submitting ? 'Uploading...' : isEdit ? 'Save Changes' : isReplace ? 'Replace PDF' : (selectedFiles.length > 1 ? `Upload ${selectedFiles.length} PDFs` : 'Upload PDF')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        const closeBtn = document.getElementById('mt-modal-close');
        const cancelBtn = document.getElementById('mt-modal-cancel');
        const backdrop = document.getElementById('mt-modal-backdrop');
        if (closeBtn) closeBtn.onclick = closeModal;
        if (cancelBtn) cancelBtn.onclick = closeModal;
        if (backdrop) {
            backdrop.onclick = (e) => {
                if (e.target === backdrop && !state.modalState.submitting) closeModal();
            };
        }

        const dz = document.getElementById('mt-dropzone');
        const fileInput = document.getElementById('mt-file-input');
        function applyPickedFiles(fileListObj) {
            const picked = Array.from(fileListObj || []).filter(Boolean);
            if (!picked.length || !state.modalState) return;
            const list = state.modalState.mode === 'upload' ? picked : [picked[0]];
            state.modalState.files = list;
            state.modalState.file = list[0];
            state.modalState.error = '';
            renderModal();
        }

        if (dz && fileInput) {
            dz.onclick = () => fileInput.click();
            fileInput.onchange = () => applyPickedFiles(fileInput.files);
            dz.ondragover = (e) => { e.preventDefault(); dz.classList.add('dragover'); };
            dz.ondragleave = () => dz.classList.remove('dragover');
            dz.ondrop = (e) => {
                e.preventDefault();
                dz.classList.remove('dragover');
                applyPickedFiles(e.dataTransfer && e.dataTransfer.files);
            };
        }

        const form = document.getElementById('mt-modal-form');
        if (form) {
            form.onsubmit = async (e) => {
                e.preventDefault();
                if (!state.modalState || state.modalState.submitting) return;
                const titleInputVal = ((document.getElementById('mt-input-title') || {}).value || '').trim();
                const subjectInputVal = ((document.getElementById('mt-input-subject') || {}).value || '').trim();
                const chapterInputVal = ((document.getElementById('mt-input-chapter') || {}).value || '').trim();
                const descInputVal = ((document.getElementById('mt-input-desc') || {}).value || '').trim();

                state.modalState.submitting = true;
                state.modalState.error = '';
                renderModal();

                try {
                    let lastResult = null;
                    if (state.modalState.mode === 'upload') {
                        const queue = (state.modalState.files && state.modalState.files.length)
                            ? state.modalState.files
                            : (state.modalState.file ? [state.modalState.file] : []);
                        if (!queue.length) throw new Error('Please choose at least one PDF textbook.');

                        for (let i = 0; i < queue.length; i++) {
                            const f = queue[i];
                            if (state.modalState) {
                                state.modalState.progressText = queue.length > 1
                                    ? `Uploading ${i + 1} of ${queue.length}: ${f.name}...`
                                    : `Uploading ${f.name}...`;
                                renderModal();
                            }
                            const derivedTitle = deriveTitleFromName(f.name);
                            const perTitle = queue.length === 1
                                ? (titleInputVal || derivedTitle)
                                : (titleInputVal ? `${titleInputVal} - ${derivedTitle}` : derivedTitle);
                            lastResult = await uploadTextbookFile(state.modalState.grade, f, {
                                title: perTitle,
                                subject: subjectInputVal || 'Physics',
                                chapter: chapterInputVal || deriveChapterFromName(f.name),
                                description: descInputVal
                            });
                        }
                    } else if (state.modalState.mode === 'replace') {
                        lastResult = await replaceTextbookFile(state.modalState.grade, state.modalState.item.id, state.modalState.file, {
                            title: titleInputVal,
                            subject: subjectInputVal,
                            chapter: chapterInputVal,
                            description: descInputVal
                        });
                    } else {
                        lastResult = await updateTextbookMetadata(state.modalState.grade, state.modalState.item.id, {
                            title: titleInputVal,
                            subject: subjectInputVal,
                            chapter: chapterInputVal,
                            description: descInputVal
                        });
                    }
                    const savedGrade = state.modalState.grade;
                    closeModal();
                    if (lastResult && lastResult.id) state.selectedIdByGrade[savedGrade] = lastResult.id;
                    renderView();
                } catch (err) {
                    if (state.modalState) {
                        state.modalState.submitting = false;
                        state.modalState.progressText = '';
                        state.modalState.error = (err && err.message) || 'Save failed.';
                        renderModal();
                    }
                }
            };
        }
    }

    // --------------------------------------------------------------------------
    // Tab Entry & View Rendering (Grades 9-12 Only, Ebook Reference Layout)
    // --------------------------------------------------------------------------
    function renderTab(gradeOpt) {
        const g = normalizeGrade(gradeOpt) || normalizeGrade(global.currentGrade);
        const container = document.getElementById('tab-my-textbook-content');
        if (!container) return;

        if (!g) {
            cleanupReaderSession();
            state.activeGrade = null;
            container.innerHTML = '';
            return;
        }

        if (state.activeGrade && state.activeGrade !== g) {
            cleanupReaderSession();
        }
        state.activeGrade = g;
        renderView();

        fetchTextbooksForGrade(g).then(() => {
            const tabPane = document.getElementById('tab-my-textbook');
            if (tabPane && (tabPane.classList.contains('active') || !tabPane.classList.contains('hidden'))) {
                renderView();
            }
        });
    }

    function onLeaveTab() {
        cleanupReaderSession();
    }

    function renderView() {
        const container = document.getElementById('tab-my-textbook-content');
        if (!container) return;

        const g = normalizeGrade(global.currentGrade) || state.activeGrade;
        if (!g) {
            container.innerHTML = '';
            return;
        }
        state.activeGrade = g;

        const allItems = state.itemsByGrade[g] || [];
        const filters = getFilterState(g);

        const subjects = getUniqueValues(allItems, 'subject', 'Physics');
        if (!subjects.includes(filters.subject)) filters.subject = 'All';

        const chaptersSource = filters.subject === 'All'
            ? allItems
            : allItems.filter(i => (i.subject || 'Physics') === filters.subject);
        const chapters = getUniqueValues(chaptersSource, 'chapter', 'General Chapters');
        if (!chapters.includes(filters.chapter)) filters.chapter = 'All';

        const q = (filters.query || '').trim().toLowerCase();
        const filtered = allItems.filter(item => {
            const sb = item.subject || 'Physics';
            const ch = item.chapter || 'General Chapters';
            if (filters.subject !== 'All' && sb !== filters.subject) return false;
            if (filters.chapter !== 'All' && ch !== filters.chapter) return false;
            if (!q) return true;
            return (
                (item.title || '').toLowerCase().includes(q) ||
                sb.toLowerCase().includes(q) ||
                ch.toLowerCase().includes(q) ||
                (item.description || '').toLowerCase().includes(q)
            );
        });

        let selectedId = state.selectedIdByGrade[g];
        if (!selectedId || !filtered.some(item => item.id === selectedId)) {
            selectedId = filtered.length > 0 ? filtered[0].id : null;
            if (selectedId) state.selectedIdByGrade[g] = selectedId;
        }
        const selectedItem = filtered.find(item => item.id === selectedId) || null;
        const admin = isAdminUser();
        const canManageSelected = Boolean(admin && selectedItem && (state.backendAvailable || selectedItem.source === 'idb'));
        const loading = Boolean(state.loadingGrade[g]);

        const topicSelectorHtml = filtered.length > 0 ? `
            <div class="ebook-topic-selector">
                <span class="ebook-topic-label"><i class="fa-solid fa-layer-group"></i> Select Textbook (${filtered.length} ${filtered.length === 1 ? 'Book' : 'Books'}):</span>
                <div class="ebook-topic-pills" id="mt-topic-pills">
                    ${filtered.map(item => `
                        <button type="button" class="ebook-topic-pill ${selectedItem && item.id === selectedItem.id ? 'active' : ''}" data-item-id="${escapeHtml(item.id)}">
                            <i class="fa-solid fa-book"></i> ${escapeHtml(item.title)}
                        </button>
                    `).join('')}
                </div>
            </div>
        ` : '';

        const adminBarHtml = admin ? `
            <div class="mt-admin-bar">
                <div style="font-size:0.86rem;font-weight:700;color:#5b21b6;display:flex;align-items:center;gap:0.45rem;">
                    <i class="fa-solid fa-user-shield"></i>
                    <span>Administrator Library Management (Grade ${escapeHtml(g)} Only)</span>
                </div>
                <div class="mt-admin-bar-actions">
                    <button type="button" class="mt-btn mt-btn-primary" id="mt-upload-btn">
                        <i class="fa-solid fa-cloud-arrow-up"></i> Upload PDF Textbook
                    </button>
                    ${canManageSelected ? `
                        <button type="button" class="mt-btn mt-btn-secondary" id="mt-edit-btn">
                            <i class="fa-solid fa-pen"></i> Edit Details
                        </button>
                        <button type="button" class="mt-btn mt-btn-secondary" id="mt-replace-btn">
                            <i class="fa-solid fa-arrows-rotate"></i> Replace PDF
                        </button>
                        <button type="button" class="mt-btn mt-btn-danger" id="mt-delete-btn">
                            <i class="fa-solid fa-trash"></i> Delete
                        </button>
                    ` : ''}
                </div>
            </div>
        ` : '';

        const filtersHtml = allItems.length > 0 ? `
            <div class="mt-filters-bar">
                <div class="mt-filter-group">
                    <label for="mt-filter-subject">Subject</label>
                    <select id="mt-filter-subject" class="mt-filter-select">
                        ${subjects.map(s => `<option value="${escapeHtml(s)}" ${s === filters.subject ? 'selected' : ''}>${escapeHtml(s)}</option>`).join('')}
                    </select>
                </div>
                <div class="mt-filter-group">
                    <label for="mt-filter-chapter">Chapter</label>
                    <select id="mt-filter-chapter" class="mt-filter-select">
                        ${chapters.map(c => `<option value="${escapeHtml(c)}" ${c === filters.chapter ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
                    </select>
                </div>
                <div class="mt-filter-group" style="flex:1.5 1 220px;">
                    <label for="mt-filter-search">Search Textbook</label>
                    <input type="search" id="mt-filter-search" class="mt-filter-input" value="${escapeHtml(filters.query)}" placeholder="Search Grade ${escapeHtml(g)} textbooks...">
                </div>
            </div>
        ` : '';

        const subtitleLine = selectedItem
            ? `<div class="ebook-current-topic"><i class="fa-solid fa-book"></i> Reading Textbook: <span>${escapeHtml(selectedItem.title)}</span></div>
               <div class="mt-selected-meta">
                   <span class="mt-meta-tag"><i class="fa-solid fa-atom"></i> ${escapeHtml(selectedItem.subject || 'Physics')}</span>
                   <span class="mt-meta-tag"><i class="fa-solid fa-bookmark"></i> ${escapeHtml(selectedItem.chapter || 'General Chapters')}</span>
                   <span class="mt-meta-tag">${formatBytes(selectedItem.size)}</span>
               </div>`
            : '';

        const viewerOrEmptyHtml = selectedItem ? `
            <div class="ebook-actions">
                <button type="button" class="ebook-btn primary" id="mt-fullscreen-action-btn" title="Toggle Fullscreen Reading View">
                    <i class="fa-solid fa-expand"></i> <span>Fullscreen Reading View</span>
                </button>
            </div>

            ${topicSelectorHtml}

            <div class="pdf-viewer-wrapper" id="mt-pdf-viewer-wrapper">
                <div class="pdf-toolbar">
                    <div class="pdf-toolbar-group">
                        <button type="button" class="pdf-btn" id="mt-pdf-prev-btn" title="Previous Page (Left Arrow)">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <div class="pdf-page-indicator">
                            <span>Page</span>
                            <input type="number" id="mt-pdf-page-input" class="pdf-page-input" value="1" min="1" max="1" aria-label="Current Page">
                            <span>/ <span id="mt-pdf-total-pages">-</span></span>
                        </div>
                        <button type="button" class="pdf-btn" id="mt-pdf-next-btn" title="Next Page (Right Arrow)">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                    <div class="pdf-toolbar-group">
                        <button type="button" class="pdf-btn" id="mt-pdf-zoom-out-btn" title="Zoom Out (-)">
                            <i class="fa-solid fa-magnifying-glass-minus"></i>
                        </button>
                        <span class="pdf-zoom-label" id="mt-pdf-zoom-label">100%</span>
                        <button type="button" class="pdf-btn" id="mt-pdf-zoom-in-btn" title="Zoom In (+)">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                        </button>
                        <button type="button" class="pdf-btn" id="mt-pdf-fit-width-btn" title="Fit to Screen Width">
                            <i class="fa-solid fa-arrows-left-right"></i> <span class="btn-text">Fit</span>
                        </button>
                    </div>

                    <div class="pdf-toolbar-group">
                        <button type="button" class="pdf-btn pdf-btn-fullscreen" id="mt-pdf-fullscreen-btn" title="Toggle Fullscreen Reading View (Esc)">
                            <i class="fa-solid fa-expand" id="mt-pdf-fs-icon"></i> <span class="btn-text" id="mt-pdf-fs-text">Fullscreen</span>
                        </button>
                    </div>
                </div>

                <div class="pdf-scroll-container" id="mt-pdf-scroll-container">
                    <button type="button" class="pdf-floating-exit-btn" id="mt-pdf-floating-exit-btn" title="Exit Fullscreen Reading Mode">
                        <i class="fa-solid fa-xmark"></i> <span>Exit Fullscreen</span>
                    </button>
                    <div class="pdf-loading-card" id="mt-pdf-loading-card">
                        <i class="fa-solid fa-circle-notch fa-spin"></i>
                        <span id="mt-pdf-loading-status">Loading My Textbook pages...</span>
                    </div>
                    <div id="mt-pdf-pages-mount"></div>
                </div>
            </div>

            <div class="ebook-notice" style="background: #f5f3ff; border: 1px solid #ddd6fe; color: #5b21b6; border-radius: 8px; padding: 0.75rem 1.25rem; margin-top: 1rem;">
                <i class="fa-solid fa-shield-halved" style="color: #6d28d9; font-size: 1.15rem; margin-right: 8px;"></i>
                <div>
                    <span><strong>Protected Textbook Viewer (Grade ${escapeHtml(g)}):</strong> Read directly on the website without downloading. Mathematical equations, diagrams, and images are rendered cleanly on desktop, tablet, and mobile.</span>
                </div>
            </div>
        ` : loading ? `
            <div class="ebook-empty">
                <i class="fa-solid fa-circle-notch fa-spin"></i>
                <h3>Loading Grade ${escapeHtml(g)} My Textbook Library...</h3>
                <p>Checking saved textbooks for Grade ${escapeHtml(g)}.</p>
            </div>
        ` : `
            ${topicSelectorHtml}
            <div class="ebook-empty">
                <i class="fa-solid fa-book"></i>
                <h3>No Textbooks Uploaded Yet for Grade ${escapeHtml(g)}</h3>
                <p>${admin ? 'Click "Upload PDF Textbook" above to add physics textbooks for Grade ' + escapeHtml(g) + '.' : 'Grade ' + escapeHtml(g) + ' textbooks will appear here once uploaded by your teacher.'}</p>
            </div>
        `;

        container.innerHTML = `
            <div class="ebook-container">
                <div class="ebook-header" style="user-select: none;">
                    <h2>
                        <i class="fa-solid fa-book"></i> Grade ${escapeHtml(g)} My Textbook
                        <span class="mt-grade-pill grade-${escapeHtml(g)}">Grade ${escapeHtml(g)} Only</span>
                    </h2>
                    ${subtitleLine}
                    <p>${selectedItem && selectedItem.description ? escapeHtml(selectedItem.description) : `Independent Physics Textbook library curated for Grade ${escapeHtml(g)} students (Read-Only).`}</p>
                </div>

                ${adminBarHtml}
                ${filtersHtml}
                ${viewerOrEmptyHtml}
            </div>
            <div id="mt-modal-root"></div>
        `;

        wireViewEvents(g, selectedItem);
    }

    function wireViewEvents(grade, selectedItem) {
        const uploadBtn = document.getElementById('mt-upload-btn');
        if (uploadBtn) uploadBtn.onclick = () => openModal('upload');

        const editBtn = document.getElementById('mt-edit-btn');
        if (editBtn && selectedItem) editBtn.onclick = () => openModal('edit', selectedItem);

        const replaceBtn = document.getElementById('mt-replace-btn');
        if (replaceBtn && selectedItem) replaceBtn.onclick = () => openModal('replace', selectedItem);

        const deleteBtn = document.getElementById('mt-delete-btn');
        if (deleteBtn && selectedItem) {
            deleteBtn.onclick = async () => {
                if (!global.confirm(`Delete "${selectedItem.title}" from Grade ${grade} My Textbook library?`)) return;
                try {
                    await deleteTextbookItem(grade, selectedItem.id);
                    renderView();
                } catch (err) {
                    global.alert((err && err.message) || 'Delete failed.');
                }
            };
        }

        const filters = getFilterState(grade);
        const sbSel = document.getElementById('mt-filter-subject');
        const chSel = document.getElementById('mt-filter-chapter');
        const srchIn = document.getElementById('mt-filter-search');

        if (sbSel) sbSel.onchange = () => { filters.subject = sbSel.value; filters.chapter = 'All'; renderView(); };
        if (chSel) chSel.onchange = () => { filters.chapter = chSel.value; renderView(); };
        if (srchIn) {
            srchIn.oninput = (e) => {
                const caret = e.target.selectionStart;
                filters.query = e.target.value;
                renderView();
                const nextIn = document.getElementById('mt-filter-search');
                if (nextIn) {
                    nextIn.focus();
                    try { nextIn.setSelectionRange(caret, caret); } catch (err) {}
                }
            };
        }

        const pillsWrap = document.getElementById('mt-topic-pills');
        if (pillsWrap) {
            pillsWrap.onclick = (e) => {
                const btn = e.target.closest('.ebook-topic-pill');
                if (!btn) return;
                const itemId = btn.dataset.itemId;
                if (!itemId || state.selectedIdByGrade[grade] === itemId) return;
                state.selectedIdByGrade[grade] = itemId;
                renderView();
            };
        }

        if (selectedItem) {
            initReader(grade, selectedItem);
        } else {
            cleanupReaderSession();
        }
    }

    document.addEventListener('keydown', (e) => {
        if (state.modalState && e.key === 'Escape' && !state.modalState.submitting) {
            closeModal();
        }
    });

    global.WISMyTextbooks = {
        renderTab,
        onLeaveTab,
        refresh: (grade) => fetchTextbooksForGrade(grade || state.activeGrade || global.currentGrade),
        isAdmin: isAdminUser
    };
})(window);
