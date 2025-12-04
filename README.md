# Chatbot UI (Next.js + FastAPI + Docker)

A simple chatbot interface built using **Next.js (frontend)** and **FastAPI (backend)** with Gemini API.  
Both services run using **Docker Compose** for easy deployment.

---

## 🚀 Tech Stack

### Frontend
- Next.js 16 (App Router)
- TypeScript
- TailwindCSS
- Fetch API

### Backend
- FastAPI
- Google Generative AI (Gemini)
- Python 3.12

### Deployment
- Docker
- Docker Compose
- Docker Hub (optional)

---

## 🛠 Development Setup

### 1. Frontend (Next.js)

Install dependencies:

```bash
npm install
Run development mode:

bash
Salin kode
npm run dev
Frontend available at:

arduino
Salin kode
http://localhost:3000
2. Backend (FastAPI)
Install dependencies:

bash
Salin kode
pip install -r backend/requirements.txt
Run:

bash
Salin kode
uvicorn main:app --reload
Backend available at:

arduino
Salin kode
http://localhost:8000
API docs:

bash
Salin kode
http://localhost:8000/docs
🔧 Environment Variables
Backend (backend/.env)
ini
Salin kode
GEMINI_API_KEY=your_api_key
Frontend (.env.local for local development)
ini
Salin kode
NEXT_PUBLIC_API_URL=http://localhost:8000
Docker Compose will automatically override this to:

arduino
Salin kode
http://backend:8000
🐳 Running With Docker Compose
Build and start both frontend + backend:

bash
Salin kode
docker compose up --build
Run in background:

bash
Salin kode
docker compose up -d --build
Stop all:

bash
Salin kode
docker compose down
Frontend → http://localhost:3000
Backend → http://localhost:8000/docs

📦 Building Images Manually
Backend
bash
Salin kode
docker build -f backend/Dockerfile -t <username>/chatbot-ui-backend:latest backend
docker push <username>/chatbot-ui-backend:latest
Frontend
bash
Salin kode
docker build -t <username>/chatbot-ui-frontend:latest .
docker push <username>/chatbot-ui-frontend:latest
📁 Project Structure
bash
Salin kode
chatbot-ui/
│
├── app/                     # Next.js frontend pages
├── backend/                 # FastAPI backend
│   ├── main.py
│   ├── requirements.txt
│   └── .env
│
├── public/
├── Dockerfile               # Frontend Dockerfile
├── docker-compose.yml
└── README.md
🧪 Features
Chat UI with auto-scroll

Gemini API integration

Dockerized frontend & backend

Clean architecture separation

📄 License
This project is licensed under MIT License.

yaml
Salin kode

---

Jika mau saya bisa tambahkan GIF demo atau screenshot section di README.
