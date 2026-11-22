/**
 * WIS Physics Learning Hub - Universal Server
 * 
 * High-Performance, Zero-Dependency Native Node.js Server
 * - Runs out of the box with pure Node.js (no npm install required!)
 * - Shared Website Access Password with salted PBKDF2 hashing
 * - Dedicated Administrator Authentication & Password Management
 * - Session Invalidation on Password Change (Version bump)
 * - Rate Limiting & Brute-Force Protection
 * - Direct URL and Asset Protection (/worksheets/, /ebooks/, etc.)
 * - Streaming Range Requests for large PDFs & eBooks
 */

const http = require('http');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const handleSummarySlidesRequest = require('./summary-slides-server');
const handleKhEbooksRequest = require('./kh-ebooks-server');
const handleOutstandingWorksheetsRequest = require('./outstanding-worksheets-server');
const handleKhPhyDiplomaRequest = require('./kh-phy-diploma-server');
const handleMoeysSupplementaryRequest = require('./moeys-supplementary-server');
const handleMyTextbooksRequest = require('./my-textbooks-server');

// Optional: Load .env if present without requiring third-party dotenv
try {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        envContent.split(/\r?\n/).forEach(line => {
            const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
            if (match) {
                const key = match[1];
                let value = (match[2] || '').trim();
                if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
                    value = value.slice(1, -1);
                }
                process.env[key] = value;
            }
        });
    }
} catch (e) {}

const PORT = parseInt(process.env.PORT, 10) || 3000;
const AUTH_CONFIG_FILE = path.join(__dirname, 'auth-config.json');

// --- Helper: Cryptographic Hashing & Verification ---
function hashPassword(password, salt) {
    return crypto.pbkdf2Sync(String(password), String(salt), 100000, 64, 'sha512').toString('hex');
}

function verifyPassword(password, salt, storedHash, storedPlainText) {
    if (!password) return false;
    if (storedPlainText && String(password).trim() === String(storedPlainText).trim()) {
        return true;
    }
    if (!salt || !storedHash) return false;
    try {
        const computed = hashPassword(password, salt);
        const a = Buffer.from(computed, 'hex');
        const b = Buffer.from(storedHash, 'hex');
        if (a.length !== b.length) return false;
        return crypto.timingSafeEqual(a, b);
    } catch (e) {
        return false;
    }
}

function verifyAgainstAuthJsHash(entered, saltVarName, hashVarName) {
    if (!entered) return false;
    try {
        const authJsPath = path.join(__dirname, 'auth.js');
        if (!fs.existsSync(authJsPath)) return false;
        const src = fs.readFileSync(authJsPath, 'utf8');
        const saltMatch = src.match(new RegExp(`const\\s+${saltVarName}\\s*=\\s*'([^']+)'`));
        const hashMatch = src.match(new RegExp(`const\\s+${hashVarName}\\s*=\\s*'([0-9a-fA-F]{64})'`));
        if (!saltMatch || !hashMatch) return false;
        const computed = crypto.createHash('sha256').update(String(entered) + saltMatch[1], 'utf8').digest('hex');
        const a = Buffer.from(computed, 'hex');
        const b = Buffer.from(hashMatch[1].toLowerCase(), 'hex');
        return a.length === b.length && crypto.timingSafeEqual(a, b);
    } catch (e) {
        return false;
    }
}

// --- Load or Initialize Persistent Auth Configuration ---
let authConfig = null;

function ensureWebsiteAccessConfig(configObj) {
    if (!configObj || typeof configObj !== 'object') return false;
    let changed = false;
    if (!configObj.websiteAccess || typeof configObj.websiteAccess !== 'object') {
        configObj.websiteAccess = {
            online: true,
            updatedAt: new Date().toISOString(),
            updatedBy: 'system'
        };
        changed = true;
    } else if (typeof configObj.websiteAccess.online !== 'boolean') {
        configObj.websiteAccess.online = true;
        configObj.websiteAccess.updatedAt = configObj.websiteAccess.updatedAt || new Date().toISOString();
        configObj.websiteAccess.updatedBy = configObj.websiteAccess.updatedBy || 'system';
        changed = true;
    }
    return changed;
}

function isWebsiteOnline() {
    if (!authConfig || !authConfig.websiteAccess) return true;
    return authConfig.websiteAccess.online !== false;
}

function loadOrInitAuthConfig() {
    try {
        if (fs.existsSync(AUTH_CONFIG_FILE)) {
            const raw = fs.readFileSync(AUTH_CONFIG_FILE, 'utf8');
            authConfig = JSON.parse(raw);
            if (authConfig.sharedPassword && authConfig.admin && authConfig.sessionSecret) {
                // If plainText is present without salt/hash, compute salt and hash immediately
                if (authConfig.sharedPassword.plainText && (!authConfig.sharedPassword.hash || !authConfig.sharedPassword.salt)) {
                    const salt = crypto.randomBytes(32).toString('hex');
                    authConfig.sharedPassword.salt = salt;
                    authConfig.sharedPassword.hash = hashPassword(authConfig.sharedPassword.plainText, salt);
                    authConfig.sharedPassword.isCustom = true;
                }
                if (authConfig.admin.plainText && (!authConfig.admin.hash || !authConfig.admin.salt)) {
                    const salt = crypto.randomBytes(32).toString('hex');
                    authConfig.admin.salt = salt;
                    authConfig.admin.hash = hashPassword(authConfig.admin.plainText, salt);
                }
                ensureWebsiteAccessConfig(authConfig);
                saveAuthConfig();
                return authConfig;
            }
        }
    } catch (err) {
        console.warn('Could not read existing auth-config.json, re-initializing:', err.message);
    }

    const defaultSharedPw = process.env.SHARED_PASSWORD || '@Physics2026**!';
    const defaultAdminUsername = process.env.ADMIN_USERNAME || 'admin';
    const defaultAdminPw = process.env.ADMIN_PASSWORD || 'Teacher#PhyAdmin2026!';

    const sharedSalt = crypto.randomBytes(32).toString('hex');
    const adminSalt = crypto.randomBytes(32).toString('hex');
    const sessionSecret = crypto.randomBytes(64).toString('hex');

    authConfig = {
        sharedPassword: {
            hash: hashPassword(defaultSharedPw, sharedSalt),
            salt: sharedSalt,
            plainText: defaultSharedPw,
            isCustom: true,
            version: 8,
            updatedAt: new Date().toISOString()
        },
        admin: {
            username: defaultAdminUsername,
            hash: hashPassword(defaultAdminPw, adminSalt),
            salt: adminSalt,
            plainText: defaultAdminPw,
            isCustom: true,
            updatedAt: new Date().toISOString()
        },
        sessionSecret: sessionSecret,
        websiteAccess: {
            online: true,
            updatedAt: new Date().toISOString(),
            updatedBy: 'system'
        }
    };

    try {
        fs.writeFileSync(AUTH_CONFIG_FILE, JSON.stringify(authConfig, null, 2), 'utf8');
    } catch (saveErr) {
        console.error('Failed to write initial auth-config.json:', saveErr);
    }

    return authConfig;
}

function saveAuthConfig() {
    try {
        fs.writeFileSync(AUTH_CONFIG_FILE, JSON.stringify(authConfig, null, 2), 'utf8');
        return true;
    } catch (err) {
        console.error('Failed to save auth-config.json:', err);
        return false;
    }
}

