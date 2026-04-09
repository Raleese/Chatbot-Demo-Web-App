import pytest
from pydantic import ValidationError

from app.models.message import ChatRequest, ChatResponse


def test_chat_request_accepts_valid_mode() -> None:
    request = ChatRequest(message="hello", mode="rule")

    assert request.message == "hello"
    assert request.mode == "rule"


def test_chat_request_rejects_invalid_mode() -> None:
    with pytest.raises(ValidationError):
        ChatRequest(message="hello", mode="unknown")


def test_chat_response_shape() -> None:
    response = ChatResponse(reply="Hi")

    assert response.reply == "Hi"
