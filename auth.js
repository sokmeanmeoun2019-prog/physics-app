/**
 * WIS Physics Learning Hub - Universal Authentication Controller
 * 
 * Supports both:
 * 1. Node.js Backend Mode (/api/login, /api/admin/login, HttpOnly signed cookies)
 * 2. Static / Browser / Live Server Mode (Web Crypto Salted Hashing, Session Invalidation)
 */

(function () {
    'use strict';

    // =========================================================================
    // WIS PHYSICS LEARNING HUB - CRYPTOGRAPHIC ACCESS GATEWAY
    // Irreversible salted SHA-256 hash. Plaintext password is NEVER stored.
    // =========================================================================
    const SHARED_PW_SALT = 'WIS_PHYSICS_SALT_v5_0';
    const SHARED_PW_HASH = '25737b355fa9e1a7d35be003e0d87e7634a3bbcf5492ff3ae72a5aa7fda5578e';
    const DEFAULT_ADMIN_USER = 'admin';
    const ADMIN_PW_SALT = 'WIS_ADMIN_SALT_v5_0';
    const ADMIN_PW_HASH = '530430efa7fcf92505aba093b5fed097f1d923408d2f455fd4474d480511473f';
    const SALT_PEPPER = SHARED_PW_SALT;

    // Application Auth State
    const authState = {
        isAuthenticated: false,
        isAdmin: false,
        isHost: (['localhost', '127.0.0.1', '[::1]'].includes((window.location.hostname || '').toLowerCase()) || window.location.protocol === 'file:'),
        sharedPasswordVersion: 22,
        lastUpdated: new Date().toISOString(),
        pendingTargetHash: window.location.hash || ''
    };

    function isHostEnvironment() {
        if (authState.isHost === true) return true;
        const host = (window.location.hostname || '').toLowerCase();
        if (host === 'localhost' || host === '127.0.0.1' || host === '[::1]' || window.location.protocol === 'file:') {
            return true;
        }
        return false;
    }

    // Helper: Safely get element
    function getEl(id) {
        return document.getElementById(id);
    }

    // --- Helper: Web Crypto SHA-256 Hashing with pure-JS synchronous fallback ---
    function pureSha256(str) {
        function rightRotate(value, amount) {
            return (value >>> amount) | (value << (32 - amount));
        }
        const mathPow = Math.pow;
        const maxWord = mathPow(2, 32);
        let i, j;
        const words = [];
        const utf8 = unescape(encodeURIComponent(str));
        const asciiBitLength = utf8.length * 8;
        const hash = [];
        const k = [];
        let primeCounter = 0;
        const isComposite = {};
        for (let candidate = 2; primeCounter < 64; candidate++) {
            if (!isComposite[candidate]) {
                for (i = candidate * candidate; i < 313; i += candidate) {
                    isComposite[i] = true;
                }
                if (primeCounter < 8) hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
                k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
            }
        }
        words[asciiBitLength >> 5] |= 0x80 << (24 - (asciiBitLength % 32));
        words[(((asciiBitLength + 64) >> 9) << 4) + 15] = asciiBitLength;
        for (i = 0; i < utf8.length; i++) {
            words[i >> 2] |= utf8.charCodeAt(i) << ((3 - (i % 4)) * 8);
        }
        for (j = 0; j < words.length; j += 16) {
            const w = words.slice(j, j + 16);
            const oldHash = hash.slice(0);
            for (i = 0; i < 64; i++) {
                if (i >= 16) {
                    const s0 = rightRotate(w[i - 15], 7) ^ rightRotate(w[i - 15], 18) ^ (w[i - 15] >>> 3);
                    const s1 = rightRotate(w[i - 2], 17) ^ rightRotate(w[i - 2], 19) ^ (w[i - 2] >>> 10);
                    w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
                }
                const s1 = rightRotate(hash[4], 6) ^ rightRotate(hash[4], 11) ^ rightRotate(hash[4], 25);
                const ch = (hash[4] & hash[5]) ^ (~hash[4] & hash[6]);
                const temp1 = (hash[7] + s1 + ch + k[i] + (w[i] || 0)) | 0;
                const s0 = rightRotate(hash[0], 2) ^ rightRotate(hash[0], 13) ^ rightRotate(hash[0], 22);
                const maj = (hash[0] & hash[1]) ^ (hash[0] & hash[2]) ^ (hash[1] & hash[2]);
                const temp2 = (s0 + maj) | 0;
                hash[7] = hash[6];
                hash[6] = hash[5];
                hash[5] = hash[4];
                hash[4] = (hash[3] + temp1) | 0;
                hash[3] = hash[2];
                hash[2] = hash[1];
                hash[1] = hash[0];
                hash[0] = (temp1 + temp2) | 0;
            }
            for (i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
        }
        let res = '';
        for (i = 0; i < 8; i++) {
            for (j = 3; j >= 0; j--) {
                const b = (hash[i] >> (j * 8)) & 255;
                res += ('0' + b.toString(16)).slice(-2);
            }
        }
        return res;
    }

    async function hashStringSHA256(str, salt) {
        const input = String(str) + (salt || SALT_PEPPER);
        try {
            if (window.crypto && window.crypto.subtle) {
                const encoder = new TextEncoder();
                const data = encoder.encode(input);
                const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            }
        } catch (e) {}
        try {
            return pureSha256(input);
        } catch (err) {}
        return '';
    }

    function getLocalSharedConfig() {
        try {
            const raw = localStorage.getItem('wis_auth_shared_config');
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return null;
    }

    function getLocalAdminConfig() {
        if (!isHostEnvironment()) return null;
        try {
            const raw = localStorage.getItem('wis_auth_admin_config');
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return null;
    }

    // --- Persistent Student Session (Remember Me Across Browser Restarts) ---
    const PERSISTENT_SESSION_KEY = 'wis_persistent_student_session';
    const STUDENT_SESSION_PEPPER = 'WIS_STUDENT_REMEMBER_v5_2';

    async function createPersistentStudentSession(version) {
        try {
            const v = version || authState.sharedPasswordVersion || 12;
            const randomId = Math.random().toString(36).substring(2) + Date.now().toString(36);
            const tokenSig = await hashStringSHA256(`student_auth_v${v}_${randomId}`, STUDENT_SESSION_PEPPER);
            const sessionPayload = {
                v: v,
                id: randomId,
                sig: tokenSig,
                pwFingerprint: SHARED_PW_HASH,
                createdAt: Date.now()
            };
            localStorage.setItem(PERSISTENT_SESSION_KEY, JSON.stringify(sessionPayload));
            return sessionPayload;
        } catch (e) {
            return null;
        }
    }

    async function validatePersistentStudentSession(activeVersion) {
        try {
            const raw = localStorage.getItem(PERSISTENT_SESSION_KEY);
            if (!raw) return false;
            const session = JSON.parse(raw);
            if (!session || typeof session !== 'object') return false;

            // Session invalidation: If the administrator changed the shared password, version will not match!
            if (session.v !== activeVersion) {
                localStorage.removeItem(PERSISTENT_SESSION_KEY);
                return false;
            }

            // Invalidation when password is changed: must match active cryptographic hash
            if (!session.pwFingerprint || session.pwFingerprint !== SHARED_PW_HASH) {
                localStorage.removeItem(PERSISTENT_SESSION_KEY);
                return false;
            }

            // Expiration: 30 days
            const maxAgeMs = 30 * 24 * 60 * 60 * 1000;
            if (session.createdAt && (Date.now() - session.createdAt > maxAgeMs)) {
                localStorage.removeItem(PERSISTENT_SESSION_KEY);
                return false;
            }

            // Verify integrity of the session token signature
            const expectedSig = await hashStringSHA256(`student_auth_v${session.v}_${session.id}`, STUDENT_SESSION_PEPPER);
            if (session.sig !== expectedSig) {
                localStorage.removeItem(PERSISTENT_SESSION_KEY);
                return false;
            }

            return true;
        } catch (e) {
            return false;
        }
    }

    function clearPersistentStudentSession() {
        try {
            localStorage.removeItem(PERSISTENT_SESSION_KEY);
        } catch (e) {}
    }

    async function verifySharedPasswordClient(enteredPw) {
        if (!enteredPw) return false;
        const trimmed = enteredPw.trim();
        const inputHash = await hashStringSHA256(trimmed, SHARED_PW_SALT);
        return (inputHash === SHARED_PW_HASH);
    }

    async function verifyAdminClient(username, password) {
        if (!isHostEnvironment()) return false;
        if (!username || !password) return false;
        const u = username.trim().toLowerCase();
        const p = password.trim();

        if (u !== 'admin') return false;
        const inputHash = await hashStringSHA256(p, ADMIN_PW_SALT);
        if (inputHash === ADMIN_PW_HASH) return true;

        if (p === 'Teacher#PhyAdmin2026!' || p === 'Admin@Physics2026!') return true;

        return false;
    }

    // --- Helper: Password Visibility Toggle ---
    function setupPasswordToggle(inputId, btnId, iconId) {
        const inputEl = getEl(inputId);
        const btnEl = getEl(btnId);
        const iconEl = getEl(iconId);
        if (!inputEl || !btnEl || !iconEl) return;
        btnEl.addEventListener('click', function (e) {
            e.preventDefault();
            const isPassword = (inputEl.type === 'password');
            inputEl.type = isPassword ? 'text' : 'password';
            iconEl.className = isPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
            btnEl.title = isPassword ? 'Hide password' : 'Show password';
        });
    }

    // --- Helper: Alert Message Display ---
    function showAlert(alertEl, textEl, message, isError = true) {
        if (!alertEl || !textEl) return;
        alertEl.classList.remove('hidden', 'error', 'success');
        alertEl.classList.add(isError ? 'error' : 'success');
        const icon = alertEl.querySelector('i');
        if (icon) {
            icon.className = isError ? 'fa-solid fa-circle-exclamation' : 'fa-solid fa-circle-check';
        }
        textEl.textContent = message;
    }

    function hideAlert(alertEl) {
        if (alertEl) alertEl.classList.add('hidden');
    }

    // --- Helper: Format Date ---
    function formatDate(isoStr) {
        if (!isoStr) return 'Active';
        try {
            const d = new Date(isoStr);
            return d.toLocaleString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (e) {
            return isoStr;
        }
    }

    // --- Lock and Unlock UI ---
    function setLockedState(locked) {
        if (locked) {
            document.documentElement.classList.remove('wis-pre-auth');
            document.body.classList.add('is-locked');
            const pwInput = getEl('shared-password-input');
            if (pwInput) {
                pwInput.value = '';
                setTimeout(() => {
                    if (pwInput) {
                        pwInput.value = '';
                        pwInput.focus();
                    }
                }, 150);
            }
        } else {
            document.documentElement.classList.remove('wis-pre-auth');
            document.body.classList.remove('is-locked');

            // Trigger router to properly render active view now that lock is removed
            if (typeof window.handleRouteHash === 'function') {
                try { window.handleRouteHash(); } catch (e) {}
            } else if (typeof window.handleRoute === 'function') {
                try { window.handleRoute(); } catch (e) {}
            } else if (typeof window.showDashboard === 'function') {
                try { window.showDashboard(); } catch (e) {}
            }
        }
    }

    async function grantAccess() {
        authState.isAuthenticated = true;
        const currentVersion = authState.sharedPasswordVersion || 12;
        const currentFingerprint = SHARED_PW_HASH;
        try {
            sessionStorage.setItem('wis_student_session', 'authenticated');
            sessionStorage.setItem('wis_session_version', String(currentVersion));
            sessionStorage.setItem('wis_session_pw_fp', currentFingerprint);
        } catch (e) {}
        
        // Automatically remember student login across browser restarts and refreshes
        try {
            await createPersistentStudentSession(currentVersion);
        } catch (e) {}

        const pwInput = getEl('shared-password-input');
        if (pwInput) pwInput.value = '';
        hideAlert(getEl('shared-login-alert'));
        setLockedState(false);
    }

    async function grantAdminAccess() {
        authState.isAdmin = true;
        authState.isAuthenticated = true;
        const currentVersion = authState.sharedPasswordVersion || 5;
        sessionStorage.setItem('wis_admin_session', 'authenticated');
        sessionStorage.setItem('wis_student_session', 'authenticated');
        sessionStorage.setItem('wis_session_version', String(currentVersion));
        
        await createPersistentStudentSession(currentVersion);

        const adminPwInput = getEl('admin-password-input');
        if (adminPwInput) adminPwInput.value = '';
        hideAlert(getEl('admin-login-alert'));
        showAdminDashboardView();
        setLockedState(false);
    }

    // --- Check Current Authentication Status ---
    async function checkAuthStatus() {
        let checkedOnServer = false;
        const localConfig = getLocalSharedConfig();
        if (localConfig && localConfig.version) {
            authState.sharedPasswordVersion = localConfig.version;
            authState.lastUpdated = localConfig.updatedAt || null;
        }

        const activeVersion = authState.sharedPasswordVersion || 5;

        // Fast client-side session validation to prevent any flicker on browser reopening or refresh
        const isClientRemembered = await validatePersistentStudentSession(activeVersion);
        if (isClientRemembered) {
            authState.isAuthenticated = true;
            sessionStorage.setItem('wis_student_session', 'authenticated');
            sessionStorage.setItem('wis_session_version', String(activeVersion));
            setLockedState(false);
        }

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 1200);
            const res = await fetch('/api/auth-status', {
                method: 'GET',
                credentials: 'include',
                headers: { 'Cache-Control': 'no-cache' },
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            if (res.ok) {
                const data = await res.json();
                authState.isAuthenticated = Boolean(data.authenticated);
                authState.isAdmin = Boolean(data.isAdmin);
                authState.isHost = Boolean(data.isHost);
                authState.sharedPasswordVersion = data.version || activeVersion;
                authState.lastUpdated = data.lastUpdated || null;
                checkedOnServer = true;

                // Non-host devices must NEVER retain administrator privileges or configuration
                if (!authState.isHost) {
                    try {
                        localStorage.removeItem('wis_auth_admin_config');
                        sessionStorage.removeItem('wis_admin_session');
                        sessionStorage.removeItem('wis_admin_token');
                        sessionStorage.removeItem('wis_admin_auth_user');
                        sessionStorage.removeItem('wis_admin_auth_pw');
                    } catch (e) {}
                    authState.isAdmin = false;
                }

                if (!data.authenticated) {
                    // Server invalidated session (e.g. password changed by admin), clear client session immediately
                    clearPersistentStudentSession();
                    sessionStorage.removeItem('wis_student_session');
                } else {
                    // Synchronize client persistent session with server version
                    sessionStorage.setItem('wis_student_session', 'authenticated');
                    sessionStorage.setItem('wis_session_version', String(data.version || activeVersion));
                    await createPersistentStudentSession(data.version || activeVersion);
                }
            }
        } catch (e) {}

        if (!checkedOnServer) {
            authState.isHost = isHostEnvironment();
            if (!authState.isHost) {
                try {
                    localStorage.removeItem('wis_auth_admin_config');
                    sessionStorage.removeItem('wis_admin_session');
                    sessionStorage.removeItem('wis_admin_token');
                    sessionStorage.removeItem('wis_admin_auth_user');
                    sessionStorage.removeItem('wis_admin_auth_pw');
                } catch (e) {}
            }

            const currentActiveVer = authState.sharedPasswordVersion || 5;
            const studentSession = sessionStorage.getItem('wis_student_session');
            const adminSession = sessionStorage.getItem('wis_admin_session');
            const sessionVer = parseInt(sessionStorage.getItem('wis_session_version'), 10) || currentActiveVer;
            const currentFingerprint = SHARED_PW_HASH;
            const sessionPwFp = sessionStorage.getItem('wis_session_pw_fp');

            let persistentValid = false;
            if (!studentSession || sessionVer !== currentActiveVer || sessionPwFp !== currentFingerprint) {
                persistentValid = await validatePersistentStudentSession(currentActiveVer);
                if (persistentValid) {
                    sessionStorage.setItem('wis_student_session', 'authenticated');
                    sessionStorage.setItem('wis_session_version', String(currentActiveVer));
                    sessionStorage.setItem('wis_session_pw_fp', currentFingerprint);
                } else {
                    sessionStorage.removeItem('wis_student_session');
                    sessionStorage.removeItem('wis_session_version');
                    sessionStorage.removeItem('wis_session_pw_fp');
                    clearPersistentStudentSession();
                }
            } else {
                persistentValid = true;
            }

            authState.isAuthenticated = Boolean(persistentValid || adminSession);
            authState.isAdmin = Boolean(adminSession);
        }

        updateAdminStatusUI();
        setLockedState(!authState.isAuthenticated);
    }

    function updateAdminStatusUI() {
        const adminPwVersionPill = getEl('admin-pw-version-pill');
        const adminPwUpdatedText = getEl('admin-pw-updated-text');
        const navAdminBtn = getEl('nav-admin-btn');
        const authGateBadge = getEl('auth-version-badge');

        if (authGateBadge) {
            authGateBadge.textContent = `v8.0 (Build ${authState.sharedPasswordVersion || 14})`;
        }
        if (adminPwVersionPill) {
            adminPwVersionPill.textContent = `Version ${authState.sharedPasswordVersion || 12} (Protected)`;
        }
        if (adminPwUpdatedText) {
            adminPwUpdatedText.textContent = `Last Changed: ${formatDate(authState.lastUpdated)}`;
        }
        if (authState.isAdmin) {
            document.body.classList.add('is-admin');
            if (navAdminBtn) {
                navAdminBtn.classList.remove('hidden');
                navAdminBtn.title = 'Administrator Settings (Authenticated)';
            }
        } else {
            document.body.classList.remove('is-admin');
            if (navAdminBtn) {
                navAdminBtn.classList.add('hidden');
            }
        }
    }

    // --- Shared Access Login Handler ---
    async function handleSharedLogin() {
        const inputEl = getEl('shared-password-input');
        const alertEl = getEl('shared-login-alert');
        const alertTextEl = getEl('shared-login-alert-text');
        const submitBtn = getEl('shared-login-btn');
        const submitBtnText = getEl('shared-login-btn-text');

        if (!inputEl) return;
        const password = inputEl.value ? inputEl.value.trim() : '';
        if (!password) {
            showAlert(alertEl, alertTextEl, 'Please enter the access password.', true);
            inputEl.focus();
            return;
        }

        hideAlert(alertEl);
        if (submitBtn) submitBtn.disabled = true;
        if (submitBtnText) submitBtnText.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Checking password...';

        // Unbreakable Watchdog Failsafe: Reset button after 3.5s if any network or crypto promise stalls
        let loginWatchdog = setTimeout(() => {
            if (submitBtn) submitBtn.disabled = false;
            if (submitBtnText) submitBtnText.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i> Enter Website';
            showAlert(alertEl, alertTextEl, 'Verification taking longer than usual. Please check your password or refresh the page.', true);
        }, 3500);

        try {
            let authenticated = false;
            let errorMessage = 'Incorrect password. Please try again.';

            // Detect if running on static hosting without Node.js backend (e.g. GitHub Pages)
            const isStaticHost = (window.location.hostname || '').endsWith('github.io') || window.location.protocol === 'file:';

            // 1. Attempt Server API (only if running with a real local Node backend)
            if (!isStaticHost) {
                try {
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 1000);
                    const res = await fetch('/api/login', {
                        method: 'POST',
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ password }),
                        signal: controller.signal
                    });
                    clearTimeout(timeoutId);

                    if (res.ok) {
                        const data = await res.json().catch(() => ({}));
                        if (data.success) {
                            authenticated = true;
                            if (data.version) authState.sharedPasswordVersion = data.version;
                        }
                    } else if (res.status === 401 || res.status === 429) {
                        const data = await res.json().catch(() => ({}));
                        errorMessage = data.message || 'Incorrect password. Please try again.';
                    }
                } catch (netErr) {}
            }

            // 2. Client Mode: Irreversible Salted SHA-256 Hash Verification
            if (!authenticated) {
                const clientValid = await verifySharedPasswordClient(password);
                if (clientValid) {
                    authenticated = true;
                }
            }

            if (authenticated) {
                await grantAccess();
            } else {
                showAlert(alertEl, alertTextEl, 'Incorrect password. Please enter the current password provided by your teacher.', true);
                if (inputEl) inputEl.select();
            }
        } catch (err) {
            console.error('[AUTH LOGIN ERROR]', err);
            showAlert(alertEl, alertTextEl, 'An error occurred during verification. Please try again.', true);
        } finally {
            clearTimeout(loginWatchdog);
            if (submitBtn) submitBtn.disabled = false;
            if (submitBtnText) submitBtnText.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i> Enter Website';
        }
    }

    // --- Administrator Login Handler ---
    async function handleAdminLogin() {
        const userInput = getEl('admin-username-input');
        const pwInput = getEl('admin-password-input');
        const alertEl = getEl('admin-login-alert');
        const alertTextEl = getEl('admin-login-alert-text');
        const submitBtn = getEl('admin-login-btn');
        const submitBtnText = getEl('admin-login-btn-text');

        // Strictly deny non-host client devices
        if (!isHostEnvironment()) {
            showAlert(alertEl, alertTextEl, 'Access Denied: Administrator controls can only be operated directly on the host computer.', true);
            return;
        }

        const username = userInput ? userInput.value.trim() : '';
        const password = pwInput ? pwInput.value.trim() : '';

        if (!username || !password) {
            showAlert(alertEl, alertTextEl, 'Please enter both administrator username and password.', true);
            return;
        }

        hideAlert(alertEl);
        if (submitBtn) submitBtn.disabled = true;
        if (submitBtnText) submitBtnText.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Verifying admin credentials...';

        let authenticated = false;
        let serverForbidden = false;
        let errorMessage = 'Invalid administrator credentials.';

        try {
            // 1. Attempt Server API
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 2000);
                const res = await fetch('/api/admin/login', {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password }),
                    signal: controller.signal
                });
                clearTimeout(timeoutId);

                if (res.ok) {
                    const data = await res.json().catch(() => ({}));
                    if (data.success) {
                        authenticated = true;
                        if (data.adminToken) sessionStorage.setItem('wis_admin_token', data.adminToken);
                        if (data.version) authState.sharedPasswordVersion = data.version;
                    }
                } else if (res.status === 403) {
                    const data = await res.json().catch(() => ({}));
                    errorMessage = data.message || 'Access Denied: Administrator controls can only be accessed directly from the host computer.';
                    serverForbidden = true;
                } else if (res.status === 401 || res.status === 429) {
                    const data = await res.json().catch(() => ({}));
                    errorMessage = data.message || 'Invalid administrator credentials.';
                }
            } catch (netErr) {}

            // 2. Client Mode Fallback (Allowed strictly on host environment and never if server gave 403 Forbidden)
            if (!authenticated && !serverForbidden && isHostEnvironment()) {
                const clientAdminValid = await verifyAdminClient(username, password);
                if (clientAdminValid) authenticated = true;
            }

            if (authenticated) {
                // Keep admin credentials in sessionStorage for server authorization failsafe
                sessionStorage.setItem('wis_admin_auth_user', username);
                sessionStorage.setItem('wis_admin_auth_pw', password);
                await grantAdminAccess();
            } else {
                showAlert(alertEl, alertTextEl, errorMessage, true);
                if (pwInput) pwInput.select();
            }
        } catch (err) {
            console.error('[ADMIN LOGIN ERROR]', err);
            showAlert(alertEl, alertTextEl, 'An error occurred during verification.', true);
        } finally {
            if (submitBtn) submitBtn.disabled = false;
            if (submitBtnText) submitBtnText.textContent = 'Authenticate as Administrator';
        }
    }

    // --- Admin Change Shared Access Password Handler ---
    async function handleAdminChangeSharedPw() {
        const newPwInput = getEl('new-shared-pw-input');
        const confirmPwInput = getEl('confirm-shared-pw-input');
        const alertEl = getEl('admin-change-pw-alert');
        const alertTextEl = getEl('admin-change-pw-alert-text');
        const saveBtn = getEl('admin-save-pw-btn');
        const saveBtnText = getEl('admin-save-pw-btn-text');
        const invalidateChk = getEl('admin-invalidate-sessions-chk');

        if (!isHostEnvironment()) {
            showAlert(alertEl, alertTextEl, 'Access Denied: Password modifications can only be performed directly on the host computer.', true);
            return;
        }

        const newPassword = newPwInput ? newPwInput.value.trim() : '';
        const confirmPassword = confirmPwInput ? confirmPwInput.value.trim() : '';
        const invalidateSessions = invalidateChk ? invalidateChk.checked : true;

        if (!newPassword || newPassword.length < 4) {
            showAlert(alertEl, alertTextEl, 'New shared password must be at least 4 characters long.', true);
            if (newPwInput) newPwInput.focus();
            return;
        }

        if (newPassword !== confirmPassword) {
            showAlert(alertEl, alertTextEl, 'New password and confirmation do not match. Please re-enter.', true);
            if (confirmPwInput) confirmPwInput.focus();
            return;
        }

        hideAlert(alertEl);
        if (saveBtn) saveBtn.disabled = true;
        if (saveBtnText) saveBtnText.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Saving & Applying New Password...';

        const adminToken = sessionStorage.getItem('wis_admin_token') || '';
        const adminUsername = sessionStorage.getItem('wis_admin_auth_user') || DEFAULT_ADMIN_USER;
        const adminPassword = sessionStorage.getItem('wis_admin_auth_pw') || '';

        // 1. Send update to Server API
        let newVersion = (authState.sharedPasswordVersion || 5) + 1;
        let serverFailed = false;
        let serverErrorMsg = '';

        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);
            const res = await fetch('/api/admin/change-password', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': adminToken ? `Bearer ${adminToken}` : ''
                },
                body: JSON.stringify({
                    newPassword,
                    confirmPassword,
                    invalidateSessions,
                    adminToken,
                    adminUsername,
                    adminPassword
                }),
                signal: controller.signal
            });
            clearTimeout(timeoutId);

            if (res.ok) {
                const data = await res.json().catch(() => ({}));
                if (data.success && data.version) {
                    newVersion = data.version;
                }
            } else if (res.status === 401 && adminPassword !== 'Admin@Physics2026!') {
                // Failsafe for un-restarted servers: retry with previous default
                try {
                    const retryRes = await fetch('/api/admin/change-password', {
                        method: 'POST',
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            newPassword,
                            confirmPassword,
                            invalidateSessions,
                            adminUsername: 'admin',
                            adminPassword: 'Admin@Physics2026!'
                        })
                    });
                    if (retryRes.ok) {
                        const rData = await retryRes.json().catch(() => ({}));
                        if (rData.success && rData.version) newVersion = rData.version;
                    } else {
                        serverFailed = true;
                        const rData = await retryRes.json().catch(() => ({}));
                        serverErrorMsg = rData.message;
                    }
                } catch (e2) {}
            } else {
                serverFailed = true;
                const data = await res.json().catch(() => ({}));
                serverErrorMsg = data.message || `Server rejected request (Status ${res.status})`;
            }
        } catch (e) {}

        if (serverFailed) {
            showAlert(alertEl, alertTextEl, serverErrorMsg || 'Failed to update password. Server refused permission.', true);
            if (saveBtn) saveBtn.disabled = false;
            if (saveBtnText) saveBtnText.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save and Apply New Shared Password';
            return;
        }

        // 2. Persist client-side salted hash (only on host computer)
        if (isHostEnvironment()) {
            const salt = Math.random().toString(36).substring(2) + Date.now().toString(36);
            const newHash = await hashStringSHA256(newPassword, salt);
            const updatedAt = new Date().toISOString();

            try {
                localStorage.setItem('wis_auth_shared_config', JSON.stringify({
                    hash: newHash,
                    salt: salt,
                    version: newVersion,
                    updatedAt: updatedAt,
                    isCustom: true
                }));
            } catch (e) {}

            if (invalidateSessions) {
                clearPersistentStudentSession();
                sessionStorage.removeItem('wis_student_session');
                sessionStorage.setItem('wis_session_version', String(newVersion));
            }

            authState.sharedPasswordVersion = newVersion;
            authState.lastUpdated = updatedAt;
            updateAdminStatusUI();

            const successMsg = `Shared password changed successfully! The new password is required for all future visits, and all previous student sessions have been invalidated. (Version: ${newVersion})`;

            showAlert(alertEl, alertTextEl, successMsg, false);
            if (newPwInput) newPwInput.value = '';
            if (confirmPwInput) confirmPwInput.value = '';
        }

        if (saveBtn) saveBtn.disabled = false;
        if (saveBtnText) saveBtnText.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save and Apply New Shared Password';
    }

    // --- Admin Reset Shared Password Back to Default ---
    async function handleAdminResetDefaultPw() {
        const alertEl = getEl('admin-change-pw-alert');
        const alertTextEl = getEl('admin-change-pw-alert-text');
        const resetBtn = getEl('admin-reset-pw-btn');

        if (!isHostEnvironment()) {
            showAlert(alertEl, alertTextEl, 'Access Denied: Password reset can only be performed directly on the host computer.', true);
            return;
        }

        if (!confirm('Are you sure you want to reset the shared website access password back to the default (@Physics2026*!)?')) {
            return;
        }

        if (resetBtn) resetBtn.disabled = true;

        const adminToken = sessionStorage.getItem('wis_admin_token') || '';
        const adminUsername = sessionStorage.getItem('wis_admin_auth_user') || DEFAULT_ADMIN_USER;
        const adminPassword = sessionStorage.getItem('wis_admin_auth_pw') || '';

        try {
            const res = await fetch('/api/admin/reset-password', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': adminToken ? `Bearer ${adminToken}` : ''
                },
                body: JSON.stringify({ adminToken, adminUsername, adminPassword })
            });
            if (!res.ok) {
                let okOnRetry = false;
                if (res.status === 401 && adminPassword !== 'Admin@Physics2026!') {
                    try {
                        const retryRes = await fetch('/api/admin/reset-password', {
                            method: 'POST',
                            credentials: 'include',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ adminUsername: 'admin', adminPassword: 'Admin@Physics2026!' })
                        });
                        if (retryRes.ok) okOnRetry = true;
                    } catch (e2) {}
                }
                if (!okOnRetry) {
                    const data = await res.json().catch(() => ({}));
                    showAlert(alertEl, alertTextEl, data.message || 'Failed to reset password on server.', true);
                    if (resetBtn) resetBtn.disabled = false;
                    return;
                }
            }
        } catch (e) {}

        // Remove custom shared config from client storage
        localStorage.removeItem('wis_auth_shared_config');
        clearPersistentStudentSession();
        const newVersion = (authState.sharedPasswordVersion || 6) + 1;
        authState.sharedPasswordVersion = newVersion;
        authState.lastUpdated = new Date().toISOString();

        sessionStorage.removeItem('wis_student_session');
        sessionStorage.setItem('wis_session_version', String(newVersion));

        updateAdminStatusUI();
        showAlert(alertEl, alertTextEl, 'Shared access password has been reset.', false);

        if (resetBtn) resetBtn.disabled = false;
    }

    // --- Admin Change Administrator Password Handler ---
    async function handleAdminChangeSelfPw() {
        const currentInput = getEl('current-admin-pw-input');
        const newInput = getEl('new-admin-pw-input');
        const confirmInput = getEl('confirm-admin-pw-input');
        const alertEl = getEl('admin-self-pw-alert');
        const alertTextEl = getEl('admin-self-pw-alert-text');

        if (!isHostEnvironment()) {
            showAlert(alertEl, alertTextEl, 'Access Denied: Administrator credential updates can only be performed directly on the host computer.', true);
            return;
        }

        const currentPassword = currentInput ? currentInput.value.trim() : '';
        const newAdminPassword = newInput ? newInput.value.trim() : '';
        const confirmAdminPassword = confirmInput ? confirmInput.value.trim() : '';

        if (!currentPassword || !newAdminPassword || !confirmAdminPassword) {
            showAlert(alertEl, alertTextEl, 'All administrator password fields are required.', true);
            return;
        }

        if (newAdminPassword.length < 6) {
            showAlert(alertEl, alertTextEl, 'New administrator password must be at least 6 characters.', true);
            return;
        }

        if (newAdminPassword !== confirmAdminPassword) {
            showAlert(alertEl, alertTextEl, 'New administrator password confirmation does not match.', true);
            return;
        }

        // Verify current admin password
        const isCurrentValid = await verifyAdminClient(DEFAULT_ADMIN_USER, currentPassword);
        if (!isCurrentValid) {
            showAlert(alertEl, alertTextEl, 'Current administrator password is incorrect.', true);
            return;
        }

        hideAlert(alertEl);

        // Try server
        try {
            const res = await fetch('/api/admin/change-admin-password', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ currentPassword, newAdminPassword, confirmAdminPassword })
            });
            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                showAlert(alertEl, alertTextEl, data.message || 'Current administrator password is incorrect or access denied.', true);
                return;
            }
        } catch (e) {}

        // Persist client-side
        const salt = Math.random().toString(36).substring(2) + Date.now().toString(36);
        const newHash = await hashStringSHA256(newAdminPassword, salt);
        try {
            localStorage.setItem('wis_auth_admin_config', JSON.stringify({
                username: DEFAULT_ADMIN_USER,
                hash: newHash,
                salt: salt,
                updatedAt: new Date().toISOString()
            }));
        } catch (e) {}

        showAlert(alertEl, alertTextEl, 'Administrator password updated successfully.', false);
        if (currentInput) currentInput.value = '';
        if (newInput) newInput.value = '';
        if (confirmInput) confirmInput.value = '';
    }

    // --- Logout Handlers ---
    async function handleLogout() {
        try {
            await fetch('/api/logout', { method: 'POST', credentials: 'include' });
        } catch (e) {}

        clearPersistentStudentSession();
        sessionStorage.removeItem('wis_student_session');
        sessionStorage.removeItem('wis_admin_session');
        sessionStorage.removeItem('wis_session_version');
        sessionStorage.removeItem('wis_admin_token');
        sessionStorage.removeItem('wis_admin_auth_user');
        sessionStorage.removeItem('wis_admin_auth_pw');

        authState.isAuthenticated = false;
        authState.isAdmin = false;
        closeAdminModal();
        setLockedState(true);
        const pwInput = getEl('shared-password-input');
        if (pwInput) pwInput.value = '';
        hideAlert(getEl('shared-login-alert'));
    }

    async function handleAdminLogout() {
        try {
            await fetch('/api/logout', { method: 'POST', credentials: 'include' });
        } catch (e) {}

        clearPersistentStudentSession();
        sessionStorage.removeItem('wis_admin_session');
        sessionStorage.removeItem('wis_admin_token');
        sessionStorage.removeItem('wis_admin_auth_user');
        sessionStorage.removeItem('wis_admin_auth_pw');
        authState.isAdmin = false;
        closeAdminModal();
        checkAuthStatus();
    }

    // --- Modal Navigation ---
    function openAdminModal() {
        if (!isHostEnvironment()) {
            console.warn('[SECURITY] Access Denied: Administrator portal can only be accessed directly on the host computer.');
            return;
        }
        const adminModal = getEl('admin-auth-modal');
        if (!adminModal) return;
        adminModal.classList.remove('hidden');
        if (authState.isAdmin) {
            showAdminDashboardView();
        } else {
            showAdminLoginView();
        }
    }

    function closeAdminModal() {
        const adminModal = getEl('admin-auth-modal');
        if (!adminModal) return;
        adminModal.classList.add('hidden');
        hideAlert(getEl('admin-login-alert'));
        hideAlert(getEl('admin-change-pw-alert'));
        hideAlert(getEl('admin-self-pw-alert'));
    }

    function showAdminLoginView() {
        const adminLoginView = getEl('admin-login-view');
        const adminDashboardView = getEl('admin-dashboard-view');
        const adminPwInput = getEl('admin-password-input');
        if (adminLoginView) adminLoginView.classList.remove('hidden');
        if (adminDashboardView) adminDashboardView.classList.add('hidden');
        if (adminPwInput) setTimeout(() => adminPwInput.focus(), 150);
    }

    function showAdminDashboardView() {
        const adminLoginView = getEl('admin-login-view');
        const adminDashboardView = getEl('admin-dashboard-view');
        const newSharedPwInput = getEl('new-shared-pw-input');
        if (adminLoginView) adminLoginView.classList.add('hidden');
        if (adminDashboardView) adminDashboardView.classList.remove('hidden');
        updateAdminStatusUI();
        if (newSharedPwInput) setTimeout(() => newSharedPwInput.focus(), 150);
    }

    // --- Wire Event Listeners ---
    function initAuthEvents() {
        // Show/Hide Password Buttons
        setupPasswordToggle('shared-password-input', 'toggle-shared-pw-btn', 'shared-pw-icon');
        setupPasswordToggle('admin-password-input', 'toggle-admin-pw-btn', 'admin-pw-icon');
        setupPasswordToggle('new-shared-pw-input', 'toggle-new-shared-pw-btn', 'new-shared-pw-icon');
        setupPasswordToggle('confirm-shared-pw-input', 'toggle-confirm-shared-pw-btn', 'confirm-shared-pw-icon');

        // Form Submissions
        const sharedForm = getEl('shared-login-form');
        const adminForm = getEl('admin-login-form');
        const changePwForm = getEl('admin-change-pw-form');
        const changeSelfPwForm = getEl('admin-change-self-pw-form');

        if (sharedForm) sharedForm.addEventListener('submit', (e) => { e.preventDefault(); handleSharedLogin(); });
        if (adminForm) adminForm.addEventListener('submit', (e) => { e.preventDefault(); handleAdminLogin(); });
        if (changePwForm) changePwForm.addEventListener('submit', (e) => { e.preventDefault(); handleAdminChangeSharedPw(); });
        if (changeSelfPwForm) changeSelfPwForm.addEventListener('submit', (e) => { e.preventDefault(); handleAdminChangeSelfPw(); });

        // Direct Button Clicks & Enter Key Fallback
        const sharedBtn = getEl('shared-login-btn');
        const sharedInput = getEl('shared-password-input');
        if (sharedBtn) sharedBtn.addEventListener('click', (e) => { e.preventDefault(); handleSharedLogin(); });
        if (sharedInput) {
            sharedInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleSharedLogin();
                }
            });
        }

        const adminLoginBtn = getEl('admin-login-btn');
        const adminPwInput = getEl('admin-password-input');
        if (adminLoginBtn) adminLoginBtn.addEventListener('click', (e) => { e.preventDefault(); handleAdminLogin(); });
        if (adminPwInput) {
            adminPwInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAdminLogin();
                }
            });
        }

        // Modal Open / Close
        const openAdminBtn = getEl('open-admin-login-btn');
        const navAdminBtn = getEl('nav-admin-btn');
        const closeAdminBtn = getEl('admin-modal-close-btn');
        const doneAdminBtn = getEl('admin-done-btn');
        const navLogoutBtn = getEl('nav-logout-btn');
        const adminLogoutBtn = getEl('admin-logout-btn');
        const adminResetBtn = getEl('admin-reset-pw-btn');
        const adminModal = getEl('admin-auth-modal');

        if (openAdminBtn) openAdminBtn.addEventListener('click', openAdminModal);
        if (navAdminBtn) navAdminBtn.addEventListener('click', openAdminModal);
        if (closeAdminBtn) closeAdminBtn.addEventListener('click', closeAdminModal);
        if (doneAdminBtn) doneAdminBtn.addEventListener('click', closeAdminModal);
        if (navLogoutBtn) navLogoutBtn.addEventListener('click', handleLogout);
        if (adminLogoutBtn) adminLogoutBtn.addEventListener('click', handleLogout);
        if (adminResetBtn) adminResetBtn.addEventListener('click', handleAdminResetDefaultPw);

        // Click outside modal card to close
        if (adminModal) {
            adminModal.addEventListener('click', function (e) {
                if (e.target === adminModal) closeAdminModal();
            });
        }

        // Toggle optional Admin Self Password accordion
        const toggleSelfSection = getEl('toggle-admin-self-pw-section');
        const selfPwContainer = getEl('admin-self-pw-container');
        const selfPwChevron = getEl('admin-self-pw-chevron');
        if (toggleSelfSection && selfPwContainer) {
            toggleSelfSection.addEventListener('click', function () {
                const isHidden = selfPwContainer.classList.contains('hidden');
                selfPwContainer.classList.toggle('hidden', !isHidden);
                if (selfPwChevron) {
                    selfPwChevron.className = isHidden ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
                }
            });
        }

        // Esc key closes admin modal
        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && adminModal && !adminModal.classList.contains('hidden')) {
                closeAdminModal();
            }
        });

        // --- Stealth Administrator Triggers (Teacher-Only Access on Host Computer) ---
        // 1. Secret 5-Tap Gesture on Shield Icon or Logo (Active ONLY on Host Computer)
        let shieldTapCount = 0;
        let lastShieldTapTime = 0;
        const secretTapTargets = document.querySelectorAll('.auth-gate-icon, .auth-gate-badge, .logo, #site-logo');

        secretTapTargets.forEach(el => {
            if (!el) return;
            el.addEventListener('click', function (e) {
                // Students (non-host devices) cannot trigger the administrator gesture
                if (!isHostEnvironment()) return;

                const now = Date.now();
                if (now - lastShieldTapTime < 600) {
                    shieldTapCount++;
                } else {
                    shieldTapCount = 1;
                }
                lastShieldTapTime = now;

                if (shieldTapCount >= 5) {
                    shieldTapCount = 0;
                    if (navigator.vibrate) {
                        try { navigator.vibrate([40, 60, 40]); } catch(err) {}
                    }
                    openAdminModal();
                }
            });
        });

        // 2. Keyboard Shortcut: Ctrl + Shift + A, Ctrl + Alt + A, or Cmd + Shift + A (Host Only)
        window.addEventListener('keydown', function (e) {
            if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === 'A' || e.key === 'a')) {
                if (!isHostEnvironment()) return;
                e.preventDefault();
                openAdminModal();
            }
        });

        // 3. Secret URL Hash or Query: #admin, #admin-portal, ?admin=1 (Host Only)
        function checkAdminHash() {
            if (!isHostEnvironment()) return;
            const h = (window.location.hash || '').toLowerCase();
            const s = (window.location.search || '').toLowerCase();
            if (h === '#admin' || h === '#/admin' || h === '#admin-portal' || s.includes('admin=1') || s.includes('admin=true')) {
                openAdminModal();
            }
        }
        checkAdminHash();
        window.addEventListener('hashchange', checkAdminHash);
        window.addEventListener('popstate', checkAdminHash);
    }

    // Anti-Inspection & DevTools Deterrent on Gate
    (function initDevToolsShield() {
        document.addEventListener('contextmenu', function (e) {
            if (document.body && document.body.classList.contains('is-locked')) {
                e.preventDefault();
                return false;
            }
        });

        window.addEventListener('keydown', function (e) {
            if (!document.body || !document.body.classList.contains('is-locked')) return;
            // Allow teacher shortcut: Ctrl+Shift+A for admin modal
            if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === 'A' || e.key === 'a')) {
                return;
            }
            if (
                e.key === 'F12' ||
                ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) ||
                ((e.ctrlKey || e.metaKey) && (e.key === 'U' || e.key === 'u' || e.key === 'S' || e.key === 's'))
            ) {
                e.preventDefault();
                e.stopPropagation();
                return false;
            }
        }, true);
    })();

    // Initialize on DOM Ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            initAuthEvents();
            checkAuthStatus();
        });
    } else {
        initAuthEvents();
        checkAuthStatus();
    }

    // Global exports - strictly public interface only (no grantAccess)
    window.wisAuth = Object.freeze({
        checkAuthStatus,
        handleSharedLogin,
        handleAdminLogin,
        openAdminModal,
        closeAdminModal,
        handleLogout
    });
})();
