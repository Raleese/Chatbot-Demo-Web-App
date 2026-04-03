from fastapi import APIRouter
from app.models.message import ChatRequest, ChatResponse
from app.chatbot.rule_bot import rule_bot_response

router = APIRouter()

@router.post("/rule_chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    if request.mode == "rule":
        reply = rule_bot_response(request.message)
    else:
        reply = "AI mode is not connected yet."

    return ChatResponse(reply=reply)