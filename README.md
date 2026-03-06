# Scholark Full-Stack (React + FastAPI + MySQL)

This project now runs as a full-stack app:

- **Frontend:** React + TypeScript + Tailwind + Bootstrap styles available
- **Backend:** Python FastAPI
- **Database:** MySQL

## Stack overview

- Frontend source: `src/`
- Backend source: `backend/app/`
- API app entry: `backend/app/main.py`

## 1) Prerequisites

- Node.js 18+
- Python 3.10+
- MySQL 8+

## 2) Setup MySQL database

```sql
CREATE DATABASE scholark_db;
```

## 3) Configure environment

Copy `.env.example` to `.env` in project root:

```bash
cp .env.example .env
```

Default values:

```env
VITE_API_BASE_URL=http://localhost:8000
DATABASE_URL=mysql+pymysql://root:password@localhost:3306/scholark_db
FRONTEND_ORIGIN=http://localhost:5173
```

## 4) Run backend (FastAPI)

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cd ..
python -m uvicorn backend.app.main:app --host 0.0.0.0 --port 8000 --reload
```

Health check:

- `http://localhost:8000/api/health`

## 5) Run frontend (React)

```bash
npm install
npm run dev
```

Frontend URL:

- `http://localhost:5173`

## API Endpoints

- `GET /api/health`
- `GET /api/leads`
- `POST /api/contact`

### POST /api/contact payload

```json
{
  "name": "Yaswanth",
  "email": "yaswanthbheemereddi@gmail.com",
  "company": "Scholark",
  "message": "Need cyber security services"
}
```

## NPM helper scripts

- `npm run backend:dev`
- `npm run backend:start`

(Requires Python + dependencies installed.)
