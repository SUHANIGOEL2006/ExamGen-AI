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
from fastapi import Depends
from app.auth.auth import get_current_user
from datetime import datetime
from fastapi import HTTPException

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
def generate_paper(
    data: PaperRequest,
    current_user: str = Depends(get_current_user)
):

    # AI Paper
    paper = generate_question_paper(data)

    # PDF
    pdf_name = f"QuestionPaper_{datetime.now().strftime('%Y%m%d_%H%M%S')}.pdf"
    
    pdf_path = generate_pdf(
    paper,
    data.subject,
    pdf_name
)

    # Save in MongoDB
    paper_data = {
        "user_email": current_user,
        "className": data.className,
        "subject": data.subject,
        "marks": data.marks,
        "difficulty": data.difficulty,
        "paper": paper,
        "pdf_name": pdf_name,
        "created_at": datetime.now()
    }

    papers_collection.insert_one(paper_data)

    return {
        "paper": paper,
        "pdf_url": f"/download-pdf/{pdf_name}"
    }
@app.get("/download-pdf/{filename}")
def download_pdf(filename: str):

    path = os.path.join("generated_papers", filename)

    print("Requested:", filename)
    print("Looking at:", path)
    print("Exists:", os.path.exists(path))

    if not os.path.exists(path):
        raise HTTPException(status_code=404, detail="PDF not found")

    return FileResponse(
        path,
        media_type="application/pdf",
        filename=filename
    )

@app.get("/papers")
def get_papers(
    current_user: str = Depends(get_current_user)
):

    papers = []

    for paper in papers_collection.find({
        "user_email": current_user
    }):

        paper["_id"] = str(paper["_id"])

        if "created_at" in paper:
            paper["created_at"] = str(paper["created_at"])

        papers.append(paper)

    return papers