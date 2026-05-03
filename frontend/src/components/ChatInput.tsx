import { useState } from "react";
import type { ChatMode } from "../types/chat";
import { sendChatRequest } from "../services/chat_api";

type Props = {
    mode: ChatMode;
    onAppendMessage: (role: "user" | "bot", text: string, isLoading?: boolean) => void;
    onUpdateLastMessage: (text: string, isLoading?: boolean) => void;
    isDarkMode: boolean;
};

function ChatInput({ mode, onAppendMessage, onUpdateLastMessage, isDarkMode }: Props){
    const [answer, setAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }

    async function handleSend(text: string){
        const trimmedText = text.trim();
        if (!trimmedText || isLoading) {
            return;
        }

        onAppendMessage("user", trimmedText);
        setAnswer("");
        setIsLoading(true);

        // Add a loading message
        onAppendMessage("bot", "", true);

        try {
            const response = await sendChatRequest({ message: trimmedText, mode: mode });
            // Replace the loading message with the actual response
            onUpdateLastMessage(response.reply, false);
        } catch (err) {
            console.error("Error:", err);
            onUpdateLastMessage("Sorry, something went wrong while getting a reply.", false);
        } finally {
            setIsLoading(false);
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
                className={`flex-1 rounded-xl border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent px-4 py-2 transition-colors ${
                    isDarkMode
                        ? "border-gray-700 bg-gray-800 text-gray-100 placeholder:text-gray-400"
                        : "border-gray-300 bg-white text-gray-900"
                }`}
                value={answer}
                onChange={handleInputChange}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !isLoading) {
                        void handleSend(answer);
                    }
                }}
                disabled={isLoading}
            />
            <button 
                className={`text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                    isLoading
                        ? isDarkMode
                            ? "bg-gray-600 cursor-not-allowed"
                            : "bg-gray-400 cursor-not-allowed"
                        : isDarkMode
                            ? "bg-blue-600 hover:bg-blue-700 active:scale-95"
                            : "bg-blue-500 hover:bg-blue-600 active:scale-95"
                }`}
                onClick={() => {
                    void handleSend(answer);
                }}
                disabled={isLoading}
            >
                {isLoading ? "..." : "Send"}
            </button>
        </div>
    );
}

export default ChatInput;