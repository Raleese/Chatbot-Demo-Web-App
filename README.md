# Chatbot Demo Web App

A full-stack chatbot demo with two response modes:

- `rule`: deterministic rule-based replies from the backend.
- `ai`: Gemini-powered replies using the Google GenAI SDK.

The frontend now renders markdown-style Gemini output correctly (bold text, numbered lists, bullet lists, code, links).

## Screenshots

<img width="2873" height="1328" alt="image" src="https://github.com/user-attachments/assets/f9fb62ef-6970-4f56-84b7-c4b8c27a4eee" />
<img width="2878" height="1343" alt="image" src="https://github.com/user-attachments/assets/e777ce43-60a4-4b0c-9e3f-5948a3c7976a" />
<img width="2879" height="1353" alt="image" src="https://github.com/user-attachments/assets/f6ea9aac-bfe4-42a8-8998-1cfe9935d077" />

## Tech Stack

- Backend: FastAPI, Uvicorn, Pydantic
- Frontend: React + TypeScript + Vite + Tailwind CSS
- AI: google-genai (Gemini)
- Tests: pytest (backend)

## Project Structure

```text
backend/
	app/
		chatbot/
		models/
		routes/
	tests/
frontend/
	src/
docker-compose.yml
```

## Prerequisites

- Python 3.11+
- Node.js 18+
- npm
- Docker Desktop (optional, for containerized run)

## Quick Start (Local)

### 1. Backend setup

From repository root:

```powershell
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

Create environment file:

```powershell
Copy-Item .env.example .env
```

Set your key in `.env`:

```env
GEMINI_API_KEY=your_api_key_here
```

Run backend:

```powershell
uvicorn app.main:app --reload
```

Backend URL: `http://127.0.0.1:8000`
API docs: `http://127.0.0.1:8000/docs`

### 2. Frontend setup

Open a new terminal from repository root:

```powershell
cd frontend
npm install
npm run dev
```

Frontend URL: `http://localhost:5173`

### 3. Run tests (backend)

```powershell
cd backend
venv\Scripts\python -m pytest -q
```

## Run with Docker

From repository root:

```powershell
docker compose up --build
```

Services:

- Frontend: `http://localhost:5173`
- Backend docs: `http://localhost:8000/docs`

Stop containers:

```powershell
docker compose down
```

## API

### POST `/chat`

Request body:

```json
{
	"message": "Hello",
	"mode": "rule"
}
```

Allowed values for `mode`:

- `rule`
- `ai`

Response:

```json
{
	"reply": "Hello! How can I assist you today?"
}
```

## Environment Variables

Backend (`backend/.env`):

- `GEMINI_API_KEY`: Required for `ai` mode.
- `ALLOWED_ORIGINS`: Optional in compose, already set in `docker-compose.yml`.

## Troubleshooting

### 1) `No API key was provided`

- Confirm `backend/.env` exists.
- Confirm it includes `GEMINI_API_KEY=...`.
- Restart backend after updating env values.

### 2) `403 PERMISSION_DENIED` with `CONSUMER_SUSPENDED`

This is a Google-side project/account status issue, not a code issue.

- The API key's project is suspended.
- New keys created under the same suspended project will also fail.
- Use a key from an active project with Generative Language API enabled and valid billing.

### 3) Frontend build errors in Docker

- Run `docker compose build frontend` to isolate frontend errors.
- Run `npm install` in `frontend` if dependencies changed.

### 4) CORS errors

- Default local setup expects frontend on `localhost:5173` and backend on `127.0.0.1:8000`.
- Update `ALLOWED_ORIGINS` in compose/backend if using different ports/domains.

## Notes

- Frontend markdown rendering is enabled for AI replies using `react-markdown` + `remark-gfm`.
- User messages are rendered as plain text.