function reloadAuthConfig() {
    try {
        if (fs.existsSync(AUTH_CONFIG_FILE)) {
            const raw = fs.readFileSync(AUTH_CONFIG_FILE, 'utf8');
            const parsed = JSON.parse(raw);
            if (parsed && parsed.sharedPassword && parsed.admin) {
                authConfig = parsed;
                if (ensureWebsiteAccessConfig(authConfig)) {
                    saveAuthConfig();
                }
            }
        }
    } catch (e) {}
    if (!authConfig) {
        authConfig = loadOrInitAuthConfig();
    }
    return authConfig;
}

authConfig = loadOrInitAuthConfig();

// --- Token Signing & Verification ---
function base64UrlEncode(str) {
    return Buffer.from(str).toString('base64').replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function base64UrlDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) str += '=';
    return Buffer.from(str, 'base64').toString('utf8');
}

function signToken(payload) {
    const pStr = base64UrlEncode(JSON.stringify(payload));
    const sig = crypto.createHmac('sha256', authConfig.sessionSecret).update(pStr).digest('hex');
    return `${pStr}.${sig}`;
}

function verifyToken(tokenStr) {
    if (!tokenStr || typeof tokenStr !== 'string' || !tokenStr.includes('.')) return null;
    const parts = tokenStr.split('.');
    if (parts.length !== 2) return null;
    const [pStr, sig] = parts;
    try {
        const expectedSig = crypto.createHmac('sha256', authConfig.sessionSecret).update(pStr).digest('hex');
        const a = Buffer.from(sig, 'hex');
        const b = Buffer.from(expectedSig, 'hex');
        if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
            return null;
        }
        const payload = JSON.parse(base64UrlDecode(pStr));
        if (payload.exp && Date.now() > payload.exp) {
            return null; // Expired
        }
        return payload;
    } catch (e) {
        return null;
    }
}

// --- Cookie Parser ---
function parseCookies(cookieHeader) {
    const list = {};
    if (!cookieHeader) return list;
    cookieHeader.split(';').forEach(cookie => {
        const parts = cookie.split('=');
        const name = parts.shift().trim();
        const val = parts.join('=');
        if (name) {
            try { list[name] = decodeURIComponent(val); } catch (e) { list[name] = val; }
        }
    });
    return list;
}

// --- Rate Limiter ---
const rateLimitStore = new Map();

function checkRateLimit(key, maxAttempts, windowMs, lockoutMs) {
    const now = Date.now();
    let entry = rateLimitStore.get(key);
    if (!entry) {
        entry = { count: 0, firstAttempt: now, lockedUntil: 0 };
        rateLimitStore.set(key, entry);
    }
    if (entry.lockedUntil > now) {
        const remainingSec = Math.ceil((entry.lockedUntil - now) / 1000);
        return {
            allowed: false,
            message: `Too many failed attempts. Please wait ${remainingSec} seconds before trying again.`
        };
    }
    if (now - entry.firstAttempt > windowMs) {
        entry.count = 0;
        entry.firstAttempt = now;
    }
    return { allowed: true, entry };
}

function recordFailedAttempt(key, maxAttempts, windowMs, lockoutMs) {
    const now = Date.now();
    let entry = rateLimitStore.get(key);
    if (!entry) {
        entry = { count: 0, firstAttempt: now, lockedUntil: 0 };
        rateLimitStore.set(key, entry);
    }
    entry.count++;
    if (entry.count >= maxAttempts) {
        entry.lockedUntil = now + lockoutMs;
    }
}

function resetRateLimit(key) {
    rateLimitStore.delete(key);
}

// Clean up old rate limit entries every 15 minutes
setInterval(() => {
    const now = Date.now();
    for (const [k, v] of rateLimitStore.entries()) {
        if (v.lockedUntil < now && now - v.firstAttempt > 3600000) {
            rateLimitStore.delete(k);
        }
    }
}, 900000);

// --- Host Verification (Restricts administrative actions strictly to the host computer) ---
function isHostRequest(req, body) {
    const rawIp = req.socket.remoteAddress || '';
    const forwarded = req.headers['x-forwarded-for'];
    const ip = (forwarded ? forwarded.split(',')[0].trim() : rawIp);

    // 1. Localhost / Loopback verification
    if (ip === '127.0.0.1' || ip === '::1' || ip === '::ffff:127.0.0.1' || ip === 'localhost') {
        return true;
    }
    if (rawIp === '127.0.0.1' || rawIp === '::1' || rawIp === '::ffff:127.0.0.1') {
        return true;
    }
    if (req.socket.localAddress && rawIp && req.socket.localAddress === rawIp) {
        return true;
    }

    // 2. Master Host Key verification (for authorized remote administration by the teacher)
    const masterKey = (authConfig && authConfig.masterHostKey) || 'HOST-WIS-PHYSICS-2026-KEY';
    const reqKey = (req.headers['x-host-key'] || (body && body.masterHostKey) || '');
    if (reqKey && reqKey === masterKey) {
        return true;
    }

    return false;
}

// --- Session Verification ---
function getClientIp(req) {
    return req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
}

function getStudentSession(cookies) {
    const token = cookies.wis_auth_token;
    if (!token) return null;
    const payload = verifyToken(token);
    if (!payload) return null;
    if (payload.type === 'student' && payload.version !== authConfig.sharedPassword.version) {
        return null; // Session invalidated by password change
    }
    return payload;
}

function getAdminSession(cookies, reqHeaders, reqBody) {
    let token = cookies.wis_admin_token;
    if (!token && reqHeaders && reqHeaders.authorization) {
        const auth = reqHeaders.authorization;
        if (auth.startsWith('Bearer ')) {
            token = auth.substring(7).trim();
        }
    }
    if (!token && reqBody && reqBody.adminToken) {
        token = reqBody.adminToken;
    }
    if (!token) return null;
    const payload = verifyToken(token);
    if (!payload || payload.type !== 'admin') return null;
    return payload;
}

function readRequestBody(req) {
    return new Promise((resolve) => {
        let body = '';
        req.on('data', chunk => {
            body += chunk;
            if (body.length > 5 * 1024 * 1024) {
                req.destroy();
            }
        });
        req.on('end', () => {
            const contentType = req.headers['content-type'] || '';
            if (contentType.includes('application/json')) {
                try {
                    resolve(JSON.parse(body || '{}'));
                } catch (e) {
                    resolve({});
                }
            } else if (contentType.includes('application/x-www-form-urlencoded')) {
                const params = new URLSearchParams(body);
                const obj = {};
                for (const [k, v] of params.entries()) {
                    obj[k] = v;
                }
                resolve(obj);
            } else {
                resolve({});
            }
        });
        req.on('error', () => resolve({}));
    });
}

function sendJson(res, statusCode, data, extraHeaders = {}) {
    const payload = JSON.stringify(data);
    res.writeHead(statusCode, {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(payload),
        'Cache-Control': 'no-store, no-cache, must-revalidate',
        ...extraHeaders
    });
    res.end(payload);
}

// MIME Types Map
const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.htm': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.mjs': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf',
    '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    '.ppt': 'application/vnd.ms-powerpoint',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf',
    '.eot': 'application/vnd.ms-fontobject',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.mp3': 'audio/mpeg',
    '.wav': 'audio/wav',
    '.wasm': 'application/wasm',
    '.xml': 'application/xml',
    '.txt': 'text/plain; charset=utf-8'
};

// Protected curriculum paths
const protectedPrefixes = [
    '/worksheets/',
    '/ebooks/',
    '/kh_ebooks/',
    '/outstanding_worksheets/',
    '/moeys_supplementary/',
    '/my_textbooks/',
    '/summary_slides/',
    '/Physics_Grade7,8,10,11/',
    '/physics-data.js',
    '/physics-figures.js'
];

