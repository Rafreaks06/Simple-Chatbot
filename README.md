# Chatbot UI (Next.js + FastAPI + Docker)

Ini adalah antarmuka chatbot sederhana yang terdiri dari dua bagian utama:

*   **Next.js (frontend):** Bagian yang Anda lihat dan gunakan di browser. Ini adalah wajah dari chatbot.
*   **FastAPI (backend):** Mesin yang menggerakkan chatbot. Bagian ini menangani logika dan berkomunikasi dengan Gemini API.

Kami menggunakan Gemini API untuk membuat chatbot menjadi pintar. Untuk memudahkan menjalankan semuanya, kami menggunakan **Docker Compose**. Ini menempatkan kedua bagian (frontend dan backend) ke dalam container. Bayangkan container seperti paket rapi yang memiliki semua yang dibutuhkan setiap bagian untuk bekerja. Ini membuat pengaturan dan penggunaan chatbot di komputer Anda menjadi sangat mudah!

---

## 📋 Informasi Project

**Judul Project:** Building Docker dan Push to Registry 2025-2026

**Mahasiswa:** Muhammad Raffi Ar-rosyid

**NIM:** 1124160189

**Institusi:** Global Institute | Institut Teknologi dan Bisnis Bina Sarana Global

**Mata Kuliah:** Pengantar Cloud Computing

**Tanggal Pengumpulan:** 10 Januari 2026

---

## 📝 Ketentuan Project

Project ini memenuhi ketentuan berikut:

### ✅ Ketentuan Aplikasi
- ✓ Aplikasi source dengan tech stack unik (Next.js + FastAPI + Python)
- ✓ Akun GitHub telah dibuat dan repository telah diatur
- ✓ Akun Docker Hub telah dibuat dan dikonfigurasi

### ✅ Ketentuan Implementasi
1. **Implementasi Git dan GitHub**
   - Source code telah diupload ke repository GitHub
   - Version control dengan commit yang proper
   - Dokumentasi README

2. **Implementasi Dockerfile**
   - Dockerfile Backend (Python/FastAPI)
   - Dockerfile Frontend (Node.js/Next.js)
   - Multi-stage builds untuk optimasi
   - Manajemen dependency yang proper
   - Konfigurasi runtime

3. **Build Image Docker**
   - Image dibuild dengan tag 1.0.1
   - Image juga di-tag sebagai 'latest'
   - Ukuran image yang optimal

4. **Testing Container**
   - Container berjalan sukses secara lokal
   - Komunikasi antara frontend dan backend terverifikasi
   - Fungsionalitas aplikasi telah ditest

5. **Push ke Registry**
   - Image dipush ke Docker Hub
   - Repository: rafreaks06/chatbot-ui-frontend
   - Repository: rafreaks06/chatbot-ui-backend

6. **Testing dari Registry**
   - Image dan container lokal dihapus
   - Image di-pull dari Docker Hub
   - Aplikasi berjalan sukses dari registry

### 📊 Deliverables Project (100%)
1. **Dokumen Laporan (35%)**
   - Pendahuluan
   - Metode dan langkah-langkah (termasuk topologi)
   - Pembahasan setiap poin testing
   - Hasil dan pengujian
   - Kesimpulan
   - File: MuhammadRaffiArrosyid-DockerProject.docx

2. **Presentasi (40%)**
   - Video presentasi/demo (10-15 menit)
   - Slide presentasi (PowerPoint)
   - File: MuhammadRaffiArrosyid.pptx
   - Video: MuhammadRaffiArrosyid.mpeg

3. **File Source (25%)**
   - Source code aplikasi
   - Konfigurasi Dockerfile
   - File Docker Compose
   - Dokumentasi pendukung

---

