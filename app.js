const express = require('express');
const nodemailer = require('nodemailer');
const { SocksProxyAgent } = require('socks-proxy-agent');
const crypto = require('crypto-js');
const path = require('path');

const app = express();
app.use(express.urlencoded({ extended: true }));

// --- CONFIGURATION ---
const PIN_HASH = crypto.SHA256("123456").toString(); // Ganti 123456 dengan PIN Bos
const TOR_PROXY = 'socks5h://127.0.0.1:9050';
const PORT = 3000;

// UI Sederhana (Neo-Brutalist Style)
const UI = (content, isLogin = false) => `
<!DOCTYPE html>
<html>
<head>
    <title>GhostMailer - Anonymous</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        :root { --bg: #000; --accent: #00ff00; --text: #fff; }
        body { background: var(--bg); color: var(--text); font-family: 'Courier New', monospace; padding: 20px; }
        .box { border: 3px solid var(--accent); padding: 20px; box-shadow: 10px 10px 0px var(--accent); max-width: 500px; margin: auto; }
        input, textarea { width: 100%; padding: 10px; margin: 10px 0; background: #111; border: 1px solid var(--accent); color: var(--accent); outline: none; }
        button { background: var(--accent); color: #000; border: none; padding: 10px 20px; font-weight: bold; cursor: pointer; width: 100%; }
        .status { color: #888; font-size: 0.8rem; margin-top: 10px; }
    </style>
</head>
<body>
    <div class="box">
        <h2>[ GHOST-MAILER v1.0 ]</h2>
        <p class="status">Network: ${isLogin ? 'Protected' : 'Tor Nodes Active'}</p>
        <hr border="1" color="#333">
        ${content}
    </div>
</body>
</html>`;

// Route: Login
app.get('/', (req, res) => {
    res.send(UI(`
        <form action="/login" method="POST">
            <label>ENTER VAULT PIN:</label>
            <input type="password" name="pin" required autofocus>
            <button type="submit">UNLOCK ACCESS</button>
        </form>
    `, true));
});

// Route: Auth Logic
app.post('/login', (req, res) => {
    const hash = crypto.SHA256(req.body.pin).toString();
    if (hash === PIN_HASH) {
        res.send(UI(`
            <form action="/send" method="POST">
                <input type="text" name="name" placeholder="FAKE SENDER NAME" required>
                <input type="email" name="fake_email" placeholder="FAKE EMAIL (e.g. boss@corp.com)" required>
                <input type="email" name="target" placeholder="TARGET EMAIL" required>
                <input type="text" name="subject" placeholder="SUBJECT" required>
                <textarea name="message" rows="5" placeholder="ENCRYPTED MESSAGE..."></textarea>
                <button type="submit">SEND VIA TOR NODES</button>
            </form>
            <p class="status">Exit Node: Anonymous (SOCKS5)</p>
        `));
    } else {
        res.send("<h1>ACCESS DENIED</h1>");
    }
});

// Route: Execution (The Spoofing Magic via Tor)
app.post('/send', async (req, res) => {
    const { name, fake_email, target, subject, message } = req.body;
    
    // Konfigurasi Agent Tor
    const agent = new SocksProxyAgent(TOR_PROXY);

    // Modal Email Asli Bos (Tetap Aman karena lewat Tor)
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        agent: agent, // SEMUA TRAFIK LEWAT TOR
        auth: {
            user: "agusbro@gmail.com", // Email Bos
            pass: "xxxx xxxx xxxx xxxx"  // App Password Bos
        }
    });

    try {
        await transporter.sendMail({
            from: `"${name}" <${fake_email}>`,
            to: target,
            subject: subject,
            text: message,
            replyTo: fake_email
        });
        res.send(UI(`<h3>[✔] PACKET DELIVERED SUCCESSFULLY</h3><a href="/" style="color:white">Back</a>`));
    } catch (error) {
        res.send(UI(`<h3>[✘] FAILED: ${error.message}</h3><a href="/" style="color:white">Retry</a>`));
    }
});

app.listen(PORT, () => console.log(`GhostMailer running on http://localhost:${PORT}`));