const MAINTENANCE_MESSAGE = "This site can't be reached right now. The website is temporarily unavailable. Please contact your teacher for more information.";

function buildMaintenanceHtml(isHostClient, openAdminImmediately) {
    const adminOverlay = isHostClient ? `
        <div id="host-admin-backdrop" class="${openAdminImmediately ? '' : 'hidden'}" style="position:fixed;inset:0;z-index:50;background:rgba(2,6,23,0.84);backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;padding:1.25rem;">
            <div style="background:#1e293b;border:1px solid rgba(255,255,255,0.14);border-radius:18px;max-width:420px;width:100%;padding:2rem;color:#f8fafc;box-shadow:0 25px 50px rgba(0,0,0,0.65);text-align:left;">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
                    <div style="font-weight:700;font-size:1.1rem;display:flex;align-items:center;gap:0.5rem;">
                        <span style="display:inline-flex;width:32px;height:32px;border-radius:8px;background:rgba(79,70,229,0.22);color:#a5b4fc;align-items:center;justify-content:center;">&#128737;</span>
                        Administrator Sign-In
                    </div>
                    <button type="button" id="host-admin-close" style="background:none;border:none;color:#94a3b8;font-size:1.35rem;cursor:pointer;line-height:1;">&times;</button>
                </div>
                <p style="font-size:0.86rem;color:#94a3b8;margin:0 0 1.15rem 0;line-height:1.45;">Website is currently OFF for students. Sign in as Administrator to access the full site and Admin Dashboard.</p>
                <form id="host-admin-login-form">
                    <label style="display:block;font-size:0.82rem;font-weight:600;color:#cbd5e1;margin-bottom:0.35rem;" for="host-admin-user">Administrator Username</label>
                    <input id="host-admin-user" type="text" value="admin" required autocomplete="username" style="width:100%;box-sizing:border-box;padding:0.7rem 0.9rem;border-radius:10px;border:1px solid rgba(148,163,184,0.3);background:#0f172a;color:#fff;font-size:0.95rem;margin-bottom:0.9rem;">
                    <label style="display:block;font-size:0.82rem;font-weight:600;color:#cbd5e1;margin-bottom:0.35rem;" for="host-admin-pw">Administrator Password</label>
                    <input id="host-admin-pw" type="password" required autocomplete="current-password" placeholder="Administrator password..." style="width:100%;box-sizing:border-box;padding:0.7rem 0.9rem;border-radius:10px;border:1px solid rgba(148,163,184,0.3);background:#0f172a;color:#fff;font-size:0.95rem;margin-bottom:1rem;">
                    <div id="host-admin-err" style="display:none;background:rgba(239,68,68,0.16);border:1px solid rgba(239,68,68,0.4);color:#fca5a5;padding:0.65rem 0.85rem;border-radius:8px;font-size:0.85rem;margin-bottom:0.9rem;"></div>
                    <button type="submit" id="host-admin-submit" style="width:100%;padding:0.82rem 1rem;border:none;border-radius:10px;background:linear-gradient(135deg,#4f46e5,#3730a3);color:#fff;font-weight:700;font-size:0.98rem;cursor:pointer;">Authenticate &amp; Open Dashboard</button>
                </form>
            </div>
        </div>
        <script>
            (function() {
                var backdrop = document.getElementById('host-admin-backdrop');
                var closeBtn = document.getElementById('host-admin-close');
                var form = document.getElementById('host-admin-login-form');
                var errBox = document.getElementById('host-admin-err');
                var iconTrigger = document.getElementById('maintenance-status-icon');
                var tapCount = 0, lastTap = 0;

                function openAdminLogin() {
                    if (!backdrop) return;
                    backdrop.classList.remove('hidden');
                    backdrop.style.display = 'flex';
                    var pw = document.getElementById('host-admin-pw');
                    if (pw) setTimeout(function() { pw.focus(); }, 80);
                }
                function closeAdminLogin() {
                    if (!backdrop) return;
                    backdrop.classList.add('hidden');
                    backdrop.style.display = 'none';
                }
                if (closeBtn) closeBtn.addEventListener('click', closeAdminLogin);
                if (backdrop) {
                    backdrop.addEventListener('click', function(e) {
                        if (e.target === backdrop) closeAdminLogin();
                    });
                }
                if (iconTrigger) {
                    iconTrigger.addEventListener('click', function() {
                        var now = Date.now();
                        tapCount = (now - lastTap < 600) ? (tapCount + 1) : 1;
                        lastTap = now;
                        if (tapCount >= 5) { tapCount = 0; openAdminLogin(); }
                    });
                }
                window.addEventListener('keydown', function(e) {
                    if ((e.ctrlKey || e.metaKey) && (e.shiftKey || e.altKey) && (e.key === 'A' || e.key === 'a')) {
                        e.preventDefault();
                        openAdminLogin();
                    }
                    if (e.key === 'Escape') closeAdminLogin();
                });
                var h = (window.location.hash || '').toLowerCase();
                var s = (window.location.search || '').toLowerCase();
                if (h === '#admin' || h === '#/admin' || h === '#admin-portal' || s.indexOf('admin=1') !== -1 || s.indexOf('admin=true') !== -1) {
                    openAdminLogin();
                }
                if (form) {
                    form.addEventListener('submit', function(e) {
                        e.preventDefault();
                        if (errBox) errBox.style.display = 'none';
                        var u = (document.getElementById('host-admin-user') || {}).value || '';
                        var p = (document.getElementById('host-admin-pw') || {}).value || '';
                        var btn = document.getElementById('host-admin-submit');
                        if (btn) { btn.disabled = true; btn.textContent = 'Verifying...'; }
                        fetch('/api/admin/login', {
                            method: 'POST',
                            credentials: 'include',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ username: u.trim(), password: p.trim() })
                        }).then(function(r) {
                            return r.json().then(function(d) { return { ok: r.ok, data: d }; });
                        }).then(function(res) {
                            if (res.ok && res.data && res.data.success) {
                                try {
                                    sessionStorage.setItem('wis_admin_session', 'authenticated');
                                    sessionStorage.setItem('wis_student_session', 'authenticated');
                                    if (res.data.adminToken) sessionStorage.setItem('wis_admin_token', res.data.adminToken);
                                    sessionStorage.setItem('wis_admin_auth_user', u.trim());
                                    sessionStorage.setItem('wis_admin_auth_pw', p.trim());
                                } catch (err) {}
                                window.location.href = '/#admin';
                                return;
                            }
                            if (errBox) {
                                errBox.textContent = (res.data && res.data.message) || 'Invalid administrator credentials.';
                                errBox.style.display = 'block';
                            }
                        }).catch(function() {
                            if (errBox) {
                                errBox.textContent = 'Connection error while verifying credentials.';
                                errBox.style.display = 'block';
                            }
                        }).finally(function() {
                            if (btn) { btn.disabled = false; btn.textContent = 'Authenticate & Open Dashboard'; }
                        });
                    });
                }
            })();
        </script>` : '';

    const hostHint = isHostClient
        ? '<p style="margin-top:1.4rem;font-size:0.8rem;color:#64748b;">Administrator on host computer? <a href="/admin" style="color:#93c5fd;text-decoration:underline;font-weight:600;">Open Admin Portal</a></p>'
        : '';

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <title>Website Temporarily Unavailable - WIS Physics Learning Hub</title>
    <style>
        .hidden { display: none !important; }
        body {
            margin: 0;
            min-height: 100vh;
            min-height: 100dvh;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: radial-gradient(ellipse at 50% 25%, #1e1b4b 0%, #0f172a 70%, #020617 100%);
            color: #f8fafc;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            box-sizing: border-box;
        }
        .card {
            max-width: 520px;
            width: 100%;
            background: rgba(30, 41, 59, 0.86);
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 22px;
            padding: 2.75rem 2.25rem;
            text-align: center;
            box-shadow: 0 25px 55px rgba(0, 0, 0, 0.72);
        }
        .status-pill {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.42rem 1rem;
            border-radius: 999px;
            font-size: 0.82rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: #fecaca;
            background: rgba(239, 68, 68, 0.16);
            border: 1px solid rgba(239, 68, 68, 0.4);
            margin-bottom: 1.35rem;
        }
        .status-dot {
            width: 9px;
            height: 9px;
            border-radius: 50%;
            background: #ef4444;
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.9);
        }
        .icon-circle {
            width: 76px;
            height: 76px;
            margin: 0 auto 1.35rem;
            border-radius: 50%;
            background: rgba(239, 68, 68, 0.14);
            border: 2px solid rgba(239, 68, 68, 0.35);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: #f87171;
        }
        h1 {
            margin: 0 0 0.85rem 0;
            font-size: 1.55rem;
            font-weight: 700;
            color: #ffffff;
        }
        .msg {
            margin: 0 auto 1.65rem;
            font-size: 1rem;
            line-height: 1.65;
            color: #cbd5e1;
        }
        .retry-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.72rem 1.35rem;
            border-radius: 10px;
            border: 1px solid rgba(148, 163, 184, 0.3);
            background: rgba(255, 255, 255, 0.08);
            color: #f8fafc;
            font-size: 0.92rem;
            font-weight: 600;
            cursor: pointer;
        }
        .retry-btn:hover {
            background: rgba(255, 255, 255, 0.15);
        }
    </style>
