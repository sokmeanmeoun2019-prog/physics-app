/**
 * WIS Physics Learning Hub — Synchronized Audio Reading Engine (Grade 9 & Grade 12)
 *
 * Connects the Audiobook narration player with the PDF.js curriculum viewer:
 *  - Scope-restricted to Grade 9 and Grade 12 lessons only.
 *  - Loads empirical sentence/segment timestamp manifests (`audiobooks/sync/*.sync.json`)
 *    or standard `.vtt`/`.srt` timestamp files (never estimates timing from reading speed).
 *  - Maps synced segments onto PDF pages using precomputed normalized bounding boxes
 *    (supporting OCR/scanned PDFs & equations) with live PDF.js text-content fallback
 *    preserving Khmer, English, mathematical symbols, subscripts, superscripts, and SI units.
 *  - Highlights active sentences on a non-occluding, non-selectable overlay layer inside
 *    each `.pdf-page-card` while preserving Protected View-Only copy protection.
 *  - Automatically navigates pages, smooth-scrolls highlights into view, supports
 *    pause/resume, timeline seeking, zoom/fullscreen re-projection, and Prev/Next sentence controls.
 */
(function (global) {
    'use strict';

    const SYMBOL_WORD_MAP = {
        '=': ' equals ',
        '≡': ' equals ',
        '≈': ' approximately ',
        '≠': ' not equal ',
        '×': ' times ',
        '·': ' times ',
        '÷': ' divided by ',
        '±': ' plus or minus ',
        '≤': ' less than or equal to ',
        '≥': ' greater than or equal to ',
        '<': ' less than ',
        '>': ' greater than ',
        '°': ' degrees ',
        'Ω': ' ohms ',
        'µ': ' micro ',
        'μ': ' micro ',
        'Δ': ' delta ',
        '∆': ' delta ',
        'θ': ' theta ',
        'φ': ' phi ',
        'λ': ' lambda ',
        'π': ' pi ',
        'τ': ' tau ',
        'ω': ' omega ',
        'ρ': ' rho ',
        '→': ' yields ',
        '⇒': ' implies ',
        '%': ' percent '
    };

    const UNIT_EXPAND_RE = /\b(\d+(?:\.\d+)?)\s*(kV|mV|V|kA|mA|A|kW|MW|W|kJ|MJ|J|kHz|MHz|Hz|km|cm|mm|nm|m|kg|g|ms|s|N|T|Wb|H|F|C|K)\b/g;
    const UNIT_SPOKEN = {
        kV: 'kilovolts', mV: 'millivolts', V: 'volts',
        kA: 'kiloamperes', mA: 'milliamperes', A: 'amperes',
        kW: 'kilowatts', MW: 'megawatts', W: 'watts',
        kJ: 'kilojoules', MJ: 'megajoules', J: 'joules',
        kHz: 'kilohertz', MHz: 'megahertz', Hz: 'hertz',
        km: 'kilometers', cm: 'centimeters', mm: 'millimeters', nm: 'nanometers', m: 'meters',
        kg: 'kilograms', g: 'grams',
        ms: 'milliseconds', s: 'seconds',
        N: 'newtons', T: 'teslas', Wb: 'webers', H: 'henries', F: 'farads', C: 'coulombs', K: 'kelvin'
    };

    /**
     * Check whether a lesson belongs strictly to Grade 9 or Grade 12.
     */
    function isSyncEligibleLesson(lesson) {
        if (!lesson) return false;
        const lid = String(lesson.id || '').toLowerCase();
        const grade = String(lesson.grade || '').trim();
        return lid.startsWith('g9-') || lid.startsWith('g12-') || grade === '9' || grade === '12';
    }

    /**
     * Normalize English, Khmer, equations, and SI units for fuzzy PDF-to-transcript alignment.
     */
    function normalizeForMatch(text) {
        if (!text) return '';
        let out = String(text).normalize('NFKC');
        out = out.replace(/[\u2018\u2019]/g, "'").replace(/[\u201C\u201D]/g, '"').replace(/[\u2013\u2014]/g, ' ');
        out = out.replace(UNIT_EXPAND_RE, (_, num, unit) => `${num} ${UNIT_SPOKEN[unit] || unit}`);
        for (const [sym, rep] of Object.entries(SYMBOL_WORD_MAP)) {
            if (out.includes(sym)) {
                out = out.split(sym).join(rep);
            }
        }
        out = out.toLowerCase();
        // Preserve Latin, digits, spaces, and Khmer Unicode block (\u1780-\u17FF, \u19E0-\u19FF)
        out = out.replace(/[^\p{L}\p{N}\u1780-\u17FF\u19E0-\u19FF\s]/gu, ' ');
        return out.replace(/\s+/g, ' ').trim();
    }

    function tokenize(text) {
        const norm = normalizeForMatch(text);
        if (!norm) return [];
        const tokens = [];
        for (const part of norm.split(' ')) {
            if (!part) continue;
            // Khmer has no spaces between words; add overlapping 3-char shingles so Khmer matches cleanly
            if (/[\u1780-\u17FF]/.test(part) && part.length > 4) {
                for (let i = 0; i <= part.length - 3; i += 2) {
                    tokens.push(part.slice(i, i + 3));
                }
            } else {
                tokens.push(part);
            }
        }
        return tokens;
    }

    function parseTimestampToSeconds(raw) {
        if (typeof raw === 'number' && !isNaN(raw)) return Math.max(0, raw);
        const s = String(raw || '').trim().replace(',', '.');
        const parts = s.split(':').map(Number);
        if (parts.some(isNaN)) return 0;
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        return parts[0] || 0;
    }

    /**
     * Parse WebVTT (.vtt) or SubRip (.srt) cue text into standardized cue objects.
     */
    function parseSrtOrVtt(rawText) {
        const lines = String(rawText || '').replace(/\r\n?/g, '\n').split('\n');
        const cues = [];
        let idx = 0;
        while (idx < lines.length) {
            const line = lines[idx].trim();
            if (!line || line === 'WEBVTT' || line.startsWith('NOTE')) {
                idx++;
                continue;
            }
            let timeLine = line;
            if (!line.includes('-->') && idx + 1 < lines.length && lines[idx + 1].includes('-->')) {
                idx++;
                timeLine = lines[idx].trim();
            }
            if (timeLine.includes('-->')) {
                const arrowParts = timeLine.split('-->');
                const start = parseTimestampToSeconds(arrowParts[0].trim().split(' ')[0]);
                const end = parseTimestampToSeconds(arrowParts[1].trim().split(' ')[0]);
                idx++;
                const bodyLines = [];
                while (idx < lines.length && lines[idx].trim() !== '') {
                    bodyLines.push(lines[idx].trim().replace(/<[^>]+>/g, ''));
                    idx++;
                }
                const text = bodyLines.join(' ').trim();
                if (text && end > start) {
                    cues.push({
                        id: cues.length,
                        start,
                        end,
                        page: null,
                        pdfText: text,
                        spokenText: text,
                        bboxes: null
                    });
                }
            }
            idx++;
        }
        return normalizeCues(cues);
    }

    /**
     * Normalize raw JSON cues into sorted, clamped cue entries.
     */
    function normalizeCues(rawCues) {
        if (!Array.isArray(rawCues)) return [];
        const normalized = [];
        for (let i = 0; i < rawCues.length; i++) {
            const c = rawCues[i];
            if (!c) continue;
            const start = parseTimestampToSeconds(c.start != null ? c.start : c.startSec);
            const end = parseTimestampToSeconds(c.end != null ? c.end : c.endSec);
            if (!(end > start)) continue;

            let bboxes = null;
            if (Array.isArray(c.bboxes) && c.bboxes.length > 0) {
                bboxes = c.bboxes
                    .filter(b => Array.isArray(b) && b.length >= 4)
                    .map(b => [
                        Math.max(0, Math.min(1, Number(b[0]) || 0)),
                        Math.max(0, Math.min(1, Number(b[1]) || 0)),
                        Math.max(0.01, Math.min(1, Number(b[2]) || 0.05)),
                        Math.max(0.008, Math.min(1, Number(b[3]) || 0.02))
                    ]);
            } else if (Array.isArray(c.bbox) && c.bbox.length >= 4) {
                bboxes = [[
                    Math.max(0, Math.min(1, Number(c.bbox[0]) || 0)),
                    Math.max(0, Math.min(1, Number(c.bbox[1]) || 0)),
                    Math.max(0.01, Math.min(1, Number(c.bbox[2]) || 0.05)),
                    Math.max(0.008, Math.min(1, Number(c.bbox[3]) || 0.02))
                ]];
            }

            const pageVal = (c.page != null && !isNaN(Number(c.page)) && Number(c.page) >= 1)
                ? Math.floor(Number(c.page))
                : null;

            normalized.push({
                id: c.id != null ? c.id : normalized.length,
                start,
                end,
                page: pageVal,
                pdfText: String(c.pdfText || c.text || c.sentence || '').trim(),
                spokenText: String(c.spokenText || c.transcript || c.text || '').trim(),
                bboxes: bboxes && bboxes.length ? bboxes : null,
                confidence: typeof c.confidence === 'number' ? c.confidence : null
            });
        }

        normalized.sort((a, b) => a.start - b.start);
        for (let i = 0; i < normalized.length; i++) {
            normalized[i].id = i;
        }
        return normalized;
    }

    /**
     * Extract audio stem (e.g., `audiobooks/g9-ch1-part1.mp3.mp3` -> `g9-ch1-part1`)
     * and candidate sync manifest URLs.
     */
    function extractAudioStem(audioUrl) {
        if (!audioUrl) return '';
        let name = String(audioUrl).split('/').pop().split('?')[0];
        try { name = decodeURIComponent(name); } catch (e) {}
        name = name.replace(/\.(mp3|m4a|wav|aac|ogg)(\.(mp3|m4a|wav|aac|ogg))?$/i, '');
        return name;
    }

    function buildSyncCandidateUrls(audioUrl, lesson, sectionIdx, trackIdx) {
        const urls = [];
        const pushUnique = (rel) => {
            if (!rel) return;
            const resolved = typeof global.resolveAppUrl === 'function' ? global.resolveAppUrl(rel) : rel;
            if (resolved && !urls.includes(resolved)) urls.push(resolved);
            if (!urls.includes(rel)) urls.push(rel);
        };

        const stems = [];
        const directStem = extractAudioStem(audioUrl);
        if (directStem) stems.push(directStem);

        const lid = String((lesson && lesson.id) || '').toLowerCase();
        const trkNum = (typeof trackIdx === 'number' ? trackIdx : 0) + 1;
        if (lid && !stems.includes(`${lid}-track${trkNum}`)) {
            // Useful fallback if track loaded via local blob URL
            if (typeof global.resolveAudioCandidates === 'function') {
                const audioCands = global.resolveAudioCandidates(lesson, sectionIdx, trackIdx) || [];
                audioCands.slice(0, 6).forEach(ac => {
                    const st = extractAudioStem(ac);
                    if (st && !stems.includes(st)) stems.push(st);
                });
            }
        }

        stems.forEach(stem => {
            pushUnique(`audiobooks/sync/${stem}.sync.json`);
            pushUnique(`audiobooks/sync/${stem}.json`);
            pushUnique(`audiobooks/${stem}.sync.json`);
            pushUnique(`audiobooks/${stem}.vtt`);
            pushUnique(`audiobooks/${stem}.srt`);
        });

        return urls;
    }

    const MANIFEST_CACHE = new Map();

    async function fetchTextSafe(url) {
        const res = await fetch(url, { cache: 'no-cache' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const text = await res.text();
        if (!text || text.trim().startsWith('<')) {
            throw new Error('Non-manifest HTML response');
        }
        return text;
    }

    /**
     * Load empirical sync manifest for an audio track.
     */
    async function loadSyncManifest(audioUrl, lesson, sectionIdx, trackIdx) {
        const candidates = buildSyncCandidateUrls(audioUrl, lesson, sectionIdx, trackIdx);
        for (const url of candidates) {
            if (MANIFEST_CACHE.has(url)) {
                const cached = MANIFEST_CACHE.get(url);
                if (cached) return cached;
                continue;
            }
            try {
                const raw = await fetchTextSafe(url);
                let parsedManifest = null;
                if (url.toLowerCase().endsWith('.vtt') || url.toLowerCase().endsWith('.srt')) {
                    const cues = parseSrtOrVtt(raw);
                    if (cues.length > 0) {
                        parsedManifest = { version: 1, granularity: 'sentence', sourceUrl: url, cues };
                    }
                } else {
                    const data = JSON.parse(raw);
                    const rawCues = Array.isArray(data) ? data : (data.cues || data.segments || []);
                    const cues = normalizeCues(rawCues);
                    if (cues.length > 0) {
                        parsedManifest = {
                            version: data.version || 1,
                            trackId: data.trackId || extractAudioStem(audioUrl),
                            granularity: data.granularity || 'sentence',
                            sourceUrl: url,
                            cues
                        };
                    }
                }
                MANIFEST_CACHE.set(url, parsedManifest);
                if (parsedManifest) return parsedManifest;
            } catch (e) {
                MANIFEST_CACHE.set(url, null);
            }
        }
        return null;
    }

    /**
     * Parse user-selected local manifest (.sync.json / .json / .vtt / .srt).
     */
    function parseManifestText(filename, rawText) {
        const lower = String(filename || '').toLowerCase();
        if (lower.endsWith('.vtt') || lower.endsWith('.srt')) {
            const cues = parseSrtOrVtt(rawText);
            return cues.length ? { version: 1, granularity: 'sentence', sourceUrl: filename, cues } : null;
        }
        const data = JSON.parse(rawText);
        const rawCues = Array.isArray(data) ? data : (data.cues || data.segments || []);
        const cues = normalizeCues(rawCues);
        return cues.length ? {
            version: data.version || 1,
            trackId: data.trackId || filename,
            granularity: data.granularity || 'sentence',
            sourceUrl: filename,
            cues
        } : null;
    }

    /**
     * Binary search for the active cue at playback time `t`.
     * Allows a tiny 0.25s bridge only inside the same page to prevent blink,
     * while clearing highlights cleanly during unmapped intros/outros/long pauses.
     */
    function findCueIndexAtTime(cues, t) {
        if (!cues || !cues.length || typeof t !== 'number' || isNaN(t)) return -1;
        let lo = 0;
        let hi = cues.length - 1;
        while (lo <= hi) {
            const mid = (lo + hi) >> 1;
            const cue = cues[mid];
            if (t < cue.start) {
                hi = mid - 1;
            } else if (t > cue.end) {
                lo = mid + 1;
            } else {
                return mid;
            }
        }
        // Check brief inter-sentence pause (<= 0.28s) cleanly
        if (hi >= 0 && hi + 1 < cues.length) {
            const prevCue = cues[hi];
            const nextCue = cues[hi + 1];
            if (nextCue.start - prevCue.end <= 0.28 && t - prevCue.end <= 0.28) {
                return hi;
            }
        }
        return -1;
    }

    /**
     * Build a visual line index for a single PDF.js page (`scale: 1`) so cues without
     * precomputed bounding boxes (e.g. imported .srt/.vtt) can be highlighted accurately.
     */
    async function extractPdfPageLines(pdfDoc, pageNum) {
        const pdfjs = global.pdfjsLib || global['pdfjs-dist/build/pdf'] || global.PDFJS;
        const page = await pdfDoc.getPage(pageNum);
        const vp = page.getViewport({ scale: 1 });
        const tc = await page.getTextContent({ includeMarkedContent: false });
        const pageW = vp.width || 1;
        const pageH = vp.height || 1;

        const spans = [];
        for (const item of (tc.items || [])) {
            const str = item.str;
            if (!str || !str.trim()) continue;
            let x, yBottom, h;
            if (pdfjs && pdfjs.Util && typeof pdfjs.Util.transform === 'function') {
                const tx = pdfjs.Util.transform(vp.transform, item.transform);
                const fontHeight = Math.hypot(tx[2], tx[3]) || Math.abs(item.height) || 12;
                x = tx[4];
                yBottom = tx[5];
                h = fontHeight;
            } else {
                x = item.transform[4];
                h = item.height || Math.abs(item.transform[3]) || 12;
                yBottom = pageH - item.transform[5];
            }
            const w = Math.max(2, item.width || str.length * h * 0.45);
            const yTop = yBottom - h * 0.85;
            spans.push({
                str: str.trim(),
                nx: Math.max(0, x / pageW),
                ny: Math.max(0, yTop / pageH),
                nw: Math.min(1, w / pageW),
                nh: Math.min(0.12, Math.max(0.012, (h * 1.25) / pageH))
            });
        }

        // Cluster spans into reading lines by vertical proximity
        spans.sort((a, b) => (Math.abs(a.ny - b.ny) < 0.008 ? a.nx - b.nx : a.ny - b.ny));
        const lines = [];
        for (const sp of spans) {
            const last = lines[lines.length - 1];
            if (last && Math.abs(last.ny - sp.ny) < 0.009) {
                const maxRight = Math.max(last.nx + last.nw, sp.nx + sp.nw);
                last.nx = Math.min(last.nx, sp.nx);
                last.nw = maxRight - last.nx;
                last.nh = Math.max(last.nh, sp.nh);
                last.text += ' ' + sp.str;
            } else {
                lines.push({
                    page: pageNum,
                    nx: sp.nx,
                    ny: sp.ny,
                    nw: sp.nw,
                    nh: sp.nh,
                    text: sp.str
                });
            }
        }
        lines.forEach(l => {
            l.tokens = new Set(tokenize(l.text));
        });
        return lines;
    }

    /**
     * Match a cue's text against PDF.js lines on a given page (or search candidate pages).
     */
    function scoreTokenOverlap(queryTokens, targetTokenSet) {
        if (!queryTokens.length || !targetTokenSet.size) return 0;
        let hits = 0;
        for (const tk of queryTokens) {
            if (targetTokenSet.has(tk)) hits++;
        }
        return hits / queryTokens.length;
    }

    async function resolveCueBoxesFromPdf(pdfDoc, pageLinesCache, cue, preferredStartPage) {
        if (cue.bboxes && cue.page) return { page: cue.page, bboxes: cue.bboxes };
        const qText = cue.pdfText || cue.spokenText;
        const qTokens = tokenize(qText);
        if (!pdfDoc || qTokens.length < 2) return null;

        const numPages = pdfDoc.numPages || 1;
        const searchOrder = [];
        if (cue.page && cue.page >= 1 && cue.page <= numPages) {
            searchOrder.push(cue.page);
        } else {
            const start = Math.max(1, Math.min(numPages, preferredStartPage || 1));
            for (let p = start; p <= numPages; p++) searchOrder.push(p);
            for (let p = start - 1; p >= 1; p--) searchOrder.push(p);
        }

        let bestMatch = null;
        for (const p of searchOrder) {
            if (!pageLinesCache.has(p)) {
                try {
                    pageLinesCache.set(p, await extractPdfPageLines(pdfDoc, p));
                } catch (e) {
                    pageLinesCache.set(p, []);
                }
            }
            const lines = pageLinesCache.get(p);
            if (!lines || !lines.length) continue;

            // Sliding window of 1 to 4 consecutive lines to match multi-line sentences
            for (let i = 0; i < lines.length; i++) {
                const mergedSet = new Set();
                for (let spanLen = 1; spanLen <= 4 && i + spanLen - 1 < lines.length; spanLen++) {
                    const ln = lines[i + spanLen - 1];
                    ln.tokens.forEach(tk => mergedSet.add(tk));
                    const recall = scoreTokenOverlap(qTokens, mergedSet);
                    const precision = Math.min(1, (recall * qTokens.length) / Math.max(1, mergedSet.size));
                    const f1 = (recall + precision) > 0 ? (2 * recall * precision) / (recall + precision) : 0;
                    if (!bestMatch || f1 > bestMatch.score) {
                        bestMatch = {
                            score: f1,
                            page: p,
                            bboxes: lines.slice(i, i + spanLen).map(box => [
                                Math.max(0, box.nx - 0.005),
                                Math.max(0, box.ny - 0.003),
                                Math.min(1, box.nw + 0.01),
                                Math.min(1, box.nh + 0.005)
                            ])
                        };
                    }
                }
            }
            if (bestMatch && bestMatch.score >= 0.58) break;
        }

        if (bestMatch && bestMatch.score >= 0.34) {
            cue.page = bestMatch.page;
            cue.bboxes = bestMatch.bboxes;
            return { page: bestMatch.page, bboxes: bestMatch.bboxes };
        }
        return null;
    }

    /**
     * Global Coordinator bridging the Audiobook Player and the PDF Viewer for one lesson session.
     */
    const WISSyncReader = {
        _state: null,

        isEligibleLesson: isSyncEligibleLesson,
        parseManifestText,
        loadSyncManifest,
        extractAudioStem,

        getAudiobookSyncControlsHtml(lesson) {
            if (!isSyncEligibleLesson(lesson)) return '';
            return `
                <div class="audio-sync-bar" id="audio-sync-bar">
                    <div class="audio-sync-status-row">
                        <span class="audio-sync-pill is-loading" id="audio-sync-pill" title="Synchronized PDF Reading Status">
                            <i class="fa-solid fa-highlighter"></i>
                            <span id="audio-sync-pill-text">Checking Sync...</span>
                        </span>
                        <span class="audio-sync-page-badge" id="audio-sync-page-badge" title="Jump to synced eBook page">
                            <i class="fa-regular fa-file-lines"></i>
                            <span id="audio-sync-page-text">Page —</span>
                        </span>
                        <span class="audio-sync-cue-counter" id="audio-sync-cue-counter"></span>
                        <button type="button" class="audio-sync-follow-btn active" id="audio-sync-follow-btn" title="Automatically turn PDF pages & scroll with audio">
                            <i class="fa-solid fa-crosshairs"></i>
                            <span>Auto-Follow: ON</span>
                        </button>
                    </div>
                    <div class="audio-sync-caption is-idle" id="audio-sync-caption" aria-live="polite">
                        Play audio to follow highlighted sentences inside the eBook PDF.
                    </div>
                    <div class="audio-sync-import-row" id="audio-sync-import-row" style="display:none;">
                        <span class="audio-sync-import-hint">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                            No timestamp file found in <code>audiobooks/sync/</code> yet. Run <code>python scripts/generate_audio_sync.py</code> or load a cue file:
                        </span>
                        <button type="button" class="audio-local-input-btn" id="audio-sync-load-btn">
                            <i class="fa-solid fa-file-import"></i> Load Sync (.json / .vtt / .srt)
                        </button>
                        <input type="file" id="audio-sync-file-picker" accept=".json,.vtt,.srt" style="display:none;">
                    </div>
                </div>
            `;
        },

        resetSession() {
            if (this._state) {
                this._state.aborted = true;
                if (this._state.rafId) {
                    cancelAnimationFrame(this._state.rafId);
                    this._state.rafId = null;
                }
                if (this._state.pollTimer) {
                    clearInterval(this._state.pollTimer);
                    this._state.pollTimer = null;
                }
            }
            this.clearAllHighlights();
            this._state = {
                aborted: false,
                lesson: null,
                sectionIdx: 0,
                trackIdx: 0,
                audio: null,
                audioUrl: '',
                manifest: null,
                cues: [],
                activeCueIdx: -1,
                followMode: true,
                pdfCtx: null,
                pageLinesCache: new Map(),
                lastScrolledKey: '',
                rafId: null,
                pollTimer: null,
                resolveRequestId: 0
            };
            return this._state;
        },

        ensureState() {
            if (!this._state || this._state.aborted) {
                return this.resetSession();
            }
            return this._state;
        },

        registerPdfContext(ctx) {
            const st = this.ensureState();
            if (!isSyncEligibleLesson(ctx && ctx.lesson)) return;
            st.pdfCtx = ctx;
            st.pageLinesCache = new Map();
            this._updatePageIndicator(st.activeCueIdx >= 0 ? st.cues[st.activeCueIdx] : null);
            if (st.activeCueIdx >= 0 && st.cues[st.activeCueIdx]) {
                this._applyCueHighlight(st.cues[st.activeCueIdx], true);
            }
        },

        async registerAudioSession({ lesson, sectionIdx, trackIdx, audio, audioUrl }) {
            if (!isSyncEligibleLesson(lesson)) return;
            const st = this.ensureState();
            st.lesson = lesson;
            st.sectionIdx = typeof sectionIdx === 'number' ? sectionIdx : 0;
            st.trackIdx = typeof trackIdx === 'number' ? trackIdx : 0;
            st.audio = audio;
            st.audioUrl = audioUrl || '';
            st.cues = [];
            st.manifest = null;
            st.activeCueIdx = -1;
            st.lastScrolledKey = '';
            this.clearAllHighlights();

            const myAudioRef = audio;
            this._wireUiControls(st);
            this._setSyncStatus('loading', 'Loading Sync...');

            const manifest = await loadSyncManifest(audioUrl, lesson, st.sectionIdx, st.trackIdx);
            if (st.aborted || st.audio !== myAudioRef) return;

            if (manifest && manifest.cues && manifest.cues.length > 0) {
                this._applyManifest(manifest);
            } else {
                this._setSyncStatus('unavailable', 'Sync Not Generated');
                this._setCaption('No sentence timestamps loaded for this track yet.', true);
                this._showImportRow(true);
                this._updatePageIndicator(null);
            }

            this._startPlaybackLoop(st, myAudioRef);
        },

        _applyManifest(manifest) {
            const st = this._state;
            if (!st || st.aborted) return;
            st.manifest = manifest;
            st.cues = manifest.cues || [];
            st.activeCueIdx = -1;
            st.lastScrolledKey = '';
            this._showImportRow(false);
            const label = manifest.granularity === 'word' ? 'Word Sync Ready' : `Sentence Sync Ready (${st.cues.length})`;
            this._setSyncStatus('ready', label);
            this._setCaption('Press Play or Prev / Next to navigate synced sentences.', true);
            if (st.audio && !isNaN(st.audio.currentTime) && st.audio.currentTime > 0) {
                this.syncAtTime(st.audio.currentTime, false);
            } else {
                this._updateCueCounter(-1, st.cues.length);
            }
        },

        _wireUiControls(st) {
            const followBtn = document.getElementById('audio-sync-follow-btn');
            const pageBadge = document.getElementById('audio-sync-page-badge');
            const prevBtn = document.getElementById('audio-prev-cue-btn');
            const nextBtn = document.getElementById('audio-next-cue-btn');
            const loadBtn = document.getElementById('audio-sync-load-btn');
            const filePicker = document.getElementById('audio-sync-file-picker');

            if (followBtn) {
                followBtn.classList.toggle('active', st.followMode);
                followBtn.onclick = () => {
                    st.followMode = !st.followMode;
                    followBtn.classList.toggle('active', st.followMode);
                    const span = followBtn.querySelector('span');
                    if (span) span.textContent = st.followMode ? 'Auto-Follow: ON' : 'Auto-Follow: OFF';
                    if (st.followMode && st.activeCueIdx >= 0 && st.cues[st.activeCueIdx]) {
                        this._applyCueHighlight(st.cues[st.activeCueIdx], true);
                    }
                };
            }

            if (pageBadge) {
                pageBadge.onclick = () => {
                    const cue = st.activeCueIdx >= 0 ? st.cues[st.activeCueIdx] : null;
                    const targetPage = (cue && cue.page) || (st.pdfCtx && st.pdfCtx.getCurrentPage && st.pdfCtx.getCurrentPage()) || 1;
                    if (st.pdfCtx && typeof st.pdfCtx.scrollToPage === 'function') {
                        st.pdfCtx.scrollToPage(targetPage);
                    }
                };
            }

            if (prevBtn) {
                prevBtn.onclick = () => this.stepCue(-1);
            }
            if (nextBtn) {
                nextBtn.onclick = () => this.stepCue(1);
            }

            if (loadBtn && filePicker) {
                loadBtn.onclick = () => filePicker.click();
                filePicker.onchange = (e) => {
                    const f = e.target.files && e.target.files[0];
                    if (!f) return;
                    const reader = new FileReader();
                    reader.onload = () => {
                        try {
                            const parsed = parseManifestText(f.name, String(reader.result || ''));
                            if (parsed && parsed.cues && parsed.cues.length) {
                                this._applyManifest(parsed);
                            } else {
                                this._setSyncStatus('unavailable', 'Invalid Cue File');
                            }
                        } catch (err) {
                            this._setSyncStatus('unavailable', 'Parse Failed');
                        }
                    };
                    reader.readAsText(f);
                };
            }
        },

        _startPlaybackLoop(st, audioRef) {
            if (st.pollTimer) {
                clearInterval(st.pollTimer);
                st.pollTimer = null;
            }
            const onTick = () => {
                if (!this._state || this._state.aborted || this._state.audio !== audioRef) return;
                if (!audioRef.paused && !audioRef.ended) {
                    this.syncAtTime(audioRef.currentTime, false);
                }
            };
            st.pollTimer = setInterval(onTick, 120);
        },

        /**
         * Jump to previous (-1) or next (+1) synced sentence cue (or fallback ±10s).
         */
        stepCue(delta) {
            const st = this._state;
            if (!st || st.aborted || !st.audio) return;
            const cues = st.cues;
            if (!cues || !cues.length) {
                // Graceful fallback if no sync manifest is loaded for this track yet
                const cur = st.audio.currentTime || 0;
                const dur = st.audio.duration || Infinity;
                const target = delta < 0 ? Math.max(0, cur - 10) : Math.min(dur, cur + 10);
                st.audio.currentTime = target;
                return;
            }

            const t = st.audio.currentTime || 0;
            let idx = st.activeCueIdx >= 0 ? st.activeCueIdx : findCueIndexAtTime(cues, t);

            let targetIdx = 0;
            if (idx >= 0) {
                if (delta < 0) {
                    if (t - cues[idx].start > 1.8) {
                        targetIdx = idx; // Restart current sentence first if mid-sentence
                    } else {
                        targetIdx = Math.max(0, idx - 1);
                    }
                } else {
                    targetIdx = Math.min(cues.length - 1, idx + 1);
                }
            } else {
                // Between cues: find nearest cue before/after t
                if (delta < 0) {
                    targetIdx = 0;
                    for (let i = cues.length - 1; i >= 0; i--) {
                        if (cues[i].end <= t) { targetIdx = i; break; }
                    }
                } else {
                    targetIdx = cues.length - 1;
                    for (let i = 0; i < cues.length; i++) {
                        if (cues[i].start >= t) { targetIdx = i; break; }
                    }
                }
            }

            const targetCue = cues[targetIdx];
            if (targetCue) {
                st.audio.currentTime = targetCue.start + 0.02;
                this.syncAtTime(targetCue.start + 0.02, true);
            }
        },

        /**
         * Synchronize UI + PDF highlight to exact audio playback timestamp.
         */
        syncAtTime(currentTime, forceScroll) {
            const st = this._state;
            if (!st || st.aborted) return;

            if (!st.cues || !st.cues.length) {
                this._updatePageIndicator(null);
                return;
            }

            const cueIdx = findCueIndexAtTime(st.cues, currentTime);
            if (cueIdx === st.activeCueIdx && !forceScroll) {
                return;
            }

            st.activeCueIdx = cueIdx;
            this._updateCueCounter(cueIdx, st.cues.length);

            if (cueIdx < 0) {
                this.clearAllHighlights();
                this._updatePageIndicator(null);
                if (st.cues.length && currentTime < st.cues[0].start) {
                    this._setCaption('Narration intro — textbook highlighting begins shortly…', true);
                } else if (st.cues.length && currentTime > st.cues[st.cues.length - 1].end) {
                    this._setCaption('Narration summary / outro.', true);
                } else {
                    this._setCaption('Listening…', true);
                }
                return;
            }

            const cue = st.cues[cueIdx];
            this._setCaption(cue.pdfText || cue.spokenText || 'Synchronized sentence', false);
            this._applyCueHighlight(cue, Boolean(forceScroll));
        },

        async _applyCueHighlight(cue, forceScroll) {
            const st = this._state;
            if (!st || st.aborted || !cue) return;

            const reqId = ++st.resolveRequestId;
            if ((!cue.bboxes || !cue.page) && st.pdfCtx && st.pdfCtx.pdfDoc) {
                const prefPage = (st.pdfCtx.getCurrentPage && st.pdfCtx.getCurrentPage()) || 1;
                await resolveCueBoxesFromPdf(st.pdfCtx.pdfDoc, st.pageLinesCache, cue, prefPage);
                if (st.aborted || reqId !== st.resolveRequestId) return;
            }

            this.clearAllHighlights();
            this._updatePageIndicator(cue);

            if (!cue.page || !cue.bboxes || !cue.bboxes.length) return;

            const pageNum = cue.page;
            if (st.pdfCtx && typeof st.pdfCtx.renderPage === 'function') {
                st.pdfCtx.renderPage(pageNum);
                const total = st.pdfCtx.getNumPages ? st.pdfCtx.getNumPages() : 1;
                if (pageNum < total) st.pdfCtx.renderPage(pageNum + 1);
            }

            const layer = document.getElementById(`pdf-sync-layer-${pageNum}`);
            if (layer) {
                this._drawBoxesIntoLayer(layer, cue.bboxes);
            }

            if (st.followMode || forceScroll) {
                this._scrollCueIntoView(pageNum, cue, forceScroll);
            }
        },

        _drawBoxesIntoLayer(layer, bboxes) {
            if (!layer || !bboxes || !bboxes.length) return;
            layer.innerHTML = '';
            const frag = document.createDocumentFragment();
            for (const box of bboxes) {
                const div = document.createElement('div');
                div.className = 'pdf-sync-highlight-box';
                div.style.left = (box[0] * 100).toFixed(3) + '%';
                div.style.top = (box[1] * 100).toFixed(3) + '%';
                div.style.width = (box[2] * 100).toFixed(3) + '%';
                div.style.height = (box[3] * 100).toFixed(3) + '%';
                frag.appendChild(div);
            }
            layer.appendChild(frag);
        },

        /**
         * Re-render active highlight onto a specific page card (e.g. after zoom or lazy-load).
         */
        rerenderHighlightForPage(pageNum) {
            const st = this._state;
            if (!st || st.aborted || st.activeCueIdx < 0) return;
            const cue = st.cues[st.activeCueIdx];
            if (!cue || cue.page !== pageNum || !cue.bboxes) return;
            const layer = document.getElementById(`pdf-sync-layer-${pageNum}`);
            if (layer) {
                this._drawBoxesIntoLayer(layer, cue.bboxes);
            }
        },

        _scrollCueIntoView(pageNum, cue, force) {
            const st = this._state;
            if (!st || !st.pdfCtx) return;
            const scrollContainer = st.pdfCtx.scrollContainer;
            const card = document.getElementById(`pdf-page-${pageNum}`);
            if (!scrollContainer || !card) return;

            const boxTopRatio = (cue.bboxes && cue.bboxes[0]) ? cue.bboxes[0][1] : 0.1;
            const scrollKey = `${cue.id}:${pageNum}`;
            if (!force && st.lastScrolledKey === scrollKey) return;

            const containerRect = scrollContainer.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();
            const targetPixelY = cardRect.top + card.clientHeight * boxTopRatio;
            const boxPixelH = (cue.bboxes && cue.bboxes[0]) ? card.clientHeight * cue.bboxes[0][3] : 24;

            const marginTop = 28;
            const marginBottom = 42;
            const isOutOfView =
                targetPixelY < containerRect.top + marginTop ||
                (targetPixelY + boxPixelH) > (containerRect.bottom - marginBottom);

            if (isOutOfView || force) {
                const desiredTopOffset = Math.min(120, scrollContainer.clientHeight * 0.25);
                const newScrollTop = scrollContainer.scrollTop + (targetPixelY - containerRect.top) - desiredTopOffset;
                scrollContainer.scrollTo({
                    top: Math.max(0, newScrollTop),
                    behavior: 'smooth'
                });
            }

            if (st.pdfCtx.pageInput && document.activeElement !== st.pdfCtx.pageInput) {
                st.pdfCtx.pageInput.value = pageNum;
            }
            st.lastScrolledKey = scrollKey;
        },

        clearAllHighlights() {
            const layers = document.querySelectorAll('.pdf-sync-highlight-layer');
            layers.forEach(layer => {
                if (layer.firstChild) layer.innerHTML = '';
            });
        },

        onAudioEnded() {
            const st = this._state;
            if (!st || st.aborted) return;
            st.activeCueIdx = -1;
            st.lastScrolledKey = '';
            this.clearAllHighlights();
            this._updateCueCounter(-1, st.cues ? st.cues.length : 0);
            this._setCaption('Playback completed. Press Play or Prev to replay.', true);
        },

        onAudioUnavailable() {
            this.clearAllHighlights();
            this._setSyncStatus('unavailable', 'Waiting for Audio');
            this._setCaption('Load or upload an MP3 track to activate synchronized highlighting.', true);
            this._showImportRow(false);
        },

        _setSyncStatus(mode, text) {
            const pill = document.getElementById('audio-sync-pill');
            const label = document.getElementById('audio-sync-pill-text');
            if (!pill || !label) return;
            pill.classList.remove('is-loading', 'is-ready', 'is-unavailable');
            pill.classList.add(`is-${mode}`);
            label.textContent = text;
        },

        _setCaption(text, isIdle) {
            const el = document.getElementById('audio-sync-caption');
            if (!el) return;
            el.classList.toggle('is-idle', Boolean(isIdle));
            el.textContent = text;
        },

        _showImportRow(visible) {
            const row = document.getElementById('audio-sync-import-row');
            if (row) row.style.display = visible ? 'flex' : 'none';
        },

        _updatePageIndicator(cue) {
            const badgeText = document.getElementById('audio-sync-page-text');
            if (!badgeText) return;
            const st = this._state;
            const total = (st && st.pdfCtx && st.pdfCtx.getNumPages) ? st.pdfCtx.getNumPages() : null;
            const activePage = (cue && cue.page) || (st && st.pdfCtx && st.pdfCtx.getCurrentPage && st.pdfCtx.getCurrentPage()) || null;
            if (activePage && total) {
                badgeText.textContent = `Page ${activePage} / ${total}`;
            } else if (activePage) {
                badgeText.textContent = `Page ${activePage}`;
            } else {
                badgeText.textContent = 'Page —';
            }
        },

        _updateCueCounter(idx, total) {
            const el = document.getElementById('audio-sync-cue-counter');
            if (!el) return;
            if (!total || idx < 0) {
                el.textContent = total ? `${total} cues` : '';
            } else {
                el.textContent = `Sentence ${idx + 1} / ${total}`;
            }
        }
    };

    global.WISSyncReader = WISSyncReader;
})(typeof window !== 'undefined' ? window : this);
