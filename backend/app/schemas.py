from datetime import datetime
from pydantic import BaseModel, EmailStr


class LeadCreate(BaseModel):
    name: str
    email: EmailStr
    company: str | None = ""
    message: str


class LeadOut(BaseModel):
    id: int
    name: str
    email: str
    company: str | None = ""
    message: str
    created_at: datetime

    class Config:
        from_attributes = True