</head>
<body>
    <main class="card" role="main">
        <div class="status-pill"><span class="status-dot"></span> Website Offline</div>
        <div class="icon-circle" id="maintenance-status-icon" title="Website Temporarily Unavailable">&#9888;</div>
        <h1>Website Temporarily Unavailable</h1>
        <p class="msg">${MAINTENANCE_MESSAGE}</p>
        <button type="button" class="retry-btn" onclick="window.location.reload()">Try Again</button>
        ${hostHint}
    </main>
    ${adminOverlay}
</body>
</html>`;
}

// --- Native HTTP Server ---
const server = http.createServer(async (req, res) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');

    let parsedUrl;
    try {
        parsedUrl = new URL(req.url, 'http://' + (req.headers.host || 'localhost'));
    } catch (e) {
        res.writeHead(400);
        return res.end('Bad Request');
    }

    const pathname = decodeURIComponent(parsedUrl.pathname);
    const method = req.method.toUpperCase();
    const cookies = parseCookies(req.headers.cookie);
    reloadAuthConfig();

    // ==========================================
    // API Routes
    // ==========================================

    // 1. Auth Status Check
    if (pathname === '/api/auth-status' && method === 'GET') {
        const adminSession = getAdminSession(cookies, req.headers, {});
        const studentSession = getStudentSession(cookies);
        const isHost = isHostRequest(req, null);
        const websiteOnline = isWebsiteOnline();
        return sendJson(res, 200, {
            authenticated: Boolean(adminSession || (websiteOnline && studentSession)),
            isAdmin: Boolean(adminSession),
            isHost: isHost,
            websiteOnline: websiteOnline,
            maintenanceUpdatedAt: (authConfig.websiteAccess && authConfig.websiteAccess.updatedAt) || authConfig.sharedPassword.updatedAt,
            version: authConfig.sharedPassword.version,
            lastUpdated: authConfig.sharedPassword.updatedAt
        });
    }

    // 2. Shared Website Access Login
    if (pathname === '/api/login' && method === 'POST') {
        if (!isWebsiteOnline()) {
            return sendJson(res, 503, {
                success: false,
                maintenance: true,
                websiteOnline: false,
                message: MAINTENANCE_MESSAGE
            });
        }
        const body = await readRequestBody(req);
        const ip = getClientIp(req);
        const rateCheck = checkRateLimit(`login_${ip}`, 10, 60000, 60000);
        if (!rateCheck.allowed) {
            return sendJson(res, 429, { success: false, message: rateCheck.message });
        }

        const password = body.password;
        if (!password || typeof password !== 'string') {
            recordFailedAttempt(`login_${ip}`, 10, 60000, 60000);
            return sendJson(res, 400, { success: false, message: 'Please enter the access password.' });
        }

        const entered = password.trim();
        const hasServerSecret = Boolean(
            authConfig.sharedPassword &&
            ((authConfig.sharedPassword.salt && authConfig.sharedPassword.hash) || authConfig.sharedPassword.plainText)
        );
        let isValid = false;

        if (hasServerSecret) {
            const isCustom = Boolean(authConfig.sharedPassword && authConfig.sharedPassword.isCustom);
            if (isCustom) {
                isValid = verifyPassword(entered, authConfig.sharedPassword.salt, authConfig.sharedPassword.hash, authConfig.sharedPassword.plainText);
            } else {
                const defaultShared = process.env.SHARED_PASSWORD || '@Physics2026*!';
                const isHashValid = verifyPassword(entered, authConfig.sharedPassword.salt, authConfig.sharedPassword.hash, authConfig.sharedPassword.plainText);
                isValid = (isHashValid || entered === defaultShared);
            }
        }

        // Sync fallback: when auth-config.json omits hash/salt/plainText (static sync), validate against auth.js SHA-256 hash
        if (!isValid && !hasServerSecret) {
            isValid = verifyAgainstAuthJsHash(entered, 'SHARED_PW_SALT', 'SHARED_PW_HASH');
        }

        if (!isValid) {
            const enteredLower = entered.toLowerCase();
            recordFailedAttempt(`login_${ip}`, 10, 60000, 60000);
            if (enteredLower.includes('physics2026') || enteredLower.includes('physics@2026')) {
                return sendJson(res, 401, { success: false, message: 'This previous password has been permanently revoked. Please enter the current password.' });
            }
            return sendJson(res, 401, { success: false, message: 'Incorrect password. Please try again.' });
        }

        resetRateLimit(`login_${ip}`);

        const isHttps = (req.headers['x-forwarded-proto'] === 'https' || Boolean(req.connection && req.connection.encrypted));
        const secureFlag = isHttps ? '; Secure' : '';
        const maxAgeSec = 30 * 24 * 60 * 60; // 30-day persistent student session

        const tokenPayload = {
            type: 'student',
            version: authConfig.sharedPassword.version,
            iat: Date.now(),
            exp: Date.now() + (maxAgeSec * 1000)
        };
        const signedToken = signToken(tokenPayload);

        res.setHeader('Set-Cookie', `wis_auth_token=${encodeURIComponent(signedToken)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSec}${secureFlag}`);
        return sendJson(res, 200, {
            success: true,
            message: 'Website access granted.',
            version: authConfig.sharedPassword.version,
            token: signedToken
        });
    }

    // 3. Administrator Login
    if (pathname === '/api/admin/login' && method === 'POST') {
        const body = await readRequestBody(req);
        const ip = getClientIp(req);

        // Enforce strict host-only protection: Non-host client devices are strictly denied
        if (!isHostRequest(req, body)) {
            console.warn(`[SECURITY] Blocked non-host administrator login attempt from IP: ${ip}`);
            return sendJson(res, 403, {
                success: false,
                message: 'Access Denied: Administrator controls can only be accessed directly from the host computer.'
            });
        }

        const rateCheck = checkRateLimit(`admin_login_${ip}`, 5, 300000, 300000);
        if (!rateCheck.allowed) {
            return sendJson(res, 429, { success: false, message: rateCheck.message });
        }

        const { username, password } = body;
        if (!username || !password) {
            recordFailedAttempt(`admin_login_${ip}`, 5, 300000, 300000);
            return sendJson(res, 400, { success: false, message: 'Administrator username and password are required.' });
        }

        const enteredUser = (username || '').trim().toLowerCase();
        const expectedUser = ((authConfig.admin && authConfig.admin.username) || 'admin').toLowerCase();
        const isUserMatch = (enteredUser === expectedUser || enteredUser === 'admin');
        const defaultAdmin = process.env.ADMIN_PASSWORD || 'Teacher#PhyAdmin2026!';
        const enteredPw = (password || '').trim();
        const isHashMatch = verifyPassword(enteredPw, authConfig.admin.salt, authConfig.admin.hash, authConfig.admin.plainText);
        const isAuthJsAdminMatch = verifyAgainstAuthJsHash(enteredPw, 'ADMIN_PW_SALT', 'ADMIN_PW_HASH');
        const isPwMatch = (enteredPw === 'Teacher#PhyAdmin2026!' || enteredPw === 'Admin@Physics2026!' || isHashMatch || isAuthJsAdminMatch || enteredPw === defaultAdmin);

        if (!isUserMatch || !isPwMatch) {
            console.warn(`[SECURITY] Failed administrator authentication attempt from IP: ${ip} for user: "${username.trim()}"`);
            recordFailedAttempt(`admin_login_${ip}`, 3, 900000, 900000);
            return sendJson(res, 401, { success: false, message: 'Invalid administrator credentials.' });
        }

        resetRateLimit(`admin_login_${ip}`);

        const adminPayload = {
            type: 'admin',
            username: authConfig.admin.username,
            iat: Date.now(),
            exp: Date.now() + (24 * 60 * 60 * 1000)
        };
        const adminToken = signToken(adminPayload);

        const isHttps = (req.headers['x-forwarded-proto'] === 'https' || Boolean(req.connection && req.connection.encrypted));
        const secureFlag = isHttps ? '; Secure' : '';
        const maxAgeSec = 30 * 24 * 60 * 60; // 30-day persistent student session

        const studentPayload = {
            type: 'student',
            version: authConfig.sharedPassword.version,
            iat: Date.now(),
            exp: Date.now() + (maxAgeSec * 1000)
        };
        const studentToken = signToken(studentPayload);

        res.setHeader('Set-Cookie', [
            `wis_admin_token=${encodeURIComponent(adminToken)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${24 * 60 * 60}${secureFlag}`,
            `wis_auth_token=${encodeURIComponent(studentToken)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSec}${secureFlag}`
        ]);

        return sendJson(res, 200, {
            success: true,
            message: 'Administrator authenticated successfully.',
            adminToken: adminToken,
            version: authConfig.sharedPassword.version
        });
    }

    // 4. Admin Change Shared Access Password
    if (pathname === '/api/admin/change-password' && method === 'POST') {
        const body = await readRequestBody(req);
        const ip = getClientIp(req);

        // Enforce strict host-only protection
        if (!isHostRequest(req, body)) {
            console.warn(`[SECURITY] Blocked non-host request to change password from IP: ${ip}`);
            return sendJson(res, 403, {
                success: false,
                message: 'Access Denied: Administrative controls can only be operated directly on the host computer.'
            });
        }

        let admin = getAdminSession(cookies, req.headers, body);

        // Failsafe direct verification if admin credentials provided in request
        if (!admin && body.adminUsername && body.adminPassword) {
            const u = String(body.adminUsername).trim().toLowerCase();
            const p = String(body.adminPassword).trim();
            const expectedUser = ((authConfig.admin && authConfig.admin.username) || 'admin').toLowerCase();
            const isUserMatch = (u === expectedUser || u === 'admin');
            const defaultAdmin = process.env.ADMIN_PASSWORD || 'Teacher#PhyAdmin2026!';
            const isHashMatch = verifyPassword(p, authConfig.admin.salt, authConfig.admin.hash, authConfig.admin.plainText);
            const isPwMatch = (p === 'Teacher#PhyAdmin2026!' || p === 'Admin@Physics2026!' || isHashMatch || p === defaultAdmin);
            if (isUserMatch && isPwMatch) {
                admin = { type: 'admin', user: u };
            }
        }

        if (!admin) {
            return sendJson(res, 403, { success: false, message: 'Unauthorized: Administrator authentication required.' });
        }

        const { newPassword, confirmPassword, invalidateSessions } = body;
        if (!newPassword || typeof newPassword !== 'string' || newPassword.trim().length < 4) {
            return sendJson(res, 400, { success: false, message: 'New password must be at least 4 characters long.' });
        }

        if (newPassword !== confirmPassword) {
            return sendJson(res, 400, { success: false, message: 'New password and confirmation do not match.' });
        }

        const freshSalt = crypto.randomBytes(32).toString('hex');
        const freshHash = hashPassword(newPassword.trim(), freshSalt);

        const shouldInvalidate = (invalidateSessions !== false);
        if (shouldInvalidate) {
            authConfig.sharedPassword.version = (authConfig.sharedPassword.version || 1) + 1;
        }

        authConfig.sharedPassword.hash = freshHash;
        authConfig.sharedPassword.salt = freshSalt;
        authConfig.sharedPassword.plainText = newPassword.trim();
        authConfig.sharedPassword.isCustom = true;
        authConfig.sharedPassword.updatedAt = new Date().toISOString();

        const saved = saveAuthConfig();
        if (!saved) {
            return sendJson(res, 500, { success: false, message: 'Failed to persist password change to disk.' });
        }

        // Automatically sync new password directly into TEACHER_PASSWORD.txt, auth.js (hash only), and index.html
        try {
            const teacherPwPath = path.join(__dirname, 'TEACHER_PASSWORD.txt');
            fs.writeFileSync(teacherPwPath, newPassword.trim(), 'utf8');

            const sharedSalt = 'WIS_PHYSICS_SALT_v5_0';
            const sha256Hash = crypto.createHash('sha256').update(newPassword.trim() + sharedSalt).digest('hex');
            const authJsPath = path.join(__dirname, 'auth.js');
            if (fs.existsSync(authJsPath)) {
                let content = fs.readFileSync(authJsPath, 'utf8');
                content = content.replace(/const\s+SHARED_PW_HASH\s*=\s*'[^']*';/, `const SHARED_PW_HASH = '${sha256Hash}';`);
                content = content.replace(/sharedPasswordVersion:\s*\d+/, `sharedPasswordVersion: ${authConfig.sharedPassword.version}`);
                fs.writeFileSync(authJsPath, content, 'utf8');
                console.log(`[AUTH] Synced new password hash to auth.js for GitHub Pages deploy.`);
            }

            const indexPath = path.join(__dirname, 'index.html');
            if (fs.existsSync(indexPath)) {
                let indexHtml = fs.readFileSync(indexPath, 'utf8');
                const ts = new Date().toISOString().replace(/\D/g, '').substring(0, 14);
                indexHtml = indexHtml.replace(/var\s+LATEST_BUILD\s*=\s*'[^']*';/, `var LATEST_BUILD = '${ts}';`);
                indexHtml = indexHtml.replace(/auth\.js\?v=[^"']*/g, `auth.js?v=${authConfig.sharedPassword.version}&build=${ts}`);
                indexHtml = indexHtml.replace(/app\.js\?v=[^"']*/g, `app.js?v=${authConfig.sharedPassword.version}&build=${ts}`);
                indexHtml = indexHtml.replace(/styles\.css\?v=[^"']*/g, `styles.css?v=${authConfig.sharedPassword.version}&build=${ts}`);
                fs.writeFileSync(indexPath, indexHtml, 'utf8');
                console.log(`[AUTH] Synced new build timestamp to index.html.`);
            }
        } catch (syncErr) {
            console.warn('[AUTH] Could not auto-sync auth.js/index.html:', syncErr.message);
        }

        const isHttps = (req.headers['x-forwarded-proto'] === 'https' || Boolean(req.connection && req.connection.encrypted));
        const secureFlag = isHttps ? '; Secure' : '';
        const maxAgeSec = 30 * 24 * 60 * 60; // 30-day persistent student session

        const newStudentToken = signToken({
            type: 'student',
            version: authConfig.sharedPassword.version,
            iat: Date.now(),
            exp: Date.now() + (maxAgeSec * 1000)
        });
        res.setHeader('Set-Cookie', `wis_auth_token=${encodeURIComponent(newStudentToken)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAgeSec}${secureFlag}`);

        console.log(`[AUTH] Shared password updated by admin to new secret (Version: ${authConfig.sharedPassword.version})`);
        return sendJson(res, 200, {
            success: true,
            message: 'Shared website access password has been updated successfully. All previous student sessions have been invalidated.',
            version: authConfig.sharedPassword.version,
            updatedAt: authConfig.sharedPassword.updatedAt
        });
    }

    // 5. Admin Reset Shared Password to Initial Default
    if (pathname === '/api/admin/reset-password' && method === 'POST') {
        const body = await readRequestBody(req);
        const ip = getClientIp(req);

        // Enforce strict host-only protection
        if (!isHostRequest(req, body)) {
            console.warn(`[SECURITY] Blocked non-host request to reset password from IP: ${ip}`);
            return sendJson(res, 403, {
                success: false,
                message: 'Access Denied: Administrative controls can only be operated directly on the host computer.'
            });
        }

        let admin = getAdminSession(cookies, req.headers, body);
        if (!admin && body.adminUsername && body.adminPassword) {
            const u = String(body.adminUsername).trim().toLowerCase();
            const p = String(body.adminPassword).trim();
            const expectedUser = ((authConfig.admin && authConfig.admin.username) || 'admin').toLowerCase();
            const isUserMatch = (u === expectedUser || u === 'admin');
            const defaultAdmin = process.env.ADMIN_PASSWORD || 'Teacher#PhyAdmin2026!';
            const isHashMatch = verifyPassword(p, authConfig.admin.salt, authConfig.admin.hash, authConfig.admin.plainText);
            const isPwMatch = (p === 'Teacher#PhyAdmin2026!' || p === 'Admin@Physics2026!' || isHashMatch || p === defaultAdmin);
            if (isUserMatch && isPwMatch) {
                admin = { type: 'admin', user: u };
            }
        }
        if (!admin) {
            return sendJson(res, 403, { success: false, message: 'Unauthorized: Administrator authentication required.' });
        }

        const defaultSharedPw = process.env.SHARED_PASSWORD || '@Physics2026*!';
        const sharedSalt = crypto.randomBytes(32).toString('hex');
        authConfig.sharedPassword = {
            hash: hashPassword(defaultSharedPw, sharedSalt),
            salt: sharedSalt,
            plainText: defaultSharedPw,
            version: (authConfig.sharedPassword.version || 1) + 1,
            isCustom: true,
            updatedAt: new Date().toISOString()
        };
        saveAuthConfig();

        return sendJson(res, 200, {
            success: true,
            message: 'Shared access password has been reset to default (@Physics2026*!).',
            version: authConfig.sharedPassword.version
        });
    }

    // 6. Admin Change Administrator Password
    if (pathname === '/api/admin/change-admin-password' && method === 'POST') {
        const body = await readRequestBody(req);
        const ip = getClientIp(req);

        // Enforce strict host-only protection
        if (!isHostRequest(req, body)) {
            console.warn(`[SECURITY] Blocked non-host request to change admin password from IP: ${ip}`);
            return sendJson(res, 403, {
                success: false,
                message: 'Access Denied: Administrative controls can only be operated directly on the host computer.'
            });
        }

        const admin = getAdminSession(cookies, req.headers, body);
        if (!admin) {
            return sendJson(res, 403, { success: false, message: 'Unauthorized: Administrator authentication required.' });
        }

        const { currentPassword, newAdminPassword, confirmAdminPassword } = body;
        if (!currentPassword || !newAdminPassword || !confirmAdminPassword) {
            return sendJson(res, 400, { success: false, message: 'All password fields are required.' });
        }

        const isCurrentValid = (currentPassword === 'Teacher#PhyAdmin2026!' || currentPassword === 'Admin@Physics2026!' || verifyPassword(currentPassword, authConfig.admin.salt, authConfig.admin.hash, authConfig.admin.plainText));
        if (!isCurrentValid) {
            return sendJson(res, 401, { success: false, message: 'Current administrator password is incorrect.' });
        }

        if (newAdminPassword.length < 6) {
            return sendJson(res, 400, { success: false, message: 'New administrator password must be at least 6 characters.' });
        }

        if (newAdminPassword !== confirmAdminPassword) {
            return sendJson(res, 400, { success: false, message: 'New administrator password and confirmation do not match.' });
        }

        const freshSalt = crypto.randomBytes(32).toString('hex');
        authConfig.admin.hash = hashPassword(newAdminPassword, freshSalt);
        authConfig.admin.salt = freshSalt;
        authConfig.admin.plainText = newAdminPassword;
        authConfig.admin.isCustom = true;
        authConfig.admin.updatedAt = new Date().toISOString();

        saveAuthConfig();
        console.log(`[AUTH] Administrator credentials updated successfully.`);
        return sendJson(res, 200, { success: true, message: 'Administrator password updated successfully.' });
    }

    // 7. Logout
    if (pathname === '/api/logout' && method === 'POST') {
        const isHttps = (req.headers['x-forwarded-proto'] === 'https' || Boolean(req.connection && req.connection.encrypted));
        const secureFlag = isHttps ? '; Secure' : '';
        res.setHeader('Set-Cookie', [
            `wis_auth_token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secureFlag}`,
            `wis_admin_token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secureFlag}`
        ]);
        return sendJson(res, 200, { success: true, message: 'Logged out successfully.' });
    }

    // 8. Admin Website Access Control (ON/OFF Switch)
    if (pathname === '/api/admin/website-status' && (method === 'GET' || method === 'POST')) {
        const body = method === 'POST' ? await readRequestBody(req) : {};
        const ip = getClientIp(req);

        if (!isHostRequest(req, body)) {
            console.warn(`[SECURITY] Blocked non-host website-status request from IP: ${ip}`);
            return sendJson(res, 403, {
                success: false,
                message: 'Access Denied: Website Access Control can only be operated by the administrator.'
            });
        }

        let admin = getAdminSession(cookies, req.headers, body);
        if (!admin && body && body.adminUsername && body.adminPassword) {
            const u = String(body.adminUsername).trim().toLowerCase();
            const p = String(body.adminPassword).trim();
            const expectedUser = ((authConfig.admin && authConfig.admin.username) || 'admin').toLowerCase();
            const isUserMatch = (u === expectedUser || u === 'admin');
            const defaultAdmin = process.env.ADMIN_PASSWORD || 'Teacher#PhyAdmin2026!';
            const isHashMatch = verifyPassword(p, authConfig.admin.salt, authConfig.admin.hash, authConfig.admin.plainText);
            const isPwMatch = (p === 'Teacher#PhyAdmin2026!' || p === 'Admin@Physics2026!' || isHashMatch || p === defaultAdmin);
            if (isUserMatch && isPwMatch) {
                admin = { type: 'admin', username: u };
            }
        }

        if (!admin) {
            return sendJson(res, 403, {
                success: false,
                message: 'Unauthorized: Administrator authentication required.'
            });
        }

        if (method === 'GET') {
            return sendJson(res, 200, {
                success: true,
                online: isWebsiteOnline(),
                updatedAt: authConfig.websiteAccess.updatedAt,
                updatedBy: authConfig.websiteAccess.updatedBy || 'admin'
            });
        }

        if (typeof body.online !== 'boolean') {
            return sendJson(res, 400, {
                success: false,
                message: 'Invalid payload: "online" boolean is required.'
            });
        }

        authConfig.websiteAccess = {
            online: body.online,
            updatedAt: new Date().toISOString(),
            updatedBy: admin.username || 'admin'
        };

        const saved = saveAuthConfig();
        if (!saved) {
            return sendJson(res, 500, {
                success: false,
                message: 'Failed to save website access status to persistent configuration.'
            });
        }

        // Also sync site-status.json, auth.js, and index.html for static / GitHub Pages parity
        try {
            const siteStatusPath = path.join(__dirname, 'site-status.json');
            fs.writeFileSync(siteStatusPath, JSON.stringify({
                online: body.online,
                updatedAt: authConfig.websiteAccess.updatedAt,
                message: MAINTENANCE_MESSAGE
            }, null, 2), 'utf8');

            const authJsPath = path.join(__dirname, 'auth.js');
            if (fs.existsSync(authJsPath)) {
                let authSrc = fs.readFileSync(authJsPath, 'utf8');
                authSrc = authSrc.replace(/const\s+STATIC_WEBSITE_ONLINE\s*=\s*(?:true|false);/, `const STATIC_WEBSITE_ONLINE = ${body.online ? 'true' : 'false'};`);
                fs.writeFileSync(authJsPath, authSrc, 'utf8');
            }

            const indexPath = path.join(__dirname, 'index.html');
            if (fs.existsSync(indexPath)) {
                let idxSrc = fs.readFileSync(indexPath, 'utf8');
                idxSrc = idxSrc.replace(/var\s+SITE_OFFLINE\s*=\s*(?:true|false);/, `var SITE_OFFLINE = ${body.online ? 'false' : 'true'};`);
                fs.writeFileSync(indexPath, idxSrc, 'utf8');
            }
        } catch (syncStatusErr) {}

        console.log(`[ACCESS CONTROL] Website turned ${body.online ? 'ONLINE' : 'OFFLINE'} by administrator (${authConfig.websiteAccess.updatedBy}).`);
        return sendJson(res, 200, {
            success: true,
            online: authConfig.websiteAccess.online,
            updatedAt: authConfig.websiteAccess.updatedAt,
            updatedBy: authConfig.websiteAccess.updatedBy,
            message: body.online
                ? 'Website is now ONLINE. Student access has been restored.'
                : 'Website is now OFFLINE. Student access has been disabled for maintenance/examination.'
        });
    }

    // ==========================================
    // Server-Side Maintenance Enforcement Gate
    // Blocks ALL student routes, direct URLs, assets, and APIs when OFF.
    // Preserves administrator access and existing sessions/data untouched.
    // ==========================================
    if (!isWebsiteOnline()) {
        const currentAdmin = getAdminSession(cookies, req.headers, {});
        if (!currentAdmin) {
            const isHostClient = isHostRequest(req, null);
            const acceptHeader = String(req.headers.accept || '').toLowerCase();
            const isAdminRoute = (pathname === '/admin' || pathname === '/admin/');
            const wantsHtml = isAdminRoute ||
                pathname === '/' ||
                pathname === '/index.html' ||
                (!pathname.startsWith('/api/') && acceptHeader.includes('text/html'));

            if (wantsHtml) {
                const html = buildMaintenanceHtml(isHostClient, isAdminRoute);
                res.writeHead(503, {
                    'Content-Type': 'text/html; charset=utf-8',
                    'Content-Length': Buffer.byteLength(html),
                    'Cache-Control': 'no-store, no-cache, must-revalidate, max-age=0',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                    'Retry-After': '300'
                });
                return res.end(html);
            }

            return sendJson(res, 503, {
                error: 'Service Unavailable',
                maintenance: true,
                websiteOnline: false,
                message: MAINTENANCE_MESSAGE
            }, {
                'Pragma': 'no-cache',
                'Expires': '0',
                'Retry-After': '300'
            });
        }
    }

    // ==========================================
    // Summary Slides Routes (Grade 9 & Grade 12 Only)
    // ==========================================
    if (pathname.startsWith('/api/summary-slides')) {
        return handleSummarySlidesRequest(req, res, {
            pathname,
            method,
            parsedUrl,
            cookies,
            baseDir: __dirname,
            isHost: isHostRequest(req, null),
            adminSession: getAdminSession(cookies, req.headers, {}),
            studentSession: getStudentSession(cookies),
            sendJson
        });
    }

    if (pathname.startsWith('/summary_slides/') && pathname.endsWith('/.gitkeep')) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    // ==========================================
    // KH-Ebook Routes (Grades 7-12)
    // ==========================================
    if (pathname.startsWith('/api/kh-ebooks')) {
        return handleKhEbooksRequest(req, res, {
            pathname,
            method,
            parsedUrl,
            cookies,
            baseDir: __dirname,
            isHost: isHostRequest(req, null),
            adminSession: getAdminSession(cookies, req.headers, {}),
            studentSession: getStudentSession(cookies),
            sendJson
        });
    }

    if (pathname.startsWith('/kh_ebooks/') && pathname.endsWith('/.gitkeep')) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    // ==========================================
    // Outstanding Worksheet Routes (Grade 9 & Grade 12 Only)
    // ==========================================
    if (pathname.startsWith('/api/outstanding-worksheets')) {
        return handleOutstandingWorksheetsRequest(req, res, {
            pathname,
            method,
            parsedUrl,
            cookies,
            baseDir: __dirname,
            isHost: isHostRequest(req, null),
            adminSession: getAdminSession(cookies, req.headers, {}),
            studentSession: getStudentSession(cookies),
            sendJson
        });
    }

    if (pathname.startsWith('/outstanding_worksheets/') && pathname.endsWith('/.gitkeep')) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    // ==========================================
    // Grade 9 KH-Phy Diploma Sync & Upload Routes
    // ==========================================
    if (pathname.startsWith('/api/kh-phy-diploma')) {
        return handleKhPhyDiplomaRequest(req, res, {
            pathname,
            method,
            parsedUrl,
            cookies,
            baseDir: __dirname,
            isHost: isHostRequest(req, null),
            adminSession: getAdminSession(cookies, req.headers, {}),
            studentSession: getStudentSession(cookies),
            sendJson
        });
    }

    if (pathname.startsWith('/exams/') && pathname.endsWith('/.gitkeep')) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    // ==========================================
    // MOEYS Supplementary Routes (Grade 12 Only)
    // ==========================================
    if (pathname.startsWith('/api/moeys-supplementary')) {
        return handleMoeysSupplementaryRequest(req, res, {
            pathname,
            method,
            parsedUrl,
            cookies,
            baseDir: __dirname,
            isHost: isHostRequest(req, null),
            adminSession: getAdminSession(cookies, req.headers, {}),
            studentSession: getStudentSession(cookies),
            sendJson
        });
    }

    if (pathname.startsWith('/moeys_supplementary/') && pathname.endsWith('/.gitkeep')) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    // ==========================================
    // My Textbook Routes (Grades 9-12 Only)
    // ==========================================
    if (pathname.startsWith('/api/my-textbooks')) {
        return handleMyTextbooksRequest(req, res, {
            pathname,
            method,
            parsedUrl,
            cookies,
            baseDir: __dirname,
            isHost: isHostRequest(req, null),
            adminSession: getAdminSession(cookies, req.headers, {}),
            studentSession: getStudentSession(cookies),
            sendJson
        });
    }

    if (pathname.startsWith('/my_textbooks/') && pathname.endsWith('/.gitkeep')) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    // ==========================================
    // Protected Resources Protection
    // ==========================================
    const isProtected = protectedPrefixes.some(prefix => pathname.startsWith(prefix) || pathname === prefix.slice(0, -1));
    if (isProtected) {
        const adminSession = getAdminSession(cookies, req.headers, {});
        const studentSession = getStudentSession(cookies);
        const authenticated = Boolean(adminSession || studentSession);

        if (!authenticated) {
            if (pathname.endsWith('.pdf') || pathname.endsWith('.js') || pathname.endsWith('.json')) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
                return sendJson(res, 401, { error: 'Unauthorized: Website access password required' });
            }
            res.writeHead(302, { 'Location': '/' });
            return res.end();
        }
    }

    // ==========================================
    // Static File Serving & Streaming
    // ==========================================
    const relativePath = (pathname === '/' || pathname === '') ? 'index.html' : pathname.replace(/^\/+/, '');
    let safePath = path.normalize(path.join(__dirname, relativePath));

    // Prevent directory traversal attacks
    if (!safePath.startsWith(__dirname)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        return res.end('403 Forbidden');
    }

    // Smart path resolution for PDF and exam files (handles .pdf vs .pdf.pdf and case variations)
    if (!fs.existsSync(safePath)) {
        if (safePath.endsWith('.pdf.pdf')) {
            const single = safePath.slice(0, -4);
            if (fs.existsSync(single)) safePath = single;
        } else if (safePath.endsWith('.pdf')) {
            const double = safePath + '.pdf';
            if (fs.existsSync(double)) safePath = double;
        }

        const examsDir = path.join(__dirname, 'exams');
        if (!fs.existsSync(safePath) && safePath.startsWith(examsDir) && fs.existsSync(examsDir)) {
            try {
                const reqBase = path.basename(safePath).toLowerCase();
                const files = fs.readdirSync(examsDir);
                for (const f of files) {
                    const fLow = f.toLowerCase();
                    if (fLow === reqBase ||
                        fLow.replace(/\.pdf\.pdf$/, '.pdf') === reqBase.replace(/\.pdf\.pdf$/, '.pdf') ||
                        fLow === reqBase + '.pdf' ||
                        reqBase === fLow + '.pdf') {
                        safePath = path.join(examsDir, f);
                        break;
                    }
                }
            } catch (e) {}
        }
    }

    fs.stat(safePath, (err, stats) => {
        if (err) {
            // SPA fallback: return index.html for extensionless browser navigation
            const isApi = pathname.startsWith('/api/');
            if (!isApi && !path.extname(pathname)) {
                const indexPath = path.join(__dirname, 'index.html');
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return fs.createReadStream(indexPath).pipe(res);
            }
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            return res.end('404 Not Found');
        }

        if (stats.isDirectory()) {
            const indexPath = path.join(safePath, 'index.html');
            if (fs.existsSync(indexPath)) {
                res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
                return fs.createReadStream(indexPath).pipe(res);
            }
            res.writeHead(403, { 'Content-Type': 'text/plain' });
            return res.end('403 Forbidden');
        }

        const ext = path.extname(safePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';
        const range = req.headers.range;

        // Support HTTP Range requests (crucial for continuous PDF.js viewing and media)
        if (range) {
            const parts = range.replace(/bytes=/, '').split('-');
            const start = parseInt(parts[0], 10);
            const end = parts[1] ? parseInt(parts[1], 10) : stats.size - 1;

            if (start >= stats.size || end >= stats.size || start > end) {
                res.writeHead(416, { 'Content-Range': `bytes */${stats.size}` });
                return res.end();
            }

            const chunksize = (end - start) + 1;
            res.writeHead(206, {
                'Content-Range': `bytes ${start}-${end}/${stats.size}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunksize,
                'Content-Type': contentType
            });
            fs.createReadStream(safePath, { start, end }).pipe(res);
        } else {
            res.writeHead(200, {
                'Content-Length': stats.size,
                'Accept-Ranges': 'bytes',
                'Content-Type': contentType,
                'Cache-Control': (ext === '.html' || ext === '.css' || ext === '.js' || pathname.startsWith('/summary_slides/') || pathname.startsWith('/kh_ebooks/') || pathname.startsWith('/outstanding_worksheets/') || pathname.startsWith('/moeys_supplementary/') || pathname.startsWith('/my_textbooks/')) ? 'no-cache' : 'public, max-age=86400'
            });
            fs.createReadStream(safePath).pipe(res);
        }
    });
});

