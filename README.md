## 👻 Spoof Mailer Tor (Anonymous Spoofing Tor)

Alat pengirim email (spoofing) tingkat tinggi yang dijalankan di atas jaringan **Tor**. Tool ini dirancang untuk menyamarkan identitas pengirim dan lokasi asal (IP Address) secara total menggunakan sistem proxy berlapis.

![Security](https://img.shields.io/badge/Security-AES--256-green)
![Network](https://img.shields.io/badge/Network-Tor--SOCKS5-blue)
![Platform](https://img.shields.io/badge/Platform-Termux--NodeJS-orange)

## 🛠️ Fitur Utama
- 🔒 **Secure Access:** Dilindungi dengan SHA-256 Hashed PIN untuk masuk ke dashboard.
- 🧅 **Tor Integration:** Semua koneksi SMTP dilewatkan melalui SOCKS5 Tor Proxy untuk menyembunyikan IP pengirim.
- 🎭 **Identity Spoofing:** Memungkinkan modifikasi Nama Pengirim dan Email Samaran secara fleksibel.
- ☁️ **Cloudflared Tunnel:** Menghasilkan URL publik yang aman tanpa perlu port forwarding.

## 📋 Persyaratan
1. **Akun Gmail:** Sebagai mesin pengirim (SMTP Relay)[span_0](start_span)[span_0](end_span).
2. **App Password (16 Digit):** Kunci akses khusus dari Google[span_1](start_span)[span_1](end_span).
   - Aktifkan *2-Step Verification* di Akun Google.
   - Buat di: [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords).
3. **Tor & Node.js:** Terpasang di perangkat Anda.

## Panduan
Jalankan perintah berikut di Termux :

1. Update :
```
pkg update && pkg upgrade -y
```
2. Install :
```
pkg install nodejs tor cloudflared git -y
```
3. Clone :
```
git clone https://github.com/123tool/Spoof-Mailer-Tor.git
cd Spoof-Mailer-Tor
```
4. Library :
```
npm install
```

## Konfigurasi
​Buka file app.js menggunakan editor
(misal: nano app.js) dan sesuaikan bagian berikut :

1. ​PIN_HASH : Masukkan hash PIN Anda untuk keamanan login.
2. Auth User : Ganti dengan alamat Gmail Anda.
3. Auth Pass : Masukkan 16 digit App Password tanpa spasi.

## Penggunaan
​Buka 3 Sesi di terminal :
1. Sesi 1 (Tor): Jalankan jaringan anonim.
   ```
   tor
2. Sesi 2 (Backend): Jalankan server Node.js.
   ```
   node app.js
3. Sesi 3 (Tunneling): Buat URL publik agar bisa diakses lewat browser.
   ```
   cloudflared tunnel --url http://localhost:3000


​⚠️ Disclaimer

**​Proyek ini dibuat untuk tujuan edukasi dan pengujian keamanan (Pentesting) saja. Segala bentuk penyalahgunaan untuk aktivitas ilegal adalah tanggung jawab penuh pengguna. Selalu patuhi hukum privasi yang berlaku**
