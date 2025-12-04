FROM python:3.12-slim

WORKDIR /app

# Copy requirements
COPY requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy all backend files
COPY . .

EXPOSE 8000

# Jalankan backend
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
