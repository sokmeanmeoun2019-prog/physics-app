/* ==========================================================================
   WIS Physics Hub - Shared PDF Viewport, Anchor-Preserved Zoom & Touch Controller
   Provides cursor-centered desktop zoom (Ctrl+Wheel / Trackpad / Buttons),
   two-finger pinch-to-zoom anchored at finger midpoint for iPad & touch devices,
   drag-to-pan, gesture/navigation isolation, and smart width-only resize handling.
   ========================================================================== */
(function (global) {
    'use strict';

    function clamp(val, min, max) {
        return Math.min(Math.max(val, min), max);
    }

    /**
     * Find the PDF page/slide card under or closest to focusClientY, and record
     * the normalized point (relX, relY) inside that card along with its desired
     * viewport offset (viewX, viewY) relative to scrollContainer.
     */
    function captureAnchor(scrollContainer, cardSelector, focusClientX, focusClientY) {
        if (!scrollContainer) return null;
        const cards = scrollContainer.querySelectorAll(cardSelector || '.pdf-page-card');
        if (!cards || !cards.length) return null;

        const contRect = scrollContainer.getBoundingClientRect();
        const contW = scrollContainer.clientWidth || contRect.width || 1;
        const contH = scrollContainer.clientHeight || contRect.height || 1;

        const cx = (typeof focusClientX === 'number' && Number.isFinite(focusClientX))
            ? focusClientX
            : (contRect.left + contW / 2);
        const cy = (typeof focusClientY === 'number' && Number.isFinite(focusClientY))
            ? focusClientY
            : (contRect.top + contH / 2);

        const viewX = clamp(cx - contRect.left, 0, contW);
        const viewY = clamp(cy - contRect.top, 0, contH);

        let bestCard = null;
        let bestDist = Infinity;
        let bestCenterDistX = Infinity;

        for (let i = 0; i < cards.length; i++) {
            const card = cards[i];
            const r = card.getBoundingClientRect();
            if (r.width <= 0 && r.height <= 0) continue;

            let dy = 0;
            if (cy < r.top) dy = r.top - cy;
            else if (cy > r.bottom) dy = cy - r.bottom;

            const centerX = r.left + r.width / 2;
            const dx = Math.abs(cx - centerX);

            if (dy < bestDist - 0.5 || (Math.abs(dy - bestDist) <= 0.5 && dx < bestCenterDistX)) {
                bestDist = dy;
                bestCenterDistX = dx;
                bestCard = card;
                if (dy === 0 && cx >= r.left && cx <= r.right) break;
            }
        }

        if (!bestCard) bestCard = cards[0];
        const cardRect = bestCard.getBoundingClientRect();
        const cardW = Math.max(1, cardRect.width);
        const cardH = Math.max(1, cardRect.height);

        return {
            card: bestCard,
            relX: (cx - cardRect.left) / cardW,
            relY: (cy - cardRect.top) / cardH,
            viewX,
            viewY
        };
    }

    /**
     * Synchronously scroll scrollContainer so the captured (card, relX, relY)
     * lands back at (viewX, viewY) inside scrollContainer after card dimensions change.
     */
    function restoreAnchor(scrollContainer, anchor) {
        if (!scrollContainer || !anchor || !anchor.card || !anchor.card.isConnected) return;

        const prevBehavior = scrollContainer.style.scrollBehavior;
        scrollContainer.style.scrollBehavior = 'auto';

        const contRect = scrollContainer.getBoundingClientRect();
        const cardRect = anchor.card.getBoundingClientRect();

        const curPointX = cardRect.left + anchor.relX * Math.max(1, cardRect.width);
        const curPointY = cardRect.top + anchor.relY * Math.max(1, cardRect.height);

        const targetX = contRect.left + anchor.viewX;
        const targetY = contRect.top + anchor.viewY;

        const deltaX = curPointX - targetX;
        const deltaY = curPointY - targetY;

        const maxLeft = Math.max(0, scrollContainer.scrollWidth - scrollContainer.clientWidth);
        const maxTop = Math.max(0, scrollContainer.scrollHeight - scrollContainer.clientHeight);

        if (Number.isFinite(deltaX)) {
            scrollContainer.scrollLeft = clamp(scrollContainer.scrollLeft + deltaX, 0, maxLeft);
        }
        if (Number.isFinite(deltaY)) {
            scrollContainer.scrollTop = clamp(scrollContainer.scrollTop + deltaY, 0, maxTop);
        }

        scrollContainer.style.scrollBehavior = prevBehavior;
        scrollContainer.classList.toggle('pdf-pannable', scrollContainer.scrollWidth > scrollContainer.clientWidth + 2);
    }

    /**
     * Render any PDF page cards currently near/within the scroll viewport.
     */
    function renderVisibleCards(scrollContainer, cardSelector, renderPageFn, currentPage, numPages, bufferPx) {
        if (!scrollContainer || typeof renderPageFn !== 'function') return;
        const margin = typeof bufferPx === 'number' ? bufferPx : 550;
        const contRect = scrollContainer.getBoundingClientRect();
        const cards = scrollContainer.querySelectorAll(cardSelector || '.pdf-page-card');

        cards.forEach(c => {
            const r = c.getBoundingClientRect();
            if (r.bottom >= contRect.top - margin && r.top <= contRect.bottom + margin) {
                const pNum = parseInt(c.dataset.page || c.dataset.slideIdx, 10);
                if (pNum) renderPageFn(pNum);
            }
        });

        if (currentPage >= 1 && currentPage <= numPages) renderPageFn(currentPage);
        if (currentPage < numPages) renderPageFn(currentPage + 1);
        if (currentPage > 1) renderPageFn(currentPage - 1);
    }

    /**
     * Draw an offscreen-rendered canvas cleanly into the displayed page canvas
     * so the previous zoom raster remains visible until the new raster is ready.
     */
    function blitCanvas(destCanvas, sourceCanvas) {
        if (!destCanvas || !sourceCanvas) return;
        destCanvas.width = sourceCanvas.width;
        destCanvas.height = sourceCanvas.height;
        const ctx = destCanvas.getContext('2d', { alpha: false });
        if (ctx) {
            ctx.drawImage(sourceCanvas, 0, 0);
        }
    }

    /**
     * Compute proportional CSS dimensions for a PDF page card using its own
     * stored base aspect ratio (fallback to document page 1 dimensions).
     */
    function computeCardBox(card, fallbackBaseW, fallbackBaseH, scale) {
        const bW = (card && card.dataset && parseFloat(card.dataset.baseW)) || fallbackBaseW || 595;
        const bH = (card && card.dataset && parseFloat(card.dataset.baseH)) || fallbackBaseH || 842;
        return {
            baseW: bW,
            baseH: bH,
            width: Math.max(1, Math.floor(bW * scale)),
            height: Math.max(1, Math.floor(bH * scale))
        };
    }

    /**
     * Attach interactive viewport behaviors to a PDF scroll container:
     * - Two-finger pinch-to-zoom centered between fingers (touch devices / iPad)
     * - Desktop Ctrl+Wheel / Trackpad pinch zoom centered on mouse cursor
     * - Horizontal/edge overscroll guard so browser back/section navigation never fires
     * - Desktop mouse grab-to-pan when zoomed wider or taller than viewport
     * - Smart width-only resize handling (ignores mobile URL bar height jitter)
     */
    function attach(opts) {
        const scrollContainer = opts && opts.scrollContainer;
        if (!scrollContainer) {
            return {
                destroy: function () {},
                isPinching: function () { return false; },
                wasRecentlyPinching: function () { return false; },
                resetWidthTracking: function () {}
            };
        }

        const cardSelector = opts.cardSelector || '.pdf-page-card';
        const minScale = typeof opts.minScale === 'number' ? opts.minScale : 0.35;
        const maxScale = typeof opts.maxScale === 'number' ? opts.maxScale : 3.5;
        const getScale = typeof opts.getScale === 'function' ? opts.getScale : function () { return 1.0; };
        const onPreviewScale = typeof opts.onPreviewScale === 'function' ? opts.onPreviewScale : null;
        const onApplyZoom = typeof opts.onApplyZoom === 'function' ? opts.onApplyZoom : null;
        const onFlushRender = typeof opts.onFlushRender === 'function' ? opts.onFlushRender : null;
        const onWidthChange = typeof opts.onWidthChange === 'function' ? opts.onWidthChange : null;

        function resolveTargetEl() {
            if (typeof opts.getContentTarget === 'function') {
                const el = opts.getContentTarget();
                if (el) return el;
            }
            return opts.contentTarget || scrollContainer.firstElementChild || scrollContainer;
        }

        const cleanups = [];
        function bind(target, ev, fn, evOpts) {
            if (!target) return;
            target.addEventListener(ev, fn, evOpts);
            cleanups.push(function () {
                try { target.removeEventListener(ev, fn, evOpts); } catch (e) {}
            });
        }

        // Pinch state
        let pinching = false;
        let lastPinchEndedAt = 0;
        let startDist = 0;
        let startScale = 1;
        let startMidX = 0;
        let startMidY = 0;
        let lastMidX = 0;
        let lastMidY = 0;
        let lastRatio = 1;
        let pinchAnchor = null;
        let pinchTargetEl = null;

        function resetPinchStyles(targetEl) {
            if (!targetEl) return;
            targetEl.style.transform = '';
            targetEl.style.transformOrigin = '';
            targetEl.style.willChange = '';
        }

        function commitPinchZoom() {
            if (!pinching) return;
            pinching = false;
            lastPinchEndedAt = Date.now();

            const targetEl = pinchTargetEl;
            pinchTargetEl = null;
            resetPinchStyles(targetEl);

            const targetScale = clamp(startScale * lastRatio, minScale, maxScale);
            const dx = Math.abs(lastMidX - startMidX);
            const dy = Math.abs(lastMidY - startMidY);
            const movedEnough = dx > 2 || dy > 2;
            const scaleChanged = Math.abs(targetScale - getScale()) > 0.015;

            if (onApplyZoom && (scaleChanged || movedEnough)) {
                const contRect = scrollContainer.getBoundingClientRect();
                const contW = scrollContainer.clientWidth || contRect.width || 1;
                const contH = scrollContainer.clientHeight || contRect.height || 1;
                const committedAnchor = (pinchAnchor && pinchAnchor.card && pinchAnchor.card.isConnected)
                    ? {
                        card: pinchAnchor.card,
                        relX: pinchAnchor.relX,
                        relY: pinchAnchor.relY,
                        viewX: clamp(lastMidX - contRect.left, 0, contW),
                        viewY: clamp(lastMidY - contRect.top, 0, contH)
                    }
                    : null;

                onApplyZoom(targetScale, {
                    clientX: lastMidX,
                    clientY: lastMidY,
                    anchor: committedAnchor,
                    source: 'pinch',
                    quickResize: false
                });
            } else if (onPreviewScale) {
                onPreviewScale(getScale());
            }
            pinchAnchor = null;
        }

        // Prevent iPad/iOS Safari native pinch gesture on the document while touching PDF
        ['gesturestart', 'gesturechange', 'gestureend'].forEach(function (gEv) {
            bind(scrollContainer, gEv, function (e) {
                e.preventDefault();
                e.stopPropagation();
            }, { passive: false });
        });

        bind(scrollContainer, 'touchstart', function (e) {
            e.stopPropagation();
            const touches = e.touches;
            if (!touches) return;

            if (touches.length === 2) {
                e.preventDefault();
                pinching = true;

                const t0 = touches[0];
                const t1 = touches[1];
                startDist = Math.max(1, Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY));
                startMidX = (t0.clientX + t1.clientX) / 2;
                startMidY = (t0.clientY + t1.clientY) / 2;
                lastMidX = startMidX;
                lastMidY = startMidY;
                startScale = getScale();
                lastRatio = 1;

                pinchAnchor = captureAnchor(scrollContainer, cardSelector, startMidX, startMidY);
                pinchTargetEl = resolveTargetEl();

                if (pinchTargetEl && pinchTargetEl !== scrollContainer) {
                    const mRect = pinchTargetEl.getBoundingClientRect();
                    const ox = startMidX - mRect.left;
                    const oy = startMidY - mRect.top;
                    pinchTargetEl.style.transition = 'none';
                    pinchTargetEl.style.transformOrigin = ox + 'px ' + oy + 'px';
                    pinchTargetEl.style.willChange = 'transform';
                }
            } else if (touches.length === 1) {
                // Guard iOS Safari horizontal history edge swipe when reading zoomed PDFs near screen edge
                const x = touches[0].clientX;
                const isZoomedHoriz = scrollContainer.scrollWidth > scrollContainer.clientWidth + 4;
                if (isZoomedHoriz && (x < 18 || x > global.innerWidth - 18)) {
                    e.preventDefault();
                }
            }
        }, { passive: false });

        bind(scrollContainer, 'touchmove', function (e) {
            e.stopPropagation();
            const touches = e.touches;
            if (pinching && touches && touches.length === 2 && startDist > 0) {
                e.preventDefault();
                const t0 = touches[0];
                const t1 = touches[1];
                const curDist = Math.max(1, Math.hypot(t0.clientX - t1.clientX, t0.clientY - t1.clientY));
                const curMidX = (t0.clientX + t1.clientX) / 2;
                const curMidY = (t0.clientY + t1.clientY) / 2;

                const rawRatio = curDist / startDist;
                const candidateScale = clamp(startScale * rawRatio, minScale, maxScale);
                const visualRatio = candidateScale / Math.max(0.01, startScale);

                const dx = curMidX - startMidX;
                const dy = curMidY - startMidY;

                lastMidX = curMidX;
                lastMidY = curMidY;
                lastRatio = visualRatio;

                if (pinchTargetEl && pinchTargetEl !== scrollContainer) {
                    pinchTargetEl.style.transform =
                        'translate3d(' + dx.toFixed(1) + 'px, ' + dy.toFixed(1) + 'px, 0) scale(' + visualRatio.toFixed(4) + ')';
                }
                if (onPreviewScale) {
                    onPreviewScale(candidateScale);
                }
            } else if (pinching) {
                // Prevent jump while one finger remains briefly after lifting the other finger
                e.preventDefault();
            }
        }, { passive: false });

        bind(scrollContainer, 'touchend', function (e) {
            e.stopPropagation();
            if (pinching && (!e.touches || e.touches.length < 2)) {
                commitPinchZoom();
            }
        }, { passive: false });

        bind(scrollContainer, 'touchcancel', function (e) {
            e.stopPropagation();
            if (pinching) {
                commitPinchZoom();
            }
        }, { passive: true });

        // Desktop Ctrl+Wheel / Trackpad pinch zoom + boundary swipe/scroll isolation
        let wheelRenderTimer = null;
        bind(scrollContainer, 'wheel', function (e) {
            if (e.ctrlKey || e.metaKey) {
                e.preventDefault();
                e.stopPropagation();
                if (pinching || !onApplyZoom) return;

                const modeMult = e.deltaMode === 1 ? 20 : (e.deltaMode === 2 ? 120 : 1);
                const dy = e.deltaY * modeMult;
                const factor = clamp(Math.exp(-dy * 0.0022), 0.72, 1.38);
                const cur = getScale();
                const nextScale = clamp(cur * factor, minScale, maxScale);
                if (Math.abs(nextScale - cur) < 0.001) return;

                const useDeferredRender = Boolean(onFlushRender);
                onApplyZoom(nextScale, {
                    clientX: e.clientX,
                    clientY: e.clientY,
                    source: 'wheel',
                    quickResize: useDeferredRender
                });

                if (useDeferredRender) {
                    clearTimeout(wheelRenderTimer);
                    wheelRenderTimer = setTimeout(function () {
                        onFlushRender();
                    }, 95);
                }
                return;
            }

            // Block horizontal trackpad overscroll from triggering Safari/Chrome history Back/Forward
            const maxLeft = Math.max(0, scrollContainer.scrollWidth - scrollContainer.clientWidth);
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                if ((scrollContainer.scrollLeft <= 0 && e.deltaX < 0) ||
                    (scrollContainer.scrollLeft >= maxLeft - 1 && e.deltaX > 0)) {
                    e.preventDefault();
                }
            }
            e.stopPropagation();
        }, { passive: false });

        // Desktop Mouse Drag-to-Pan when zoomed wider/taller than container
        let mouseDragging = false;
        let dragMoved = false;
        let dragStartX = 0;
        let dragStartY = 0;
        let dragStartScrollLeft = 0;
        let dragStartScrollTop = 0;

        function updatePannableCursor() {
            const canPanH = scrollContainer.scrollWidth > scrollContainer.clientWidth + 2;
            const canPanV = scrollContainer.scrollHeight > scrollContainer.clientHeight + 2;
            scrollContainer.classList.toggle('pdf-pannable', canPanH);
            if (!canPanH && !canPanV) {
                scrollContainer.classList.remove('pdf-panning');
            }
        }

        bind(scrollContainer, 'mousedown', function (e) {
            if (e.button !== 0) return;
            if (e.target && e.target.closest('button, input, textarea, select, a')) return;

            const canPanH = scrollContainer.scrollWidth > scrollContainer.clientWidth + 2;
            const canPanV = scrollContainer.scrollHeight > scrollContainer.clientHeight + 2;
            if (!canPanH && !canPanV) return;

            mouseDragging = true;
            dragMoved = false;
            dragStartX = e.clientX;
            dragStartY = e.clientY;
            dragStartScrollLeft = scrollContainer.scrollLeft;
            dragStartScrollTop = scrollContainer.scrollTop;
        });

        bind(global, 'mousemove', function (e) {
            if (!mouseDragging) return;
            const dx = e.clientX - dragStartX;
            const dy = e.clientY - dragStartY;
            if (!dragMoved && Math.abs(dx) < 3 && Math.abs(dy) < 3) return;
            dragMoved = true;
            scrollContainer.classList.add('pdf-panning');
            scrollContainer.scrollLeft = dragStartScrollLeft - dx;
            scrollContainer.scrollTop = dragStartScrollTop - dy;
        });

        bind(global, 'mouseup', function () {
            if (!mouseDragging) return;
            mouseDragging = false;
            dragMoved = false;
            scrollContainer.classList.remove('pdf-panning');
        });

        // Keep pannable cursor hint accurate without layout thrashing
        let lastKnownWidth = scrollContainer.clientWidth || 0;
        let resizeTimer = null;

        function handlePossibleWidthChange() {
            const curW = scrollContainer.clientWidth || 0;
            updatePannableCursor();
            if (curW > 40 && Math.abs(curW - lastKnownWidth) > 4) {
                const prevW = lastKnownWidth;
                lastKnownWidth = curW;
                if (onWidthChange) {
                    const anchor = captureAnchor(scrollContainer, cardSelector);
                    onWidthChange(curW, prevW, anchor);
                }
            }
        }

        if (typeof ResizeObserver !== 'undefined') {
            const ro = new ResizeObserver(function () {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(handlePossibleWidthChange, 90);
            });
            ro.observe(scrollContainer);
            cleanups.push(function () {
                try { ro.disconnect(); } catch (e) {}
            });
        }

        const onWindowResize = function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(handlePossibleWidthChange, 120);
        };
        bind(global, 'resize', onWindowResize);
        bind(global, 'orientationchange', onWindowResize);

        requestAnimationFrame(updatePannableCursor);

        return {
            destroy: function () {
                clearTimeout(wheelRenderTimer);
                clearTimeout(resizeTimer);
                resetPinchStyles(pinchTargetEl);
                scrollContainer.classList.remove('pdf-pannable', 'pdf-panning');
                cleanups.forEach(function (fn) { fn(); });
                cleanups.length = 0;
            },
            isPinching: function () {
                return pinching;
            },
            wasRecentlyPinching: function (windowMs) {
                return pinching || (Date.now() - lastPinchEndedAt) < (windowMs || 280);
            },
            refreshCursor: updatePannableCursor,
            resetWidthTracking: function () {
                lastKnownWidth = scrollContainer.clientWidth || 0;
                updatePannableCursor();
            }
        };
    }

    global.WISPdfViewport = {
        captureAnchor: captureAnchor,
        restoreAnchor: restoreAnchor,
        renderVisibleCards: renderVisibleCards,
        blitCanvas: blitCanvas,
        computeCardBox: computeCardBox,
        attach: attach
    };
})(window);
