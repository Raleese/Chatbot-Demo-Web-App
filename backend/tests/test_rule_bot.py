import pytest

from app.chatbot.rule_bot import rule_bot_response


@pytest.mark.parametrize(
    ("message", "expected"),
    [
        ("hello there", "Hello! How can I assist you today?"),
        ("Can you help me?", "No. Help yourself. Don't rely on me for every single task. Have some self confidence."),
        ("bye for now", "Goodbye! Have a great day!"),
        ("what is your name", "I'm not sure how to respond to that. Can you please rephrase?"),
    ],
)
def test_rule_bot_response(message: str, expected: str) -> None:
    assert rule_bot_response(message) == expected
