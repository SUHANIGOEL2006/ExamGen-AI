from dotenv import load_dotenv
load_dotenv()

import os
print("OpenRouter Key:", os.getenv("OPENROUTER_API_KEY"))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.models.paper import PaperRequest
from app.services.gemini_service import generate_question_paper

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "message": "Welcome to EXAMGEN AI backend"
    }

@app.post("/generate-paper")
def generate_paper(data: PaperRequest):
    paper = generate_question_paper(data)
    return {
        "paper": paper
    }