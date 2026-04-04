import { useState } from "react";
import type { ChatMode } from "../types/chat";
import { sendChatRequest } from "../services/chat_api";

type Props = {
    mode: ChatMode;
    onAppendMessage: (role: "user" | "bot", text: string) => void;
    isDarkMode: boolean;
};

function ChatInput({ mode, onAppendMessage, isDarkMode }: Props){
    const [answer, setAnswer] = useState("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }

    async function handleSend(text: string){
        const trimmedText = text.trim();
        if (!trimmedText) {
            return;
        }

        onAppendMessage("user", trimmedText);
        setAnswer("");

        try {
            const response = await sendChatRequest({ message: trimmedText, mode: mode });
            onAppendMessage("bot", response.reply);
        } catch (err) {
            console.error("Error:", err);
            onAppendMessage("bot", "Sorry, something went wrong while getting a reply.");
        }
    }

    return (
        <div
            className={`flex gap-2 p-3 border-t transition-colors ${
                isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
            }`}
        >
            <input
                placeholder="Type your message..."
                className={`flex-1 rounded-xl border focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent px-4 py-2 transition-colors ${
                    isDarkMode
                        ? "border-gray-700 bg-gray-800 text-gray-100 placeholder:text-gray-400"
                        : "border-gray-300 bg-white text-gray-900"
                }`}
                value={answer}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        void handleSend(answer);
                    }
                }}
            />
            <button 
                className={`text-white px-4 py-2 rounded transition-colors ${
                    isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-500 hover:bg-gray-600"
                }`}
                onClick={() => {
                    void handleSend(answer);
                }}
            >
                Send
            </button>
        </div>
    );
}

export default ChatInput;