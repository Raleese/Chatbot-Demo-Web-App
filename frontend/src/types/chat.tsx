export type ChatMode = "rule" | "ai"

export type Message = {
    id: string
    role: "user" | "bot"
    text: string
}