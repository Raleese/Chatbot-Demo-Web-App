import { useState } from "react";
import type { ChatMode } from "../types/chat";
import { sendRuleChatRequest } from "../services/rule_chat_api";

type Props = {
    mode: ChatMode;
};

function ChatInput({ mode }: Props){
    const [answer, setAnswer] = useState("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(e.target.value);
    }

    async function handleSend(text: string){
        try {
            const response = await sendRuleChatRequest({ message: text, mode: mode });
            console.log("Chatbot reply:", response.reply);
        } catch (err) {
            console.error("Error:", err);
        }
    }

    return (
        <div className="flex gap-2 p-3 border-t bg-white">
            <input
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent px-4 py-2"
                onChange={handleInputChange}
            />
            <button 
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                onClick={() => handleSend(answer)}
            >
                Send
            </button>
        </div>
    );
}

export default ChatInput;