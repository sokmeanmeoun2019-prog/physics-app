/**
 * KH-Ebook Section (Grades 7-12)
 * Independent Khmer-language physics ebook library & PDF.js reader.
 * Supports Node backend (/api/kh-ebooks), GitHub Pages (kh_ebooks/grade{g}/catalog.json + GitHub API),
 * and browser IndexedDB fallback without altering the existing English Ebook section.
 */
(function (global) {
    'use strict';

    const VALID_GRADES = ['7', '8', '9', '10', '11', '12'];
    const IDB_NAME = 'wis_kh_ebooks_v1';
    const IDB_STORE = 'ebooks';
    const IDB_VERSION = 1;
    const MAX_UPLOAD_MB = 150;

    const PDFJS_CMAP_URL = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/';
    const PDFJS_STANDARD_FONTS_URL = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/standard_fonts/';

    const state = {
        activeGrade: null,
        capabilitiesChecked: false,
        backendAvailable: false,
        canManage: false,
        ebooksByGrade: {},
        loadingGrade: {},
        selectedIdByGrade: {},
        selectedChapterByGrade: {},
        searchByGrade: {},
        modalState: null,
        reader: {
            grade: null,
            ebookId: null,
            pdfDoc: null,
            pageNum: 1,
            totalPages: 0,
            scale: 1.0,
            fitWidth: true,
            viewMode: 'scroll', // 'scroll' | 'single'
            isFullscreen: false,
            loading: false,
            error: null,
            activeRenderTasks: [],
            objectUrl: null,
            renderGeneration: 0
        }
    };

    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------
    function normalizeGrade(val) {
        const s = String(val == null ? '' : val).trim();
        return VALID_GRADES.includes(s) ? s : null;
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
        const base = String(name || 'Khmer Ebook')
            .replace(/\.pdf$/i, '')
            .replace(/[_-]+/g, ' ')
            .trim();
        return base || 'Khmer Ebook';
    }

    function deriveChapterFromName(name) {
        const raw = String(name || '');
        const khMatch = raw.match(/(ជំពូក(?:ទី)?\s*[០-៩0-9]+)/);
        if (khMatch) return khMatch[1].trim();
        const enMatch = raw.match(/(Chapter|Ch\.?|Unit|Lesson)\s*([0-9]+)/i);
        if (enMatch) return `Chapter ${enMatch[2]}`;
        return 'General';
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
            if (global.WISAuth && typeof global.WISAuth.isAdmin === 'function' && global.WISAuth.isAdmin()) {
                return true;
            }
            if (global.WISAuth && typeof global.WISAuth.getRole === 'function' && global.WISAuth.getRole() === 'admin') {
                return true;
            }
            if (!state.backendAvailable && isLocalHostEnv()) return true;
        } catch (e) {}
        return false;
    }

    function getGradeChapters(grade) {
        const items = state.ebooksByGrade[grade] || [];
        const set = new Set();
        for (const item of items) {
            const ch = (item.chapter || 'General').trim() || 'General';
            set.add(ch);
        }
        return ['All', ...Array.from(set)];
    }

    // --------------------------------------------------------------------------
    // IndexedDB Fallback (Offline / file:// / No-Backend Hosting)
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
            req.onerror = () => reject(req.error || new Error('IndexedDB open error'));
        });
    }

    async function idbListGrade(grade) {
        const db = await openIdb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, 'readonly');
            const store = tx.objectStore(IDB_STORE);
            const idx = store.index('grade');
            const req = idx.getAll(String(grade));
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
    // Backend & Static Catalog Discovery
    // --------------------------------------------------------------------------
    async function checkCapabilities() {
        state.capabilitiesChecked = true;
        if (!global.location || !global.location.protocol.startsWith('http')) {
            state.backendAvailable = false;
            return;
        }
        try {
            const res = await fetch(resolveUrl('api/kh-ebooks/capabilities'), {
                method: 'GET',
                credentials: 'include',
                cache: 'no-store'
            });
            if (res.ok) {
                const data = await res.json();
                if (data && (data.success || data.ok)) {
                    state.backendAvailable = true;
                    state.canManage = Boolean(data.canManage);
                    return;
                }
            }
        } catch (e) {}
        state.backendAvailable = false;
    }

    async function fetchGithubFolderEbooks(grade) {
        const discovered = [];
        const gh = getGitHubRepoInfo();
        if (!gh) return discovered;
        try {
            const apiUrl = `https://api.github.com/repos/${gh.owner}/${gh.repo}/contents/kh_ebooks/grade${grade}`;
            const res = await fetch(apiUrl, { method: 'GET', cache: 'no-store' });
            if (!res.ok) return discovered;
            const entries = await res.json();
            if (!Array.isArray(entries)) return discovered;
            for (const entry of entries) {
                if (!entry || entry.type !== 'file') continue;
                const name = String(entry.name || '');
                if (!name.toLowerCase().endsWith('.pdf')) continue;
                const relUrl = `kh_ebooks/grade${grade}/${encodeURIComponent(name)}`;
                discovered.push({
                    id: `gh-g${grade}-${name.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
                    grade: String(grade),
                    title: deriveTitleFromName(name),
                    chapter: deriveChapterFromName(name),
                    description: '',
                    originalName: name,
                    storedName: name,
                    url: relUrl,
                    size: Number(entry.size) || 0,
                    createdAt: '',
                    updatedAt: '',
                    source: 'folder'
                });
            }
        } catch (e) {}
        return discovered;
    }

    async function fetchLocalHttpDirEbooks(grade) {
        const discovered = [];
        if (!isLocalHostEnv() || !global.location.protocol.startsWith('http')) return discovered;
        try {
            const dirUrl = resolveUrl(`kh_ebooks/grade${grade}/`);
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
                    id: `dir-g${grade}-${decodedName.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
                    grade: String(grade),
                    title: deriveTitleFromName(decodedName),
                    chapter: deriveChapterFromName(decodedName),
                    description: '',
                    originalName: decodedName,
                    storedName: decodedName,
                    url: `kh_ebooks/grade${grade}/${encodeURIComponent(decodedName)}`,
                    size: 0,
                    createdAt: '',
                    updatedAt: '',
                    source: 'folder'
                });
            }
        } catch (e) {}
        return discovered;
    }

    async function fetchStaticFolderCatalog(grade) {
        let catalogItems = [];
        try {
            const url = resolveUrl(`kh_ebooks/grade${grade}/catalog.json?t=${Date.now()}`);
            const res = await fetch(url, { method: 'GET', cache: 'no-store' });
            if (res.ok) {
                const data = await res.json();
                if (data && Array.isArray(data.ebooks)) {
                    catalogItems = data.ebooks
                        .filter(item => item && String(item.grade) === String(grade) && item.url)
                        .map(item => ({ ...item, source: 'folder' }));
                }
            }
        } catch (e) {}

        let autoItems = await fetchGithubFolderEbooks(grade);
        if (autoItems.length === 0) {
            autoItems = await fetchLocalHttpDirEbooks(grade);
        }
        if (autoItems.length === 0) {
            if (catalogItems.length > 0) return catalogItems;
            const bundled = global.KH_EBOOKS_CATALOG && global.KH_EBOOKS_CATALOG[String(grade)];
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

    async function fetchEbooksForGrade(grade) {
        const g = normalizeGrade(grade);
        if (!g) return [];
        state.loadingGrade[g] = true;

        if (!state.capabilitiesChecked) {
            await checkCapabilities();
        }

        try {
            if (state.backendAvailable) {
                const res = await fetch(resolveUrl(`api/kh-ebooks?grade=${encodeURIComponent(g)}`), {
                    method: 'GET',
                    credentials: 'include',
                    cache: 'no-store'
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data && Array.isArray(data.ebooks)) {
                        state.ebooksByGrade[g] = data.ebooks
                            .filter(item => item && String(item.grade) === g)
                            .map(item => ({ ...item, source: 'server-folder' }));
                        if (typeof data.canManage === 'boolean') {
                            state.canManage = data.canManage || state.canManage;
                        }
                        return state.ebooksByGrade[g];
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
            state.ebooksByGrade[g] = [
                ...folderItems,
                ...cleanLocal.filter(item => !folderIds.has(item.id))
            ];
            return state.ebooksByGrade[g];
        } catch (e) {
            state.ebooksByGrade[g] = state.ebooksByGrade[g] || [];
            return state.ebooksByGrade[g];
        } finally {
            state.loadingGrade[g] = false;
        }
    }

    // --------------------------------------------------------------------------
    // Upload / Replace / Update / Delete Operations
    // --------------------------------------------------------------------------
    async function uploadEbookFile(grade, file, meta) {
        const g = normalizeGrade(grade);
        if (!g) throw new Error('Invalid grade selected.');
        if (!file) throw new Error('Please choose a PDF file.');
        if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
            throw new Error('Only PDF (.pdf) files are supported.');
        }
        if (file.size > MAX_UPLOAD_MB * 1024 * 1024) {
            throw new Error(`PDF exceeds the ${MAX_UPLOAD_MB} MB limit.`);
        }

        if (!state.capabilitiesChecked) await checkCapabilities();

        const title = (meta.title || '').trim() || deriveTitleFromName(file.name);
        const chapter = (meta.chapter || '').trim() || deriveChapterFromName(file.name);
        const description = (meta.description || '').trim();

        if (state.backendAvailable) {
            const buf = await file.arrayBuffer();
            const qs = new URLSearchParams({
                grade: g,
                filename: file.name,
                title,
                chapter,
                description
            });
            const res = await fetch(resolveUrl(`api/kh-ebooks/upload?${qs.toString()}`), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/pdf' },
                body: buf
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || (!data.success && !data.ok)) {
                throw new Error(data.message || data.error || `Upload failed (${res.status})`);
            }
            await fetchEbooksForGrade(g);
            return data.ebook;
        }

        // Local IndexedDB fallback
        const buf = await file.arrayBuffer();
        const id = `local-kheb-${g}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
        const now = new Date().toISOString();
        const record = {
            id,
            grade: g,
            title,
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
        await fetchEbooksForGrade(g);
        return record;
    }

    async function replaceEbookFile(grade, id, file, meta) {
        const g = normalizeGrade(grade);
        if (!g || !id) throw new Error('Missing ebook reference.');
        if (!file) throw new Error('Please choose a replacement PDF file.');
        if (!file.name.toLowerCase().endsWith('.pdf') && file.type !== 'application/pdf') {
            throw new Error('Only PDF (.pdf) files are supported.');
        }

        const existingList = state.ebooksByGrade[g] || [];
        const existing = existingList.find(item => item.id === id);

        if (state.backendAvailable && existing && existing.source !== 'idb') {
            const buf = await file.arrayBuffer();
            const qs = new URLSearchParams({
                grade: g,
                id,
                filename: file.name,
                title: (meta.title || '').trim(),
                chapter: (meta.chapter || '').trim(),
                description: (meta.description || '').trim()
            });
            const res = await fetch(resolveUrl(`api/kh-ebooks/replace?${qs.toString()}`), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/pdf' },
                body: buf
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || (!data.success && !data.ok)) {
                throw new Error(data.message || data.error || `Replace failed (${res.status})`);
            }
            await fetchEbooksForGrade(g);
            return data.ebook;
        }

        // IndexedDB update
        const buf = await file.arrayBuffer();
        const currentIdb = await idbGetById(id);
        const now = new Date().toISOString();
        const updated = {
            ...(currentIdb || existing || {}),
            id,
            grade: g,
            title: (meta.title || '').trim() || deriveTitleFromName(file.name),
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
        await fetchEbooksForGrade(g);
        return updated;
    }

    async function updateEbookMetadata(grade, id, meta) {
        const g = normalizeGrade(grade);
        if (!g || !id) throw new Error('Missing ebook reference.');
        const existing = (state.ebooksByGrade[g] || []).find(item => item.id === id);

        if (state.backendAvailable && existing && existing.source !== 'idb') {
            const res = await fetch(resolveUrl('api/kh-ebooks/update'), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    grade: g,
                    id,
                    title: (meta.title || '').trim(),
                    chapter: (meta.chapter || '').trim(),
                    description: (meta.description || '').trim()
                })
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || (!data.success && !data.ok)) {
                throw new Error(data.message || data.error || `Update failed (${res.status})`);
            }
            await fetchEbooksForGrade(g);
            return data.ebook;
        }

        const currentIdb = await idbGetById(id);
        if (!currentIdb) {
            throw new Error('Static repository ebooks can only be edited when running the backend server.');
        }
        const updated = {
            ...currentIdb,
            title: (meta.title || '').trim() || currentIdb.title,
            chapter: (meta.chapter || '').trim() || currentIdb.chapter,
            description: (meta.description || '').trim(),
            updatedAt: new Date().toISOString()
        };
        await idbPutRecord(updated);
        await fetchEbooksForGrade(g);
        return updated;
    }

    async function deleteEbookItem(grade, id) {
        const g = normalizeGrade(grade);
        if (!g || !id) return;
        const existing = (state.ebooksByGrade[g] || []).find(item => item.id === id);

        if (state.backendAvailable && existing && existing.source !== 'idb') {
            const res = await fetch(resolveUrl('api/kh-ebooks/delete'), {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ grade: g, id })
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || (!data.success && !data.ok)) {
                throw new Error(data.message || data.error || `Delete failed (${res.status})`);
            }
        } else {
            await idbDeleteRecord(id);
        }

        if (state.reader.ebookId === id) {
            destroyActivePdfSession();
            state.reader.ebookId = null;
        }
        if (state.selectedIdByGrade[g] === id) {
            delete state.selectedIdByGrade[g];
        }
        await fetchEbooksForGrade(g);
    }

    // --------------------------------------------------------------------------
    // PDF.js Reader Lifecycle (Blob Worker + XHR/disableWorker Fallbacks + Lazy Scroll)
    // --------------------------------------------------------------------------
    let cachedWorkerBlobUrl = null;

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

    function getPdfJsAssetBase(pdfjs) {
        const ver = (pdfjs && pdfjs.version) || '3.11.174';
        return {
            cMapUrl: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${ver}/cmaps/`,
            standardFontDataUrl: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${ver}/standard_fonts/`
        };
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

    function cancelRenderTasksOnly() {
        for (const task of state.reader.activeRenderTasks) {
            try {
                if (task && typeof task.cancel === 'function') task.cancel();
            } catch (e) {}
        }
        state.reader.activeRenderTasks = [];
    }

    function cancelActiveRenderTasks() {
        if (state.reader.observer) {
            try { state.reader.observer.disconnect(); } catch (e) {}
            state.reader.observer = null;
        }
        cancelRenderTasksOnly();
    }

    function destroyActivePdfSession() {
        state.reader.renderGeneration += 1;
        cancelActiveRenderTasks();
        if (state.reader.viewportCtrl) {
            try { state.reader.viewportCtrl.destroy(); } catch (e) {}
            state.reader.viewportCtrl = null;
        }
        if (state.reader.pdfDoc) {
            try {
                state.reader.pdfDoc.destroy();
            } catch (e) {}
            state.reader.pdfDoc = null;
        }
        if (state.reader.objectUrl) {
            try {
                URL.revokeObjectURL(state.reader.objectUrl);
            } catch (e) {}
            state.reader.objectUrl = null;
        }
        state.reader.pageNum = 1;
        state.reader.totalPages = 0;
        state.reader.loading = false;
        state.reader.error = null;
    }

    async function loadAndRenderEbook(grade, ebook) {
        const g = normalizeGrade(grade);
        if (!g || !ebook) return;

        destroyActivePdfSession();
        const gen = ++state.reader.renderGeneration;

        state.reader.grade = g;
        state.reader.ebookId = ebook.id;
        state.reader.loading = true;
        state.reader.error = null;
        state.selectedIdByGrade[g] = ebook.id;

        updateViewerHeaderAndControls();
        renderStageMessage('<i class="fa-solid fa-spinner fa-spin"></i><p>កំពុងបើកសៀវភៅ (Loading Khmer Ebook PDF...)</p>');

        function renderDiagnosticFallback(errMsg, candidateUrl) {
            const stage = document.getElementById('kheb-viewer-stage');
            if (!stage) return;
            const isFileMode = Boolean(global.location && global.location.protocol === 'file:');
            const safeOpenUrl = candidateUrl ? escapeHtml(resolveUrl(candidateUrl)) : '';
            stage.innerHTML = `
                <div class="kheb-loading-overlay" style="max-width:520px;padding:1.5rem;text-align:center;">
                    <i class="fa-solid fa-file-circle-exclamation" style="font-size:2.4rem;color:#fbbf24;"></i>
                    <p style="font-weight:700;font-size:1.05rem;margin:0.25rem 0;">
                        ${isFileMode ? 'Browser Blocked Direct file:// PDF Access' : 'Unable to Render PDF in Embedded Canvas'}
                    </p>
                    <p style="font-size:0.86rem;color:#cbd5e1;line-height:1.5;margin:0;">
                        ${isFileMode
                            ? 'Chrome/Edge blocks reading local PDF bytes when opening <code>index.html</code> directly via <code>file://</code>. Double-click <strong>Preview_Website_Locally.bat</strong> in your project folder (opens <code>http://localhost:3000</code>), or open this textbook directly below.'
                            : escapeHtml(errMsg || 'Unable to load PDF bytes.')}
                    </p>
                    ${safeOpenUrl ? `
                        <div style="display:flex;flex-wrap:wrap;gap:0.5rem;justify-content:center;margin-top:0.5rem;">
                            <a href="${safeOpenUrl}" target="_blank" rel="noopener noreferrer" class="kheb-btn kheb-btn-primary" style="text-decoration:none;">
                                <i class="fa-solid fa-arrow-up-right-from-square"></i> Open PDF in New Tab
                            </a>
                        </div>
                    ` : ''}
                </div>
            `;
        }

        try {
            const pdfjs = global.pdfjsLib || global['pdfjs-dist/build/pdf'] || global.PDFJS;
            if (!pdfjs) {
                throw new Error('PDF viewer engine (PDF.js) is still loading. Please check internet/CDN access or retry.');
            }
            ensurePdfJsWorker(pdfjs);
            const { cMapUrl, standardFontDataUrl } = getPdfJsAssetBase(pdfjs);

            let pdfDoc = null;
            let lastErr = null;

            if (ebook.source === 'idb') {
                const rec = await idbGetById(ebook.id);
                if (!rec || !rec.fileData) {
                    throw new Error('Local ebook file data was not found.');
                }
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
                } catch (wErr) {
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
                const candidateUrls = [];
                if (state.backendAvailable && ebook.source === 'server-folder') {
                    candidateUrls.push(resolveUrl(`api/kh-ebooks/file/${encodeURIComponent(g)}/${encodeURIComponent(ebook.id)}`));
                }
                if (ebook.url) {
                    const u = resolveUrl(ebook.url);
                    if (!candidateUrls.includes(u)) candidateUrls.push(u);
                }

                // Tier 1: High-speed HTTP Range streaming (for http/https servers)
                if (global.location && global.location.protocol.startsWith('http')) {
                    for (const u of candidateUrls) {
                        if (gen !== state.reader.renderGeneration) return;
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

                // Tier 2 & 3: Direct ArrayBuffer download + Blob worker -> disableWorker: true fallback
                if (!pdfDoc) {
                    for (const u of candidateUrls) {
                        if (gen !== state.reader.renderGeneration) return;
                        try {
                            const buf = await fetchPdfArrayBuffer(u, state.backendAvailable);
                            if (gen !== state.reader.renderGeneration) return;
                            const bytes = new Uint8Array(buf);
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

                if (!pdfDoc) {
                    throw lastErr || new Error('Could not load PDF document.');
                }
            }

            if (gen !== state.reader.renderGeneration) {
                try { pdfDoc.destroy(); } catch (e) {}
                return;
            }

            state.reader.pdfDoc = pdfDoc;
            state.reader.totalPages = pdfDoc.numPages;
            state.reader.pageNum = 1;
            state.reader.loading = false;

            updateViewerHeaderAndControls();
            await renderReaderPages();
        } catch (err) {
            if (gen !== state.reader.renderGeneration) return;
            state.reader.loading = false;
            state.reader.error = err && err.message ? err.message : 'Unable to render this PDF file.';
            renderDiagnosticFallback(state.reader.error, ebook.url);
            updateViewerHeaderAndControls();
        }
    }

    function renderStageMessage(html) {
        const stage = document.getElementById('kheb-viewer-stage');
        if (!stage) return;
        stage.innerHTML = `<div class="kheb-loading-overlay">${html}</div>`;
    }

    function getFitScaleForWidth(baseWidth, stageWidth) {
        const targetWidth = Math.max(260, (stageWidth || 720) - 36);
        const fit = targetWidth / Math.max(1, baseWidth || 595);
        return Math.max(0.45, Math.min(2.6, fit));
    }

    function computeEffectiveScale(page, stageWidth) {
        const baseViewport = page.getViewport({ scale: 1.0 });
        if (!state.reader.fitWidth) return state.reader.scale;
        return getFitScaleForWidth(baseViewport.width, stageWidth);
    }

    function getCurrentEffectiveScale(stageWidth) {
        if (!state.reader.fitWidth) return state.reader.scale;
        return getFitScaleForWidth(state.reader.baseW || 595, stageWidth || 720);
    }

    async function renderCanvasIntoFrame(pageNum, frame, stageWidth, gen) {
        if (!state.reader.pdfDoc || gen !== state.reader.renderGeneration) return;
        if (!frame || frame.dataset.rendered === '1' || frame.dataset.rendering === '1') return;
        frame.dataset.rendering = '1';

        try {
            const page = await state.reader.pdfDoc.getPage(pageNum);
            if (gen !== state.reader.renderGeneration) return;

            const scale = computeEffectiveScale(page, stageWidth || 720);
            const viewport = page.getViewport({ scale });
            const dpr = Math.min(global.devicePixelRatio || 1, 2);

            frame.style.width = `${Math.floor(viewport.width)}px`;
            frame.style.height = `${Math.floor(viewport.height)}px`;

            let canvas = frame.querySelector('canvas');
            if (!canvas) {
                canvas = document.createElement('canvas');
                canvas.className = 'kheb-page-canvas';
                frame.insertBefore(canvas, frame.firstChild);
            }
            const isReRender = canvas.dataset.hasRender === '1' && canvas.width > 0;
            const targetCanvas = isReRender ? document.createElement('canvas') : canvas;

            targetCanvas.width = Math.floor(viewport.width * dpr);
            targetCanvas.height = Math.floor(viewport.height * dpr);
            canvas.style.width = '100%';
            canvas.style.height = '100%';

            const placeholder = frame.querySelector('.kheb-page-placeholder');
            if (placeholder) placeholder.remove();

            const ctx = targetCanvas.getContext('2d', { alpha: false });
            const renderCtx = {
                canvasContext: ctx,
                viewport,
                transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null
            };
            const task = page.render(renderCtx);
            state.reader.activeRenderTasks.push(task);
            await task.promise;
            if (gen !== state.reader.renderGeneration) return;
            if (isReRender && global.WISPdfViewport) {
                global.WISPdfViewport.blitCanvas(canvas, targetCanvas);
            }
            canvas.dataset.hasRender = '1';
            frame.dataset.rendered = '1';
        } catch (err) {
            if (!err || err.name !== 'RenderingCancelledException') {
                console.warn(`KH-Ebook page ${pageNum} render notice:`, err);
            }
        } finally {
            frame.dataset.rendering = '0';
        }
    }

    async function renderReaderPages() {
        const stage = document.getElementById('kheb-viewer-stage');
        if (!stage || !state.reader.pdfDoc) return;

        cancelActiveRenderTasks();
        const gen = state.reader.renderGeneration;
        stage.innerHTML = '';

        const stageWidth = stage.clientWidth || 720;
        const firstPage = await state.reader.pdfDoc.getPage(state.reader.viewMode === 'single' ? state.reader.pageNum : 1);
        if (gen !== state.reader.renderGeneration) return;

        const baseVp1 = firstPage.getViewport({ scale: 1.0 });
        state.reader.baseW = baseVp1.width;
        state.reader.baseH = baseVp1.height;
        state.reader.lastFitScale = getFitScaleForWidth(baseVp1.width, stageWidth);

        const baseScale = computeEffectiveScale(firstPage, stageWidth);
        const baseViewport = firstPage.getViewport({ scale: baseScale });
        const estW = Math.floor(baseViewport.width);
        const estH = Math.floor(baseViewport.height);

        const mount = document.createElement('div');
        mount.className = 'kheb-pages-mount';
        mount.id = 'kheb-pages-mount';
        stage.appendChild(mount);

        if (state.reader.viewMode === 'single') {
            const p = state.reader.pageNum;
            const frame = document.createElement('div');
            frame.className = 'kheb-page-frame';
            frame.dataset.page = String(p);
            frame.style.width = `${estW}px`;
            frame.style.height = `${estH}px`;
            const badge = document.createElement('div');
            badge.className = 'kheb-page-badge';
            badge.textContent = `${p} / ${state.reader.totalPages}`;
            frame.appendChild(badge);
            mount.appendChild(frame);
            stage.scrollTop = 0;
            stage.scrollLeft = 0;
            await renderCanvasIntoFrame(p, frame, stageWidth, gen);
            updateViewerHeaderAndControls();
            if (state.reader.viewportCtrl) state.reader.viewportCtrl.resetWidthTracking();
            return;
        }

        const total = state.reader.totalPages;
        const frag = document.createDocumentFragment();
        const frames = [];
        for (let p = 1; p <= total; p++) {
            const frame = document.createElement('div');
            frame.className = 'kheb-page-frame';
            frame.dataset.page = String(p);
            frame.style.width = `${estW}px`;
            frame.style.height = `${estH}px`;
            frame.innerHTML = `
                <div class="kheb-page-placeholder" style="display:flex;align-items:center;justify-content:center;height:100%;color:#64748b;font-size:0.9rem;">
                    <span>Page ${p} / ${total}</span>
                </div>
                <div class="kheb-page-badge">${p} / ${total}</div>
            `;
            frames.push(frame);
            frag.appendChild(frame);
        }
        mount.appendChild(frag);

        // Render initial pages immediately
        const initialCount = Math.min(total, 3);
        for (let i = 0; i < initialCount; i++) {
            if (gen !== state.reader.renderGeneration) return;
            await renderCanvasIntoFrame(i + 1, frames[i], stageWidth, gen);
        }
        updateViewerHeaderAndControls();
        if (state.reader.viewportCtrl) state.reader.viewportCtrl.resetWidthTracking();

        // Lazy-render remaining pages as student scrolls
        if (typeof IntersectionObserver === 'function') {
            const observer = new IntersectionObserver((entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting || gen !== state.reader.renderGeneration) continue;
                    const frame = entry.target;
                    const pNum = Number(frame.dataset.page) || 1;
                    renderCanvasIntoFrame(pNum, frame, stage.clientWidth || stageWidth, gen);
                }
            }, {
                root: stage,
                rootMargin: '700px 0px',
                threshold: 0.01
            });
            state.reader.observer = observer;
            for (const f of frames) observer.observe(f);
        }
    }

    function flushVisibleReaderFrames() {
        const stage = document.getElementById('kheb-viewer-stage');
        if (!stage || !state.reader.pdfDoc) return;
        const gen = state.reader.renderGeneration;
        const stageWidth = stage.clientWidth || 720;
        const renderByNum = (pNum) => {
            const frame = stage.querySelector(`.kheb-page-frame[data-page="${pNum}"]`);
            if (frame) renderCanvasIntoFrame(pNum, frame, stageWidth, gen);
        };
        if (global.WISPdfViewport) {
            global.WISPdfViewport.renderVisibleCards(stage, '.kheb-page-frame', renderByNum, state.reader.pageNum, state.reader.totalPages, 650);
        } else {
            renderByNum(state.reader.pageNum);
        }
    }

    function applyZoomPreservingPosition(newScale, zoomMeta) {
        if (!state.reader.pdfDoc) return;
        const stage = document.getElementById('kheb-viewer-stage');
        const vpc = global.WISPdfViewport;

        const isFit = Boolean(zoomMeta && zoomMeta.isFitWidth);
        const stageWidth = stage ? (stage.clientWidth || 720) : 720;
        const anchor = (zoomMeta && zoomMeta.anchor)
            || (stage && vpc && vpc.captureAnchor(stage, '.kheb-page-frame', zoomMeta && zoomMeta.clientX, zoomMeta && zoomMeta.clientY))
            || null;

        if (isFit) {
            state.reader.fitWidth = true;
            state.reader.scale = getFitScaleForWidth(state.reader.baseW || 595, stageWidth);
        } else {
            state.reader.fitWidth = false;
            state.reader.scale = Math.max(0.45, Math.min(3.0, Math.round(newScale * 100) / 100));
        }

        const effectiveScale = getCurrentEffectiveScale(stageWidth);
        const estW = Math.floor((state.reader.baseW || 595) * effectiveScale);
        const estH = Math.floor((state.reader.baseH || 842) * effectiveScale);

        cancelRenderTasksOnly();

        if (stage) {
            stage.querySelectorAll('.kheb-page-frame').forEach(frame => {
                frame.style.width = `${estW}px`;
                frame.style.height = `${estH}px`;
                frame.dataset.rendered = '0';
                frame.dataset.rendering = '0';
            });
            if (vpc && anchor) {
                vpc.restoreAnchor(stage, anchor);
            }
        }

        updateViewerHeaderAndControls();

        if (!zoomMeta || !zoomMeta.quickResize) {
            flushVisibleReaderFrames();
        }
    }

    function setZoom(deltaOrExact, isFitWidth) {
        if (!state.reader.pdfDoc) return;
        const stage = document.getElementById('kheb-viewer-stage');
        const stageWidth = stage ? (stage.clientWidth || 720) : 720;
        if (isFitWidth) {
            applyZoomPreservingPosition(1.0, { isFitWidth: true });
            return;
        }
        const curEffective = getCurrentEffectiveScale(stageWidth);
        const next = typeof deltaOrExact === 'number'
            ? (curEffective + deltaOrExact)
            : 1.0;
        applyZoomPreservingPosition(next, { isFitWidth: false });
    }

    function toggleViewMode() {
        if (!state.reader.pdfDoc) return;
        state.reader.viewMode = state.reader.viewMode === 'scroll' ? 'single' : 'scroll';
        updateViewerHeaderAndControls();
        renderReaderPages();
    }

    async function toggleFullscreen() {
        const wrapper = document.getElementById('kheb-viewer-wrapper');
        if (!wrapper) return;

        const stage = document.getElementById('kheb-viewer-stage');
        const fsAnchor = (stage && global.WISPdfViewport)
            ? global.WISPdfViewport.captureAnchor(stage, '.kheb-page-frame')
            : null;
        const fsEl = document.fullscreenElement || document.webkitFullscreenElement;
        try {
            if (fsEl === wrapper || state.reader.isFullscreen) {
                if (fsEl && document.exitFullscreen) {
                    await document.exitFullscreen();
                } else if (fsEl && document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
                wrapper.classList.remove('kheb-is-fullscreen');
                state.reader.isFullscreen = false;
            } else {
                if (wrapper.requestFullscreen) {
                    await wrapper.requestFullscreen();
                } else if (wrapper.webkitRequestFullscreen) {
                    wrapper.webkitRequestFullscreen();
                } else {
                    wrapper.classList.add('kheb-is-fullscreen');
                }
                state.reader.isFullscreen = true;
            }
        } catch (e) {
            // CSS fixed viewport fallback for mobile Safari / strict webviews
            const willEnable = !wrapper.classList.contains('kheb-is-fullscreen');
            wrapper.classList.toggle('kheb-is-fullscreen', willEnable);
            state.reader.isFullscreen = willEnable;
        }
        updateViewerHeaderAndControls();
        if (state.reader.pdfDoc) {
            setTimeout(() => {
                if (!state.reader.pdfDoc) return;
                if (state.reader.fitWidth) {
                    applyZoomPreservingPosition(1.0, { isFitWidth: true, anchor: fsAnchor });
                } else if (stage && global.WISPdfViewport && fsAnchor) {
                    global.WISPdfViewport.restoreAnchor(stage, fsAnchor);
                }
                if (state.reader.viewportCtrl) state.reader.viewportCtrl.resetWidthTracking();
            }, 120);
        }
    }

    function updateViewerHeaderAndControls() {
        const titleEl = document.getElementById('kheb-viewer-doc-title');
        const totalEl = document.getElementById('kheb-total-pages');
        const inputEl = document.getElementById('kheb-page-input');
        const zoomEl = document.getElementById('kheb-zoom-label');
        const prevBtn = document.getElementById('kheb-prev-btn');
        const nextBtn = document.getElementById('kheb-next-btn');
        const fitBtn = document.getElementById('kheb-fit-btn');
        const modeBtn = document.getElementById('kheb-mode-btn');
        const fsBtn = document.getElementById('kheb-fs-btn');

        const g = state.activeGrade;
        const ebook = (state.ebooksByGrade[g] || []).find(item => item.id === state.reader.ebookId);

        if (titleEl) {
            titleEl.textContent = ebook ? ebook.title : 'ជ្រើសរើសសៀវភៅ (Select a Khmer Ebook)';
        }
        if (totalEl) totalEl.textContent = `/ ${state.reader.totalPages || 0}`;
        if (inputEl) {
            inputEl.value = state.reader.totalPages ? String(state.reader.pageNum) : '0';
            inputEl.max = String(Math.max(1, state.reader.totalPages || 1));
            inputEl.disabled = !state.reader.pdfDoc;
        }
        if (zoomEl) {
            zoomEl.textContent = state.reader.fitWidth ? 'Fit' : `${Math.round(state.reader.scale * 100)}%`;
        }
        if (prevBtn) prevBtn.disabled = !state.reader.pdfDoc || state.reader.pageNum <= 1;
        if (nextBtn) nextBtn.disabled = !state.reader.pdfDoc || state.reader.pageNum >= state.reader.totalPages;
        if (fitBtn) fitBtn.classList.toggle('active', state.reader.fitWidth);
        if (modeBtn) {
            modeBtn.classList.toggle('active', state.reader.viewMode === 'single');
            modeBtn.innerHTML = state.reader.viewMode === 'single'
                ? '<i class="fa-regular fa-file"></i> Single'
                : '<i class="fa-solid fa-scroll"></i> Scroll';
        }
        if (fsBtn) {
            fsBtn.innerHTML = state.reader.isFullscreen
                ? '<i class="fa-solid fa-compress"></i>'
                : '<i class="fa-solid fa-expand"></i>';
        }
    }

    function bindStageInteractions() {
        const stage = document.getElementById('kheb-viewer-stage');
        if (!stage || stage.dataset.khebBound === '1') return;
        stage.dataset.khebBound = '1';

        stage.addEventListener('contextmenu', (e) => e.preventDefault());

        // Track active page while scrolling in scroll mode
        let scrollTimer = null;
        stage.addEventListener('scroll', () => {
            if (!state.reader.pdfDoc || state.reader.viewMode !== 'scroll') return;
            clearTimeout(scrollTimer);
            scrollTimer = setTimeout(() => {
                const frames = stage.querySelectorAll('.kheb-page-frame');
                const stageTop = stage.getBoundingClientRect().top;
                let closestPage = state.reader.pageNum;
                let bestDist = Infinity;
                for (const fr of frames) {
                    const dist = Math.abs(fr.getBoundingClientRect().top - stageTop - 16);
                    if (dist < bestDist) {
                        bestDist = dist;
                        closestPage = Number(fr.dataset.page) || closestPage;
                    }
                }
                if (closestPage !== state.reader.pageNum) {
                    state.reader.pageNum = closestPage;
                    const inputEl = document.getElementById('kheb-page-input');
                    const prevBtn = document.getElementById('kheb-prev-btn');
                    const nextBtn = document.getElementById('kheb-next-btn');
                    if (inputEl && document.activeElement !== inputEl) inputEl.value = String(closestPage);
                    if (prevBtn) prevBtn.disabled = closestPage <= 1;
                    if (nextBtn) nextBtn.disabled = closestPage >= state.reader.totalPages;
                }
                flushVisibleReaderFrames();
            }, 90);
        });

        if (state.reader.viewportCtrl) {
            try { state.reader.viewportCtrl.destroy(); } catch (e) {}
            state.reader.viewportCtrl = null;
        }
        if (global.WISPdfViewport) {
            state.reader.viewportCtrl = global.WISPdfViewport.attach({
                scrollContainer: stage,
                getContentTarget: () => document.getElementById('kheb-pages-mount'),
                cardSelector: '.kheb-page-frame',
                minScale: 0.45,
                maxScale: 3.0,
                getScale: () => getCurrentEffectiveScale(stage.clientWidth || 720),
                onPreviewScale: (cand) => {
                    const zoomEl = document.getElementById('kheb-zoom-label');
                    if (zoomEl) zoomEl.textContent = `${Math.round(cand * 100)}%`;
                },
                onApplyZoom: (nextScale, zoomMeta) => {
                    applyZoomPreservingPosition(nextScale, zoomMeta);
                },
                onFlushRender: flushVisibleReaderFrames,
                onWidthChange: (newW, prevW, anchor) => {
                    if (!state.reader.pdfDoc) return;
                    if (state.reader.fitWidth) {
                        applyZoomPreservingPosition(1.0, { isFitWidth: true, anchor: anchor });
                    } else if (anchor) {
                        global.WISPdfViewport.restoreAnchor(stage, anchor);
                    }
                }
            });
        }

        // Touch swipe for single-page mode (strictly disabled while zoomed horizontally or pinching)
        let touchStartX = 0;
        let touchStartY = 0;
        let touchSingleValid = false;
        stage.addEventListener('touchstart', (e) => {
            if (e.touches && e.touches.length === 1) {
                touchStartX = e.touches[0].clientX;
                touchStartY = e.touches[0].clientY;
                touchSingleValid = true;
            } else {
                touchSingleValid = false;
            }
        }, { passive: true });

        stage.addEventListener('touchend', (e) => {
            if (!touchSingleValid || state.reader.viewMode !== 'single' || !state.reader.pdfDoc) return;
            touchSingleValid = false;
            if (state.reader.viewportCtrl && state.reader.viewportCtrl.wasRecentlyPinching(300)) return;
            if (stage.scrollWidth > stage.clientWidth + 4) return;
            if (!e.changedTouches || e.changedTouches.length !== 1) return;
            const dx = e.changedTouches[0].clientX - touchStartX;
            const dy = e.changedTouches[0].clientY - touchStartY;
            if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.6) {
                if (dx < 0 && state.reader.pageNum < state.reader.totalPages) {
                    goToPage(state.reader.pageNum + 1);
                } else if (dx > 0 && state.reader.pageNum > 1) {
                    goToPage(state.reader.pageNum - 1);
                }
            }
        }, { passive: true });
    }

    // --------------------------------------------------------------------------
    // Admin Modal (Upload / Replace / Edit)
    // --------------------------------------------------------------------------
    function openModal(mode, ebookOpt) {
        const g = state.activeGrade;
        if (!g) return;
        state.modalState = {
            mode, // 'upload' | 'replace' | 'edit'
            grade: g,
            ebook: ebookOpt || null,
            file: null,
            submitting: false,
            error: ''
        };
        renderModal();
    }

    function closeModal() {
        state.modalState = null;
        const root = document.getElementById('kheb-modal-root');
        if (root) root.innerHTML = '';
    }

    function renderModal() {
        const root = document.getElementById('kheb-modal-root');
        if (!root) return;
        const ms = state.modalState;
        if (!ms) {
            root.innerHTML = '';
            return;
        }

        const isEdit = ms.mode === 'edit';
        const isReplace = ms.mode === 'replace';
        const titleText = isEdit
            ? 'កែប្រែព័ត៌មានសៀវភៅ (Edit KH-Ebook Details)'
            : isReplace
                ? 'ជំនួសឯកសារ PDF (Replace KH-Ebook PDF)'
                : `បន្ថែមសៀវភៅ KH-Ebook ថ្នាក់ទី ${ms.grade} (Upload PDF)`;

        const curTitle = ms.ebook ? ms.ebook.title : '';
        const curChapter = ms.ebook ? ms.ebook.chapter : 'ជំពូកទី ១';
        const curDesc = ms.ebook ? ms.ebook.description : '';

        root.innerHTML = `
            <div class="kheb-modal-backdrop" id="kheb-modal-backdrop">
                <div class="kheb-modal" role="dialog" aria-modal="true" aria-label="${escapeHtml(titleText)}">
                    <div class="kheb-modal-header">
                        <h3><i class="fa-solid fa-book-open"></i> ${escapeHtml(titleText)}</h3>
                        <button type="button" class="kheb-modal-close" id="kheb-modal-close" title="Close">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <form id="kheb-modal-form">
                        <div class="kheb-modal-body">
                            ${!isEdit ? `
                                <div class="kheb-field">
                                    <label>ឯកសារ PDF (Khmer Physics Ebook PDF *)</label>
                                    <div class="kheb-dropzone" id="kheb-dropzone">
                                        <i class="fa-solid fa-file-pdf" style="font-size:1.8rem;margin-bottom:0.35rem;display:block;"></i>
                                        <div id="kheb-dropzone-label">
                                            ${ms.file ? `<strong>${escapeHtml(ms.file.name)}</strong> (${formatBytes(ms.file.size)})` : 'ចុច ឬ អូសឯកសារ PDF មកទីនេះ (Click or drop PDF up to 150 MB)'}
                                        </div>
                                        <input type="file" id="kheb-file-input" accept="application/pdf,.pdf" style="display:none;">
                                    </div>
                                </div>
                            ` : ''}

                            <div class="kheb-field">
                                <label for="kheb-input-title">ចំណងជើងសៀវភៅ (Title)</label>
                                <input type="text" id="kheb-input-title" value="${escapeHtml(curTitle)}" placeholder="ឧ. សៀវភៅរូបវិទ្យា ថ្នាក់ទី ${escapeHtml(ms.grade)} - មេកានិច" required>
                            </div>

                            <div class="kheb-field">
                                <label for="kheb-input-chapter">ជំពូក / មេរៀន (Chapter)</label>
                                <input type="text" id="kheb-input-chapter" value="${escapeHtml(curChapter)}" placeholder="ឧ. ជំពូកទី ១ ឬ Chapter 1">
                            </div>

                            <div class="kheb-field">
                                <label for="kheb-input-desc">ការពិពណ៌នា (Description - optional)</label>
                                <textarea id="kheb-input-desc" rows="3" placeholder="ព័ត៌មានបន្ថែមអំពីសៀវភៅ និងមេរៀន...">${escapeHtml(curDesc)}</textarea>
                            </div>

                            ${ms.error ? `<div class="kheb-notice kheb-notice-warn"><i class="fa-solid fa-circle-exclamation"></i> ${escapeHtml(ms.error)}</div>` : ''}
                        </div>
                        <div class="kheb-modal-footer">
                            <button type="button" class="kheb-btn kheb-btn-secondary" id="kheb-modal-cancel" ${ms.submitting ? 'disabled' : ''}>បោះបង់ (Cancel)</button>
                            <button type="submit" class="kheb-btn kheb-btn-primary" id="kheb-modal-submit" ${ms.submitting ? 'disabled' : ''}>
                                <i class="fa-solid ${ms.submitting ? 'fa-spinner fa-spin' : 'fa-check'}"></i>
                                ${ms.submitting ? 'កំពុងរក្សាទុក...' : isEdit ? 'រក្សាទុក (Save)' : isReplace ? 'ជំនួស PDF (Replace)' : 'បង្ហោះ PDF (Upload)'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        `;

        const closeBtn = document.getElementById('kheb-modal-close');
        const cancelBtn = document.getElementById('kheb-modal-cancel');
        const backdrop = document.getElementById('kheb-modal-backdrop');
        if (closeBtn) closeBtn.onclick = closeModal;
        if (cancelBtn) cancelBtn.onclick = closeModal;
        if (backdrop) {
            backdrop.onclick = (e) => {
                if (e.target === backdrop && !state.modalState.submitting) closeModal();
            };
        }

        const dz = document.getElementById('kheb-dropzone');
        const fileInput = document.getElementById('kheb-file-input');
        const titleInput = document.getElementById('kheb-input-title');
        if (dz && fileInput) {
            dz.onclick = () => fileInput.click();
            fileInput.onchange = () => {
                const chosen = fileInput.files && fileInput.files[0];
                if (!chosen) return;
                state.modalState.file = chosen;
                const dzLabel = document.getElementById('kheb-dropzone-label');
                if (dzLabel) {
                    dzLabel.innerHTML = `<strong>${escapeHtml(chosen.name)}</strong> (${formatBytes(chosen.size)})`;
                }
                if (titleInput && !titleInput.value.trim()) {
                    titleInput.value = deriveTitleFromName(chosen.name);
                }
            };
            dz.ondragover = (e) => { e.preventDefault(); dz.classList.add('dragover'); };
            dz.ondragleave = () => dz.classList.remove('dragover');
            dz.ondrop = (e) => {
                e.preventDefault();
                dz.classList.remove('dragover');
                const dropped = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
                if (!dropped) return;
                state.modalState.file = dropped;
                const dzLabel = document.getElementById('kheb-dropzone-label');
                if (dzLabel) {
                    dzLabel.innerHTML = `<strong>${escapeHtml(dropped.name)}</strong> (${formatBytes(dropped.size)})`;
                }
                if (titleInput && !titleInput.value.trim()) {
                    titleInput.value = deriveTitleFromName(dropped.name);
                }
            };
        }

        const form = document.getElementById('kheb-modal-form');
        if (form) {
            form.onsubmit = async (e) => {
                e.preventDefault();
                if (!state.modalState || state.modalState.submitting) return;

                const meta = {
                    title: (document.getElementById('kheb-input-title') || {}).value || '',
                    chapter: (document.getElementById('kheb-input-chapter') || {}).value || '',
                    description: (document.getElementById('kheb-input-desc') || {}).value || ''
                };

                state.modalState.submitting = true;
                state.modalState.error = '';
                renderModal();

                try {
                    let resultItem = null;
                    if (state.modalState.mode === 'upload') {
                        resultItem = await uploadEbookFile(state.modalState.grade, state.modalState.file, meta);
                    } else if (state.modalState.mode === 'replace') {
                        resultItem = await replaceEbookFile(state.modalState.grade, state.modalState.ebook.id, state.modalState.file, meta);
                    } else {
                        resultItem = await updateEbookMetadata(state.modalState.grade, state.modalState.ebook.id, meta);
                    }
                    const savedGrade = state.modalState.grade;
                    closeModal();
                    if (resultItem && resultItem.id) {
                        state.selectedIdByGrade[savedGrade] = resultItem.id;
                    }
                    renderKhEbooksView();
                    if (resultItem) {
                        loadAndRenderEbook(savedGrade, resultItem);
                    }
                } catch (err) {
                    if (state.modalState) {
                        state.modalState.submitting = false;
                        state.modalState.error = err && err.message ? err.message : 'Operation failed.';
                        renderModal();
                    }
                }
            };
        }
    }

    // --------------------------------------------------------------------------
    // Tab Entry & View Rendering
    // --------------------------------------------------------------------------
    function renderTab(gradeOpt) {
        const g = normalizeGrade(gradeOpt) || normalizeGrade(global.currentGrade);
        const container = document.getElementById('tab-kh-ebook-content');
        if (!container) return;

        if (!g) {
            container.innerHTML = '';
            return;
        }

        if (state.activeGrade && state.activeGrade !== g) {
            destroyActivePdfSession();
        }
        state.activeGrade = g;
        renderKhEbooksView();

        fetchEbooksForGrade(g).then(() => {
            const tabPane = document.getElementById('tab-kh-ebook');
            if (tabPane && (tabPane.classList.contains('active') || !tabPane.classList.contains('hidden'))) {
                renderKhEbooksView();
            }
        });
    }

    function onLeaveTab() {
        destroyActivePdfSession();
    }

    function renderKhEbooksView() {
        const container = document.getElementById('tab-kh-ebook-content');
        if (!container) return;

        const g = normalizeGrade(global.currentGrade) || state.activeGrade;
        if (!g) {
            container.innerHTML = '';
            return;
        }
        state.activeGrade = g;

        const allItems = state.ebooksByGrade[g] || [];
        const chapters = getGradeChapters(g);
        const activeChapter = state.selectedChapterByGrade[g] && chapters.includes(state.selectedChapterByGrade[g])
            ? state.selectedChapterByGrade[g]
            : 'All';
        state.selectedChapterByGrade[g] = activeChapter;

        const searchQuery = (state.searchByGrade[g] || '').trim().toLowerCase();
        const filtered = allItems.filter(item => {
            const itemChapter = (item.chapter || 'General').trim() || 'General';
            if (activeChapter !== 'All' && itemChapter !== activeChapter) return false;
            if (!searchQuery) return true;
            return (
                (item.title || '').toLowerCase().includes(searchQuery) ||
                itemChapter.toLowerCase().includes(searchQuery) ||
                (item.description || '').toLowerCase().includes(searchQuery) ||
                (item.originalName || '').toLowerCase().includes(searchQuery)
            );
        });

        let selectedId = state.selectedIdByGrade[g];
        if (!selectedId || !filtered.some(item => item.id === selectedId)) {
            selectedId = filtered.length > 0 ? filtered[0].id : null;
            if (selectedId) state.selectedIdByGrade[g] = selectedId;
        }
        const selectedBook = filtered.find(item => item.id === selectedId) || null;
        const admin = isAdminUser();
        const loading = Boolean(state.loadingGrade[g]);

        container.innerHTML = `
            <div class="kh-ebook-shell">
                <div class="kheb-hero">
                    <div class="kheb-hero-info">
                        <div class="kheb-hero-icon"><i class="fa-solid fa-book-open-reader"></i></div>
                        <div>
                            <div class="kheb-hero-title-row">
                                <h2 class="kheb-hero-title">KH-Ebook — សៀវភៅរូបវិទ្យាជាភាសាខ្មែរ</h2>
                                <span class="kheb-badge kheb-badge-lang">ភាសាខ្មែរ (KH)</span>
                                <span class="kheb-badge kheb-badge-grade">Grade ${escapeHtml(g)} • ថ្នាក់ទី ${escapeHtml(g)}</span>
                            </div>
                            <p class="kheb-hero-subtitle">
                                បណ្ណាល័យសៀវភៅសិក្សារូបវិទ្យាភាសាខ្មែរ និងឯកសារជំនួយសម្រាប់ថ្នាក់ទី ${escapeHtml(g)} — អានផ្ទាល់លើគេហទំព័រ (រក្សាអក្សរខ្មែរ និងរូបភាពច្បាស់)។
                            </p>
                        </div>
                    </div>
                    <div class="kheb-hero-actions">
                        ${admin ? `
                            <button type="button" class="kheb-btn kheb-btn-primary" id="kheb-upload-btn">
                                <i class="fa-solid fa-cloud-arrow-up"></i> បន្ថែមសៀវភៅ PDF (Upload)
                            </button>
                        ` : ''}
                        <button type="button" class="kheb-btn kheb-btn-secondary" id="kheb-refresh-btn" title="Refresh library">
                            <i class="fa-solid fa-rotate"></i> ផ្ទុកឡើងវិញ
                        </button>
                    </div>
                </div>

                ${!state.backendAvailable && admin ? `
                    <div class="kheb-notice kheb-notice-info">
                        <i class="fa-solid fa-circle-info"></i>
                        <span>Running in static/browser mode: uploaded PDFs are saved in this browser's local storage, or place PDFs in <code>kh_ebooks/grade${escapeHtml(g)}/</code> and run <strong>Sync-KH-Ebooks.bat</strong> before pushing to GitHub.</span>
                    </div>
                ` : ''}

                <div class="kheb-toolbar">
                    <div class="kheb-chapter-pills" id="kheb-chapter-pills">
                        ${chapters.map(ch => `
                            <button type="button" class="kheb-pill ${ch === activeChapter ? 'active' : ''}" data-chapter="${escapeHtml(ch)}">
                                ${ch === 'All' ? `ទាំងអស់ (${allItems.length})` : escapeHtml(ch)}
                            </button>
                        `).join('')}
                    </div>
                    <div class="kheb-search-wrap">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="search" class="kheb-search-input" id="kheb-search-input"
                               value="${escapeHtml(state.searchByGrade[g] || '')}"
                               placeholder="ស្វែងរកតាមចំណងជើង ឬជំពូក...">
                    </div>
                </div>

                <div class="kheb-layout">
                    <aside class="kheb-library-panel" aria-label="Grade ${escapeHtml(g)} KH-Ebook Library">
                        <div class="kheb-library-header">
                            <span><i class="fa-solid fa-books"></i> បញ្ជីសៀវភៅ Grade ${escapeHtml(g)}</span>
                            <span class="kheb-count-chip">${filtered.length} PDF</span>
                        </div>

                        ${loading && allItems.length === 0 ? `
                            <div class="kheb-empty">
                                <i class="fa-solid fa-spinner fa-spin"></i>
                                <p>កំពុងស្វែងរកសៀវភៅ KH-Ebook...</p>
                            </div>
                        ` : filtered.length === 0 ? `
                            <div class="kheb-empty">
                                <i class="fa-regular fa-folder-open"></i>
                                <p style="font-weight:700;color:#0f172a;">មិនទាន់មានសៀវភៅ KH-Ebook សម្រាប់ថ្នាក់ទី ${escapeHtml(g)} នៅឡើយទេ</p>
                                <p style="font-size:0.83rem;">No Khmer PDF ebooks found for Grade ${escapeHtml(g)}${activeChapter !== 'All' ? ` in ${escapeHtml(activeChapter)}` : ''}.</p>
                            </div>
                        ` : filtered.map(item => {
                            const isSelected = selectedBook && item.id === selectedBook.id;
                            return `
                                <div class="kheb-card ${isSelected ? 'active' : ''}" data-book-id="${escapeHtml(item.id)}" role="button" tabindex="0">
                                    <div class="kheb-card-top">
                                        <div class="kheb-card-pdf-icon"><i class="fa-solid fa-file-pdf"></i></div>
                                        <div style="flex:1;min-width:0;">
                                            <h4 class="kheb-card-title">${escapeHtml(item.title)}</h4>
                                            <div class="kheb-card-meta">
                                                <span class="kheb-card-chapter">${escapeHtml(item.chapter || 'General')}</span>
                                                <span>${formatBytes(item.size)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    ${item.description ? `<p class="kheb-card-desc">${escapeHtml(item.description)}</p>` : ''}
                                    ${(admin && (state.backendAvailable || item.source === 'idb')) ? `
                                        <div class="kheb-card-admin-actions">
                                            <button type="button" class="kheb-btn kheb-btn-secondary kheb-btn-sm" data-action="edit" data-id="${escapeHtml(item.id)}">
                                                <i class="fa-solid fa-pen"></i> Edit
                                            </button>
                                            <button type="button" class="kheb-btn kheb-btn-secondary kheb-btn-sm" data-action="replace" data-id="${escapeHtml(item.id)}">
                                                <i class="fa-solid fa-arrows-rotate"></i> Replace
                                            </button>
                                            <button type="button" class="kheb-btn kheb-btn-danger kheb-btn-sm" data-action="delete" data-id="${escapeHtml(item.id)}">
                                                <i class="fa-solid fa-trash"></i> Delete
                                            </button>
                                        </div>
                                    ` : ''}
                                </div>
                            `;
                        }).join('')}
                    </aside>

                    <section class="kheb-viewer-wrapper" id="kheb-viewer-wrapper" aria-label="Khmer PDF Ebook Reader">
                        <div class="kheb-viewer-toolbar">
                            <div class="kheb-viewer-doc-title" id="kheb-viewer-doc-title">
                                ${selectedBook ? escapeHtml(selectedBook.title) : 'ជ្រើសរើសសៀវភៅ (Select a Khmer Ebook)'}
                            </div>
                            <div class="kheb-viewer-controls">
                                <button type="button" class="kheb-vbtn" id="kheb-prev-btn" title="Previous Page"><i class="fa-solid fa-chevron-left"></i></button>
                                <span class="kheb-page-jump">
                                    <input type="number" min="1" value="1" class="kheb-page-input" id="kheb-page-input" aria-label="Page number">
                                    <span id="kheb-total-pages">/ 0</span>
                                </span>
                                <button type="button" class="kheb-vbtn" id="kheb-next-btn" title="Next Page"><i class="fa-solid fa-chevron-right"></i></button>
                                <button type="button" class="kheb-vbtn" id="kheb-zoom-out-btn" title="Zoom Out"><i class="fa-solid fa-magnifying-glass-minus"></i></button>
                                <span class="kheb-zoom-label" id="kheb-zoom-label">Fit</span>
                                <button type="button" class="kheb-vbtn" id="kheb-zoom-in-btn" title="Zoom In"><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                                <button type="button" class="kheb-vbtn active" id="kheb-fit-btn" title="Fit Width">Fit</button>
                                <button type="button" class="kheb-vbtn" id="kheb-mode-btn" title="Toggle Scroll / Single Page">
                                    <i class="fa-solid fa-scroll"></i> Scroll
                                </button>
                                <button type="button" class="kheb-vbtn" id="kheb-fs-btn" title="Fullscreen">
                                    <i class="fa-solid fa-expand"></i>
                                </button>
                            </div>
                        </div>
                        <div class="kheb-viewer-stage" id="kheb-viewer-stage">
                            <div class="kheb-viewer-placeholder">
                                <i class="fa-solid fa-book-open-reader"></i>
                                <p style="font-weight:700;margin-bottom:0.35rem;">កម្មវិធីអានសៀវភៅ KH-Ebook (Inline PDF Reader)</p>
                                <p style="font-size:0.86rem;opacity:0.85;">
                                    ${filtered.length > 0 ? 'កំពុងរៀបចំបើកសៀវភៅ...' : `ជ្រើសរើស ឬបន្ថែមសៀវភៅ PDF សម្រាប់ថ្នាក់ទី ${escapeHtml(g)} ដើម្បីអានផ្ទាល់នៅទីនេះ។`}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div id="kheb-modal-root"></div>
        `;

        wireViewEvents(g, filtered, selectedBook);
    }

    function wireViewEvents(grade, filtered, selectedBook) {
        const uploadBtn = document.getElementById('kheb-upload-btn');
        if (uploadBtn) uploadBtn.onclick = () => openModal('upload');

        const refreshBtn = document.getElementById('kheb-refresh-btn');
        if (refreshBtn) {
            refreshBtn.onclick = () => {
                state.capabilitiesChecked = false;
                fetchEbooksForGrade(grade).then(() => renderKhEbooksView());
            };
        }

        const pillsRoot = document.getElementById('kheb-chapter-pills');
        if (pillsRoot) {
            pillsRoot.onclick = (e) => {
                const btn = e.target.closest('.kheb-pill');
                if (!btn) return;
                state.selectedChapterByGrade[grade] = btn.dataset.chapter || 'All';
                renderKhEbooksView();
            };
        }

        const searchInput = document.getElementById('kheb-search-input');
        if (searchInput) {
            searchInput.oninput = (e) => {
                const caret = e.target.selectionStart;
                state.searchByGrade[grade] = e.target.value;
                renderKhEbooksView();
                const nextInput = document.getElementById('kheb-search-input');
                if (nextInput) {
                    nextInput.focus();
                    try { nextInput.setSelectionRange(caret, caret); } catch (err) {}
                }
            };
        }

        const libraryPanel = document.querySelector('.kheb-library-panel');
        if (libraryPanel) {
            libraryPanel.onclick = async (e) => {
                const actionBtn = e.target.closest('[data-action]');
                if (actionBtn) {
                    e.stopPropagation();
                    const act = actionBtn.dataset.action;
                    const id = actionBtn.dataset.id;
                    const item = (state.ebooksByGrade[grade] || []).find(x => x.id === id);
                    if (!item) return;
                    if (act === 'edit') openModal('edit', item);
                    else if (act === 'replace') openModal('replace', item);
                    else if (act === 'delete') {
                        const ok = global.confirm(`លុបសៀវភៅ "${item.title}" មែនទេ?\nAre you sure you want to delete this KH-Ebook?`);
                        if (!ok) return;
                        try {
                            await deleteEbookItem(grade, id);
                            renderKhEbooksView();
                        } catch (err) {
                            global.alert(err && err.message ? err.message : 'Unable to delete ebook.');
                        }
                    }
                    return;
                }

                const card = e.target.closest('.kheb-card');
                if (!card) return;
                const bookId = card.dataset.bookId;
                const item = (state.ebooksByGrade[grade] || []).find(x => x.id === bookId);
                if (!item) return;
                state.selectedIdByGrade[grade] = item.id;
                document.querySelectorAll('.kheb-card').forEach(el => {
                    el.classList.toggle('active', el.dataset.bookId === item.id);
                });
                loadAndRenderEbook(grade, item);
            };
        }

        const prevBtn = document.getElementById('kheb-prev-btn');
        const nextBtn = document.getElementById('kheb-next-btn');
        const pageInput = document.getElementById('kheb-page-input');
        const zoomOutBtn = document.getElementById('kheb-zoom-out-btn');
        const zoomInBtn = document.getElementById('kheb-zoom-in-btn');
        const fitBtn = document.getElementById('kheb-fit-btn');
        const modeBtn = document.getElementById('kheb-mode-btn');
        const fsBtn = document.getElementById('kheb-fs-btn');

        if (prevBtn) prevBtn.onclick = () => goToPage(state.reader.pageNum - 1);
        if (nextBtn) nextBtn.onclick = () => goToPage(state.reader.pageNum + 1);
        if (pageInput) {
            pageInput.onchange = () => goToPage(pageInput.value);
            pageInput.onkeydown = (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    goToPage(pageInput.value);
                }
            };
        }
        if (zoomOutBtn) zoomOutBtn.onclick = () => setZoom(-0.15, false);
        if (zoomInBtn) zoomInBtn.onclick = () => setZoom(0.15, false);
        if (fitBtn) fitBtn.onclick = () => setZoom(0, true);
        if (modeBtn) modeBtn.onclick = () => toggleViewMode();
        if (fsBtn) fsBtn.onclick = () => toggleFullscreen();

        bindStageInteractions();

        if (selectedBook) {
            if (state.reader.ebookId === selectedBook.id && state.reader.pdfDoc && state.reader.grade === grade) {
                updateViewerHeaderAndControls();
                renderReaderPages();
            } else {
                loadAndRenderEbook(grade, selectedBook);
            }
        } else {
            destroyActivePdfSession();
            updateViewerHeaderAndControls();
        }
    }

    // Global fullscreen sync & keyboard navigation inside KH-Ebook reader
    document.addEventListener('fullscreenchange', () => {
        const wrapper = document.getElementById('kheb-viewer-wrapper');
        const stage = document.getElementById('kheb-viewer-stage');
        if (!wrapper) return;
        const fsAnchor = (stage && global.WISPdfViewport)
            ? global.WISPdfViewport.captureAnchor(stage, '.kheb-page-frame')
            : null;
        state.reader.isFullscreen = document.fullscreenElement === wrapper;
        wrapper.classList.toggle('kheb-is-fullscreen', state.reader.isFullscreen);
        updateViewerHeaderAndControls();
        if (state.reader.pdfDoc && state.reader.fitWidth) {
            setTimeout(() => {
                if (state.reader.pdfDoc && state.reader.fitWidth) {
                    applyZoomPreservingPosition(1.0, { isFitWidth: true, anchor: fsAnchor });
                }
                if (state.reader.viewportCtrl) state.reader.viewportCtrl.resetWidthTracking();
            }, 120);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (state.modalState && e.key === 'Escape' && !state.modalState.submitting) {
            closeModal();
            return;
        }
        const tabPane = document.getElementById('tab-kh-ebook');
        if (!tabPane || !tabPane.classList.contains('active') || tabPane.classList.contains('hidden')) return;
        const tag = (e.target && e.target.tagName || '').toLowerCase();
        if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
        if (!state.reader.pdfDoc) return;

        if (e.key === 'ArrowRight') goToPage(state.reader.pageNum + 1);
        else if (e.key === 'ArrowLeft') goToPage(state.reader.pageNum - 1);
        else if (e.key === '+' || e.key === '=') setZoom(0.15, false);
        else if (e.key === '-') setZoom(-0.15, false);
    });

    global.WISKhEbooks = {
        renderTab,
        onLeaveTab,
        refresh: (grade) => fetchEbooksForGrade(grade || state.activeGrade || global.currentGrade),
        isAdmin: isAdminUser
    };
})(window);
