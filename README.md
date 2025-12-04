# AI Chatbot – Next.js + FastAPI + Gemini

Sebuah proyek chatbot sederhana yang memadukan **Next.js** untuk frontend, **FastAPI** untuk backend, dan **Google Gemini API** sebagai model AI.  
Frontend menangani UI dan input chat, sementara backend memproses pesan dan mengembalikan respons dari model Gemini.

---

## ✨ Features

- 💬 Chat realtime (non-streaming)  
- ⚡ UI simpel dan responsif  
- 🔌 Backend API menggunakan FastAPI  
- 🔐 Menggunakan **.env** untuk keamanan API key  
- 🐳 Dapat dijalankan secara lokal atau menggunakan Docker  

---

## 📂 Table of Contents

 [Installation](#-installation--running)
 [Backend Setup (FastAPI)](#-backend-fastapi)
 [Frontend Setup (Next.js)](#-frontend-nextjs)
 [API Testing](#-api-testing)
 [Project Structure](#-project-structure)
 [Build & Deploy](#-build--deploy)
 [License](#-license)

---

## 📦 Installation & Running

### . Clone Repository
```sh
git clone <repo-url>
cd <folder-project>
🔧 Backend (FastAPI)
Masuk ke folder backend:
sh
Salin kode
cd backend
Install dependencies:
sh
Salin kode
pip install -r requirements.txt
Buat file .env:
ini
Salin kode
GEMINI_API_KEY=apikey_anda
Jalankan server FastAPI:
sh
Salin kode
uvicorn main:app --reload --port 8000
Backend berjalan di:

👉 http://localhost:8000

💻 Frontend (Next.js)
Masuk ke folder frontend:
sh
Salin kode
cd ..
cd chatbot-ui
Install dependencies:
sh
Salin kode
npm install
Buat file .env.local:
ini
Salin kode
NEXT_PUBLIC_API_URL=http://localhost:8000
Jalankan Next.js:
sh
Salin kode
npm run dev
Frontend berjalan di:

👉 http://localhost:3000

🧪 API Testing
FastAPI sudah dilengkapi dokumentasi otomatis Swagger:

👉 http://localhost:8000/docs

🛠 Project Structure
pgsql
Salin kode
project-root/
│
├── backend/
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
└── chatbot-ui/
    ├── app/
    ├── public/
    ├── package.json
    └── .env.local
🚀 Build & Deploy
Frontend (Next.js)
Deploy ke Vercel (recommended)

Bisa juga ke Netlify / VPS

Backend (FastAPI)
Dapat dideploy menggunakan:

🐳 Docker

🚆 Railway

🪰 Fly.io

🖥 EC2 / VPS

Platform lain sesuai kebutuhan

Dockerfile dapat ditambahkan jika diperlukan.

📜 License
Proyek ini bebas digunakan untuk pembelajaran atau pengembangan.
