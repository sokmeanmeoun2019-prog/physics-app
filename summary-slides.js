/**
 * WIS Physics Learning Hub - Independent Summary Slides Module
 *
 * Strictly scoped to Grade 9 and Grade 12 (KH-Physics & EN-Physics).
 * - Uses Grade-isolated backend storage (/api/summary-slides/*) when running with Node server.js
 * - Automatically falls back to browser IndexedDB if opened statically without Node server
 * - Supports PDF (via PDF.js) and PowerPoint (.pptx native OOXML parser/renderer + optional PDF preview)
 * - Supports Normal & Fullscreen viewing, Scroll & Single-Slide modes, Touch swipe & Zoom
 */
(function () {
    'use strict';

    const ALLOWED_GRADES = ['9', '12'];
    const GRADE_META = {
        '9': {
            title: 'Grade 9 Physics Summary Slides',
            subtitle: 'Concise visual lesson summaries in Khmer (KH-Physics) and English (EN-Physics) for Grade 9 chapters & Diploma review.',
            badge: 'Grade 9 • Summary Slides Hub',
            accentColor: '#00acc1'
        },
        '12': {
            title: 'Grade 12 Physics Summary Slides',
            subtitle: 'Comprehensive visual slide decks in Khmer (KH-Physics) and English (EN-Physics) for Grade 12 chapters & BacII review.',
            badge: 'Grade 12 • Summary Slides Hub',
            accentColor: '#6366f1'
        }
    };

    const LANG_META = {
        kh: {
            key: 'kh',
            label: 'KH-Physics',
            fullLabel: 'KH-Physics (ភាសាខ្មែរ / Khmer)',
            sub: 'Khmer-language physics summary slides (PDF, PPTX, PPT)',
            icon: 'fa-solid fa-language'
        },
        en: {
            key: 'en',
            label: 'EN-Physics',
            fullLabel: 'EN-Physics (English)',
            sub: 'English-language physics summary slides (PDF, PPTX, PPT)',
            icon: 'fa-solid fa-book-open-reader'
        }
    };

    const state = {
        activeGrade: '9',
        activeLangFilter: 'all',
        searchQuery: '',
        backendAvailable: false,
        canManage: false,
        libreOfficeAvailable: false,
        capabilitiesChecked: false,
        slidesByGrade: { '9': [], '12': [] },
        loadingGrade: { '9': false, '12': false }
    };

    let modalState = {
        mode: 'upload', // 'upload' | 'replace' | 'edit'
        grade: '9',
        lang: 'kh',
        slideId: null,
        selectedFile: null
    };

    let viewerSession = null;

    // --------------------------------------------------------------------------
    // Helpers
    // --------------------------------------------------------------------------
    function normalizeGrade(g) {
        const str = String(g || '').trim();
        return ALLOWED_GRADES.includes(str) ? str : null;
    }

    function escapeHtml(str) {
        return String(str == null ? '' : str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function formatBytes(bytes) {
        const b = Number(bytes) || 0;
        if (b < 1024) return `${b} B`;
        if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
        return `${(b / (1024 * 1024)).toFixed(2)} MB`;
    }

    function formatDateShort(iso) {
        if (!iso) return 'Saved';
        try {
            const d = new Date(iso);
            return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
        } catch (e) {
            return 'Saved';
        }
    }

    function isLocalHostEnv() {
        try {
            const host = (window.location.hostname || '').toLowerCase();
            return host === 'localhost' || host === '127.0.0.1' || host === '[::1]' || window.location.protocol === 'file:';
        } catch (e) {
            return false;
        }
    }

    function getExtFromName(filename) {
        const match = String(filename || '').toLowerCase().match(/\.(pdf|pptx|ppt)$/);
        return match ? `.${match[1]}` : '';
    }

    function resolveUrl(rel) {
        if (typeof window.resolveAppUrl === 'function') {
            return window.resolveAppUrl(rel);
        }
        return rel;
    }

    // --------------------------------------------------------------------------
    // IndexedDB Fallback Storage (Active ONLY when Node backend is unavailable)
    // --------------------------------------------------------------------------
    const IDB_NAME = 'wis_summary_slides_v1';
    const IDB_STORE = 'slides';

    function openLocalDb() {
        return new Promise((resolve, reject) => {
            if (!window.indexedDB) return reject(new Error('IndexedDB unsupported'));
            const req = indexedDB.open(IDB_NAME, 1);
            req.onupgradeneeded = () => {
                const db = req.result;
                if (!db.objectStoreNames.contains(IDB_STORE)) {
                    const store = db.createObjectStore(IDB_STORE, { keyPath: 'id' });
                    store.createIndex('grade', 'grade', { unique: false });
                }
            };
            req.onsuccess = () => resolve(req.result);
            req.onerror = () => reject(req.error || new Error('IndexedDB failed'));
        });
    }

    async function idbListGrade(grade) {
        const db = await openLocalDb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, 'readonly');
            const store = tx.objectStore(IDB_STORE);
            const idx = store.index('grade');
            const req = idx.getAll(String(grade));
            req.onsuccess = () => {
                const list = (req.result || [])
                    .filter(item => item && String(item.grade) === String(grade))
                    .sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
                resolve(list);
            };
            req.onerror = () => reject(req.error);
        });
    }

    async function idbGetSlide(id) {
        const db = await openLocalDb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, 'readonly');
            const req = tx.objectStore(IDB_STORE).get(id);
            req.onsuccess = () => resolve(req.result || null);
            req.onerror = () => reject(req.error);
        });
    }

    async function idbPutSlide(record) {
        const db = await openLocalDb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, 'readwrite');
            const req = tx.objectStore(IDB_STORE).put(record);
            req.onsuccess = () => resolve(record);
            req.onerror = () => reject(req.error);
        });
    }

    async function idbDeleteSlide(id) {
        const db = await openLocalDb();
        return new Promise((resolve, reject) => {
            const tx = db.transaction(IDB_STORE, 'readwrite');
            const req = tx.objectStore(IDB_STORE).delete(id);
            req.onsuccess = () => resolve(true);
            req.onerror = () => reject(req.error);
        });
    }

    // --------------------------------------------------------------------------
    // Backend API + Capabilities Detection
    // --------------------------------------------------------------------------
    async function checkCapabilities() {
        if (!window.location.protocol.startsWith('http')) {
            state.backendAvailable = false;
            state.canManage = true;
            state.capabilitiesChecked = true;
            return;
        }
        try {
            const res = await fetch(resolveUrl('api/summary-slides/capabilities'), {
                method: 'GET',
                credentials: 'include',
                cache: 'no-store'
            });
            if (res.ok) {
                const data = await res.json();
                if (data && data.backendPersistence) {
                    state.backendAvailable = true;
                    state.canManage = Boolean(data.canManage || isLocalHostEnv());
                    state.libreOfficeAvailable = Boolean(data.libreOfficeAvailable);
                    state.capabilitiesChecked = true;
                    return;
                }
            }
        } catch (e) {}

        state.backendAvailable = false;
        state.canManage = isLocalHostEnv() || (document.body && document.body.classList.contains('is-admin'));
        state.capabilitiesChecked = true;
    }

    async function fetchStaticFolderCatalog(grade) {
        try {
            const url = resolveUrl(`summary_slides/grade${grade}/catalog.json?t=${Date.now()}`);
            const res = await fetch(url, { method: 'GET', cache: 'no-store' });
            if (res.ok) {
                const data = await res.json();
                if (data && Array.isArray(data.slides)) {
                    return data.slides
                        .filter(s => s && String(s.grade) === String(grade) && s.url)
                        .map(s => ({ ...s, source: 'folder' }));
                }
            }
        } catch (e) {}
        return [];
    }

    async function fetchSlidesForGrade(grade) {
        const g = normalizeGrade(grade);
        if (!g) return [];
        state.loadingGrade[g] = true;

        if (!state.capabilitiesChecked) {
            await checkCapabilities();
        }

        try {
            if (state.backendAvailable) {
                const res = await fetch(resolveUrl(`api/summary-slides?grade=${encodeURIComponent(g)}`), {
                    method: 'GET',
                    credentials: 'include',
                    cache: 'no-store'
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data && Array.isArray(data.slides)) {
                        state.slidesByGrade[g] = data.slides
                            .filter(s => s && String(s.grade) === g)
                            .map(s => ({ ...s, source: 'server-folder' }));
                        if (typeof data.canManage === 'boolean') {
                            state.canManage = data.canManage || state.canManage;
                        }
                        return state.slidesByGrade[g];
                    }
                }
            }

            const folderSlides = await fetchStaticFolderCatalog(g);
            let localSlides = [];
            try {
                localSlides = await idbListGrade(g);
            } catch (idbErr) {
                localSlides = [];
            }
            const cleanLocal = localSlides.map(s => {
                const copy = { ...s, source: 'idb' };
                delete copy.fileData;
                return copy;
            });

            const folderIds = new Set(folderSlides.map(s => s.id));
            state.slidesByGrade[g] = [
                ...folderSlides,
                ...cleanLocal.filter(s => !folderIds.has(s.id))
            ];
            return state.slidesByGrade[g];
        } catch (e) {
            state.slidesByGrade[g] = state.slidesByGrade[g] || [];
            return state.slidesByGrade[g];
        } finally {
            state.loadingGrade[g] = false;
        }
    }

    // --------------------------------------------------------------------------
    // Tab Entry & Strict Grade Isolation (Inside Lesson View After Equations)
    // --------------------------------------------------------------------------
    function renderTab(gradeOpt) {
        const g = normalizeGrade(gradeOpt) || normalizeGrade(window.currentGrade);
        const container = document.getElementById('tab-summary-slides-content');
        if (!container) return;

        if (!g) {
            container.innerHTML = '';
            return;
        }

        state.activeGrade = g;
        renderSummarySlidesView();
        fetchSlidesForGrade(g).then(() => {
            const tabPane = document.getElementById('tab-summary-slides');
            if (tabPane && (tabPane.classList.contains('active') || !tabPane.classList.contains('hidden'))) {
                renderSummarySlidesView();
            }
        });
    }

    // --------------------------------------------------------------------------
    // Render Main Summary Slides Section
    // --------------------------------------------------------------------------
    function renderSummarySlidesView() {
        const container = document.getElementById('tab-summary-slides-content');
        if (!container) return;

        const g = normalizeGrade(window.currentGrade) || state.activeGrade;
        if (!g) {
            container.innerHTML = '';
            return;
        }
        state.activeGrade = g;
        const meta = GRADE_META[g];
        const allGradeSlides = (state.slidesByGrade[g] || []).filter(s => String(s.grade) === g);
        const query = (state.searchQuery || '').trim().toLowerCase();

        const filteredSlides = query
            ? allGradeSlides.filter(s => {
                const hay = `${s.title || ''} ${s.description || ''} ${s.chapter || ''} ${s.originalName || ''}`.toLowerCase();
                return hay.includes(query);
            })
            : allGradeSlides;

        const khSlides = filteredSlides.filter(s => s.language === 'kh');
        const enSlides = filteredSlides.filter(s => s.language === 'en');

        const canManageNow = Boolean(state.canManage || isLocalHostEnv() || (document.body && document.body.classList.contains('is-admin')));
        const showKh = state.activeLangFilter === 'all' || state.activeLangFilter === 'kh';
        const showEn = state.activeLangFilter === 'all' || state.activeLangFilter === 'en';

        const storageStatusHtml = state.backendAvailable
            ? `<span class="slides-storage-badge"><i class="fa-solid fa-folder-open"></i> Synced Folder: summary_slides/grade${g}/ (GitHub Ready)</span>`
            : `<span class="slides-storage-badge"><i class="fa-solid fa-folder-open"></i> Folder: summary_slides/grade${g}/ (Grade ${g} Isolated)</span>`;

        function buildCardsHtml(list, langKey) {
            if (state.loadingGrade[g] && allGradeSlides.length === 0) {
                return `<div class="slides-empty-box"><i class="fa-solid fa-circle-notch fa-spin empty-icon"></i><h4>Loading Grade ${g} ${LANG_META[langKey].label} slides...</h4></div>`;
            }
            if (!list.length) {
                return `
                    <div class="slides-empty-box">
                        <i class="fa-regular fa-folder-open empty-icon"></i>
                        <h4 style="font-size:1.05rem; font-weight:700; color:#1e293b; margin-bottom:0.35rem;">
                            ${query ? 'No matching slides found.' : `No ${LANG_META[langKey].label} slides uploaded for Grade ${g} yet.`}
                        </h4>
                        <p style="font-size:0.86rem; max-width:460px; margin:0 auto 0.9rem;">
                            ${canManageNow
                                ? `Click <strong>Upload ${LANG_META[langKey].label} Slide</strong> above to add PDF or PowerPoint (.pptx / .ppt) files permanently.`
                                : `Summary slides for Grade ${g} (${LANG_META[langKey].label}) will appear here once uploaded by the teacher.`}
                        </p>
                    </div>
                `;
            }

            return `<div class="slides-cards-grid">` + list.map(slide => {
                const extClean = (slide.ext || getExtFromName(slide.originalName) || '.pdf').replace('.', '').toLowerCase();
                const fmtClass = extClean === 'pdf' ? 'fmt-pdf' : (extClean === 'pptx' ? 'fmt-pptx' : 'fmt-ppt');
                const fmtIcon = extClean === 'pdf' ? 'fa-file-pdf' : 'fa-file-powerpoint';

                const canManageThisCard = canManageNow && (state.backendAvailable || slide.source === 'idb');
                const manageHtml = canManageThisCard ? `
                    <div class="slide-manage-row">
                        <button type="button" class="slide-manage-btn" data-action="replace" data-id="${escapeHtml(slide.id)}" data-grade="${g}" title="Replace with a new file safely">
                            <i class="fa-solid fa-arrows-rotate"></i> Replace
                        </button>
                        <button type="button" class="slide-manage-btn" data-action="edit" data-id="${escapeHtml(slide.id)}" data-grade="${g}" title="Update title, chapter, or language">
                            <i class="fa-solid fa-pen-to-square"></i> Update
                        </button>
                        <button type="button" class="slide-manage-btn danger" data-action="delete" data-id="${escapeHtml(slide.id)}" data-grade="${g}" title="Delete slide">
                            <i class="fa-solid fa-trash-can"></i> Delete
                        </button>
                    </div>
                ` : '';

                return `
                    <article class="slide-item-card" data-slide-id="${escapeHtml(slide.id)}">
                        <div>
                            <div class="slide-card-badges">
                                <span class="slide-format-badge ${fmtClass}">
                                    <i class="fa-solid ${fmtIcon}"></i> ${escapeHtml(extClean.toUpperCase())}
                                </span>
                                ${slide.chapter ? `<span class="slide-chapter-tag">${escapeHtml(slide.chapter)}</span>` : ''}
                            </div>
                            <h4 class="slide-card-title" style="margin-top:0.65rem;">${escapeHtml(slide.title)}</h4>
                            ${slide.description ? `<p class="slide-card-desc" style="margin-top:0.35rem;">${escapeHtml(slide.description)}</p>` : ''}
                        </div>
                        <div>
                            <div class="slide-card-meta">
                                <span title="${escapeHtml(slide.originalName || '')}"><i class="fa-solid fa-file"></i> ${escapeHtml(slide.originalName || 'Slide File')}</span>
                                <span><i class="fa-solid fa-hard-drive"></i> ${formatBytes(slide.size)}</span>
                                <span><i class="fa-regular fa-calendar"></i> ${formatDateShort(slide.updatedAt || slide.createdAt)}</span>
                            </div>
                            <div class="slide-card-actions" style="margin-top:0.75rem;">
                                <div class="slide-view-row">
                                    <button type="button" class="slide-open-btn" data-action="view" data-id="${escapeHtml(slide.id)}" data-grade="${g}" data-fs="0">
                                        <i class="fa-solid fa-eye"></i> Open Slides
                                    </button>
                                    <button type="button" class="slide-fs-quick-btn" data-action="view" data-id="${escapeHtml(slide.id)}" data-grade="${g}" data-fs="1" title="Open in Fullscreen">
                                        <i class="fa-solid fa-expand"></i>
                                    </button>
                                </div>
                                ${manageHtml}
                            </div>
                        </div>
                    </article>
                `;
            }).join('') + `</div>`;
        }

        function buildLangSectionHtml(langKey, list) {
            const lm = LANG_META[langKey];
            const uploadBtnHtml = canManageNow
                ? `<button type="button" class="slides-section-add-btn" data-action="open-upload" data-grade="${g}" data-lang="${langKey}">
                        <i class="fa-solid fa-cloud-arrow-up"></i> Upload ${escapeHtml(lm.label)} Slide
                   </button>`
                : '';

            return `
                <section class="slides-lang-section lang-${langKey}" aria-label="Grade ${g} ${lm.label}">
                    <div class="slides-lang-header">
                        <div class="slides-lang-title-group">
                            <div class="slides-lang-icon"><i class="${lm.icon}"></i></div>
                            <div>
                                <div class="slides-lang-heading">
                                    <span>${escapeHtml(lm.fullLabel)}</span>
                                    <span class="slides-count-chip">${list.length} ${list.length === 1 ? 'File' : 'Files'}</span>
                                </div>
                                <div class="slides-lang-sub">${escapeHtml(lm.sub)} • Grade ${g} Only</div>
                            </div>
                        </div>
                        ${uploadBtnHtml}
                    </div>
                    ${buildCardsHtml(list, langKey)}
                </section>
            `;
        }

        container.innerHTML = `
            <div class="slides-view-shell">
                <header class="slides-hero-card grade-${g}">
                    <div class="slides-hero-top">
                        <div>
                            <span class="slides-badge"><i class="fa-solid fa-display"></i> ${escapeHtml(meta.badge)}</span>
                            <h2 class="slides-hero-title"><i class="fa-solid fa-chalkboard-user"></i> ${escapeHtml(meta.title)}</h2>
                            <p class="slides-hero-desc">${escapeHtml(meta.subtitle)}</p>
                        </div>
                        ${canManageNow ? `
                            <button type="button" class="slides-btn-upload-primary" data-action="open-upload" data-grade="${g}" data-lang="${state.activeLangFilter === 'en' ? 'en' : 'kh'}">
                                <i class="fa-solid fa-cloud-arrow-up"></i> Upload Slide (PDF / PPT / PPTX)
                            </button>
                        ` : ''}
                    </div>

                    <div class="slides-controls-row">
                        <div class="slides-toolbar-actions">
                            <div class="slides-lang-filter" role="group" aria-label="Language Filter">
                                <button type="button" class="slides-lang-pill ${state.activeLangFilter === 'all' ? 'active' : ''}" data-action="filter-lang" data-lang="all">
                                    All (${allGradeSlides.length})
                                </button>
                                <button type="button" class="slides-lang-pill ${state.activeLangFilter === 'kh' ? 'active' : ''}" data-action="filter-lang" data-lang="kh">
                                    <i class="fa-solid fa-language"></i> KH-Physics (${allGradeSlides.filter(s => s.language === 'kh').length})
                                </button>
                                <button type="button" class="slides-lang-pill ${state.activeLangFilter === 'en' ? 'active' : ''}" data-action="filter-lang" data-lang="en">
                                    <i class="fa-solid fa-book-open"></i> EN-Physics (${allGradeSlides.filter(s => s.language === 'en').length})
                                </button>
                            </div>
                        </div>
                        ${storageStatusHtml}
                    </div>
                </header>

                <div class="slides-meta-bar">
                    <div class="slides-search-box">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" id="slides-search-input" class="slides-search-input" placeholder="Search Grade ${g} summary slides by title, chapter, or filename..." value="${escapeHtml(state.searchQuery)}">
                    </div>
                </div>

                <div class="slides-sections-grid">
                    ${showKh ? buildLangSectionHtml('kh', khSlides) : ''}
                    ${showEn ? buildLangSectionHtml('en', enSlides) : ''}
                </div>
            </div>
        `;

        // Bind view events
        const searchEl = document.getElementById('slides-search-input');
        if (searchEl) {
            searchEl.addEventListener('input', (e) => {
                const pos = e.target.selectionStart;
                state.searchQuery = e.target.value;
                renderSummarySlidesView();
                const restored = document.getElementById('slides-search-input');
                if (restored) {
                    restored.focus();
                    try { restored.setSelectionRange(pos, pos); } catch (err) {}
                }
            });
        }

        container.querySelectorAll('[data-action="filter-lang"]').forEach(btn => {
            btn.addEventListener('click', () => {
                state.activeLangFilter = btn.dataset.lang;
                renderSummarySlidesView();
            });
        });

        container.querySelectorAll('[data-action="open-upload"]').forEach(btn => {
            btn.addEventListener('click', () => {
                openManageModal('upload', btn.dataset.grade, btn.dataset.lang);
            });
        });

        container.querySelectorAll('[data-action="replace"]').forEach(btn => {
            btn.addEventListener('click', () => {
                openManageModal('replace', btn.dataset.grade, null, btn.dataset.id);
            });
        });

        container.querySelectorAll('[data-action="edit"]').forEach(btn => {
            btn.addEventListener('click', () => {
                openManageModal('edit', btn.dataset.grade, null, btn.dataset.id);
            });
        });

        container.querySelectorAll('[data-action="delete"]').forEach(btn => {
            btn.addEventListener('click', () => {
                handleDeleteSlide(btn.dataset.grade, btn.dataset.id);
            });
        });

        container.querySelectorAll('[data-action="view"]').forEach(btn => {
            btn.addEventListener('click', () => {
                openSlideViewer(btn.dataset.grade, btn.dataset.id, btn.dataset.fs === '1');
            });
        });
    }

    // --------------------------------------------------------------------------
    // Upload / Replace / Edit Modal Logic
    // --------------------------------------------------------------------------
    function ensureManageModalDom() {
        if (document.getElementById('slides-manage-modal')) return;
        const backdrop = document.createElement('div');
        backdrop.id = 'slides-manage-modal';
        backdrop.className = 'slides-modal-backdrop hidden';
        backdrop.setAttribute('role', 'dialog');
        backdrop.setAttribute('aria-modal', 'true');
        document.body.appendChild(backdrop);

        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) closeManageModal();
        });
    }

    function closeManageModal() {
        const modal = document.getElementById('slides-manage-modal');
        if (modal) modal.classList.add('hidden');
        modalState.selectedFile = null;
    }

    function openManageModal(mode, grade, lang, slideId) {
        const g = normalizeGrade(grade) || state.activeGrade;
        ensureManageModalDom();

        const existing = slideId
            ? (state.slidesByGrade[g] || []).find(s => s.id === slideId)
            : null;

        modalState = {
            mode,
            grade: g,
            lang: (existing && existing.language) || (lang === 'en' ? 'en' : 'kh'),
            slideId: slideId || null,
            selectedFile: null
        };

        const modal = document.getElementById('slides-manage-modal');
        const isEdit = mode === 'edit';
        const isReplace = mode === 'replace';

        const headingText = isEdit
            ? `Update Grade ${g} Slide Info`
            : (isReplace ? `Replace File (Grade ${g})` : `Upload Summary Slide (Grade ${g})`);

        const filePickerBlock = isEdit ? '' : `
            <div>
                <label class="slides-field-label">Select PDF or PowerPoint File (.pdf, .pptx, .ppt)</label>
                <div class="slides-dropzone" id="slides-dropzone">
                    <i class="fa-solid fa-cloud-arrow-up" style="font-size:1.75rem; color:#0284c7; margin-bottom:0.35rem;"></i>
                    <div style="font-weight:700; color:#1e293b; font-size:0.92rem;">Click to choose a file or drag &amp; drop here</div>
                    <div style="font-size:0.78rem; color:#64748b; margin-top:0.2rem;">Supported: PDF (.pdf), PowerPoint (.pptx, .ppt) • Max 100 MB</div>
                    <div class="slides-dropzone-filename" id="slides-chosen-filename">${isReplace && existing ? `Current: ${escapeHtml(existing.originalName)}` : 'No file selected yet'}</div>
                    <input type="file" id="slides-file-input" accept=".pdf,.pptx,.ppt,application/pdf,application/vnd.openxmlformats-officedocument.presentationml.presentation,application/vnd.ms-powerpoint" style="display:none;">
                </div>
                <div style="font-size:0.76rem; color:#64748b; margin-top:0.4rem;">
                    <i class="fa-solid fa-circle-info" style="color:#0284c7;"></i> Tip: Saving PowerPoint decks as <strong>.pdf</strong> or <strong>.pptx</strong> gives the best Khmer &amp; equation rendering directly in browser.
                </div>
            </div>
        `;

        modal.innerHTML = `
            <div class="slides-modal-card">
                <div class="slides-modal-head">
                    <h3><i class="fa-solid ${isEdit ? 'fa-pen-to-square' : (isReplace ? 'fa-arrows-rotate' : 'fa-cloud-arrow-up')}" style="color:#0284c7;"></i> ${escapeHtml(headingText)}</h3>
                    <button type="button" class="slides-modal-close" id="slides-modal-close-x" title="Close"><i class="fa-solid fa-xmark"></i></button>
                </div>
                <form id="slides-manage-form" class="slides-modal-body">
                    <div style="display:flex; gap:0.75rem; flex-wrap:wrap;">
                        <div style="flex:1 1 140px;">
                            <label class="slides-field-label">Target Grade (Locked)</label>
                            <div class="slides-input" style="background:#f1f5f9; font-weight:700; color:#0f172a;">Grade ${g} Physics</div>
                        </div>
                        <div style="flex:1 1 180px;">
                            <label class="slides-field-label" for="slides-lang-select">Language Category</label>
                            <select id="slides-lang-select" class="slides-select" ${isReplace ? 'disabled' : ''}>
                                <option value="kh" ${modalState.lang === 'kh' ? 'selected' : ''}>KH-Physics (Khmer / ភាសាខ្មែរ)</option>
                                <option value="en" ${modalState.lang === 'en' ? 'selected' : ''}>EN-Physics (English)</option>
                            </select>
                        </div>
                    </div>

                    ${filePickerBlock}

                    <div>
                        <label class="slides-field-label" for="slides-title-input">Slide Title</label>
                        <input type="text" id="slides-title-input" class="slides-input" placeholder="e.g., Chapter 1: Turning Effect of Force (KH)" value="${escapeHtml(existing ? existing.title : '')}">
                    </div>

                    <div>
                        <label class="slides-field-label" for="slides-chapter-input">Chapter / Topic Label (Optional)</label>
                        <input type="text" id="slides-chapter-input" class="slides-input" placeholder="e.g., Chapter 1, Review, BacII Prep..." value="${escapeHtml(existing ? (existing.chapter || '') : '')}">
                    </div>

                    <div>
                        <label class="slides-field-label" for="slides-desc-input">Short Description (Optional)</label>
                        <textarea id="slides-desc-input" class="slides-textarea" rows="2" placeholder="Notes or summary topics covered in this slide deck...">${escapeHtml(existing ? (existing.description || '') : '')}</textarea>
                    </div>

                    <div id="slides-form-feedback"></div>

                    <div class="slides-modal-foot">
                        <button type="button" class="btn-secondary" id="slides-form-cancel-btn" style="padding:0.55rem 1.1rem; border-radius:10px; font-size:0.88rem;">Cancel</button>
                        <button type="submit" class="slides-btn-upload-primary" id="slides-form-submit-btn">
                            <i class="fa-solid ${isEdit ? 'fa-check' : 'fa-floppy-disk'}"></i>
                            <span>${isEdit ? 'Save Changes' : (isReplace ? 'Replace Slide File' : 'Upload & Save')}</span>
                        </button>
                    </div>
                </form>
            </div>
        `;

        modal.classList.remove('hidden');

        document.getElementById('slides-modal-close-x')?.addEventListener('click', closeManageModal);
        document.getElementById('slides-form-cancel-btn')?.addEventListener('click', closeManageModal);

        const dropzone = document.getElementById('slides-dropzone');
        const fileInput = document.getElementById('slides-file-input');
        const chosenNameEl = document.getElementById('slides-chosen-filename');
        const titleInput = document.getElementById('slides-title-input');

        function handlePickedFile(file) {
            if (!file) return;
            const ext = getExtFromName(file.name);
            if (!ext) {
                showFormFeedback('Only PDF (.pdf) and PowerPoint (.pptx, .ppt) files are supported.', true);
                return;
            }
            modalState.selectedFile = file;
            if (chosenNameEl) {
                chosenNameEl.textContent = `${file.name} (${formatBytes(file.size)})`;
            }
            if (titleInput && !titleInput.value.trim()) {
                titleInput.value = file.name.replace(/\.(pdf|pptx|ppt)$/i, '').replace(/[_-]+/g, ' ').trim();
            }
            showFormFeedback('', false);
        }

        if (dropzone && fileInput) {
            dropzone.addEventListener('click', () => fileInput.click());
            fileInput.addEventListener('change', (e) => {
                if (e.target.files && e.target.files[0]) handlePickedFile(e.target.files[0]);
            });
            dropzone.addEventListener('dragover', (e) => {
                e.preventDefault();
                dropzone.classList.add('is-dragover');
            });
            dropzone.addEventListener('dragleave', () => dropzone.classList.remove('is-dragover'));
            dropzone.addEventListener('drop', (e) => {
                e.preventDefault();
                dropzone.classList.remove('is-dragover');
                if (e.dataTransfer?.files?.[0]) handlePickedFile(e.dataTransfer.files[0]);
            });
        }

        document.getElementById('slides-manage-form')?.addEventListener('submit', submitManageForm);
    }

    function showFormFeedback(msg, isErr) {
        const el = document.getElementById('slides-form-feedback');
        if (!el) return;
        if (!msg) {
            el.innerHTML = '';
            return;
        }
        el.innerHTML = `<div class="slides-form-alert ${isErr ? 'error' : 'success'}">
            <i class="fa-solid ${isErr ? 'fa-circle-exclamation' : 'fa-circle-check'}"></i>
            <span>${escapeHtml(msg)}</span>
        </div>`;
    }

    async function submitManageForm(e) {
        e.preventDefault();
        const g = modalState.grade;
        const lang = document.getElementById('slides-lang-select')?.value || modalState.lang;
        const title = (document.getElementById('slides-title-input')?.value || '').trim();
        const chapter = (document.getElementById('slides-chapter-input')?.value || '').trim();
        const description = (document.getElementById('slides-desc-input')?.value || '').trim();
        const submitBtn = document.getElementById('slides-form-submit-btn');

        if ((modalState.mode === 'upload' || modalState.mode === 'replace') && !modalState.selectedFile) {
            showFormFeedback('Please select a PDF, PPTX, or PPT file first.', true);
            return;
        }

        // Prevent accidental duplicate/overwrite in upload mode
        if (modalState.mode === 'upload' && modalState.selectedFile) {
            const fnameLower = modalState.selectedFile.name.toLowerCase();
            const titleLower = (title || '').toLowerCase();
            const dup = (state.slidesByGrade[g] || []).find(s =>
                s.language === lang &&
                (String(s.originalName || '').toLowerCase() === fnameLower ||
                 (titleLower && String(s.title || '').toLowerCase() === titleLower))
            );
            if (dup) {
                const proceed = window.confirm(
                    `A slide matching "${dup.title}" (${dup.originalName}) already exists in Grade ${g} ${LANG_META[lang].label}.\n\n` +
                    `Click OK to save this upload as a separate new slide (the existing file will NOT be overwritten), or Cancel to replace the existing slide instead.`
                );
                if (!proceed) return;
            }
        }

        if (submitBtn) submitBtn.disabled = true;

        try {
            if (modalState.mode === 'edit') {
                if (state.backendAvailable) {
                    const res = await fetch(resolveUrl('api/summary-slides/update'), {
                        method: 'POST',
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ grade: g, id: modalState.slideId, language: lang, title, chapter, description })
                    });
                    const data = await res.json().catch(() => ({}));
                    if (!res.ok || !data.success) throw new Error(data.message || 'Update failed.');
                } else {
                    const existing = await idbGetSlide(modalState.slideId);
                    if (!existing || String(existing.grade) !== g) throw new Error('Slide not found.');
                    await idbPutSlide({
                        ...existing,
                        language: lang,
                        title: title || existing.title,
                        chapter,
                        description,
                        updatedAt: new Date().toISOString()
                    });
                }
            } else if (modalState.mode === 'replace') {
                const file = modalState.selectedFile;
                if (state.backendAvailable) {
                    const qs = new URLSearchParams({
                        grade: g,
                        id: modalState.slideId,
                        filename: file.name,
                        title: title || '',
                        chapter,
                        description
                    }).toString();
                    const res = await fetch(resolveUrl(`api/summary-slides/replace?${qs}`), {
                        method: 'POST',
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/octet-stream' },
                        body: file
                    });
                    const data = await res.json().catch(() => ({}));
                    if (!res.ok || !data.success) throw new Error(data.message || 'Replace failed.');
                } else {
                    const existing = await idbGetSlide(modalState.slideId);
                    if (!existing || String(existing.grade) !== g) throw new Error('Slide not found.');
                    const buf = await file.arrayBuffer();
                    await idbPutSlide({
                        ...existing,
                        title: title || existing.title,
                        chapter,
                        description,
                        originalName: file.name,
                        ext: getExtFromName(file.name),
                        size: file.size,
                        fileData: buf,
                        updatedAt: new Date().toISOString()
                    });
                }
            } else {
                const file = modalState.selectedFile;
                if (state.backendAvailable) {
                    showFormFeedback('Uploading slide file...', false);
                    const qs = new URLSearchParams({
                        grade: g,
                        lang,
                        filename: file.name,
                        title: title || '',
                        chapter,
                        description
                    }).toString();
                    const res = await fetch(resolveUrl(`api/summary-slides/upload?${qs}`), {
                        method: 'POST',
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/octet-stream' },
                        body: file
                    });
                    const data = await res.json().catch(() => ({}));
                    if (!res.ok || !data.success) throw new Error(data.message || 'Upload failed.');
                } else {
                    const buf = await file.arrayBuffer();
                    const nowIso = new Date().toISOString();
                    const record = {
                        id: `g${g}-${lang}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
                        grade: g,
                        language: lang,
                        title: title || file.name.replace(/\.(pdf|pptx|ppt)$/i, '').replace(/[_-]+/g, ' ').trim(),
                        chapter,
                        description,
                        originalName: file.name,
                        ext: getExtFromName(file.name),
                        size: file.size,
                        fileData: buf,
                        createdAt: nowIso,
                        updatedAt: nowIso
                    };
                    await idbPutSlide(record);
                }
            }

            await fetchSlidesForGrade(g);
            closeManageModal();
            renderSummarySlidesView();
        } catch (err) {
            showFormFeedback(err.message || 'Operation failed.', true);
        } finally {
            if (submitBtn) submitBtn.disabled = false;
        }
    }

    async function handleDeleteSlide(grade, slideId) {
        const g = normalizeGrade(grade);
        if (!g || !slideId) return;
        const slide = (state.slidesByGrade[g] || []).find(s => s.id === slideId);
        if (!slide) return;

        const ok = window.confirm(
            `Delete this summary slide from Grade ${g} (${LANG_META[slide.language]?.label || slide.language})?\n\n` +
            `Title: ${slide.title}\nFile: ${slide.originalName}`
        );
        if (!ok) return;

        try {
            if (state.backendAvailable) {
                const res = await fetch(resolveUrl('api/summary-slides/delete'), {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ grade: g, id: slideId })
                });
                const data = await res.json().catch(() => ({}));
                if (!res.ok || !data.success) throw new Error(data.message || 'Delete failed.');
            } else {
                await idbDeleteSlide(slideId);
            }
            await fetchSlidesForGrade(g);
            renderSummarySlidesView();
        } catch (err) {
            window.alert(err.message || 'Could not delete slide.');
        }
    }

    // --------------------------------------------------------------------------
    // Pure-JS Zero-Dependency PPTX (OOXML ZIP + XML) Slide Parser & Renderer
    // --------------------------------------------------------------------------
    async function decompressDeflateRaw(u8) {
        if (typeof DecompressionStream === 'undefined') {
            throw new Error('This browser does not support DecompressionStream for .pptx extraction. Please update your browser or upload as PDF.');
        }
        const ds = new DecompressionStream('deflate-raw');
        const writer = ds.writable.getWriter();
        writer.write(u8);
        writer.close();
        const resBuf = await new Response(ds.readable).arrayBuffer();
        return new Uint8Array(resBuf);
    }

    async function readZipEntries(arrayBuffer) {
        const bytes = new Uint8Array(arrayBuffer);
        const view = new DataView(arrayBuffer);
        const len = bytes.length;

        // Locate End of Central Directory (PK\x05\x06)
        let eocdOffset = -1;
        const minSearch = Math.max(0, len - 65558);
        for (let i = len - 22; i >= minSearch; i--) {
            if (bytes[i] === 0x50 && bytes[i + 1] === 0x4b && bytes[i + 2] === 0x05 && bytes[i + 3] === 0x06) {
                eocdOffset = i;
                break;
            }
        }
        if (eocdOffset === -1) throw new Error('Invalid PPTX archive (missing EOCD).');

        const cdOffset = view.getUint32(eocdOffset + 16, true);
        const entryCount = view.getUint16(eocdOffset + 10, true);
        const entries = new Map();
        const utf8 = new TextDecoder('utf-8');

        let ptr = cdOffset;
        for (let idx = 0; idx < entryCount && ptr + 46 <= len; idx++) {
            if (view.getUint32(ptr, true) !== 0x02014b50) break;
            const method = view.getUint16(ptr + 10, true);
            const compSize = view.getUint32(ptr + 20, true);
            const nameLen = view.getUint16(ptr + 28, true);
            const extraLen = view.getUint16(ptr + 30, true);
            const commentLen = view.getUint16(ptr + 32, true);
            const localHeaderOffset = view.getUint32(ptr + 42, true);

            const name = utf8.decode(bytes.subarray(ptr + 46, ptr + 46 + nameLen));
            ptr += 46 + nameLen + extraLen + commentLen;

            entries.set(name, { method, compSize, localHeaderOffset });
        }

        async function getEntryBytes(entryName) {
            const norm = String(entryName || '').replace(/^\/+/, '');
            const meta = entries.get(norm);
            if (!meta) return null;
            const lo = meta.localHeaderOffset;
            if (view.getUint32(lo, true) !== 0x04034b50) return null;
            const lNameLen = view.getUint16(lo + 26, true);
            const lExtraLen = view.getUint16(lo + 28, true);
            const dataStart = lo + 30 + lNameLen + lExtraLen;
            const compressed = bytes.subarray(dataStart, dataStart + meta.compSize);
            if (meta.method === 0) return compressed;
            if (meta.method === 8) return decompressDeflateRaw(compressed);
            throw new Error(`Unsupported ZIP compression method ${meta.method}`);
        }

        async function getEntryText(entryName) {
            const b = await getEntryBytes(entryName);
            return b ? utf8.decode(b) : null;
        }

        return { entries, getEntryBytes, getEntryText };
    }

    function parseXml(xmlStr) {
        if (!xmlStr) return null;
        const parser = new DOMParser();
        return parser.parseFromString(xmlStr, 'application/xml');
    }

    function normalizeZipPath(baseFile, relTarget) {
        if (!relTarget) return '';
        if (relTarget.startsWith('/')) return relTarget.slice(1);
        const parts = baseFile.split('/');
        parts.pop();
        for (const seg of relTarget.split('/')) {
            if (!seg || seg === '.') continue;
            if (seg === '..') parts.pop();
            else parts.push(seg);
        }
        return parts.join('/');
    }

    async function readRelsMap(zip, xmlPath) {
        const parts = xmlPath.split('/');
        const fname = parts.pop();
        const relsPath = [...parts, '_rels', `${fname}.rels`].filter(Boolean).join('/');
        const relsStr = await zip.getEntryText(relsPath);
        const map = {};
        if (!relsStr) return map;
        const doc = parseXml(relsStr);
        if (!doc) return map;
        for (const rel of doc.getElementsByTagName('Relationship')) {
            const id = rel.getAttribute('Id');
            const target = rel.getAttribute('Target');
            const mode = rel.getAttribute('TargetMode');
            if (id && target && mode !== 'External') {
                map[id] = normalizeZipPath(xmlPath, target);
            }
        }
        return map;
    }

    function applyColorTransform(hex, colorNode) {
        if (!hex || !colorNode) return hex;
        const clean = hex.replace('#', '');
        if (clean.length !== 6) return hex;
        let r = parseInt(clean.slice(0, 2), 16) / 255;
        let g = parseInt(clean.slice(2, 4), 16) / 255;
        let b = parseInt(clean.slice(4, 6), 16) / 255;

        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h = 0, s = 0, l = (max + min) / 2;
        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
            else if (max === g) h = ((b - r) / d + 2) / 6;
            else h = ((r - g) / d + 4) / 6;
        }

        let modified = false;
        let alpha = 1;
        for (const child of colorNode.children || []) {
            const ln = child.localName;
            const val = parseInt(child.getAttribute('val') || '0', 10) / 100000;
            if (ln === 'lumMod') { l *= val; modified = true; }
            else if (ln === 'lumOff') { l += val; modified = true; }
            else if (ln === 'tint') {
                r = r * val + (1 - val);
                g = g * val + (1 - val);
                b = b * val + (1 - val);
                return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
            } else if (ln === 'shade') {
                r *= val; g *= val; b *= val;
                return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
            } else if (ln === 'alpha') {
                alpha = val;
            }
        }

        if (modified) {
            l = Math.max(0, Math.min(1, l));
            function hue2rgb(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }
            if (s === 0) {
                r = g = b = l;
            } else {
                const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
                const p = 2 * l - q;
                r = hue2rgb(p, q, h + 1 / 3);
                g = hue2rgb(p, q, h);
                b = hue2rgb(p, q, h - 1 / 3);
            }
        }

        const ri = Math.max(0, Math.min(255, Math.round(r * 255)));
        const gi = Math.max(0, Math.min(255, Math.round(g * 255)));
        const bi = Math.max(0, Math.min(255, Math.round(b * 255)));
        return alpha < 0.99 ? `rgba(${ri},${gi},${bi},${alpha.toFixed(2)})` : `rgb(${ri},${gi},${bi})`;
    }

    function resolveOoxmlColor(containerNode, themeColors, colorMap) {
        if (!containerNode) return null;
        for (const ch of containerNode.children || []) {
            if (ch.localName === 'srgbClr') {
                const val = ch.getAttribute('val');
                if (val) return applyColorTransform(`#${val}`, ch);
            }
            if (ch.localName === 'schemeClr') {
                const rawKey = ch.getAttribute('val');
                const key = (colorMap && colorMap[rawKey]) || rawKey;
                const mapped = {
                    bg1: 'lt1', bg2: 'lt2', tx1: 'dk1', tx2: 'dk2',
                    phClr: 'accent1'
                }[key] || key;
                const baseHex = themeColors[mapped];
                if (baseHex) return applyColorTransform(baseHex, ch);
            }
            if (ch.localName === 'prstClr') {
                const v = ch.getAttribute('val');
                if (v === 'black') return '#000000';
                if (v === 'white') return '#ffffff';
                return v || null;
            }
        }
        return null;
    }

    function findDirectChild(el, localName) {
        if (!el) return null;
        for (const ch of el.children || []) {
            if (ch.localName === localName) return ch;
        }
        return null;
    }

    function findDirectChildren(el, localName) {
        const res = [];
        if (!el) return res;
        for (const ch of el.children || []) {
            if (ch.localName === localName) res.push(ch);
        }
        return res;
    }

    function renderOmmlNode(node) {
        if (!node) return '';
        const ln = node.localName;
        if (ln === 't') return escapeHtml(node.textContent || '');
        if (ln === 'r') {
            let txt = '';
            for (const ch of node.children || []) txt += renderOmmlNode(ch);
            return txt;
        }
        if (ln === 'f') {
            const num = findDirectChild(node, 'num');
            const den = findDirectChild(node, 'den');
            return `<span class="pptx-math-frac"><span class="pptx-math-num">${renderOmmlChildren(num)}</span><span class="pptx-math-den">${renderOmmlChildren(den)}</span></span>`;
        }
        if (ln === 'sSup') {
            const e = findDirectChild(node, 'e');
            const sup = findDirectChild(node, 'sup');
            return `${renderOmmlChildren(e)}<sup>${renderOmmlChildren(sup)}</sup>`;
        }
        if (ln === 'sSub') {
            const e = findDirectChild(node, 'e');
            const sub = findDirectChild(node, 'sub');
            return `${renderOmmlChildren(e)}<sub>${renderOmmlChildren(sub)}</sub>`;
        }
        if (ln === 'sSubSup') {
            const e = findDirectChild(node, 'e');
            const sub = findDirectChild(node, 'sub');
            const sup = findDirectChild(node, 'sup');
            return `${renderOmmlChildren(e)}<sub>${renderOmmlChildren(sub)}</sub><sup>${renderOmmlChildren(sup)}</sup>`;
        }
        if (ln === 'rad') {
            const deg = findDirectChild(node, 'deg');
            const e = findDirectChild(node, 'e');
            const degHtml = deg && deg.textContent.trim() ? `<sup>${renderOmmlChildren(deg)}</sup>` : '';
            return `${degHtml}&radic;<span style="border-top:1.5px solid currentColor; padding:0 2px;">${renderOmmlChildren(e)}</span>`;
        }
        if (ln === 'd') {
            const dPr = findDirectChild(node, 'dPr');
            const beg = findDirectChild(dPr, 'begChr')?.getAttribute('val') ?? '(';
            const end = findDirectChild(dPr, 'endChr')?.getAttribute('val') ?? ')';
            const inner = findDirectChildren(node, 'e').map(renderOmmlChildren).join(', ');
            return `${escapeHtml(beg)}${inner}${escapeHtml(end)}`;
        }
        return renderOmmlChildren(node);
    }

    function renderOmmlChildren(el) {
        if (!el) return '';
        let out = '';
        for (const ch of el.children || []) {
            out += renderOmmlNode(ch);
        }
        return out;
    }

    function getMimeForMedia(mediaPath) {
        const ext = (mediaPath.split('.').pop() || '').toLowerCase();
        const map = {
            png: 'image/png',
            jpg: 'image/jpeg',
            jpeg: 'image/jpeg',
            gif: 'image/gif',
            webp: 'image/webp',
            svg: 'image/svg+xml',
            bmp: 'image/bmp'
        };
        return map[ext] || 'application/octet-stream';
    }

    async function parsePptxBuffer(arrayBuffer) {
        const zip = await readZipEntries(arrayBuffer);
        const presXmlStr = await zip.getEntryText('ppt/presentation.xml');
        if (!presXmlStr) throw new Error('Invalid PowerPoint file (ppt/presentation.xml missing).');

        const presDoc = parseXml(presXmlStr);
        const presRels = await readRelsMap(zip, 'ppt/presentation.xml');

        // Default widescreen/4:3 slide size in EMU
        let slideW_Emu = 12192000;
        let slideH_Emu = 6858000;
        const sldSzEl = presDoc.getElementsByTagNameNS('*', 'sldSz')[0];
        if (sldSzEl) {
            slideW_Emu = parseInt(sldSzEl.getAttribute('cx') || slideW_Emu, 10);
            slideH_Emu = parseInt(sldSzEl.getAttribute('cy') || slideH_Emu, 10);
        }

        // Logical design width = 960px (points/font scales map linearly: 1pt = 12700 EMU)
        const logicalW = 960;
        const emuPerPx = slideW_Emu / logicalW;
        const logicalH = Math.round(slideH_Emu / emuPerPx);

        // Extract theme colors from ppt/theme/theme1.xml
        const themeColors = {
            dk1: '#000000', lt1: '#ffffff', dk2: '#1f2937', lt2: '#f3f4f6',
            accent1: '#2563eb', accent2: '#ea580c', accent3: '#64748b',
            accent4: '#eab308', accent5: '#0284c7', accent6: '#16a34a',
            hlink: '#0284c7'
        };
        const themeStr = await zip.getEntryText('ppt/theme/theme1.xml');
        if (themeStr) {
            const themeDoc = parseXml(themeStr);
            const clrScheme = themeDoc?.getElementsByTagNameNS('*', 'clrScheme')[0];
            if (clrScheme) {
                for (const cNode of clrScheme.children || []) {
                    const srgb = findDirectChild(cNode, 'srgbClr');
                    const sysClr = findDirectChild(cNode, 'sysClr');
                    if (srgb && srgb.getAttribute('val')) {
                        themeColors[cNode.localName] = `#${srgb.getAttribute('val')}`;
                    } else if (sysClr && sysClr.getAttribute('lastClr')) {
                        themeColors[cNode.localName] = `#${sysClr.getAttribute('lastClr')}`;
                    }
                }
            }
        }

        // Media Blob URL cache (tracked so viewer cleanup revokes all URLs cleanly)
        const mediaUrls = new Map();
        async function getMediaUrl(zipPath) {
            if (!zipPath) return null;
            if (mediaUrls.has(zipPath)) return mediaUrls.get(zipPath);
            const ext = (zipPath.split('.').pop() || '').toLowerCase();
            if (ext === 'wmf' || ext === 'emf') return null; // Not natively image-decodable in HTML <img>
            const bytes = await zip.getEntryBytes(zipPath);
            if (!bytes) return null;
            const blob = new Blob([bytes], { type: getMimeForMedia(zipPath) });
            const url = URL.createObjectURL(blob);
            mediaUrls.set(zipPath, url);
            return url;
        }

        // Slide list ordered by sldIdLst
        const sldIds = Array.from(presDoc.getElementsByTagNameNS('*', 'sldId'));
        const slidePaths = [];
        for (const sid of sldIds) {
            const rId = sid.getAttribute('r:id') || sid.getAttributeNS('http://schemas.openxmlformats.org/officeDocument/2006/relationships', 'id');
            if (rId && presRels[rId]) slidePaths.push(presRels[rId]);
        }

        // Fallback if presentation.xml lacked rIds
        if (!slidePaths.length) {
            for (const key of zip.entries.keys()) {
                const m = key.match(/^ppt\/slides\/slide(\d+)\.xml$/);
                if (m) slidePaths.push({ n: parseInt(m[1], 10), key });
            }
            slidePaths.sort((a, b) => a.n - b.n);
            for (let i = 0; i < slidePaths.length; i++) slidePaths[i] = slidePaths[i].key;
        }

        function readFillCss(spPr, colorMap) {
            if (!spPr) return null;
            if (findDirectChild(spPr, 'noFill')) return 'transparent';
            const solid = findDirectChild(spPr, 'solidFill');
            if (solid) return resolveOoxmlColor(solid, themeColors, colorMap);
            const grad = findDirectChild(spPr, 'gradFill');
            if (grad) {
                const gsLst = findDirectChild(grad, 'gsLst');
                const stops = [];
                for (const gs of findDirectChildren(gsLst, 'gs')) {
                    const pos = Math.round((parseInt(gs.getAttribute('pos') || '0', 10) / 1000));
                    const c = resolveOoxmlColor(gs, themeColors, colorMap);
                    if (c) stops.push(`${c} ${pos}%`);
                }
                if (stops.length >= 2) {
                    return `linear-gradient(135deg, ${stops.join(', ')})`;
                }
                if (stops.length === 1) return stops[0].split(' ')[0];
            }
            return null;
        }

        async function extractBackgroundStyle(doc, rels, colorMap) {
            const cSld = findDirectChild(doc?.documentElement, 'cSld');
            const bg = findDirectChild(cSld, 'bg');
            if (!bg) return null;
            const bgPr = findDirectChild(bg, 'bgPr');
            if (bgPr) {
                const blipFill = findDirectChild(bgPr, 'blipFill');
                if (blipFill) {
                    const blip = findDirectChild(blipFill, 'blip');
                    const rId = blip?.getAttribute('r:embed') || blip?.getAttributeNS('http://schemas.openxmlformats.org/officeDocument/2006/relationships', 'embed');
                    if (rId && rels[rId]) {
                        const url = await getMediaUrl(rels[rId]);
                        if (url) return `background-image:url('${url}'); background-size:cover; background-position:center;`;
                    }
                }
                const fill = readFillCss(bgPr, colorMap);
                if (fill && fill !== 'transparent') return `background:${fill};`;
            }
            const bgRef = findDirectChild(bg, 'bgRef');
            if (bgRef) {
                const c = resolveOoxmlColor(bgRef, themeColors, colorMap);
                if (c) return `background:${c};`;
            }
            return null;
        }

        function renderTextBodyHtml(txBody, colorMap, defaultFillColor) {
            if (!txBody) return '';
            const bodyPr = findDirectChild(txBody, 'bodyPr');
            const anchor = bodyPr?.getAttribute('anchor') || 't';
            const justify = anchor === 'ctr' ? 'center' : (anchor === 'b' ? 'flex-end' : 'flex-start');

            const padL = bodyPr?.getAttribute('lIns') ? Math.round(parseInt(bodyPr.getAttribute('lIns'), 10) / emuPerPx) : 7;
            const padR = bodyPr?.getAttribute('rIns') ? Math.round(parseInt(bodyPr.getAttribute('rIns'), 10) / emuPerPx) : 7;
            const padT = bodyPr?.getAttribute('tIns') ? Math.round(parseInt(bodyPr.getAttribute('tIns'), 10) / emuPerPx) : 4;
            const padB = bodyPr?.getAttribute('bIns') ? Math.round(parseInt(bodyPr.getAttribute('bIns'), 10) / emuPerPx) : 4;

            const paras = findDirectChildren(txBody, 'p');
            let parasHtml = '';
            let autoNum = 1;

            for (const p of paras) {
                const pPr = findDirectChild(p, 'pPr');
                const algnMap = { l: 'left', ctr: 'center', r: 'right', just: 'justify' };
                const align = algnMap[pPr?.getAttribute('algn') || 'l'] || 'left';
                const lvl = parseInt(pPr?.getAttribute('lvl') || '0', 10);

                let bulletHtml = '';
                const buNone = findDirectChild(pPr, 'buNone');
                const buChar = findDirectChild(pPr, 'buChar');
                const buAuto = findDirectChild(pPr, 'buAutoNum');
                if (!buNone) {
                    if (buChar) bulletHtml = `<span style="margin-right:6px;">${escapeHtml(buChar.getAttribute('char') || '•')}</span>`;
                    else if (buAuto) bulletHtml = `<span style="margin-right:6px;">${autoNum++}.</span>`;
                }

                let lineHtml = '';
                for (const node of p.children || []) {
                    const ln = node.localName;
                    if (ln === 'r' || ln === 'fld') {
                        const rPr = findDirectChild(node, 'rPr');
                        const tNode = findDirectChild(node, 't');
                        const text = tNode ? tNode.textContent : '';
                        if (!text) continue;

                        const szAttr = rPr?.getAttribute('sz');
                        const pt = szAttr ? parseInt(szAttr, 10) / 100 : 16;
                        const pxSize = Math.max(9, Math.round((pt * 12700) / emuPerPx));
                        const isBold = rPr?.getAttribute('b') === '1';
                        const isItal = rPr?.getAttribute('i') === '1';
                        const isUnder = rPr?.getAttribute('u') && rPr.getAttribute('u') !== 'none';
                        const baseline = parseInt(rPr?.getAttribute('baseline') || '0', 10);

                        const solidFill = findDirectChild(rPr, 'solidFill');
                        const txtColor = resolveOoxmlColor(solidFill, themeColors, colorMap) || defaultFillColor || '#1e293b';

                        const latin = findDirectChild(rPr, 'latin')?.getAttribute('typeface');
                        const cs = findDirectChild(rPr, 'cs')?.getAttribute('typeface');
                        const ff = [cs, latin, 'Noto Sans Khmer', 'Khmer OS Siemreap', 'Battambang', 'Inter', 'sans-serif']
                            .filter(Boolean)
                            .map(f => f.includes(' ') ? `'${f.replace(/'/g, '')}'` : f)
                            .join(',');

                        let styleStr = `font-size:${pxSize}px;color:${txtColor};font-family:${ff};`;
                        if (isBold) styleStr += 'font-weight:700;';
                        if (isItal) styleStr += 'font-style:italic;';
                        if (isUnder) styleStr += 'text-decoration:underline;';

                        let inner = escapeHtml(text);
                        if (baseline > 0) inner = `<sup>${inner}</sup>`;
                        else if (baseline < 0) inner = `<sub>${inner}</sub>`;

                        lineHtml += `<span style="${styleStr}">${inner}</span>`;
                    } else if (ln === 'br') {
                        lineHtml += '<br>';
                    } else if (ln === 'm' || ln === 'AlternateContent') {
                        const mathEls = node.getElementsByTagNameNS('*', 'oMath');
                        for (const mEl of mathEls) {
                            lineHtml += `<span style="font-family:'Cambria Math','Times New Roman',serif;">${renderOmmlNode(mEl)}</span>`;
                        }
                    }
                }

                if (!lineHtml) lineHtml = '&nbsp;';
                parasHtml += `<div class="pptx-para" style="text-align:${align}; padding-left:${lvl * 18}px;">${bulletHtml}${lineHtml}</div>`;
            }

            return `<div class="pptx-textbox" style="width:100%;height:100%;justify-content:${justify};padding:${padT}px ${padR}px ${padB}px ${padL}px;">${parasHtml}</div>`;
        }

        function getXfrmRect(xfrmEl, mapX, mapY, mapW, mapH) {
            if (!xfrmEl) return null;
            const off = findDirectChild(xfrmEl, 'off');
            const ext = findDirectChild(xfrmEl, 'ext');
            if (!off || !ext) return null;
            const x = parseInt(off.getAttribute('x') || '0', 10);
            const y = parseInt(off.getAttribute('y') || '0', 10);
            const cx = parseInt(ext.getAttribute('cx') || '0', 10);
            const cy = parseInt(ext.getAttribute('cy') || '0', 10);
            const rot = parseInt(xfrmEl.getAttribute('rot') || '0', 10) / 60000;
            const flipH = xfrmEl.getAttribute('flipH') === '1';
            const flipV = xfrmEl.getAttribute('flipV') === '1';
            return {
                left: mapX(x),
                top: mapY(y),
                width: mapW(cx),
                height: mapH(cy),
                rot,
                flipH,
                flipV
            };
        }

        async function renderSpTreeChildren(spTreeEl, rels, colorMap, mapper) {
            if (!spTreeEl) return '';
            let out = '';

            for (const node of spTreeEl.children || []) {
                const ln = node.localName;

                if (ln === 'sp' || ln === 'cxnSp') {
                    const spPr = findDirectChild(node, 'spPr');
                    const xfrm = findDirectChild(spPr, 'xfrm');
                    const rect = getXfrmRect(xfrm, mapper.mapX, mapper.mapY, mapper.mapW, mapper.mapH);
                    if (!rect) continue;

                    const prst = findDirectChild(spPr, 'prstGeom')?.getAttribute('prst') || 'rect';
                    const fillCss = readFillCss(spPr, colorMap);
                    const lnNode = findDirectChild(spPr, 'ln');
                    const lnW = lnNode?.getAttribute('w') ? Math.max(1, Math.round(parseInt(lnNode.getAttribute('w'), 10) / emuPerPx)) : (lnNode && !findDirectChild(lnNode, 'noFill') ? 1 : 0);
                    const lnColor = lnNode && !findDirectChild(lnNode, 'noFill')
                        ? resolveOoxmlColor(findDirectChild(lnNode, 'solidFill'), themeColors, colorMap)
                        : null;

                    let transformParts = [];
                    if (rect.rot) transformParts.push(`rotate(${rect.rot.toFixed(2)}deg)`);
                    if (rect.flipH) transformParts.push('scaleX(-1)');
                    if (rect.flipV) transformParts.push('scaleY(-1)');
                    const tfStyle = transformParts.length ? `transform:${transformParts.join(' ')};transform-origin:center;` : '';

                    if (ln === 'cxnSp' || prst === 'line' || prst === 'straightConnector1') {
                        const stroke = lnColor || '#334155';
                        const sw = Math.max(1.5, lnW);
                        const hasTail = Boolean(findDirectChild(lnNode, 'tailEnd')?.getAttribute('type') && findDirectChild(lnNode, 'tailEnd').getAttribute('type') !== 'none');
                        const x1 = rect.flipH ? rect.width : 0;
                        const y1 = rect.flipV ? rect.height : 0;
                        const x2 = rect.flipH ? 0 : rect.width;
                        const y2 = rect.flipV ? 0 : rect.height;
                        const markerId = `arr-${Math.random().toString(36).slice(2, 8)}`;
                        const svgW = Math.max(rect.width, 6);
                        const svgH = Math.max(rect.height, 6);
                        out += `<svg class="pptx-el" style="left:${rect.left}px;top:${rect.top}px;overflow:visible;${rect.rot ? `transform:rotate(${rect.rot.toFixed(2)}deg);` : ''}" width="${svgW}" height="${svgH}">
                            ${hasTail ? `<defs><marker id="${markerId}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="${stroke}"/></marker></defs>` : ''}
                            <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${sw}" ${hasTail ? `marker-end="url(#${markerId})"` : ''}/>
                        </svg>`;
                        continue;
                    }

                    let radiusCss = '';
                    if (prst === 'ellipse') radiusCss = 'border-radius:50%;';
                    else if (prst === 'roundRect') radiusCss = 'border-radius:10px;';

                    const bgStyle = (fillCss && fillCss !== 'transparent') ? `background:${fillCss};` : '';
                    const borderStyle = lnColor ? `border:${lnW}px solid ${lnColor};` : '';

                    const txBody = findDirectChild(node, 'txBody');
                    const styleNode = findDirectChild(node, 'style');
                    const fontRef = findDirectChild(styleNode, 'fontRef');
                    const defaultFontColor = resolveOoxmlColor(fontRef, themeColors, colorMap) || '#0f172a';
                    const textHtml = txBody ? renderTextBodyHtml(txBody, colorMap, defaultFontColor) : '';

                    out += `<div class="pptx-el" style="left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;${bgStyle}${borderStyle}${radiusCss}${tfStyle}">${textHtml}</div>`;
                } else if (ln === 'pic') {
                    const spPr = findDirectChild(node, 'spPr');
                    const xfrm = findDirectChild(spPr, 'xfrm');
                    const rect = getXfrmRect(xfrm, mapper.mapX, mapper.mapY, mapper.mapW, mapper.mapH);
                    if (!rect) continue;
                    const blipFill = findDirectChild(node, 'blipFill');
                    const blip = findDirectChild(blipFill, 'blip');
                    const rId = blip?.getAttribute('r:embed') || blip?.getAttributeNS('http://schemas.openxmlformats.org/officeDocument/2006/relationships', 'embed');
                    if (rId && rels[rId]) {
                        const imgUrl = await getMediaUrl(rels[rId]);
                        if (imgUrl) {
                            let tf = [];
                            if (rect.rot) tf.push(`rotate(${rect.rot.toFixed(2)}deg)`);
                            if (rect.flipH) tf.push('scaleX(-1)');
                            if (rect.flipV) tf.push('scaleY(-1)');
                            out += `<img class="pptx-el" src="${imgUrl}" alt="Slide Diagram" style="left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;object-fit:fill;${tf.length ? `transform:${tf.join(' ')};` : ''}">`;
                        }
                    }
                } else if (ln === 'grpSp') {
                    const grpSpPr = findDirectChild(node, 'grpSpPr');
                    const xfrm = findDirectChild(grpSpPr, 'xfrm');
                    const off = findDirectChild(xfrm, 'off');
                    const ext = findDirectChild(xfrm, 'ext');
                    const chOff = findDirectChild(xfrm, 'chOff');
                    const chExt = findDirectChild(xfrm, 'chExt');
                    if (off && ext && chOff && chExt) {
                        const gx = mapper.mapX(parseInt(off.getAttribute('x') || '0', 10));
                        const gy = mapper.mapY(parseInt(off.getAttribute('y') || '0', 10));
                        const gw = mapper.mapW(parseInt(ext.getAttribute('cx') || '1', 10));
                        const gh = mapper.mapH(parseInt(ext.getAttribute('cy') || '1', 10));
                        const cx0 = parseInt(chOff.getAttribute('x') || '0', 10);
                        const cy0 = parseInt(chOff.getAttribute('y') || '0', 10);
                        const cw0 = Math.max(1, parseInt(chExt.getAttribute('cx') || '1', 10));
                        const ch0 = Math.max(1, parseInt(chExt.getAttribute('cy') || '1', 10));
                        const subMapper = {
                            mapX: v => ((v - cx0) / cw0) * gw,
                            mapY: v => ((v - cy0) / ch0) * gh,
                            mapW: v => (v / cw0) * gw,
                            mapH: v => (v / ch0) * gh
                        };
                        const childrenHtml = await renderSpTreeChildren(node, rels, colorMap, subMapper);
                        out += `<div class="pptx-el" style="left:${gx}px;top:${gy}px;width:${gw}px;height:${gh}px;">${childrenHtml}</div>`;
                    }
                } else if (ln === 'graphicFrame') {
                    const xfrm = findDirectChild(node, 'xfrm');
                    const rect = getXfrmRect(xfrm, mapper.mapX, mapper.mapY, mapper.mapW, mapper.mapH);
                    const tbl = node.getElementsByTagNameNS('*', 'tbl')[0];
                    if (rect && tbl) {
                        const cols = Array.from(tbl.getElementsByTagNameNS('*', 'gridCol'));
                        const totalGridW = cols.reduce((acc, c) => acc + parseInt(c.getAttribute('w') || '1', 10), 0) || 1;
                        const colWidths = cols.map(c => `${((parseInt(c.getAttribute('w') || '1', 10) / totalGridW) * 100).toFixed(2)}%`);
                        const rows = findDirectChildren(tbl, 'tr');
                        let tblHtml = '<table class="pptx-table">';
                        if (colWidths.length) {
                            tblHtml += '<colgroup>' + colWidths.map(w => `<col style="width:${w};">`).join('') + '</colgroup>';
                        }
                        for (const tr of rows) {
                            tblHtml += '<tr>';
                            for (const tc of findDirectChildren(tr, 'tc')) {
                                const tcPr = findDirectChild(tc, 'tcPr');
                                const cellBg = readFillCss(tcPr, colorMap);
                                const txBody = findDirectChild(tc, 'txBody');
                                const cellHtml = renderTextBodyHtml(txBody, colorMap, '#0f172a');
                                tblHtml += `<td style="${cellBg && cellBg !== 'transparent' ? `background:${cellBg};` : ''}">${cellHtml}</td>`;
                            }
                            tblHtml += '</tr>';
                        }
                        tblHtml += '</table>';
                        out += `<div class="pptx-el" style="left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;">${tblHtml}</div>`;
                    }
                }
            }

            return out;
        }

        const rootMapper = {
            mapX: v => (v / emuPerPx),
            mapY: v => (v / emuPerPx),
            mapW: v => (v / emuPerPx),
            mapH: v => (v / emuPerPx)
        };

        const renderedSlides = [];
        for (let i = 0; i < slidePaths.length; i++) {
            const spath = slidePaths[i];
            const sXmlStr = await zip.getEntryText(spath);
            if (!sXmlStr) continue;
            const sDoc = parseXml(sXmlStr);
            const sRels = await readRelsMap(zip, spath);

            // Follow slideLayout & slideMaster for inherited background & color map
            let layoutDoc = null, layoutRels = {}, masterDoc = null, masterRels = {};
            const layoutPath = Object.values(sRels).find(p => p.includes('slideLayout'));
            if (layoutPath) {
                layoutDoc = parseXml(await zip.getEntryText(layoutPath));
                layoutRels = await readRelsMap(zip, layoutPath);
                const masterPath = Object.values(layoutRels).find(p => p.includes('slideMaster'));
                if (masterPath) {
                    masterDoc = parseXml(await zip.getEntryText(masterPath));
                    masterRels = await readRelsMap(zip, masterPath);
                }
            }

            const clrMapEl = masterDoc ? findDirectChild(masterDoc.documentElement, 'clrMap') : null;
            const colorMap = {};
            if (clrMapEl) {
                for (const attr of clrMapEl.attributes || []) {
                    colorMap[attr.name] = attr.value;
                }
            }

            const bgCss = (await extractBackgroundStyle(sDoc, sRels, colorMap))
                || (await extractBackgroundStyle(layoutDoc, layoutRels, colorMap))
                || (await extractBackgroundStyle(masterDoc, masterRels, colorMap))
                || 'background:#ffffff;';

            const spTree = findDirectChild(findDirectChild(sDoc.documentElement, 'cSld'), 'spTree');
            const bodyHtml = await renderSpTreeChildren(spTree, sRels, colorMap, rootMapper);

            renderedSlides.push({
                index: i + 1,
                logicalW,
                logicalH,
                bgCss,
                bodyHtml
            });
        }

        return {
            logicalW,
            logicalH,
            slides: renderedSlides,
            cleanupMedia: () => {
                for (const url of mediaUrls.values()) {
                    try { URL.revokeObjectURL(url); } catch (e) {}
                }
                mediaUrls.clear();
            }
        };
    }

    // --------------------------------------------------------------------------
    // Interactive Fullscreen Slide Viewer Modal (PDF + PPTX + PPT)
    // --------------------------------------------------------------------------
    function ensureViewerModalDom() {
        if (document.getElementById('slides-viewer-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'slides-viewer-modal';
        modal.className = 'slides-viewer-modal hidden';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');
        modal.innerHTML = `
            <header class="slides-viewer-topbar">
                <div class="slides-viewer-title-box">
                    <span class="slides-viewer-grade-tag" id="sv-grade-lang-badge">Grade 9</span>
                    <span class="slides-viewer-doc-title" id="sv-doc-title">Summary Slides</span>
                </div>
                <div class="slides-viewer-controls">
                    <button type="button" class="sv-btn" id="sv-toggle-thumbs-btn" title="Toggle Slide List">
                        <i class="fa-solid fa-table-columns"></i> <span class="sv-hide-sm">Slides</span>
                    </button>
                    <button type="button" class="sv-btn active" id="sv-mode-slide-btn" title="Single Slide Presentation Mode">
                        <i class="fa-solid fa-square"></i> <span class="sv-hide-sm">Slide</span>
                    </button>
                    <button type="button" class="sv-btn" id="sv-mode-scroll-btn" title="Continuous Scroll Mode">
                        <i class="fa-solid fa-bars-staggered"></i> <span class="sv-hide-sm">Scroll</span>
                    </button>
                    <button type="button" class="sv-btn" id="sv-prev-btn" title="Previous Slide (Left Arrow)">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <div class="sv-page-pill">
                        <input type="number" id="sv-page-input" class="sv-page-input" value="1" min="1" max="1" aria-label="Slide number">
                        <span>/ <span id="sv-total-slides">-</span></span>
                    </div>
                    <button type="button" class="sv-btn" id="sv-next-btn" title="Next Slide (Right Arrow)">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                    <button type="button" class="sv-btn" id="sv-zoom-out-btn" title="Zoom Out"><i class="fa-solid fa-magnifying-glass-minus"></i></button>
                    <button type="button" class="sv-btn" id="sv-zoom-fit-btn" title="Fit to Screen"><span id="sv-zoom-label">100%</span></button>
                    <button type="button" class="sv-btn" id="sv-zoom-in-btn" title="Zoom In"><i class="fa-solid fa-magnifying-glass-plus"></i></button>
                    <button type="button" class="sv-btn" id="sv-fs-btn" title="Toggle Fullscreen">
                        <i class="fa-solid fa-expand" id="sv-fs-icon"></i> <span class="sv-hide-sm" id="sv-fs-text">Fullscreen</span>
                    </button>
                    <button type="button" class="sv-btn close-btn" id="sv-close-btn" title="Close Viewer">
                        <i class="fa-solid fa-xmark"></i> <span class="sv-hide-sm">Close</span>
                    </button>
                </div>
            </header>
            <div class="slides-viewer-workspace">
                <aside class="slides-thumb-sidebar" id="sv-thumb-sidebar"></aside>
                <div class="slides-viewer-stage single-slide-center" id="sv-stage"></div>
            </div>
        `;
        document.body.appendChild(modal);
    }

    function closeSlideViewer() {
        const modal = document.getElementById('slides-viewer-modal');
        if (modal) modal.classList.add('hidden');
        document.body.classList.remove('pdf-modal-open');

        if (document.fullscreenElement || document.webkitFullscreenElement) {
            try {
                if (document.exitFullscreen) document.exitFullscreen().catch(() => {});
                else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
            } catch (e) {}
        }

        if (viewerSession) {
            viewerSession.aborted = true;
            if (typeof viewerSession.cleanup === 'function') {
                try { viewerSession.cleanup(); } catch (e) {}
            }
            viewerSession = null;
        }
    }

    async function openSlideViewer(grade, slideId, startFullscreen) {
        const g = normalizeGrade(grade);
        if (!g) return;
        const slide = (state.slidesByGrade[g] || []).find(s => s.id === slideId);
        if (!slide) return;

        ensureViewerModalDom();
        closeSlideViewer();

        const modal = document.getElementById('slides-viewer-modal');
        const badgeEl = document.getElementById('sv-grade-lang-badge');
        const titleEl = document.getElementById('sv-doc-title');
        const stage = document.getElementById('sv-stage');
        const sidebar = document.getElementById('sv-thumb-sidebar');
        const totalEl = document.getElementById('sv-total-slides');
        const pageInput = document.getElementById('sv-page-input');
        const zoomLabel = document.getElementById('sv-zoom-label');
        const modeSlideBtn = document.getElementById('sv-mode-slide-btn');
        const modeScrollBtn = document.getElementById('sv-mode-scroll-btn');
        const prevBtn = document.getElementById('sv-prev-btn');
        const nextBtn = document.getElementById('sv-next-btn');
        const zoomOutBtn = document.getElementById('sv-zoom-out-btn');
        const zoomFitBtn = document.getElementById('sv-zoom-fit-btn');
        const zoomInBtn = document.getElementById('sv-zoom-in-btn');
        const fsBtn = document.getElementById('sv-fs-btn');
        const fsIcon = document.getElementById('sv-fs-icon');
        const fsText = document.getElementById('sv-fs-text');
        const thumbsBtn = document.getElementById('sv-toggle-thumbs-btn');
        const closeBtn = document.getElementById('sv-close-btn');

        const langLabel = LANG_META[slide.language]?.label || slide.language;
        if (badgeEl) badgeEl.textContent = `Grade ${g} • ${langLabel}`;
        if (titleEl) titleEl.textContent = slide.title || slide.originalName || 'Summary Slides';

        modal.classList.remove('hidden');
        document.body.classList.add('pdf-modal-open');
        stage.innerHTML = `<div class="sv-loading-box"><i class="fa-solid fa-circle-notch fa-spin fa-2x" style="color:#38bdf8; margin-bottom:0.85rem;"></i><p>Loading ${escapeHtml(slide.title)}...</p></div>`;
        sidebar.innerHTML = '';
        if (totalEl) totalEl.textContent = '-';
        if (pageInput) pageInput.value = 1;

        const session = {
            aborted: false,
            mode: 'slide', // 'slide' | 'scroll'
            currentPage: 1,
            numPages: 1,
            zoomMultiplier: 1.0,
            kind: null, // 'pdf' | 'pptx' | 'unsupported'
            pdfDoc: null,
            pptxDeck: null,
            cleanups: [],
            cleanup: () => {
                session.aborted = true;
                session.cleanups.forEach(fn => { try { fn(); } catch (e) {} });
                session.cleanups = [];
                if (session.pdfDoc) {
                    try { session.pdfDoc.destroy(); } catch (e) {}
                }
                if (session.pptxDeck && typeof session.pptxDeck.cleanupMedia === 'function') {
                    session.pptxDeck.cleanupMedia();
                }
            }
        };
        viewerSession = session;

        function bindEv(target, ev, fn, opts) {
            if (!target) return;
            target.addEventListener(ev, fn, opts);
            session.cleanups.push(() => target.removeEventListener(ev, fn, opts));
        }

        function setViewerFullscreen(enter) {
            const want = typeof enter === 'boolean'
                ? enter
                : !(document.fullscreenElement === modal || document.webkitFullscreenElement === modal || modal.classList.contains('is-native-fs'));

            if (want) {
                modal.classList.add('is-native-fs');
                if (fsIcon) fsIcon.className = 'fa-solid fa-xmark';
                if (fsText) fsText.textContent = 'Exit Fullscreen';
                try {
                    const req = modal.requestFullscreen || modal.webkitRequestFullscreen || modal.mozRequestFullScreen || modal.msRequestFullscreen;
                    if (req && document.fullscreenElement !== modal && document.webkitFullscreenElement !== modal) {
                        const p = req.call(modal);
                        if (p && p.catch) p.catch(() => {});
                    }
                } catch (e) {}
            } else {
                modal.classList.remove('is-native-fs');
                if (fsIcon) fsIcon.className = 'fa-solid fa-expand';
                if (fsText) fsText.textContent = 'Fullscreen';
                try {
                    if (document.fullscreenElement === modal && document.exitFullscreen) {
                        document.exitFullscreen().catch(() => {});
                    } else if (document.webkitFullscreenElement === modal && document.webkitExitFullscreen) {
                        document.webkitExitFullscreen();
                    }
                } catch (e) {}
            }
            setTimeout(() => { if (!session.aborted) renderCurrentView(); }, 100);
        }

        function syncNativeFullscreenChange() {
            if (session.aborted) return;
            const activeFsEl = document.fullscreenElement || document.webkitFullscreenElement;
            if (!activeFsEl && modal.classList.contains('is-native-fs')) {
                modal.classList.remove('is-native-fs');
                if (fsIcon) fsIcon.className = 'fa-solid fa-expand';
                if (fsText) fsText.textContent = 'Fullscreen';
                setTimeout(() => { if (!session.aborted) renderCurrentView(); }, 80);
            }
        }
        bindEv(document, 'fullscreenchange', syncNativeFullscreenChange);
        bindEv(document, 'webkitfullscreenchange', syncNativeFullscreenChange);

        if (startFullscreen) {
            setViewerFullscreen(true);
        } else {
            if (fsIcon) fsIcon.className = 'fa-solid fa-expand';
            if (fsText) fsText.textContent = 'Fullscreen';
        }

        function updateNavButtons() {
            if (totalEl) totalEl.textContent = String(session.numPages);
            if (pageInput) {
                pageInput.max = session.numPages;
                if (document.activeElement !== pageInput) pageInput.value = session.currentPage;
            }
            if (prevBtn) prevBtn.disabled = session.currentPage <= 1;
            if (nextBtn) nextBtn.disabled = session.currentPage >= session.numPages;
            if (zoomLabel) zoomLabel.textContent = `${Math.round(session.zoomMultiplier * 100)}%`;

            sidebar.querySelectorAll('.sv-thumb-item').forEach(el => {
                el.classList.toggle('active', parseInt(el.dataset.page, 10) === session.currentPage);
            });
            modeSlideBtn?.classList.toggle('active', session.mode === 'slide');
            modeScrollBtn?.classList.toggle('active', session.mode === 'scroll');
        }

        function buildSidebarThumbs() {
            let html = '';
            for (let i = 1; i <= session.numPages; i++) {
                html += `<button type="button" class="sv-thumb-item ${i === session.currentPage ? 'active' : ''}" data-page="${i}">
                    <span class="sv-thumb-num">${i}</span>
                    <span>Slide ${i}</span>
                </button>`;
            }
            sidebar.innerHTML = html;
            sidebar.querySelectorAll('.sv-thumb-item').forEach(item => {
                item.addEventListener('click', () => {
                    goToSlide(parseInt(item.dataset.page, 10));
                });
            });
        }

        function goToSlide(n) {
            const target = Math.max(1, Math.min(n, session.numPages));
            session.currentPage = target;
            updateNavButtons();
            if (session.mode === 'slide') {
                renderCurrentView();
            } else {
                const el = stage.querySelector(`[data-slide-idx="${target}"]`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }

        function computeStageSize(baseW, baseH) {
            const padX = window.innerWidth <= 768 ? 20 : 48;
            const padY = window.innerWidth <= 768 ? 24 : 44;
            const availW = Math.max(240, (stage.clientWidth || window.innerWidth) - padX);
            const availH = Math.max(200, (stage.clientHeight || window.innerHeight - 70) - padY);
            const fitScale = session.mode === 'slide'
                ? Math.min(availW / baseW, availH / baseH)
                : (availW / baseW);
            const finalScale = Math.max(0.2, Math.min(fitScale * session.zoomMultiplier, 4.0));
            return {
                scale: finalScale,
                w: Math.round(baseW * finalScale),
                h: Math.round(baseH * finalScale)
            };
        }

        async function renderPdfPageIntoCanvas(pageNum, canvas, outerCard) {
            if (session.aborted || !session.pdfDoc) return;
            const page = await session.pdfDoc.getPage(pageNum);
            if (session.aborted) return;
            const vp1 = page.getViewport({ scale: 1 });
            const sized = computeStageSize(vp1.width, vp1.height);
            const dpr = Math.min(window.devicePixelRatio || 1, 2.25);
            const renderVp = page.getViewport({ scale: sized.scale * dpr });

            outerCard.style.width = `${sized.w}px`;
            outerCard.style.height = `${sized.h}px`;
            canvas.width = Math.max(1, Math.floor(renderVp.width));
            canvas.height = Math.max(1, Math.floor(renderVp.height));
            const ctx = canvas.getContext('2d', { alpha: false });
            await page.render({ canvasContext: ctx, viewport: renderVp }).promise;
        }

        async function renderCurrentView() {
            if (session.aborted) return;
            updateNavButtons();

            if (session.kind === 'pdf' && session.pdfDoc) {
                stage.classList.toggle('single-slide-center', session.mode === 'slide');
                stage.innerHTML = '';

                if (session.mode === 'slide') {
                    const card = document.createElement('div');
                    card.className = 'sv-slide-card';
                    card.dataset.slideIdx = String(session.currentPage);
                    const canvas = document.createElement('canvas');
                    canvas.className = 'sv-slide-canvas';
                    card.appendChild(canvas);
                    stage.appendChild(card);
                    await renderPdfPageIntoCanvas(session.currentPage, canvas, card);
                } else {
                    const p1 = await session.pdfDoc.getPage(1);
                    const vp1 = p1.getViewport({ scale: 1 });
                    const est = computeStageSize(vp1.width, vp1.height);
                    const cards = [];
                    for (let p = 1; p <= session.numPages; p++) {
                        const card = document.createElement('div');
                        card.className = 'sv-slide-card';
                        card.dataset.slideIdx = String(p);
                        card.style.width = `${est.w}px`;
                        card.style.height = `${est.h}px`;
                        const canvas = document.createElement('canvas');
                        canvas.className = 'sv-slide-canvas';
                        card.appendChild(canvas);
                        stage.appendChild(card);
                        cards.push({ p, card, canvas, rendered: false });
                    }
                    const renderTarget = (item) => {
                        if (!item || item.rendered || session.aborted) return;
                        item.rendered = true;
                        renderPdfPageIntoCanvas(item.p, item.canvas, item.card);
                    };
                    if ('IntersectionObserver' in window) {
                        const io = new IntersectionObserver(entries => {
                            entries.forEach(entry => {
                                if (entry.isIntersecting) {
                                    const idx = parseInt(entry.target.dataset.slideIdx, 10) - 1;
                                    renderTarget(cards[idx]);
                                }
                            });
                        }, { root: stage, rootMargin: '400px 0px', threshold: 0.01 });
                        cards.forEach(c => io.observe(c.card));
                        session.cleanups.push(() => io.disconnect());
                    } else {
                        cards.forEach(renderTarget);
                    }
                    renderTarget(cards[0]);
                }
            } else if (session.kind === 'pptx' && session.pptxDeck) {
                stage.classList.toggle('single-slide-center', session.mode === 'slide');
                const deck = session.pptxDeck;
                const indices = session.mode === 'slide'
                    ? [session.currentPage - 1]
                    : deck.slides.map((_, idx) => idx);

                const sized = computeStageSize(deck.logicalW, deck.logicalH);
                let html = '';
                for (const idx of indices) {
                    const sObj = deck.slides[idx];
                    if (!sObj) continue;
                    html += `
                        <div class="pptx-slide-outer" data-slide-idx="${sObj.index}" style="width:${sized.w}px;height:${sized.h}px;">
                            <div class="pptx-slide-inner" style="width:${sObj.logicalW}px;height:${sObj.logicalH}px;transform:scale(${sized.scale});${sObj.bgCss}">
                                ${sObj.bodyHtml}
                            </div>
                        </div>
                    `;
                }
                stage.innerHTML = html || '<div class="sv-info-box">No slides found inside this presentation.</div>';
            }
        }

        // Bind viewer UI buttons
        bindEv(closeBtn, 'click', closeSlideViewer);
        bindEv(fsBtn, 'click', () => setViewerFullscreen());
        bindEv(thumbsBtn, 'click', () => sidebar.classList.toggle('hidden'));
        bindEv(prevBtn, 'click', () => goToSlide(session.currentPage - 1));
        bindEv(nextBtn, 'click', () => goToSlide(session.currentPage + 1));
        bindEv(modeSlideBtn, 'click', () => { session.mode = 'slide'; renderCurrentView(); });
        bindEv(modeScrollBtn, 'click', () => { session.mode = 'scroll'; renderCurrentView(); });
        bindEv(zoomOutBtn, 'click', () => { session.zoomMultiplier = Math.max(0.5, session.zoomMultiplier - 0.15); renderCurrentView(); });
        bindEv(zoomInBtn, 'click', () => { session.zoomMultiplier = Math.min(3.0, session.zoomMultiplier + 0.15); renderCurrentView(); });
        bindEv(zoomFitBtn, 'click', () => { session.zoomMultiplier = 1.0; renderCurrentView(); });

        if (pageInput) {
            bindEv(pageInput, 'change', () => goToSlide(parseInt(pageInput.value, 10) || 1));
            bindEv(pageInput, 'keydown', (e) => {
                if (e.key === 'Enter') goToSlide(parseInt(pageInput.value, 10) || 1);
            });
        }

        // Touch Swipe left/right on stage in Slide Mode (mobile & tablet)
        let swipeStartX = 0, swipeStartY = 0;
        bindEv(stage, 'touchstart', (e) => {
            if (e.touches && e.touches.length === 1) {
                swipeStartX = e.touches[0].clientX;
                swipeStartY = e.touches[0].clientY;
            }
        }, { passive: true });
        bindEv(stage, 'touchend', (e) => {
            if (session.mode !== 'slide' || !swipeStartX || !e.changedTouches || e.changedTouches.length !== 1) return;
            const dx = e.changedTouches[0].clientX - swipeStartX;
            const dy = e.changedTouches[0].clientY - swipeStartY;
            swipeStartX = 0;
            if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.4) {
                if (dx < 0 && session.currentPage < session.numPages) goToSlide(session.currentPage + 1);
                else if (dx > 0 && session.currentPage > 1) goToSlide(session.currentPage - 1);
            }
        }, { passive: true });

        let resizeTimer = null;
        const onResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => { if (!session.aborted) renderCurrentView(); }, 120);
        };
        bindEv(window, 'resize', onResize);
        bindEv(window, 'orientationchange', onResize);

        bindEv(window, 'keydown', (e) => {
            if (session.aborted) return;
            if (e.key === 'Escape') {
                if (modal.classList.contains('is-native-fs')) setViewerFullscreen(false);
                else closeSlideViewer();
            } else if (document.activeElement !== pageInput) {
                if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
                    if (session.mode === 'slide' && session.currentPage < session.numPages) {
                        e.preventDefault();
                        goToSlide(session.currentPage + 1);
                    }
                } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
                    if (session.mode === 'slide' && session.currentPage > 1) {
                        e.preventDefault();
                        goToSlide(session.currentPage - 1);
                    }
                }
            }
        });

        // Fetch file payload and render according to format
        try {
            let fileBuffer = null;
            let effectiveExt = (slide.ext || getExtFromName(slide.originalName) || '.pdf').toLowerCase();
            let fileUrlForDownload = null;

            if (state.backendAvailable) {
                const usePdfPreview = Boolean((slide.previewUrl || slide.previewPdfName) && (effectiveExt === '.ppt' || effectiveExt === '.pptx'));
                const targetPath = usePdfPreview
                    ? `api/summary-slides/file/${g}/${slide.id}?variant=pdf-preview&t=${encodeURIComponent(slide.updatedAt || '')}`
                    : `api/summary-slides/file/${g}/${slide.id}?t=${encodeURIComponent(slide.updatedAt || '')}`;
                fileUrlForDownload = resolveUrl(`api/summary-slides/file/${g}/${slide.id}`);
                const res = await fetch(resolveUrl(targetPath), { credentials: 'include', cache: 'no-store' });
                if (!res.ok) {
                    const errJson = await res.json().catch(() => ({}));
                    throw new Error(errJson.error || `Failed to load slide file (HTTP ${res.status}).`);
                }
                fileBuffer = await res.arrayBuffer();
                if (usePdfPreview) effectiveExt = '.pdf';
            } else if (slide.url) {
                const usePdfPreview = Boolean(slide.previewUrl && (effectiveExt === '.ppt' || effectiveExt === '.pptx'));
                const relAsset = usePdfPreview ? slide.previewUrl : slide.url;
                const cacheTag = encodeURIComponent(slide.updatedAt || Date.now());
                fileUrlForDownload = resolveUrl(slide.url);
                const res = await fetch(`${resolveUrl(relAsset)}?t=${cacheTag}`, { cache: 'no-store' });
                if (!res.ok) {
                    throw new Error(`Failed to load slide file from ${relAsset} (HTTP ${res.status}).`);
                }
                fileBuffer = await res.arrayBuffer();
                if (usePdfPreview) effectiveExt = '.pdf';
            } else {
                const idbRec = await idbGetSlide(slide.id);
                if (!idbRec || !idbRec.fileData) throw new Error('Slide file not found in local storage.');
                fileBuffer = idbRec.fileData;
                effectiveExt = (idbRec.ext || effectiveExt).toLowerCase();
            }

            if (session.aborted) return;

            if (effectiveExt === '.pdf') {
                const pdfjs = window.pdfjsLib || window['pdfjs-dist/build/pdf'] || window.PDFJS;
                if (!pdfjs) throw new Error('PDF.js viewer library failed to load.');
                const doc = await pdfjs.getDocument({
                    data: new Uint8Array(fileBuffer),
                    cMapUrl: `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version || '3.11.174'}/cmaps/`,
                    cMapPacked: true,
                    disableWorker: true
                }).promise;
                if (session.aborted) { try { doc.destroy(); } catch (e) {} return; }

                session.kind = 'pdf';
                session.pdfDoc = doc;
                session.numPages = doc.numPages;
                buildSidebarThumbs();
                await renderCurrentView();
            } else if (effectiveExt === '.pptx') {
                const deck = await parsePptxBuffer(fileBuffer);
                if (session.aborted) { deck.cleanupMedia(); return; }

                session.kind = 'pptx';
                session.pptxDeck = deck;
                session.numPages = deck.slides.length || 1;
                buildSidebarThumbs();
                await renderCurrentView();
            } else {
                // Legacy .ppt binary format without server LibreOffice PDF conversion
                session.kind = 'unsupported';
                updateNavButtons();
                const blobUrl = fileUrlForDownload || URL.createObjectURL(new Blob([fileBuffer], { type: 'application/vnd.ms-powerpoint' }));
                if (!fileUrlForDownload) {
                    session.cleanups.push(() => { try { URL.revokeObjectURL(blobUrl); } catch (e) {} });
                }
                stage.innerHTML = `
                    <div class="sv-info-box">
                        <i class="fa-solid fa-file-powerpoint" style="font-size:2.5rem; color:#f97316; margin-bottom:0.85rem;"></i>
                        <h3 style="margin-bottom:0.5rem; color:#ffffff;">Legacy PowerPoint (.ppt) Format</h3>
                        <p style="font-size:0.9rem; color:#cbd5e1; line-height:1.55; margin-bottom:1.15rem;">
                            Web browsers cannot render legacy binary <code>.ppt</code> files directly unless LibreOffice is installed on the server.
                            For full in-browser slides with Khmer fonts, equations, and diagrams, save this deck as <strong>.pptx</strong> or <strong>.pdf</strong> and click <strong>Replace</strong>.
                        </p>
                        <a href="${escapeHtml(blobUrl)}" download="${escapeHtml(slide.originalName || 'slides.ppt')}" class="slides-btn-upload-primary" style="text-decoration:none; display:inline-flex;">
                            <i class="fa-solid fa-download"></i> Open / Download Original .ppt File
                        </a>
                    </div>
                `;
            }
        } catch (err) {
            if (!session.aborted) {
                stage.innerHTML = `<div class="sv-info-box">
                    <i class="fa-solid fa-circle-exclamation" style="font-size:2.2rem; color:#f87171; margin-bottom:0.75rem;"></i>
                    <h3 style="margin-bottom:0.4rem;">Unable to Open Summary Slides</h3>
                    <p style="font-size:0.9rem; color:#cbd5e1;">${escapeHtml(err.message || 'Unknown error')}</p>
                </div>`;
            }
        }
    }

    // --------------------------------------------------------------------------
    // Public API & Initialization
    // --------------------------------------------------------------------------
    window.WISSummarySlides = {
        renderTab,
        refresh: fetchSlidesForGrade
    };

    checkCapabilities();
})();
