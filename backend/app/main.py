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
from app.database.database import papers_collection
from datetime import datetime

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

    # AI Paper
    paper = generate_question_paper(data)

    # PDF
    pdf_path = generate_pdf(
        paper,
        "QuestionPaper.pdf"
    )

    # Save in MongoDB
    paper_data = {
        "className": data.className,
        "subject": data.subject,
        "marks": data.marks,
        "difficulty": data.difficulty,
        "paper": paper,
        "pdf_name": "QuestionPaper.pdf",
        "created_at": datetime.now()
    }

    papers_collection.insert_one(paper_data)

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

@app.get("/papers")
def get_papers():

    papers = []

    for paper in papers_collection.find():

        paper["_id"] = str(paper["_id"])

        if "created_at" in paper:
            paper["created_at"] = str(paper["created_at"])

        papers.append(paper)

    return papers