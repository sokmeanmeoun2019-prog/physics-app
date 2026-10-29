/**
 * WIS Physics Learning Hub - Universal Authentication Controller
 * 
 * Supports both:
 * 1. Node.js Express Backend Mode (/api/login, /api/admin/login, HttpOnly signed cookies)
 * 2. Static / Browser / Live Server Mode (Web Crypto Salted Hashing, Session Invalidation)
 * 
 * Current Configuration:
 * - Shared Access Password: @Physics2026! (Updated by Administrator)
 * - Administrator Username: admin
 * - Administrator Password: Admin@Physics2026!
 */

(function () {
    'use strict';

    const DEFAULT_INITIAL_SHARED_PW = 'Physics@2026';
    const CURRENT_CUSTOM_SHARED_PW = '@Physics2026!';
    const DEFAULT_ADMIN_USER = 'admin';
    const DEFAULT_ADMIN_PW = 'Admin@Physics2026!';
    const SALT_PEPPER = 'WIS_PHYSICS_SALT_v4_9';

    // Application Auth State
    const authState = {
        isAuthenticated: false,
        isAdmin: false,
        sharedPasswordVersion: 4,
        lastUpdated: new Date().toISOString(),
        pendingTargetHash: window.location.hash || ''
    };

    // Helper: Safely get element
    function getEl(id) {
        return document.getElementById(id);
    }

    // --- Helper: Web Crypto SHA-256 Hashing ---
    async function hashStringSHA256(str, salt) {
        try {
            if (window.crypto && window.crypto.subtle) {
                const encoder = new TextEncoder();
                const data = encoder.encode(str + (salt || SALT_PEPPER));
                const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
            }
        } catch (e) {}
        // Fallback bitwise hash if Web Crypto unavailable in non-secure context
        let h = 0;
        const combined = str + (salt || SALT_PEPPER);
        for (let i = 0; i < combined.length; i++) {
            h = ((h << 5) - h) + combined.charCodeAt(i);
            h |= 0;
        }
        return 'fallback_' + Math.abs(h).toString(16);
    }

    function getLocalSharedConfig() {
        try {
            const raw = localStorage.getItem('wis_auth_shared_config');
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return null;
    }

    function getLocalAdminConfig() {
        try {
            const raw = localStorage.getItem('wis_auth_admin_config');
            if (raw) return JSON.parse(raw);
        } catch (e) {}
        return null;
    }

    // Auto-seed active custom password from administrator's update if not yet stored
    (function seedActiveCustomPassword() {
        try {
            const current = getLocalSharedConfig();
            if (!current || !current.plainText) {
                localStorage.setItem('wis_auth_shared_config', JSON.stringify({
                    plainText: CURRENT_CUSTOM_SHARED_PW,
                    version: 4,
                    isCustom: true,
                    updatedAt: new Date().toISOString()
                }));
            }
        } catch (e) {}
    })();

    async function verifySharedPasswordClient(enteredPw) {
        if (!enteredPw) return false;
        const trimmed = enteredPw.trim();
        const storedConfig = getLocalSharedConfig();

        // If administrator changed the password, verify ONLY against the custom stored password / hash.
        // The old default password (Physics@2026) MUST NOT be accepted once a custom password is set.
        if (storedConfig && (storedConfig.isCustom !== false) && (storedConfig.plainText || storedConfig.hash)) {
            if (storedConfig.plainText && trimmed === storedConfig.plainText) {
                return true;
            }
            if (storedConfig.hash && storedConfig.salt) {
                const inputHash = await hashStringSHA256(trimmed, storedConfig.salt);
                if (inputHash === storedConfig.hash) return true;
            }
            return false; // REJECT! Never fall through to default initial password.
        }

        // If no custom config in localStorage, check the current active custom password first
        if (CURRENT_CUSTOM_SHARED_PW && trimmed === CURRENT_CUSTOM_SHARED_PW) {
            return true;
        }

        // Only when in initial default state (before any custom password has been saved)
        const defaults = [DEFAULT_INITIAL_SHARED_PW, 'physics@2026', 'Physics2026', 'physics2026'];
        return defaults.includes(trimmed);
    }

    async function verifyAdminClient(username, password) {
        if (!username || !password) return false;
        const u = username.trim().toLowerCase();
        const p = password.trim();

        const storedAdmin = getLocalAdminConfig();
        if (storedAdmin && storedAdmin.hash && storedAdmin.salt) {
            const expectedUser = (storedAdmin.username || DEFAULT_ADMIN_USER).toLowerCase();
            const inputHash = await hashStringSHA256(p, storedAdmin.salt);
            if (u === expectedUser && inputHash === storedAdmin.hash) return true;
        }

        // Default initial admin credentials
        const validUsers = ['admin', 'administrator'];
        const validPws = ['Admin@Physics2026!', 'admin@physics2026!'];
        return (validUsers.includes(u) && validPws.includes(p));
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
            document.body.classList.add('is-locked');
            const pwInput = getEl('shared-password-input');
            if (pwInput) {
                setTimeout(() => pwInput.focus(), 150);
            }
        } else {
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

    function grantAccess() {
        authState.isAuthenticated = true;
        sessionStorage.setItem('wis_student_session', 'authenticated');
        sessionStorage.setItem('wis_session_version', String(authState.sharedPasswordVersion || 4));
        const pwInput = getEl('shared-password-input');
        if (pwInput) pwInput.value = '';
        hideAlert(getEl('shared-login-alert'));
        setLockedState(false);
    }

    function grantAdminAccess() {
        authState.isAdmin = true;
        authState.isAuthenticated = true;
        sessionStorage.setItem('wis_admin_session', 'authenticated');
        sessionStorage.setItem('wis_student_session', 'authenticated');
        sessionStorage.setItem('wis_session_version', String(authState.sharedPasswordVersion || 4));
        const adminPwInput = getEl('admin-password-input');
        if (adminPwInput) adminPwInput.value = '';
        hideAlert(getEl('admin-login-alert'));
        showAdminDashboardView();
        setLockedState(false);
    }

    // --- Check Current Authentication Status ---
    async function checkAuthStatus() {
        let checkedOnServer = false;
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
                authState.sharedPasswordVersion = data.version || 4;
                authState.lastUpdated = data.lastUpdated || null;
                checkedOnServer = true;
            }
        } catch (e) {}

        if (!checkedOnServer) {
            // Local client fallback
            const localConfig = getLocalSharedConfig();
            if (localConfig) {
                authState.sharedPasswordVersion = localConfig.version || 4;
                authState.lastUpdated = localConfig.updatedAt || null;
            } else {
                authState.sharedPasswordVersion = 4;
                authState.lastUpdated = null;
            }

            const studentSession = sessionStorage.getItem('wis_student_session');
            const adminSession = sessionStorage.getItem('wis_admin_session');
            const sessionVer = parseInt(sessionStorage.getItem('wis_session_version'), 10) || 4;

            if (sessionVer !== authState.sharedPasswordVersion) {
                // Session was invalidated by password update
                sessionStorage.removeItem('wis_student_session');
                authState.isAuthenticated = false;
            } else {
                authState.isAuthenticated = Boolean(studentSession || adminSession);
            }
            authState.isAdmin = Boolean(adminSession);
        }

        updateAdminStatusUI();
        setLockedState(!authState.isAuthenticated);
    }

    function updateAdminStatusUI() {
        const adminPwVersionPill = getEl('admin-pw-version-pill');
        const adminPwUpdatedText = getEl('admin-pw-updated-text');
        const navAdminBtn = getEl('nav-admin-btn');

        const storedConfig = getLocalSharedConfig();
        const isCustom = Boolean(storedConfig && storedConfig.isCustom !== false);

        if (adminPwVersionPill) {
            adminPwVersionPill.textContent = isCustom 
                ? `Version ${authState.sharedPasswordVersion || 4} (Custom Password Active)` 
                : `Version ${authState.sharedPasswordVersion || 4} (Default: Physics@2026)`;
        }
        if (adminPwUpdatedText) {
            adminPwUpdatedText.textContent = `Last Changed: ${formatDate(authState.lastUpdated)}`;
        }
        if (navAdminBtn) {
            navAdminBtn.title = authState.isAdmin ? 'Administrator Settings (Authenticated)' : 'Administrator Login';
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

        // Enforce that old password (Physics@2026) is strictly rejected once a custom password is set
        const storedConfig = getLocalSharedConfig();
        const isCustomActive = Boolean(storedConfig && storedConfig.isCustom !== false);
        if (isCustomActive && (password === DEFAULT_INITIAL_SHARED_PW || password.toLowerCase() === 'physics@2026' || password === 'Physics2026')) {
            showAlert(alertEl, alertTextEl, 'Incorrect password. The previous password has been revoked by the administrator.', true);
            if (inputEl) inputEl.select();
            return;
        }

        hideAlert(alertEl);
        if (submitBtn) submitBtn.disabled = true;
        if (submitBtnText) submitBtnText.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Checking password...';

        let authenticated = false;
        let errorMessage = 'Incorrect password. Please try again.';

        // 1. Attempt Server API (if server is running)
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 1500);
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
                if (data.success) authenticated = true;
            } else if (res.status === 401 || res.status === 429) {
                const data = await res.json().catch(() => ({}));
                errorMessage = data.message || 'Incorrect password. Please try again.';
            }
        } catch (netErr) {}

        // 2. Client Mode Fallback (for Live Server, file://, static hosts)
        if (!authenticated) {
            const clientValid = await verifySharedPasswordClient(password);
            if (clientValid) {
                authenticated = true;
                // Auto-sync server in background if server was running with outdated credentials
                try {
                    fetch('/api/admin/change-password', {
                        method: 'POST',
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            newPassword: password,
                            confirmPassword: password,
                            adminUsername: DEFAULT_ADMIN_USER,
                            adminPassword: DEFAULT_ADMIN_PW
                        })
                    }).catch(() => {});
                } catch (e) {}
            }
        }

        if (authenticated) {
            grantAccess();
        } else {
            showAlert(alertEl, alertTextEl, errorMessage, true);
            if (inputEl) inputEl.select();
        }

        if (submitBtn) submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.innerHTML = '<i class="fa-solid fa-arrow-right-to-bracket"></i> Enter Website';
    }

    // --- Administrator Login Handler ---
    async function handleAdminLogin() {
        const userInput = getEl('admin-username-input');
        const pwInput = getEl('admin-password-input');
        const alertEl = getEl('admin-login-alert');
        const alertTextEl = getEl('admin-login-alert-text');
        const submitBtn = getEl('admin-login-btn');
        const submitBtnText = getEl('admin-login-btn-text');

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
        let errorMessage = 'Invalid administrator credentials.';

        // 1. Attempt Server API
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 1500);
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
            } else if (res.status === 401 || res.status === 429) {
                const data = await res.json().catch(() => ({}));
                errorMessage = data.message || 'Invalid administrator credentials.';
            }
        } catch (netErr) {}

        // 2. Client Mode Fallback (Live Server, file://, static hosts)
        if (!authenticated) {
            const clientAdminValid = await verifyAdminClient(username, password);
            if (clientAdminValid) authenticated = true;
        }

        if (authenticated) {
            // Keep admin credentials in sessionStorage for server authorization failsafe
            sessionStorage.setItem('wis_admin_auth_user', username);
            sessionStorage.setItem('wis_admin_auth_pw', password);
            grantAdminAccess();
        } else {
            showAlert(alertEl, alertTextEl, errorMessage, true);
            if (pwInput) pwInput.select();
        }

        if (submitBtn) submitBtn.disabled = false;
        if (submitBtnText) submitBtnText.innerHTML = '<i class="fa-solid fa-shield-halved"></i> Authenticate as Administrator';
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
        const adminPassword = sessionStorage.getItem('wis_admin_auth_pw') || DEFAULT_ADMIN_PW;

        // 1. Send update to Server API with full auth failsafe
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2500);
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
                    authState.sharedPasswordVersion = data.version;
                }
            }
        } catch (e) {}

        // 2. Persist client-side salted hash & plainText verification
        const salt = Math.random().toString(36).substring(2) + Date.now().toString(36);
        const newHash = await hashStringSHA256(newPassword, salt);
        const newVersion = (authState.sharedPasswordVersion || 4) + 1;
        const updatedAt = new Date().toISOString();

        try {
            localStorage.setItem('wis_auth_shared_config', JSON.stringify({
                hash: newHash,
                salt: salt,
                plainText: newPassword,
                version: newVersion,
                updatedAt: updatedAt,
                isCustom: true
            }));
        } catch (e) {}

        if (invalidateSessions) {
            sessionStorage.removeItem('wis_student_session');
            sessionStorage.setItem('wis_session_version', String(newVersion));
        }

        authState.sharedPasswordVersion = newVersion;
        authState.lastUpdated = updatedAt;
        updateAdminStatusUI();

        const successMsg = `Shared password changed successfully! The new password is required for all future visits, and the previous password has been revoked. (Version: ${newVersion})`;

        showAlert(alertEl, alertTextEl, successMsg, false);
        if (newPwInput) newPwInput.value = '';
        if (confirmPwInput) confirmPwInput.value = '';

        if (saveBtn) saveBtn.disabled = false;
        if (saveBtnText) saveBtnText.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> Save and Apply New Shared Password';
    }

    // --- Admin Reset Shared Password Back to Default ---
    async function handleAdminResetDefaultPw() {
        const alertEl = getEl('admin-change-pw-alert');
        const alertTextEl = getEl('admin-change-pw-alert-text');
        const resetBtn = getEl('admin-reset-pw-btn');

        if (!confirm('Are you sure you want to reset the shared website access password back to the default (Physics@2026)?')) {
            return;
        }

        if (resetBtn) resetBtn.disabled = true;

        const adminToken = sessionStorage.getItem('wis_admin_token') || '';
        const adminUsername = sessionStorage.getItem('wis_admin_auth_user') || DEFAULT_ADMIN_USER;
        const adminPassword = sessionStorage.getItem('wis_admin_auth_pw') || DEFAULT_ADMIN_PW;

        try {
            await fetch('/api/admin/reset-password', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': adminToken ? `Bearer ${adminToken}` : ''
                },
                body: JSON.stringify({ adminToken, adminUsername, adminPassword })
            });
        } catch (e) {}

        // Remove custom shared config from client storage
        localStorage.removeItem('wis_auth_shared_config');
        const newVersion = (authState.sharedPasswordVersion || 4) + 1;
        authState.sharedPasswordVersion = newVersion;
        authState.lastUpdated = new Date().toISOString();

        sessionStorage.removeItem('wis_student_session');
        sessionStorage.setItem('wis_session_version', String(newVersion));

        updateAdminStatusUI();
        showAlert(alertEl, alertTextEl, 'Shared access password has been reset to default (Physics@2026).', false);

        if (resetBtn) resetBtn.disabled = false;
    }

    // --- Admin Change Administrator Password Handler ---
    async function handleAdminChangeSelfPw() {
        const currentInput = getEl('current-admin-pw-input');
        const newInput = getEl('new-admin-pw-input');
        const confirmInput = getEl('confirm-admin-pw-input');
        const alertEl = getEl('admin-self-pw-alert');
        const alertTextEl = getEl('admin-self-pw-alert-text');

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
            await fetch('/api/admin/change-admin-password', {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ currentPassword, newAdminPassword, confirmAdminPassword })
            });
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
    }

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

    // Global exports
    window.wisAuth = {
        checkAuthStatus,
        handleSharedLogin,
        handleAdminLogin,
        openAdminModal,
        closeAdminModal,
        handleLogout,
        grantAccess,
        grantAdminAccess,
        handleAdminResetDefaultPw
    };
})();
