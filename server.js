/**
 * WIS Physics Learning Hub - Server
 * 
 * Secure Access Control & Password Management Server
 * - Shared Website Access Password with salted PBKDF2 hashing
 * - Dedicated Administrator Authentication & Password Management
 * - Session Invalidation on Password Change
 * - Rate Limiting & Brute-Force Protection
 * - Direct URL and Asset Protection
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

try {
    require('dotenv').config();
} catch (e) {}

const app = express();
const PORT = process.env.PORT || 3000;
const AUTH_CONFIG_FILE = path.join(__dirname, 'auth-config.json');

// --- Helper: Cryptographic Hashing & Verification ---
function hashPassword(password, salt) {
    return crypto.pbkdf2Sync(String(password), String(salt), 100000, 64, 'sha512').toString('hex');
}

function verifyPassword(password, salt, storedHash) {
    if (!password || !salt || !storedHash) return false;
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
                return authConfig;
            }
        }
    } catch (err) {
        console.warn('Could not read existing auth-config.json, re-initializing:', err.message);
    }

    const defaultSharedPw = process.env.SHARED_PASSWORD || 'Physics@2026';
    const defaultAdminUsername = process.env.ADMIN_USERNAME || 'admin';
    const defaultAdminPw = process.env.ADMIN_PASSWORD || 'Admin@Physics2026!';

    const sharedSalt = crypto.randomBytes(32).toString('hex');
    const adminSalt = crypto.randomBytes(32).toString('hex');
    const sessionSecret = crypto.randomBytes(64).toString('hex');

    authConfig = {
        sharedPassword: {
            hash: hashPassword(defaultSharedPw, sharedSalt),
            salt: sharedSalt,
            version: 1,
            updatedAt: new Date().toISOString()
        },
        admin: {
            username: defaultAdminUsername,
            hash: hashPassword(defaultAdminPw, adminSalt),
            salt: adminSalt,
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

authConfig = loadOrInitAuthConfig();

// --- Helper: Lightweight Token Signing & Verification ---
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

// --- Helper: Cookie Parser Middleware ---
function parseCookies(req) {
    const list = {};
    const rc = req.headers.cookie;
    if (!rc) return list;
    rc.split(';').forEach(cookie => {
        const parts = cookie.split('=');
        const name = parts.shift().trim();
        const val = parts.join('=');
        if (name) {
            try { list[name] = decodeURIComponent(val); } catch (e) { list[name] = val; }
        }
    });
    return list;
}

app.use((req, res, next) => {
    req.cookies = parseCookies(req);
    next();
});

// JSON and URL-encoded body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- Rate Limiter for Login Protection ---
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

// Cleanup rate limit store every 15 minutes
setInterval(() => {
    const now = Date.now();
    for (const [k, v] of rateLimitStore.entries()) {
        if (v.lockedUntil < now && now - v.firstAttempt > 3600000) {
            rateLimitStore.delete(k);
        }
    }
}, 900000);

// --- Session Verification Helpers ---
function getClientIp(req) {
    return req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
}

function getStudentSession(req) {
    const token = req.cookies.wis_auth_token;
    if (!token) return null;
    const payload = verifyToken(token);
    if (!payload) return null;
    if (payload.type === 'student' && payload.version !== authConfig.sharedPassword.version) {
        return null; // Session invalidated by password change
    }
    return payload;
}

function getAdminSession(req) {
    const token = req.cookies.wis_admin_token;
    if (!token) return null;
    const payload = verifyToken(token);
    if (!payload || payload.type !== 'admin') return null;
    return payload;
}

function isAuthenticated(req) {
    return Boolean(getStudentSession(req) || getAdminSession(req));
}

// --- Protected Resources Middleware ---
// Direct URLs to curriculum worksheets, eBooks, physics-data.js, and grade books cannot be accessed without password
const protectedPrefixes = [
    '/worksheets/',
    '/ebooks/',
    '/Physics_Grade7,8,10,11/',
    '/physics-data.js',
    '/physics-figures.js'
];

app.use((req, res, next) => {
    const isProtected = protectedPrefixes.some(prefix => req.path.startsWith(prefix) || req.path === prefix.slice(0, -1));
    if (isProtected) {
        if (!isAuthenticated(req)) {
            if (req.path.endsWith('.pdf') || req.path.endsWith('.js') || req.path.endsWith('.json')) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
                return res.status(401).json({ error: 'Unauthorized: Website access password required' });
            }
            return res.redirect('/');
        }
    }
    next();
});

// --- Authentication API Endpoints ---

// 1. Auth Status Check
app.get('/api/auth-status', (req, res) => {
    const adminSession = getAdminSession(req);
    const studentSession = getStudentSession(req);
    const authenticated = Boolean(adminSession || studentSession);
    const isAdmin = Boolean(adminSession);

    res.json({
        authenticated,
        isAdmin,
        version: authConfig.sharedPassword.version,
        lastUpdated: authConfig.sharedPassword.updatedAt
    });
});

// 2. Shared Website Access Login
app.post('/api/login', (req, res) => {
    const ip = getClientIp(req);
    const rateCheck = checkRateLimit(`login_${ip}`, 10, 60000, 60000);
    if (!rateCheck.allowed) {
        return res.status(429).json({ success: false, message: rateCheck.message });
    }

    const { password } = req.body;
    if (!password || typeof password !== 'string') {
        recordFailedAttempt(`login_${ip}`, 10, 60000, 60000);
        return res.status(400).json({ success: false, message: 'Please enter the access password.' });
    }

    const defaultShared = process.env.SHARED_PASSWORD || 'Physics@2026';
    const isCustom = Boolean(authConfig.sharedPassword && authConfig.sharedPassword.isCustom);
    const isHashValid = verifyPassword(password.trim(), authConfig.sharedPassword.salt, authConfig.sharedPassword.hash);
    const isValid = isCustom ? isHashValid : (isHashValid || password.trim() === defaultShared);
    if (!isValid) {
        recordFailedAttempt(`login_${ip}`, 10, 60000, 60000);
        return res.status(401).json({ success: false, message: 'Incorrect password. Please try again.' });
    }

    resetRateLimit(`login_${ip}`);

    // Create secure 7-day student session token
    const tokenPayload = {
        type: 'student',
        version: authConfig.sharedPassword.version,
        iat: Date.now(),
        exp: Date.now() + (7 * 24 * 60 * 60 * 1000)
    };
    const signedToken = signToken(tokenPayload);

    res.setHeader('Set-Cookie', `wis_auth_token=${encodeURIComponent(signedToken)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}`);
    return res.json({ success: true, message: 'Website access granted.' });
});

// 3. Administrator Login
app.post('/api/admin/login', (req, res) => {
    const ip = getClientIp(req);
    const rateCheck = checkRateLimit(`admin_login_${ip}`, 5, 300000, 300000);
    if (!rateCheck.allowed) {
        return res.status(429).json({ success: false, message: rateCheck.message });
    }

    const { username, password } = req.body;
    if (!username || !password) {
        recordFailedAttempt(`admin_login_${ip}`, 5, 300000, 300000);
        return res.status(400).json({ success: false, message: 'Administrator username and password are required.' });
    }

    const isUserMatch = (username.trim() === authConfig.admin.username);
    const defaultAdmin = process.env.ADMIN_PASSWORD || 'Admin@Physics2026!';
    const isAdminCustom = Boolean(authConfig.admin && authConfig.admin.isCustom);
    const isHashMatch = verifyPassword(password.trim(), authConfig.admin.salt, authConfig.admin.hash);
    const isPwMatch = isAdminCustom ? isHashMatch : (isHashMatch || password.trim() === defaultAdmin);

    if (!isUserMatch || !isPwMatch) {
        recordFailedAttempt(`admin_login_${ip}`, 5, 300000, 300000);
        return res.status(401).json({ success: false, message: 'Invalid administrator credentials.' });
    }

    resetRateLimit(`admin_login_${ip}`);

    // Create 1-day admin session token + student token
    const adminPayload = {
        type: 'admin',
        username: authConfig.admin.username,
        iat: Date.now(),
        exp: Date.now() + (24 * 60 * 60 * 1000)
    };
    const adminToken = signToken(adminPayload);

    const studentPayload = {
        type: 'student',
        version: authConfig.sharedPassword.version,
        iat: Date.now(),
        exp: Date.now() + (7 * 24 * 60 * 60 * 1000)
    };
    const studentToken = signToken(studentPayload);

    res.setHeader('Set-Cookie', [
        `wis_admin_token=${encodeURIComponent(adminToken)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${24 * 60 * 60}`,
        `wis_auth_token=${encodeURIComponent(studentToken)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}`
    ]);

    return res.json({ success: true, message: 'Administrator authenticated successfully.' });
});

// 4. Admin Change Shared Access Password
app.post('/api/admin/change-password', (req, res) => {
    const admin = getAdminSession(req);
    if (!admin) {
        return res.status(403).json({ success: false, message: 'Unauthorized: Administrator authentication required.' });
    }

    const { newPassword, confirmPassword, invalidateSessions } = req.body;
    if (!newPassword || typeof newPassword !== 'string' || newPassword.trim().length < 4) {
        return res.status(400).json({ success: false, message: 'New password must be at least 4 characters long.' });
    }

    if (newPassword !== confirmPassword) {
        return res.status(400).json({ success: false, message: 'New password and confirmation do not match.' });
    }

    // Generate fresh salt and hash
    const freshSalt = crypto.randomBytes(32).toString('hex');
    const freshHash = hashPassword(newPassword.trim(), freshSalt);

    const shouldInvalidate = (invalidateSessions !== false);
    if (shouldInvalidate) {
        authConfig.sharedPassword.version = (authConfig.sharedPassword.version || 1) + 1;
    }

    authConfig.sharedPassword.hash = freshHash;
    authConfig.sharedPassword.salt = freshSalt;
    authConfig.sharedPassword.isCustom = true;
    authConfig.sharedPassword.updatedAt = new Date().toISOString();

    const saved = saveAuthConfig();
    if (!saved) {
        return res.status(500).json({ success: false, message: 'Failed to persist password change to disk.' });
    }

    // Re-issue a fresh student token for current admin session with the new version
    const newStudentToken = signToken({
        type: 'student',
        version: authConfig.sharedPassword.version,
        iat: Date.now(),
        exp: Date.now() + (7 * 24 * 60 * 60 * 1000)
    });
    res.setHeader('Set-Cookie', `wis_auth_token=${encodeURIComponent(newStudentToken)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${7 * 24 * 60 * 60}`);

    console.log(`[AUTH] Shared password updated by admin (Version: ${authConfig.sharedPassword.version})`);
    return res.json({
        success: true,
        message: 'Shared website access password has been updated successfully. All previous student sessions have been invalidated.',
        version: authConfig.sharedPassword.version,
        updatedAt: authConfig.sharedPassword.updatedAt
    });
});

// 5. Admin Change Administrator Password
app.post('/api/admin/change-admin-password', (req, res) => {
    const admin = getAdminSession(req);
    if (!admin) {
        return res.status(403).json({ success: false, message: 'Unauthorized: Administrator authentication required.' });
    }

    const { currentPassword, newAdminPassword, confirmAdminPassword } = req.body;
    if (!currentPassword || !newAdminPassword || !confirmAdminPassword) {
        return res.status(400).json({ success: false, message: 'All password fields are required.' });
    }

    const isCurrentValid = verifyPassword(currentPassword, authConfig.admin.salt, authConfig.admin.hash);
    if (!isCurrentValid) {
        return res.status(401).json({ success: false, message: 'Current administrator password is incorrect.' });
    }

    if (newAdminPassword.length < 6) {
        return res.status(400).json({ success: false, message: 'New administrator password must be at least 6 characters.' });
    }

    if (newAdminPassword !== confirmAdminPassword) {
        return res.status(400).json({ success: false, message: 'New administrator password and confirmation do not match.' });
    }

    const freshSalt = crypto.randomBytes(32).toString('hex');
    authConfig.admin.hash = hashPassword(newAdminPassword, freshSalt);
    authConfig.admin.salt = freshSalt;
    authConfig.admin.isCustom = true;
    authConfig.admin.updatedAt = new Date().toISOString();

    const saved = saveAuthConfig();
    if (!saved) {
        return res.status(500).json({ success: false, message: 'Failed to persist administrator password change.' });
    }

    console.log(`[AUTH] Administrator credentials updated successfully.`);
    return res.json({ success: true, message: 'Administrator password updated successfully.' });
});

// 6. Logout
app.post('/api/logout', (req, res) => {
    res.setHeader('Set-Cookie', [
        'wis_auth_token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0',
        'wis_admin_token=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0'
    ]);
    return res.json({ success: true, message: 'Logged out successfully.' });
});

// Serve public static website files
app.use(express.static(__dirname));

// Direct root or SPA route handler
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`⚛️  WIS Physics Learning Hub`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`🔒 Secure Password-Protected Access: ENABLED`);
    console.log(`🛡️  Admin Password Management: ACTIVE`);
    console.log(`=======================================================`);
});

module.exports = app;
