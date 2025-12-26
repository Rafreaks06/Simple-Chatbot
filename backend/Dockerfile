# Gunakan versi slim yang lebih spesifik
FROM python:3.12-slim

WORKDIR /app

# Install dependencies sistem jika diperlukan (opsional, tapi bagus untuk keamanan)
RUN apt-get update && apt-get install -y --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy HANYA file backend, hindari copy .env secara tidak sengaja
COPY main.py . 
# Jika ada folder lain di backend, copy secara spesifik: 
# COPY utils/ ./utils/

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]