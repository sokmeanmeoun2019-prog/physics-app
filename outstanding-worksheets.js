/**
 * WIS Physics Learning Hub - Outstanding Worksheet Section (Grade 9 & Grade 12 Only)
 *
 * Uses the exact same layout, UI classes, and PDF.js viewing experience as the existing Ebook section,
 * with strict Grade 9 / Grade 12 isolation, Chapter/Topic/Lesson organization, and Admin upload/replace/edit/delete.
 */
(function (global) {
    'use strict';

    const ALLOWED_GRADES = ['9', '12'];
    const IDB_NAME = 'wis_outstanding_ws_v1';
    const IDB_STORE = 'worksheets';
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
    // Helpers & Grade Isolation
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
        return String(name || 'Outstanding Worksheet')
            .replace(/\.pdf$/i, '')
            .replace(/[_-]+/g, ' ')
            .trim() || 'Outstanding Worksheet';
    }

    function deriveChapterFromName(name) {
        const m = String(name || '').match(/(?:^|[^a-z])(?:ch(?:apter)?[\s_-]*(\d+))/i);
        return m ? `Chapter ${m[1]}` : 'General Chapter';
    }

    function deriveLessonFromName(name) {
        const m = String(name || '').match(/(?:^|[^a-z])(?:l(?:esson)?[\s_-]*(\d+))/i);
        return m ? `Lesson ${m[1]}` : 'All Lessons';
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
                chapter: 'All',
                topic: 'All',
                lesson: 'All',
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
    // IndexedDB Offline Fallback
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
            const res = await fetch(resolveUrl('api/outstanding-worksheets/capabilities'), {
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
            const apiUrl = `https://api.github.com/repos/${gh.owner}/${gh.repo}/contents/outstanding_worksheets/grade${grade}`;
            const res = await fetch(apiUrl, { method: 'GET', cache: 'no-store' });
            if (!res.ok) return discovered;
            const entries = await res.json();
            if (!Array.isArray(entries)) return discovered;
            for (const entry of entries) {
                if (!entry || entry.type !== 'file') continue;
                const name = String(entry.name || '');
                if (!name.toLowerCase().endsWith('.pdf')) continue;
                discovered.push({
                    id: `gh-ow-g${grade}-${name.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
                    grade: String(grade),
                    title: deriveTitleFromName(name),
                    chapter: deriveChapterFromName(name),
                    topic: 'Core Physics',
                    lesson: deriveLessonFromName(name),
                    description: '',
                    originalName: name,
                    storedName: name,
                    url: `outstanding_worksheets/grade${grade}/${encodeURIComponent(name)}`,
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
            const dirUrl = resolveUrl(`outstanding_worksheets/grade${grade}/`);
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
                    id: `dir-ow-g${grade}-${decodedName.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
                    grade: String(grade),
                    title: deriveTitleFromName(decodedName),
                    chapter: deriveChapterFromName(decodedName),
                    topic: 'Core Physics',
                    lesson: deriveLessonFromName(decodedName),
                    description: '',
                    originalName: decodedName,
                    storedName: decodedName,
                    url: `outstanding_worksheets/grade${grade}/${encodeURIComponent(decodedName)}`,
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
            const url = resolveUrl(`outstanding_worksheets/grade${grade}/catalog.json?t=${Date.now()}`);
            const res = await fetch(url, { method: 'GET', cache: 'no-store' });
            if (res.ok) {
                const data = await res.json();
                if (data && Array.isArray(data.worksheets)) {
                    catalogItems = data.worksheets
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
            const bundled = global.OUTSTANDING_WORKSHEETS_CATALOG && global.OUTSTANDING_WORKSHEETS_CATALOG[String(grade)];
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

    async function fetchWorksheetsForGrade(grade) {
        const g = normalizeGrade(grade);
        if (!g) return [];
        state.loadingGrade[g] = true;

        if (!state.capabilitiesChecked) {
            await checkCapabilities();
        }

        try {
            if (state.backendAvailable) {
                const res = await fetch(resolveUrl(`api/outstanding-worksheets?grade=${encodeURIComponent(g)}`), {
                    method: 'GET',
                    credentials: 'include',
                    cache: 'no-store'
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data && Array.isArray(data.worksheets)) {
                        state.itemsByGrade[g] = data.worksheets
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
    async function uploadWorksheetFile(grade, file, meta) {
        const g = normalizeGrade(grade);
        if (!g) throw new Error('Outstanding Worksheet supports Grade 9 and Grade 12 only.');
        if (!file) throw new Error('Please choose a PDF file.');
        if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
            throw new Error('Only PDF (.pdf) files are supported.');
        }
        if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
            throw new Error(`PDF exceeds ${MAX_UPLOAD_MB} MB limit.`);
        }

        if (!state.capabilitiesChecked) await checkCapabilities();

        const title = (meta.title || '').trim() || deriveTitleFromName(file.name);
        const chapter = (meta.chapter || '').trim() || deriveChapterFromName(file.name);
        const topic = (meta.topic || '').trim() || 'Core Physics';
        const lesson = (meta.lesson || '').trim() || deriveLessonFromName(file.name);
        const description = (meta.description || '').trim();

        if (state.backendAvailable) {
            const buf = await file.arrayBuffer();
            const qs = new URLSearchParams({
                grade: g,
                filename: file.name,
                title,
                chapter,
                topic,
                lesson,
                description
            });
            const res = await fetch(resolveUrl(`api/outstanding-worksheets/upload?${qs.toString()}`), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/pdf' },
                body: buf
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.success) {
                throw new Error(data.message || data.error || `Upload failed (${res.status})`);
            }
            await fetchWorksheetsForGrade(g);
            return data.worksheet;
        }

        const buf = await file.arrayBuffer();
        const id = `local-ow-${g}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const now = new Date().toISOString();
        const record = {
            id,
            grade: g,
            title,
            chapter,
            topic,
            lesson,
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
        await fetchWorksheetsForGrade(g);
        return record;
    }

    async function replaceWorksheetFile(grade, id, file, meta) {
        const g = normalizeGrade(grade);
        if (!g || !id) throw new Error('Missing worksheet reference.');
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
                chapter: (meta.chapter || '').trim(),
                topic: (meta.topic || '').trim(),
                lesson: (meta.lesson || '').trim(),
                description: (meta.description || '').trim()
            });
            const res = await fetch(resolveUrl(`api/outstanding-worksheets/replace?${qs.toString()}`), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/pdf' },
                body: buf
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.success) {
                throw new Error(data.message || data.error || `Replace failed (${res.status})`);
            }
            await fetchWorksheetsForGrade(g);
            return data.worksheet;
        }

        const buf = await file.arrayBuffer();
        const currentIdb = await idbGetById(id);
        const now = new Date().toISOString();
        const updated = {
            ...(currentIdb || existing || {}),
            id,
            grade: g,
            title: (meta.title || '').trim() || deriveTitleFromName(file.name),
            chapter: (meta.chapter || '').trim() || deriveChapterFromName(file.name),
            topic: (meta.topic || '').trim() || 'Core Physics',
            lesson: (meta.lesson || '').trim() || deriveLessonFromName(file.name),
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
        await fetchWorksheetsForGrade(g);
        return updated;
    }

    async function updateWorksheetMetadata(grade, id, meta) {
        const g = normalizeGrade(grade);
        if (!g || !id) throw new Error('Missing worksheet reference.');
        const existing = (state.itemsByGrade[g] || []).find(item => item.id === id);

        if (state.backendAvailable && existing && existing.source !== 'idb') {
            const res = await fetch(resolveUrl('api/outstanding-worksheets/update'), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    grade: g,
                    id,
                    title: (meta.title || '').trim(),
                    chapter: (meta.chapter || '').trim(),
                    topic: (meta.topic || '').trim(),
                    lesson: (meta.lesson || '').trim(),
                    description: (meta.description || '').trim()
                })
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || !data.success) {
                throw new Error(data.message || data.error || `Update failed (${res.status})`);
            }
            await fetchWorksheetsForGrade(g);
            return data.worksheet;
        }

        const currentIdb = await idbGetById(id);
        if (!currentIdb) {
            throw new Error('Static folder worksheets can only be updated while running the Node server.');
        }
        const updated = {
            ...currentIdb,
            title: (meta.title || '').trim() || currentIdb.title,
            chapter: (meta.chapter || '').trim() || currentIdb.chapter,
            topic: (meta.topic || '').trim() || currentIdb.topic,
            lesson: (meta.lesson || '').trim() || currentIdb.lesson,
            description: (meta.description || '').trim(),
            updatedAt: new Date().toISOString()
        };
        await idbPutRecord(updated);
        await fetchWorksheetsForGrade(g);
        return updated;
    }

    async function deleteWorksheetItem(grade, id) {
        const g = normalizeGrade(grade);
        if (!g || !id) return;
        const existing = (state.itemsByGrade[g] || []).find(item => item.id === id);

        if (state.backendAvailable && existing && existing.source !== 'idb') {
            const res = await fetch(resolveUrl('api/outstanding-worksheets/delete'), {
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
        await fetchWorksheetsForGrade(g);
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

        const wrapper = document.getElementById('ow-pdf-viewer-wrapper');
        const scrollContainer = document.getElementById('ow-pdf-scroll-container');
        const mount = document.getElementById('ow-pdf-pages-mount');
        const mainLoading = document.getElementById('ow-pdf-loading-card');
        const loadingStatus = document.getElementById('ow-pdf-loading-status');
        const totalPagesEl = document.getElementById('ow-pdf-total-pages');
        const pageInput = document.getElementById('ow-pdf-page-input');
        const zoomLabel = document.getElementById('ow-pdf-zoom-label');
        const prevBtn = document.getElementById('ow-pdf-prev-btn');
        const nextBtn = document.getElementById('ow-pdf-next-btn');
        const zoomInBtn = document.getElementById('ow-pdf-zoom-in-btn');
        const zoomOutBtn = document.getElementById('ow-pdf-zoom-out-btn');
        const fitWidthBtn = document.getElementById('ow-pdf-fit-width-btn');
        const fsBtn = document.getElementById('ow-pdf-fullscreen-btn');
        const fsIcon = document.getElementById('ow-pdf-fs-icon');
        const fsText = document.getElementById('ow-pdf-fs-text');
        const topFsBtn = document.getElementById('ow-fullscreen-action-btn');
        const floatingExitBtn = document.getElementById('ow-pdf-floating-exit-btn');

        if (!wrapper || !scrollContainer || !mount) return;
        if (loadingStatus) loadingStatus.textContent = 'Loading Outstanding Worksheet pages...';

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
                if (!rec || !rec.fileData) throw new Error('Worksheet binary not found in browser storage.');
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
                    candidates.push(resolveUrl(`api/outstanding-worksheets/file/${encodeURIComponent(g)}/${encodeURIComponent(item.id)}`));
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

            if (!pdfDoc) throw lastErr || new Error('Unable to load worksheet PDF.');
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

            // Pre-build page placeholders matching exact .ebook-container / .pdf-page-card layout
            mount.innerHTML = '';
            const frag = document.createDocumentFragment();
            for (let p = 1; p <= pdfDoc.numPages; p++) {
                const card = document.createElement('div');
                card.className = 'pdf-page-card';
                card.id = `ow-pdf-page-${p}`;
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

                const card = document.getElementById(`ow-pdf-page-${pNum}`);
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
                        console.warn(`Outstanding Worksheet page ${pNum} render warning:`, err);
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
                const card = document.getElementById(`ow-pdf-page-${clamped}`);
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
                const tabPane = document.getElementById('tab-outstanding-worksheet');
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
                    <span style="font-weight:700;">${isFile ? 'Open via Preview_Website_Locally.bat (http://localhost:3000)' : escapeHtml((err && err.message) || 'Unable to load worksheet PDF.')}</span>
                    ${openUrl ? `<a href="${escapeHtml(openUrl)}" target="_blank" rel="noopener noreferrer" class="ow-btn ow-btn-primary" style="text-decoration:none;margin-top:0.5rem;"><i class="fa-solid fa-arrow-up-right-from-square"></i> Open PDF Directly</a>` : ''}
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
        const root = document.getElementById('ow-modal-root');
        if (root) root.innerHTML = '';
    }

    function renderModal() {
        const root = document.getElementById('ow-modal-root');
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
            ? `Edit Outstanding Worksheet (Grade ${ms.grade})`
            : isReplace
                ? `Replace Worksheet PDF (Grade ${ms.grade})`
                : `Upload Outstanding Worksheet PDFs (Grade ${ms.grade})`;

        const curTitle = ms.item ? ms.item.title : (selectedFiles.length === 1 ? deriveTitleFromName(selectedFiles[0].name) : '');
        const curChapter = ms.item ? (ms.item.chapter || 'Chapter 1') : (selectedFiles.length === 1 ? deriveChapterFromName(selectedFiles[0].name) : '');
        const curTopic = ms.item ? (ms.item.topic || 'Core Physics') : 'Core Physics';
        const curLesson = ms.item ? (ms.item.lesson || 'Lesson 1') : (selectedFiles.length === 1 ? deriveLessonFromName(selectedFiles[0].name) : '');
        const curDesc = ms.item ? (ms.item.description || '') : '';

        const dropLabelHtml = selectedFiles.length === 0
            ? (isUpload
                ? 'Click or drop <strong>one or multiple PDF files</strong> here (e.g. Part 1, Part 2 — up to 150 MB each)'
                : 'Click or drop a PDF file here (up to 150 MB)')
            : selectedFiles.length === 1
                ? `<strong>${escapeHtml(selectedFiles[0].name)}</strong> (${formatBytes(selectedFiles[0].size)})`
                : `<strong>${selectedFiles.length} PDF files selected</strong>
                   <div style="margin-top:0.4rem;font-size:0.78rem;text-align:left;max-height:110px;overflow:auto;background:#ffffff;border:1px solid #bfdbfe;border-radius:6px;padding:0.4rem 0.6rem;color:#1e293b;">
                       ${selectedFiles.map((f, i) => `<div>${i + 1}. ${escapeHtml(f.name)} (${formatBytes(f.size)})</div>`).join('')}
                   </div>`;

        root.innerHTML = `
            <div class="ow-modal-backdrop" id="ow-modal-backdrop">
                <div class="ow-modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(heading)}">
                    <div class="ow-modal-header">
                        <h3><i class="fa-solid fa-star"></i> ${escapeHtml(heading)}</h3>
                        <button type="button" class="ow-modal-close" id="ow-modal-close" title="Close"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <form id="ow-modal-form">
                        <div class="ow-modal-body">
                            ${!isEdit ? `
                                <div class="ow-field">
                                    <label>Worksheet PDF File${isUpload ? '(s) *' : ' *'}</label>
                                    <div class="ow-dropzone" id="ow-dropzone">
                                        <i class="fa-solid fa-file-pdf" style="font-size:1.6rem;margin-bottom:0.3rem;display:block;"></i>
                                        <div id="ow-dropzone-label">${dropLabelHtml}</div>
                                        <input type="file" id="ow-file-input" accept="application/pdf,.pdf" ${isUpload ? 'multiple' : ''} style="display:none;">
                                    </div>
                                </div>
                            ` : ''}

                            <div class="ow-field">
                                <label for="ow-input-title">${isMulti ? 'Title Prefix (optional — each file keeps its Part name)' : 'Worksheet Title *'}</label>
                                <input type="text" id="ow-input-title" value="${escapeHtml(curTitle)}" placeholder="${isMulti ? 'Leave blank to use each PDF filename automatically' : 'e.g. File A Part 1'}" ${isMulti ? '' : 'required'}>
                            </div>

                            <div class="ow-field-row">
                                <div class="ow-field">
                                    <label for="ow-input-chapter">Chapter</label>
                                    <input type="text" id="ow-input-chapter" value="${escapeHtml(curChapter)}" placeholder="${isMulti ? 'Auto per file or e.g. Chapter 1' : 'e.g. Chapter 1'}">
                                </div>
                                <div class="ow-field">
                                    <label for="ow-input-lesson">Lesson</label>
                                    <input type="text" id="ow-input-lesson" value="${escapeHtml(curLesson)}" placeholder="${isMulti ? 'Auto per file or e.g. Lesson 1' : 'e.g. Lesson 1'}">
                                </div>
                            </div>

                            <div class="ow-field">
                                <label for="ow-input-topic">Topic</label>
                                <input type="text" id="ow-input-topic" value="${escapeHtml(curTopic)}" placeholder="e.g. Turning Effect & Equilibrium">
                            </div>

                            <div class="ow-field">
                                <label for="ow-input-desc">Description (optional)</label>
                                <textarea id="ow-input-desc" rows="2" placeholder="Additional notes or learning focus...">${escapeHtml(curDesc)}</textarea>
                            </div>

                            ${ms.progressText ? `<div style="padding:0.5rem 0.75rem;border-radius:8px;background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;font-size:0.84rem;"><i class="fa-solid fa-spinner fa-spin"></i> ${escapeHtml(ms.progressText)}</div>` : ''}
                            ${ms.error ? `<div style="padding:0.55rem 0.75rem;border-radius:8px;background:#fef2f2;color:#b91c1c;border:1px solid #fecaca;font-size:0.84rem;">${escapeHtml(ms.error)}</div>` : ''}
                        </div>
                        <div class="ow-modal-footer">
                            <button type="button" class="ow-btn ow-btn-secondary" id="ow-modal-cancel" ${ms.submitting ? 'disabled' : ''}>Cancel</button>
                            <button type="submit" class="ow-btn ow-btn-primary" id="ow-modal-submit" ${ms.submitting ? 'disabled' : ''}>
                                <i class="fa-solid ${ms.submitting ? 'fa-spinner fa-spin' : 'fa-check'}"></i>
                                ${ms.submitting ? 'Uploading...' : isEdit ? 'Save Changes' : isReplace ? 'Replace PDF' : (selectedFiles.length > 1 ? `Upload ${selectedFiles.length} PDFs` : 'Upload PDF')}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        const closeBtn = document.getElementById('ow-modal-close');
        const cancelBtn = document.getElementById('ow-modal-cancel');
        const backdrop = document.getElementById('ow-modal-backdrop');
        if (closeBtn) closeBtn.onclick = closeModal;
        if (cancelBtn) cancelBtn.onclick = closeModal;
        if (backdrop) {
            backdrop.onclick = (e) => {
                if (e.target === backdrop && !state.modalState.submitting) closeModal();
            };
        }

        const dz = document.getElementById('ow-dropzone');
        const fileInput = document.getElementById('ow-file-input');
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

        const form = document.getElementById('ow-modal-form');
        if (form) {
            form.onsubmit = async (e) => {
                e.preventDefault();
                if (!state.modalState || state.modalState.submitting) return;
                const titleInputVal = ((document.getElementById('ow-input-title') || {}).value || '').trim();
                const chapterInputVal = ((document.getElementById('ow-input-chapter') || {}).value || '').trim();
                const topicInputVal = ((document.getElementById('ow-input-topic') || {}).value || '').trim();
                const lessonInputVal = ((document.getElementById('ow-input-lesson') || {}).value || '').trim();
                const descInputVal = ((document.getElementById('ow-input-desc') || {}).value || '').trim();

                state.modalState.submitting = true;
                state.modalState.error = '';
                renderModal();

                try {
                    let lastResult = null;
                    if (state.modalState.mode === 'upload') {
                        const queue = (state.modalState.files && state.modalState.files.length)
                            ? state.modalState.files
                            : (state.modalState.file ? [state.modalState.file] : []);
                        if (!queue.length) throw new Error('Please choose at least one PDF file.');

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
                            lastResult = await uploadWorksheetFile(state.modalState.grade, f, {
                                title: perTitle,
                                chapter: chapterInputVal || deriveChapterFromName(f.name),
                                topic: topicInputVal || 'Core Physics',
                                lesson: lessonInputVal || deriveLessonFromName(f.name),
                                description: descInputVal
                            });
                        }
                    } else if (state.modalState.mode === 'replace') {
                        lastResult = await replaceWorksheetFile(state.modalState.grade, state.modalState.item.id, state.modalState.file, {
                            title: titleInputVal,
                            chapter: chapterInputVal,
                            topic: topicInputVal,
                            lesson: lessonInputVal,
                            description: descInputVal
                        });
                    } else {
                        lastResult = await updateWorksheetMetadata(state.modalState.grade, state.modalState.item.id, {
                            title: titleInputVal,
                            chapter: chapterInputVal,
                            topic: topicInputVal,
                            lesson: lessonInputVal,
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
    // Tab Entry & View Rendering (Same Layout & Components as Ebook Section)
    // --------------------------------------------------------------------------
    function renderTab(gradeOpt) {
        const g = normalizeGrade(gradeOpt) || normalizeGrade(global.currentGrade);
        const container = document.getElementById('tab-outstanding-worksheet-content');
        if (!container) return;

        if (!g) {
            cleanupReaderSession();
            container.innerHTML = '';
            return;
        }

        if (state.activeGrade && state.activeGrade !== g) {
            cleanupReaderSession();
        }
        state.activeGrade = g;
        renderView();

        fetchWorksheetsForGrade(g).then(() => {
            const tabPane = document.getElementById('tab-outstanding-worksheet');
            if (tabPane && (tabPane.classList.contains('active') || !tabPane.classList.contains('hidden'))) {
                renderView();
            }
        });
    }

    function onLeaveTab() {
        cleanupReaderSession();
    }

    function renderView() {
        const container = document.getElementById('tab-outstanding-worksheet-content');
        if (!container) return;

        const g = normalizeGrade(global.currentGrade) || state.activeGrade;
        if (!g) {
            container.innerHTML = '';
            return;
        }
        state.activeGrade = g;

        const allItems = state.itemsByGrade[g] || [];
        const filters = getFilterState(g);

        const chapters = getUniqueValues(allItems, 'chapter', 'General Chapter');
        if (!chapters.includes(filters.chapter)) filters.chapter = 'All';

        const topicsSource = filters.chapter === 'All'
            ? allItems
            : allItems.filter(i => (i.chapter || 'General Chapter') === filters.chapter);
        const topics = getUniqueValues(topicsSource, 'topic', 'Core Physics');
        if (!topics.includes(filters.topic)) filters.topic = 'All';

        const lessonsSource = filters.topic === 'All'
            ? topicsSource
            : topicsSource.filter(i => (i.topic || 'Core Physics') === filters.topic);
        const lessons = getUniqueValues(lessonsSource, 'lesson', 'All Lessons');
        if (!lessons.includes(filters.lesson)) filters.lesson = 'All';

        const q = (filters.query || '').trim().toLowerCase();
        const filtered = allItems.filter(item => {
            const ch = item.chapter || 'General Chapter';
            const tp = item.topic || 'Core Physics';
            const ls = item.lesson || 'All Lessons';
            if (filters.chapter !== 'All' && ch !== filters.chapter) return false;
            if (filters.topic !== 'All' && tp !== filters.topic) return false;
            if (filters.lesson !== 'All' && ls !== filters.lesson) return false;
            if (!q) return true;
            return (
                (item.title || '').toLowerCase().includes(q) ||
                ch.toLowerCase().includes(q) ||
                tp.toLowerCase().includes(q) ||
                ls.toLowerCase().includes(q) ||
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
                <span class="ebook-topic-label"><i class="fa-solid fa-layer-group"></i> Select Outstanding Worksheet (${filtered.length} ${filtered.length === 1 ? 'File' : 'Files'}):</span>
                <div class="ebook-topic-pills" id="ow-topic-pills">
                    ${filtered.map(item => `
                        <button type="button" class="ebook-topic-pill ${selectedItem && item.id === selectedItem.id ? 'active' : ''}" data-item-id="${escapeHtml(item.id)}">
                            <i class="fa-solid fa-file-pdf"></i> ${escapeHtml(item.title)}
                        </button>
                    `).join('')}
                </div>
            </div>
        ` : '';

        const adminBarHtml = admin ? `
            <div class="ow-admin-bar">
                <div style="font-size:0.86rem;font-weight:700;color:#1e3a8a;display:flex;align-items:center;gap:0.45rem;">
                    <i class="fa-solid fa-user-shield"></i>
                    <span>Administrator Management (Grade ${escapeHtml(g)})</span>
                </div>
                <div class="ow-admin-bar-actions">
                    <button type="button" class="ow-btn ow-btn-primary" id="ow-upload-btn">
                        <i class="fa-solid fa-cloud-arrow-up"></i> Upload PDF Worksheet
                    </button>
                    ${canManageSelected ? `
                        <button type="button" class="ow-btn ow-btn-secondary" id="ow-edit-btn">
                            <i class="fa-solid fa-pen"></i> Edit Details
                        </button>
                        <button type="button" class="ow-btn ow-btn-secondary" id="ow-replace-btn">
                            <i class="fa-solid fa-arrows-rotate"></i> Replace PDF
                        </button>
                        <button type="button" class="ow-btn ow-btn-danger" id="ow-delete-btn">
                            <i class="fa-solid fa-trash"></i> Delete
                        </button>
                    ` : ''}
                </div>
            </div>
        ` : '';

        const filtersHtml = allItems.length > 0 ? `
            <div class="ow-filters-bar">
                <div class="ow-filter-group">
                    <label for="ow-filter-chapter">Chapter</label>
                    <select id="ow-filter-chapter" class="ow-filter-select">
                        ${chapters.map(c => `<option value="${escapeHtml(c)}" ${c === filters.chapter ? 'selected' : ''}>${escapeHtml(c)}</option>`).join('')}
                    </select>
                </div>
                <div class="ow-filter-group">
                    <label for="ow-filter-topic">Topic</label>
                    <select id="ow-filter-topic" class="ow-filter-select">
                        ${topics.map(t => `<option value="${escapeHtml(t)}" ${t === filters.topic ? 'selected' : ''}>${escapeHtml(t)}</option>`).join('')}
                    </select>
                </div>
                <div class="ow-filter-group">
                    <label for="ow-filter-lesson">Lesson</label>
                    <select id="ow-filter-lesson" class="ow-filter-select">
                        ${lessons.map(l => `<option value="${escapeHtml(l)}" ${l === filters.lesson ? 'selected' : ''}>${escapeHtml(l)}</option>`).join('')}
                    </select>
                </div>
                <div class="ow-filter-group" style="flex:1.4 1 200px;">
                    <label for="ow-filter-search">Search Title</label>
                    <input type="search" id="ow-filter-search" class="ow-filter-input" value="${escapeHtml(filters.query)}" placeholder="Search Grade ${escapeHtml(g)} outstanding worksheets...">
                </div>
            </div>
        ` : '';

        const subtitleLine = selectedItem
            ? `<div class="ebook-current-topic"><i class="fa-solid fa-star"></i> Viewing Worksheet: <span>${escapeHtml(selectedItem.title)}</span></div>
               <div class="ow-selected-meta">
                   <span class="ow-meta-tag"><i class="fa-solid fa-bookmark"></i> ${escapeHtml(selectedItem.chapter || 'General Chapter')}</span>
                   <span class="ow-meta-tag"><i class="fa-solid fa-lightbulb"></i> ${escapeHtml(selectedItem.topic || 'Core Physics')}</span>
                   <span class="ow-meta-tag"><i class="fa-solid fa-book-open"></i> ${escapeHtml(selectedItem.lesson || 'All Lessons')}</span>
                   <span class="ow-meta-tag">${formatBytes(selectedItem.size)}</span>
               </div>`
            : '';

        const viewerOrEmptyHtml = selectedItem ? `
            <div class="ebook-actions">
                <button type="button" class="ebook-btn primary" id="ow-fullscreen-action-btn" title="Toggle Fullscreen Reading View">
                    <i class="fa-solid fa-expand"></i> <span>Fullscreen Reading View</span>
                </button>
            </div>

            ${topicSelectorHtml}

            <div class="pdf-viewer-wrapper" id="ow-pdf-viewer-wrapper">
                <div class="pdf-toolbar">
                    <div class="pdf-toolbar-group">
                        <button type="button" class="pdf-btn" id="ow-pdf-prev-btn" title="Previous Page (Left Arrow)">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                        <div class="pdf-page-indicator">
                            <span>Page</span>
                            <input type="number" id="ow-pdf-page-input" class="pdf-page-input" value="1" min="1" max="1" aria-label="Current Page">
                            <span>/ <span id="ow-pdf-total-pages">-</span></span>
                        </div>
                        <button type="button" class="pdf-btn" id="ow-pdf-next-btn" title="Next Page (Right Arrow)">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>

                    <div class="pdf-toolbar-group">
                        <button type="button" class="pdf-btn" id="ow-pdf-zoom-out-btn" title="Zoom Out (-)">
                            <i class="fa-solid fa-magnifying-glass-minus"></i>
                        </button>
                        <span class="pdf-zoom-label" id="ow-pdf-zoom-label">100%</span>
                        <button type="button" class="pdf-btn" id="ow-pdf-zoom-in-btn" title="Zoom In (+)">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                        </button>
                        <button type="button" class="pdf-btn" id="ow-pdf-fit-width-btn" title="Fit to Screen Width">
                            <i class="fa-solid fa-arrows-left-right"></i> <span class="btn-text">Fit</span>
                        </button>
                    </div>

                    <div class="pdf-toolbar-group">
                        <button type="button" class="pdf-btn pdf-btn-fullscreen" id="ow-pdf-fullscreen-btn" title="Toggle Fullscreen Reading View (Esc)">
                            <i class="fa-solid fa-expand" id="ow-pdf-fs-icon"></i> <span class="btn-text" id="ow-pdf-fs-text">Fullscreen</span>
                        </button>
                    </div>
                </div>

                <div class="pdf-scroll-container" id="ow-pdf-scroll-container">
                    <button type="button" class="pdf-floating-exit-btn" id="ow-pdf-floating-exit-btn" title="Exit Fullscreen Reading Mode">
                        <i class="fa-solid fa-xmark"></i> <span>Exit Fullscreen</span>
                    </button>
                    <div class="pdf-loading-card" id="ow-pdf-loading-card">
                        <i class="fa-solid fa-circle-notch fa-spin"></i>
                        <span id="ow-pdf-loading-status">Loading Outstanding Worksheet pages...</span>
                    </div>
                    <div id="ow-pdf-pages-mount"></div>
                </div>
            </div>

            <div class="ebook-notice" style="background: #f0fdf4; border: 1px solid #bbf7d0; color: #166534; border-radius: 8px; padding: 0.75rem 1.25rem; margin-top: 1rem;">
                <i class="fa-solid fa-shield-halved" style="color: #15803d; font-size: 1.15rem; margin-right: 8px;"></i>
                <div>
                    <span><strong>Protected Curriculum Viewer:</strong> Downloading, printing, and exporting are restricted for this Grade ${escapeHtml(g)} Outstanding Worksheet. Scroll smoothly across all pages on desktop, tablet, or mobile.</span>
                </div>
            </div>
        ` : loading ? `
            <div class="ebook-empty">
                <i class="fa-solid fa-circle-notch fa-spin"></i>
                <h3>Loading Grade ${escapeHtml(g)} Outstanding Worksheets...</h3>
                <p>Checking saved worksheets for Grade ${escapeHtml(g)}.</p>
            </div>
        ` : `
            ${topicSelectorHtml}
            <div class="ebook-empty">
                <i class="fa-solid fa-star"></i>
                <h3>No Outstanding Worksheets Found for Grade ${escapeHtml(g)}</h3>
                <p>${admin ? 'Click "Upload PDF Worksheet" above to add an Outstanding Worksheet for Grade ' + escapeHtml(g) + '.' : 'Grade ' + escapeHtml(g) + ' Outstanding Worksheets will appear here once uploaded by your teacher.'}</p>
            </div>
        `;

        container.innerHTML = `
            <div class="ebook-container">
                <div class="ebook-header" style="user-select: none;">
                    <h2>
                        <i class="fa-solid fa-star"></i> Grade ${escapeHtml(g)} Outstanding Worksheet
                        <span class="ow-grade-pill grade-${escapeHtml(g)}">Grade ${escapeHtml(g)} Only</span>
                    </h2>
                    ${subtitleLine}
                    <p>${selectedItem && selectedItem.description ? escapeHtml(selectedItem.description) : `Challenging practice worksheets curated exclusively for Grade ${escapeHtml(g)} Physics (Read-Only).`}</p>
                </div>

                ${adminBarHtml}
                ${filtersHtml}
                ${viewerOrEmptyHtml}
            </div>
            <div id="ow-modal-root"></div>
        `;

        wireViewEvents(g, selectedItem);
    }

    function wireViewEvents(grade, selectedItem) {
        const uploadBtn = document.getElementById('ow-upload-btn');
        if (uploadBtn) uploadBtn.onclick = () => openModal('upload');

        const editBtn = document.getElementById('ow-edit-btn');
        if (editBtn && selectedItem) editBtn.onclick = () => openModal('edit', selectedItem);

        const replaceBtn = document.getElementById('ow-replace-btn');
        if (replaceBtn && selectedItem) replaceBtn.onclick = () => openModal('replace', selectedItem);

        const deleteBtn = document.getElementById('ow-delete-btn');
        if (deleteBtn && selectedItem) {
            deleteBtn.onclick = async () => {
                if (!global.confirm(`Delete "${selectedItem.title}" from Grade ${grade} Outstanding Worksheets?`)) return;
                try {
                    await deleteWorksheetItem(grade, selectedItem.id);
                    renderView();
                } catch (err) {
                    global.alert((err && err.message) || 'Delete failed.');
                }
            };
        }

        const filters = getFilterState(grade);
        const chSel = document.getElementById('ow-filter-chapter');
        const tpSel = document.getElementById('ow-filter-topic');
        const lsSel = document.getElementById('ow-filter-lesson');
        const srchIn = document.getElementById('ow-filter-search');

        if (chSel) chSel.onchange = () => { filters.chapter = chSel.value; filters.topic = 'All'; filters.lesson = 'All'; renderView(); };
        if (tpSel) tpSel.onchange = () => { filters.topic = tpSel.value; filters.lesson = 'All'; renderView(); };
        if (lsSel) lsSel.onchange = () => { filters.lesson = lsSel.value; renderView(); };
        if (srchIn) {
            srchIn.oninput = (e) => {
                const caret = e.target.selectionStart;
                filters.query = e.target.value;
                renderView();
                const nextIn = document.getElementById('ow-filter-search');
                if (nextIn) {
                    nextIn.focus();
                    try { nextIn.setSelectionRange(caret, caret); } catch (err) {}
                }
            };
        }

        const pillsWrap = document.getElementById('ow-topic-pills');
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

    global.WISOutstandingWorksheets = {
        renderTab,
        onLeaveTab,
        refresh: (grade) => fetchWorksheetsForGrade(grade || state.activeGrade || global.currentGrade),
        isAdmin: isAdminUser
    };
})(window);
