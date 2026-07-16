from pydantic import BaseModel
from typing import Optional


class PaperRequest(BaseModel):
    className: str
    subject: str
    marks: int
    difficulty: str


class PaperResponse(BaseModel):
    user_email: str
    className: str
    subject: str
    marks: int
    difficulty: str
    paper: str
    pdf_name: str
    created_at: Optional[str] = None