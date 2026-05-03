export type ChatMode = "rule" | "ai";

export type Message = {
    id: string;
    role: "user" | "bot";
    text: string;
    isLoading?: boolean;
}

export type RuleChatRequest = {
    message: string;
    mode: ChatMode;
}

export type RuleChatResponse = {
    reply: string;
}