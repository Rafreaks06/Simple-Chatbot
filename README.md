# Chatbot UI (Next.js + FastAPI + Docker)

This is a super simple chatbot interface. It's made with two main parts:

*   **Next.js (frontend):** This is what you see and interact with in your browser. It's the face of the chatbot.
*   **FastAPI (backend):** This is the engine that powers the chatbot. It handles the logic and talks to the Gemini API.

We use the Gemini API to make the chatbot smart. To make it easy to get everything running, we use **Docker Compose**. This puts both parts (the frontend and backend) into containers. Think of containers like neat little packages that have everything each part needs to work. This makes it really easy to set up and use the chatbot on your computer!

---




## Table of Contents
*   [🚀 Tech Stack](#-tech-stack)
*   [🛠 Development Setup](#-development-setup)
*   [🐳 Running With Docker Compose](#-running-with-docker-compose)
*   [📦 Building Images Manually](#-building-images-manually)
*   [📁 Project Structure](#-project-structure)
*   [🧪 Features](#-features)
*   [📄 License](#-license)

---



## 🚀 Tech Stack
This project utilizes the following technologies:



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
*   Docker Hub (optional) - for storing and distributing Docker images

---



## 🛠 Development Setup
Follow these steps to set up the development environment:



### 1. Frontend (Next.js)
Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The frontend will be available at:

```arduino
http://localhost:3000
```



### 2. Backend (FastAPI)
Install dependencies:

```bash
pip install -r backend/requirements.txt
```

Run the backend server:

```bash
uvicorn main:app --reload
```

The backend will be available at:

```arduino
http://localhost:8000
```

API documentation can be accessed at:

```bash
http://localhost:8000/docs
```



### 🔧 Environment Variables
Configure the following environment variables:

#### Backend (`backend/.env`)

```ini
GEMINI_API_KEY=your_api_key
```

#### Frontend (`.env.local` for local development)

```ini
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Docker Compose will automatically override the frontend variable to:

```arduino
http://backend:8000
```



## 🐳 Running With Docker Compose
Docker Compose simplifies the process of building and running multi-container Docker applications.

Build and start both the frontend and backend:

```bash
docker compose up --build
```

Run the services in the background:

```bash
docker compose up -d --build
```

Stop all services:

```bash
docker compose down
```

The frontend will be accessible at `http://localhost:3000`, and the backend API documentation at `http://localhost:8000/docs`.



## 📦 Building Images Manually
Alternatively, you can build and push the Docker images manually.



### Backend
```bash
docker build -f backend/Dockerfile -t <username>/chatbot-ui-backend:latest backend
docker push <username>/chatbot-ui-backend:latest
```



### Frontend
```bash
docker build -t <username>/chatbot-ui-frontend:latest .
docker push <username>/chatbot-ui-frontend:latest
```



## 📁 Project Structure
```bash
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
```



## 🧪 Features
*   Chat UI with auto-scroll
*   Gemini API integration
*   Dockerized frontend & backend for easy deployment
*   Clean architecture separation



## 📄 License
This project is licensed under the MIT License.