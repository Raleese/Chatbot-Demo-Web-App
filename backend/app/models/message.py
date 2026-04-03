from pydantic import BaseModel
from typing import Literal

class ChatRequest(BaseModel):
    message: str
    mode: Literal["ai", "rule"]

class ChatResponse(BaseModel):
    reply: str
