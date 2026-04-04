from fastapi import APIRouter
from app.models.message import ChatRequest, ChatResponse
from app.chatbot.rule_bot import rule_bot_response
from app.chatbot.ai_bot import ai_bot_response

router = APIRouter()

@router.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    if request.mode == "rule":
        reply = rule_bot_response(request.message)
    elif request.mode == "ai":
        reply = ai_bot_response(request.message)

    return ChatResponse(reply=reply)