from dotenv import load_dotenv
load_dotenv()

import os
print("OpenRouter Key:", os.getenv("OPENROUTER_API_KEY"))

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.auth import router as auth_router
from app.models.paper import PaperRequest
from app.services.gemini_service import generate_question_paper
from fastapi.responses import FileResponse
from app.services.pdf_service import generate_pdf

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)

@app.get("/")
def home():
    return {
        "message": "Welcome to EXAMGEN AI backend"
    }

@app.post("/generate-paper")
def generate_paper(data: PaperRequest):
    paper = generate_question_paper(data)
    pdf_path = generate_pdf(
    paper,
    "QuestionPaper.pdf"
    )

    return {
    "paper": paper,
    "pdf_url": "/download-pdf"
}

@app.get("/download-pdf")
def download_pdf():

    path = "generated_papers/QuestionPaper.pdf"

    return FileResponse(
        path,
        media_type="application/pdf",
        filename="QuestionPaper.pdf"
    )