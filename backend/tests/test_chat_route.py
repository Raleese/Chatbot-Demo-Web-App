from fastapi.testclient import TestClient

from app.main import app


client = TestClient(app)


def test_chat_route_rule_mode() -> None:
    response = client.post("/chat", json={"message": "hello", "mode": "rule"})

    assert response.status_code == 200
    data = response.json()
    assert data["reply"] == "Hello! How can I assist you today?"


def test_chat_route_ai_mode_with_mock(monkeypatch) -> None:
    monkeypatch.setattr("app.routes.chat.ai_bot_response", lambda message: f"AI says: {message}")

    response = client.post("/chat", json={"message": "summarize this", "mode": "ai"})

    assert response.status_code == 200
    assert response.json()["reply"] == "AI says: summarize this"


def test_chat_route_rejects_invalid_mode() -> None:
    response = client.post("/chat", json={"message": "hello", "mode": "invalid"})

    assert response.status_code == 422
