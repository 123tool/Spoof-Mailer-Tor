# 👻 GhostMailer Pro (Anonymous Spoofing Vault)

**GhostMailer Pro** adalah alat pengirim email (spoofing) tingkat tinggi yang dijalankan di atas jaringan **Tor**. Tool ini dirancang untuk menyamarkan identitas pengirim dan lokasi asal (IP Address) secara total menggunakan sistem proxy berlapis.

![Security](https://img.shields.io/badge/Security-AES--256-green)
![Network](https://img.shields.io/badge/Network-Tor--SOCKS5-blue)
![Platform](https://img.shields.io/badge/Platform-Termux--NodeJS-orange)

## 🛠️ Fitur Utama
- 🔒 **Secure Access:** Dilindungi dengan SHA-256 Hashed PIN untuk masuk ke dashboard.
- 🧅 **Tor Integration:** Semua koneksi SMTP dilewatkan melalui SOCKS5 Tor Proxy untuk menyembunyikan IP pengirim.
- 🎭 **Identity Spoofing:** Memungkinkan modifikasi Nama Pengirim dan Email Samaran secara fleksibel.
- ☁️ **Cloudflared Tunnel:** Menghasilkan URL publik yang aman tanpa perlu port forwarding.
- 📱 **Mobile Native:** Dioptimalkan khusus untuk penggunaan di **Termux**.

## 📋 Persyaratan (Modal Utama)
1. **Akun Gmail:** Sebagai mesin pengirim (SMTP Relay)[span_0](start_span)[span_0](end_span).
2. **App Password (16 Digit):** Kunci akses khusus dari Google[span_1](start_span)[span_1](end_span).
   - Aktifkan *2-Step Verification* di Akun Google.
   - Buat di: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
3. **Tor & Node.js:** Terpasang di perangkat Anda.

## 🚀 Panduan Instalasi (Termux)

Jalankan perintah berikut di Termux:
```bash
# Update sistem
pkg update && pkg upgrade -y

# Install mesin utama
pkg install nodejs tor cloudflared git -y

# Clone repository ini
git clone [https://github.com/USERNAME-ANDA/ghost-mailer-tor.git](https://github.com/USERNAME-ANDA/ghost-mailer-tor.git)
cd ghost-mailer-tor

# Install library pendukung
npm install
