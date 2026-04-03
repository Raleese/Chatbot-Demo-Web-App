import type { RuleChatRequest, RuleChatResponse } from "../types/chat";

const API_BASE_URL = "http://127.0.0.1:8000";

export async function sendRuleChatRequest(request: RuleChatRequest): Promise<RuleChatResponse> {
    const response = await fetch(`${API_BASE_URL}/rule_chat`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
    });
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data : RuleChatResponse = await response.json();
    return data;
}