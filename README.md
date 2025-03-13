
# Discord-Groq-Selfbot

Selfbot Discord yang menggunakan **Groq API** untuk menghasilkan respons otomatis dalam obrolan.

## ✨ Fitur
- Menggunakan **Groq API** dengan model `mixtral-8x7b-32768`
- Balasan otomatis dengan variasi panjang dan gaya kasual
- Hanya aktif di server dan channel yang diizinkan

## 🚀 Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/username/Discord-Groq-Selfbot.git
cd Discord-Groq-Selfbot
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Konfigurasi Environment Variables
Buat file `.env` dan isi dengan kredensial yang diperlukan:
```env
DISCORD_TOKEN=your_discord_token
GROQ_API_KEY=your_groq_api_key
ALLOWED_GUILD_ID=your_allowed_guild_id
ALLOWED_CHANNEL_ID=your_allowed_channel_id
```

### 4. Jalankan Bot
```bash
node selfbot.js
```

## ⚠️ Catatan Penting
- Selfbot hanya boleh digunakan untuk tujuan pribadi dan sesuai dengan aturan Discord.
- Pastikan **token** dan **API key** tidak dibagikan ke publik.
- Gunakan di server yang mengizinkan penggunaan selfbot.

## 📜 Lisensi
Proyek ini berada di bawah lisensi **MIT**.

