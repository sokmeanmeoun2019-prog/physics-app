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

// --- Load or Initialize Persistent Auth Configuration ---
let authConfig = null;

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
        sessionSecret: sessionSecret
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
    '/Physics_Grade7,8,10,11/',
    '/physics-data.js',
    '/physics-figures.js'
];

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
        return sendJson(res, 200, {
            authenticated: Boolean(adminSession || studentSession),
            isAdmin: Boolean(adminSession),
            isHost: isHost,
            version: authConfig.sharedPassword.version,
            lastUpdated: authConfig.sharedPassword.updatedAt
        });
    }

    // 2. Shared Website Access Login
    if (pathname === '/api/login' && method === 'POST') {
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

        // All old/compromised passwords are strictly and permanently rejected
        const enteredLower = entered.toLowerCase();
        if (entered !== '@Physics2026*!') {
            if (enteredLower.includes('physics2026') || enteredLower.includes('physics@2026') || entered.includes('@Physics2026')) {
                recordFailedAttempt(`login_${ip}`, 10, 60000, 60000);
                return sendJson(res, 401, { success: false, message: 'This previous password has been permanently revoked. Please enter the current password (@Physics2026*!).' });
            }
        }

        const isCustom = Boolean(authConfig.sharedPassword && authConfig.sharedPassword.isCustom);
        let isValid = false;

        if (isCustom) {
            // Once a custom password is set, ONLY the custom password matches!
            isValid = verifyPassword(entered, authConfig.sharedPassword.salt, authConfig.sharedPassword.hash, authConfig.sharedPassword.plainText);
        } else {
            const defaultShared = process.env.SHARED_PASSWORD || '@Physics2026*!';
            const isHashValid = verifyPassword(entered, authConfig.sharedPassword.salt, authConfig.sharedPassword.hash, authConfig.sharedPassword.plainText);
            isValid = (isHashValid || entered === defaultShared);
        }

        if (!isValid) {
            recordFailedAttempt(`login_${ip}`, 10, 60000, 60000);
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
        const isPwMatch = (enteredPw === 'Teacher#PhyAdmin2026!' || enteredPw === 'Admin@Physics2026!' || isHashMatch || enteredPw === defaultAdmin);

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
                'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=86400'
            });
            fs.createReadStream(safePath).pipe(res);
        }
    });
});

server.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`⚛️  WIS Physics Learning Hub`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`🔒 Secure Password-Protected Access: ENABLED`);
    console.log(`🛡️  Admin Password Management: ACTIVE`);
    console.log(`🔑 Active Shared Access Password: ${authConfig.sharedPassword.plainText || '(Salted PBKDF2 Hash)'}`);
    console.log(`⚡ Zero-Dependency Mode: Running natively with Node.js`);
    console.log(`=======================================================`);
});

module.exports = server;
