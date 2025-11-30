from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google import generativeai as genai
from dotenv import load_dotenv
import os

load_dotenv()  # baca file .env

API_KEY = os.getenv("GEMINI_API_KEY")
genai.configure(api_key=API_KEY)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(req: ChatRequest):
    model = genai.GenerativeModel("gemini-2.5-flash")
    response = model.generate_content(req.message)
    cleaned = response.text.replace("*", "").strip()
    return {"reply": cleaned}
