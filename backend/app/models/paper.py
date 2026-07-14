from pydantic import BaseModel

class PaperRequest(BaseModel):
    className: str
    subject: str
    marks: int
    difficulty: str