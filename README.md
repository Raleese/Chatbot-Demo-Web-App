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

Run backend server:

```powershell
uvicorn app.main:app --reload
```

Backend runs at `http://127.0.0.1:8000`.

## Frontend Setup

From the repository root:

```powershell
cd frontend
npm install
npm run dev
```

Frontend runs at `http://localhost:5173`.

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
