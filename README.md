# Chatbot Demo Web App

A full-stack chatbot demo with two response modes:

- `rule`: simple rule-based responses from the backend.
- `ai`: Gemini-powered responses using the Google GenAI SDK.

## Screenshots

<img width="2873" height="1328" alt="image" src="https://github.com/user-attachments/assets/f9fb62ef-6970-4f56-84b7-c4b8c27a4eee" />
<img width="2878" height="1343" alt="image" src="https://github.com/user-attachments/assets/e777ce43-60a4-4b0c-9e3f-5948a3c7976a" />
<img width="2879" height="1353" alt="image" src="https://github.com/user-attachments/assets/f6ea9aac-bfe4-42a8-8998-1cfe9935d077" />

## Tech Stack

- Backend: FastAPI, Uvicorn, Pydantic
- Frontend: React + TypeScript + Vite
- AI: `google-genai`

## Project Structure

```text
backend/
	app/
		chatbot/
		models/
		routes/
frontend/
	src/
```

## Prerequisites

- Python 3.11+ (project currently uses a Python 3.14 virtual environment)
- Node.js 18+
- npm

## Backend Setup

From the repository root:

```powershell
cd backend
venv\Scripts\activate
pip install -r requirements.txt
```

Create `backend/.env`:

```env
GEMINI_API_KEY=your_api_key_here
```

## Frontend Setup

From the repository root:

```powershell
cd frontend
npm install
```

Frontend runs at `http://localhost:5173`.

## Docker (running the project)

This repository includes:

- `backend/Dockerfile`
- `frontend/Dockerfile`
- `frontend/nginx.conf` (serves frontend and proxies `/api/*` to backend)
- `docker-compose.yml`

### 1. Set API key

Run:

```powershell
cp .env.example .env
```

In .env:

```env
GEMINI_API_KEY=your_api_key_here
```

### 2. Build and start all services

From repository root:

```powershell
docker compose up --build
```

### 3. Open app

- Frontend: `http://localhost:5173`
- Backend docs: `http://localhost:8000/docs`

### 4. Stop services

```powershell
docker compose down
```

### 5. Rebuild after code changes

```powershell
docker compose up --build
```

## Docker Architecture

- Frontend container serves built React assets using Nginx.
- Nginx forwards `/api/*` requests to backend container (`backend:8000`).
- Frontend code defaults to `VITE_API_BASE_URL=/api` for Docker-friendly routing.

## API

### POST `/chat`

Request body:

```json
{
	"message": "Hello",
	"mode": "rule"
}
```

`mode` supports:

- `rule`
- `ai`

Response:

```json
{
	"reply": "Hello! How can I assist you today?"
}
```

## Common Issues

- `No API key was provided`: Ensure `GEMINI_API_KEY` exists in `backend/.env`.
- Import not resolved in VS Code: Verify the selected Python interpreter matches the environment where packages were installed.
- CORS errors: Keep backend on `127.0.0.1:8000` and frontend on `localhost:5173` (or update CORS settings in backend).
