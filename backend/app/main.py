import os
from dotenv import load_dotenv
from fastapi import Depends, FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from .database import Base, engine, get_db
from .models import Lead
from .schemas import LeadCreate, LeadOut

load_dotenv()

app = FastAPI(title="Scholark FastAPI Backend", version="1.0.0")

frontend_origin = os.getenv("FRONTEND_ORIGIN", "http://localhost:5173")
app.add_middleware(
    CORSMiddleware,
    allow_origins=[frontend_origin, "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
def on_startup() -> None:
    Base.metadata.create_all(bind=engine)


@app.get("/api/health")
def health():
    return {"status": "ok", "service": "scholark-fastapi"}


@app.get("/api/leads", response_model=list[LeadOut])
def get_leads(db: Session = Depends(get_db)):
    return db.query(Lead).order_by(Lead.id.desc()).all()


@app.post("/api/contact", response_model=LeadOut, status_code=201)
def create_contact(payload: LeadCreate, db: Session = Depends(get_db)):
    if not payload.name.strip() or not payload.message.strip():
        raise HTTPException(status_code=400, detail="name and message are required")

    lead = Lead(
        name=payload.name.strip(),
        email=payload.email.strip(),
        company=(payload.company or "").strip(),
        message=payload.message.strip(),
    )
    db.add(lead)
    db.commit()
    db.refresh(lead)
    return lead
