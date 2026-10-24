/**
 * WIS Physics Learning Hub - Server
 * 
 * Direct student access mode: No password or login required.
 * All lessons, formulas, definitions, simulations, and worksheets are immediately available.
 */

const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Redirect any legacy /login requests straight to home
app.get('/login', (req, res) => {
    res.redirect('/');
});

app.get('/api/auth-status', (req, res) => {
    res.json({ authenticated: true, mode: 'public' });
});

// Serve all website files, worksheets, and resources directly
app.use(express.static(__dirname));

// Fallback to index.html for any root or SPA route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`=======================================================`);
    console.log(`⚛️  WIS Physics Learning Hub`);
    console.log(`📡 URL: http://localhost:${PORT}`);
    console.log(`🔓 Direct Student Access: No password required`);
    console.log(`📁 All formulas, simulations & worksheets open to students`);
    console.log(`=======================================================`);
});

module.exports = app;
