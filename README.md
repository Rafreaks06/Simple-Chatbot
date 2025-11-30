# Project Title

A brief description of what this project does and who it's for

AI Chatbot – Next.js + FastAPI + Gemini

Proyek ini adalah chatbot sederhana yang menggunakan:

Next.js (frontend UI)

FastAPI (backend API)

Google Gemini API (model AI)

Frontend menangani tampilan dan input chat, sedangkan backend memproses pesan dan mengirimkan jawaban dari model Gemini.

✨ Fitur

Chat realtime (non-streaming)

UI simpel dan responsif

API backend terpisah (FastAPI)

Aman menggunakan .env untuk API Key

Bisa dijalankan lokal atau di-docker

📦 Instalasi & Menjalankan
1. Clone repository
git clone <repo-url>
cd <folder-project>

🔧 Backend (FastAPI)
Masuk ke folder backend
cd backend

Install dependencies
pip install -r requirements.txt

Buat file .env
GEMINI_API_KEY=apikey_anda

Jalankan server FastAPI
uvicorn main:app --reload --port 8000


Backend berjalan di:
http://localhost:8000

💻 Frontend (Next.js)
Masuk ke folder frontend
cd ..
cd chatbot-ui

Install dependencies
npm install

Buat file .env.local
NEXT_PUBLIC_API_URL=http://localhost:8000

Jalankan Next.js
npm run dev


Frontend berjalan di:
http://localhost:3000

🧪 Test API

Swagger UI tersedia di:

👉 http://localhost:8000/docs

🛠 Struktur Project
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

Untuk deployment, kamu dapat:

Deploy Next.js ke Vercel

Deploy FastAPI via:

Docker

Railway

Fly.io

EC2 / VPS

Dockerfile bisa ditambah jika diperlukan.

📜 Lisensi

Proyek ini bebas digunakan untuk pembelajaran atau pengembangan.