## Daftar Isi
*   [🚀 Tech Stack](#-tech-stack)
*   [⚡ Quick Start - Jalankan dari Docker Hub](#-quick-start---jalankan-dari-docker-hub)
*   [🛠 Setup Development](#-setup-development)
*   [🐳 Menjalankan dengan Docker Compose](#-menjalankan-dengan-docker-compose)
*   [📦 Build Image Secara Manual](#-build-image-secara-manual)
*   [🔄 Push ke Docker Hub](#-push-ke-docker-hub)
*   [📁 Struktur Project](#-struktur-project)
*   [🧪 Fitur](#-fitur)
*   [📄 Lisensi](#-lisensi)

---

## 🚀 Tech Stack
Project ini menggunakan teknologi berikut:

### Frontend
*   Next.js 14 (App Router)
*   TypeScript
*   TailwindCSS
*   Fetch API

### Backend
*   FastAPI
*   Google Generative AI (Gemini)
*   Python 3.12

### Deployment
*   Docker
*   Docker Compose
*   Docker Hub (opsional) - untuk menyimpan dan mendistribusikan Docker images

---

## ⚡ Quick Start - Jalankan dari Docker Hub

**Cara tercepat untuk menjalankan aplikasi tanpa perlu clone repository atau build image!**

### Langkah 1: Buat Docker Network
```bash
docker network create chatbot-network
```

### Langkah 2: Jalankan Backend Container
```bash
docker run -d \
  --name chatbot-backend \
  --network chatbot-network \
  -p 8000:8000 \
  -e GEMINI_API_KEY="masukan api kalian sendiri untuk menjalankan dari google" \
  rafreaks06/chatbot-ui-backend:latest
```

### Langkah 3: Jalankan Frontend Container
```bash
docker run -d \
  --name chatbot-frontend \
  --network chatbot-network \
  -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL="http://chatbot-backend:8000" \
  rafreaks06/chatbot-ui-frontend:latest
```

### Langkah 4: Akses Aplikasi
- **Frontend:** http://localhost:3000
- **Backend API Docs:** http://localhost:8000/docs

### Stop dan Hapus Container
```bash
# Stop containers
docker stop chatbot-frontend chatbot-backend

# Hapus containers
docker rm chatbot-frontend chatbot-backend

# Hapus network
docker network rm chatbot-network
```

### Perintah Singkat (One-liner)
Untuk menjalankan semuanya dengan satu perintah:

```bash
# Buat network dan jalankan containers
docker network create chatbot-network 2>/dev/null || true && \
docker run -d --name chatbot-backend --network chatbot-network -p 8000:8000 \
  -e GEMINI_API_KEY="masukan api key kalian sendiri dari google" \
  rafreaks06/chatbot-ui-backend:latest && \
docker run -d --name chatbot-frontend --network chatbot-network -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL="http://chatbot-backend:8000" \
  rafreaks06/chatbot-ui-frontend:latest

# Lihat logs
docker logs -f chatbot-frontend
```

---

## 🛠 Setup Development
Ikuti langkah-langkah berikut untuk mengatur environment development:

### 1. Frontend (Next.js)
Install dependencies:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Frontend akan tersedia di:

```arduino
http://localhost:3000
```

### 2. Backend (FastAPI)
Install dependencies:

```bash
pip install -r backend/requirements.txt
```

Jalankan backend server:

```bash
uvicorn main:app --reload
```

Backend akan tersedia di:

```arduino
http://localhost:8000
```

Dokumentasi API dapat diakses di:

```bash
http://localhost:8000/docs
```

### 🔧 Environment Variables
Konfigurasi environment variables berikut:

#### Backend (`backend/.env`)

```ini
GEMINI_API_KEY=your_api_key
```

#### Frontend (`.env.local` untuk development lokal)

```ini
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Docker Compose akan secara otomatis mengganti variabel frontend menjadi:

```arduino
http://backend:8000
```

---

## 🐳 Menjalankan dengan Docker Compose
Docker Compose menyederhanakan proses build dan menjalankan aplikasi Docker multi-container.

Build dan jalankan frontend dan backend:

```bash
docker compose up --build
```

Jalankan service di background:

```bash
docker compose up -d --build
```

Stop semua service:

```bash
docker compose down
```

Frontend dapat diakses di `http://localhost:3000`, dan dokumentasi API backend di `http://localhost:8000/docs`.

---

## 📦 Build Image Secara Manual
Alternatifnya, Anda dapat build dan push Docker images secara manual.

### Backend
```bash
# Build backend image dengan version tag
docker build -f backend/Dockerfile -t rafreaks06/chatbot-ui-backend:1.0.1 backend

# Tag sebagai latest

```

### Frontend
```bash
# Build frontend image dengan version tag
docker build -t rafreaks06/chatbot-ui-frontend:1.0.1 .

# Tag sebagai latest
docker tag rafreaks06/chatbot-ui-frontend:1.0.1 rafreaks06/chatbot-ui-frontend:latest
```

### Verifikasi Images
```bash
docker images | grep chatbot-ui
```

---

## 🔄 Push ke Docker Hub

### Login ke Docker Hub
```bash
docker login
```

### Push Backend Images
```bash
docker push rafreaks06/chatbot-ui-backend:1.0.1
docker push rafreaks06/chatbot-ui-backend:latest
```

### Push Frontend Images
```bash
docker push rafreaks06/chatbot-ui-frontend:1.0.1
docker push rafreaks06/chatbot-ui-frontend:latest
```

### Verifikasi di Docker Hub
Kunjungi: https://hub.docker.com/u/rafreaks06

---

## 🧹 Clean Up dan Testing dari Registry

### Metode 1: Menggunakan Docker Run (Tanpa Source Code)

#### Hapus Container dan Images Lokal
```bash
# Stop dan hapus containers
docker stop chatbot-frontend chatbot-backend
docker rm chatbot-frontend chatbot-backend

# Hapus images lokal
docker rmi rafreaks06/chatbot-ui-backend:1.0.1
docker rmi rafreaks06/chatbot-ui-backend:latest
docker rmi rafreaks06/chatbot-ui-frontend:1.0.1
docker rmi rafreaks06/chatbot-ui-frontend:latest

# Hapus network
docker network rm chatbot-network
```

#### Pull dan Jalankan dari Registry
```bash
# Buat network baru
docker network create chatbot-network

# Pull dan jalankan backend
docker run -d \
  --name chatbot-backend \
  --network chatbot-network \
  -p 8000:8000 \
  -e GEMINI_API_KEY="masukan api kalian sendiri untuk menjalankan dari google" \
  rafreaks06/chatbot-ui-backend:latest

# Pull dan jalankan frontend
docker run -d \
  --name chatbot-frontend \
  --network chatbot-network \
  -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL="http://chatbot-backend:8000" \
  rafreaks06/chatbot-ui-frontend:latest
```

### Metode 2: Menggunakan Docker Compose (Dengan Source Code)

#### Hapus Container dan Images Lokal
```bash
# Stop dan hapus containers
docker compose down

# Hapus images
docker rmi rafreaks06/chatbot-ui-backend:1.0.1
docker rmi rafreaks06/chatbot-ui-backend:latest
docker rmi rafreaks06/chatbot-ui-frontend:1.0.1
docker rmi rafreaks06/chatbot-ui-frontend:latest
```

#### Pull dan Jalankan dari Registry
```bash
# Pull images dari Docker Hub
docker pull rafreaks06/chatbot-ui-backend:1.0.1
docker pull rafreaks06/chatbot-ui-frontend:1.0.1

# Jalankan menggunakan Docker Compose (akan menggunakan registry images)
docker compose up -d
```

### Verifikasi Aplikasi
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/docs

### Cek Status Container
```bash
# Lihat container yang sedang berjalan
docker ps

# Lihat logs backend
docker logs chatbot-backend

# Lihat logs frontend
docker logs chatbot-frontend

# Follow logs secara realtime
docker logs -f chatbot-frontend
```

---

## 📁 Struktur Project
```bash
chatbot-ui/
│
├── app/                     # Halaman frontend Next.js
├── backend/                 # Backend FastAPI
│   ├── main.py
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env
│
├── public/
├── Dockerfile               # Dockerfile Frontend
├── docker-compose.yml
├── .env.local
└── README.md
```

---

## 🧪 Fitur
*   Chat UI dengan auto-scroll
*   Integrasi Gemini API
*   Frontend & backend yang di-dockerize untuk deployment mudah
*   Pemisahan arsitektur yang bersih
*   Multi-stage Docker builds untuk optimasi
*   Orkestrasi Docker Compose
*   Dipublikasikan ke Docker Hub registry
*   **Quick deployment tanpa perlu source code** - langsung pull dari Docker Hub!

---

## 🎓 Topologi Project

### Gambaran Arsitektur
```
┌─────────────────┐
│   User Browser  │
└────────┬────────┘
         │ HTTP
         ▼
┌─────────────────────────────────────┐
│      Docker Network (Bridge)        │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Frontend Container          │  │
│  │  Next.js (Port 3000)         │  │
│  └──────────┬───────────────────┘  │
│             │ HTTP                  │
│             ▼                       │
│  ┌──────────────────────────────┐  │
│  │  Backend Container           │  │
│  │  FastAPI (Port 8000)         │  │
│  │  + Integrasi Gemini API      │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Komunikasi Container
- Frontend berkomunikasi dengan backend melalui internal Docker network
- Backend terhubung ke Gemini API eksternal untuk respons AI
- Port 3000 dan 8000 di-expose ke host machine

---

## 📊 Hasil Testing

### Testing Lokal ✓
- ✅ Frontend dapat diakses di http://localhost:3000
- ✅ Backend API dapat diakses di http://localhost:8000
- ✅ Dokumentasi API tersedia di http://localhost:8000/docs
- ✅ Komunikasi Frontend-Backend berjalan lancar
- ✅ Integrasi Gemini AI berfungsi

### Testing dari Registry ✓
- ✅ Images berhasil di-push ke Docker Hub
- ✅ Images berhasil di-pull dari Docker Hub
- ✅ Aplikasi berjalan dengan benar dari registry images
- ✅ Tidak perlu rebuild untuk deployment
- ✅ Quick deployment dengan `docker run` berhasil

### Detail Image
| Nama Image | Tag | Ukuran | Docker Hub |
|------------|-----|--------|------------|
| rafreaks06/chatbot-ui-frontend | 1.0.1, latest | ~250MB | [Link](https://hub.docker.com/r/rafreaks06/chatbot-ui-frontend) |
| rafreaks06/chatbot-ui-backend | 1.0.1, latest | ~180MB | [Link](https://hub.docker.com/r/rafreaks06/chatbot-ui-backend) |

---

## 💡 Tips Deployment

### Untuk Production
Gunakan specific version tag daripada `latest`:
```bash
docker run -d \
  --name chatbot-backend \
  --network chatbot-network \
  -p 8000:8000 \
  -e GEMINI_API_KEY="your_api_key" \
  rafreaks06/chatbot-ui-backend:1.0.1
```

### Untuk Development
Gunakan `latest` tag untuk mendapatkan versi terbaru:
```bash
docker run -d \
  --name chatbot-backend \
  --network chatbot-network \
  -p 8000:8000 \
  -e GEMINI_API_KEY="your_api_key" \
  rafreaks06/chatbot-ui-backend:latest
```

### Environment Variables
Untuk keamanan yang lebih baik, gunakan file environment:
```bash
# Buat file .env
echo "GEMINI_API_KEY=your_api_key" > backend.env

# Jalankan dengan --env-file
docker run -d \
  --name chatbot-backend \
  --network chatbot-network \
  -p 8000:8000 \
  --env-file backend.env \
  rafreaks06/chatbot-ui-backend:latest
```

---

## 📄 Lisensi
Project ini dilisensikan di bawah MIT License.

---

## 👨‍💻 Pembuat
**Muhammad Raffi Ar-rosyid**
- Institusi: Global Institute - Institut Teknologi dan Bisnis Bina Sarana Global
- Project: Pengantar Cloud Computing-Pagi (Building Docker and Push to Registry)
- Tahun: 2025-2026

---

## 🔗 Link
- GitHub Repository: [URL GitHub Anda]
- Docker Hub Backend: https://hub.docker.com/r/rafreaks06/chatbot-ui-backend
- Docker Hub Frontend: https://hub.docker.com/r/rafreaks06/chatbot-ui-frontend
- Dokumentasi: Lihat laporan project (MuhammadRaffiArrosyid-DockerProject.docx)
- Presentasi: Lihat slide (MuhammadRaffiArrosyid.pptx)