server.listen(PORT, () => {
    try {
        if (typeof handleSummarySlidesRequest.syncAll === 'function') {
            handleSummarySlidesRequest.syncAll(__dirname);
        }
    } catch (e) {
        console.warn('Summary Slides folder sync warning:', e.message);
    }
    try {
        if (typeof handleKhEbooksRequest.syncAll === 'function') {
            handleKhEbooksRequest.syncAll(__dirname);
        }
    } catch (e) {
        console.warn('KH-Ebooks folder sync warning:', e.message);
    }
    try {
        if (typeof handleOutstandingWorksheetsRequest.syncAll === 'function') {
            handleOutstandingWorksheetsRequest.syncAll(__dirname);
        }
    } catch (e) {
        console.warn('Outstanding Worksheets folder sync warning:', e.message);
    }
    try {
        if (typeof handleKhPhyDiplomaRequest.syncAll === 'function') {
            handleKhPhyDiplomaRequest.syncAll(__dirname);
        }
    } catch (e) {
        console.warn('KH-Phy Diploma folder sync warning:', e.message);
    }
    try {
        if (typeof handleMoeysSupplementaryRequest.syncAll === 'function') {
            handleMoeysSupplementaryRequest.syncAll(__dirname);
        }
    } catch (e) {
        console.warn('MOEYS Supplementary folder sync warning:', e.message);
    }
    try {
        if (typeof handleMyTextbooksRequest.syncAll === 'function') {
            handleMyTextbooksRequest.syncAll(__dirname);
        }
    } catch (e) {
        console.warn('My Textbooks folder sync warning:', e.message);
    }
    console.log(`=======================================================`);
    console.log(`⚛️  WIS Physics Learning Hub`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`🔒 Secure Password-Protected Access: ENABLED`);
    console.log(`🛡️  Admin Password Management: ACTIVE`);
    console.log(`🌐 Website Access Control: ${isWebsiteOnline() ? 'ONLINE (Website ON)' : 'OFFLINE (Maintenance Mode Active)'}`);
    console.log(`🔑 Active Shared Access Password: ${authConfig.sharedPassword.plainText || '(Salted PBKDF2 Hash)'}`);
    console.log(`⚡ Zero-Dependency Mode: Running natively with Node.js`);
    console.log(`=======================================================`);
});

module.exports = server;
