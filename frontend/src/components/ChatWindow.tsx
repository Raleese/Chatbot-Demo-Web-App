import type { Message } from "../types/chat";
import MessageBubble from "./MessageBubble";

type Props = {
    messages: Message[];
    isDarkMode: boolean;
};

function ChatWindow({ messages, isDarkMode }: Props){
    return (
        <div
            className={`flex-1 max overflow-y-auto rounded-l border p-4 transition-colors ${
                isDarkMode
                    ? "border-gray-800 bg-gray-900"
                    : "border-gray-200 bg-gray-50"
            }`}
        >
            <div className="flex flex-col gap-4" style={{ height: "75vh", maxHeight: "75vh", overflowY: "auto" }}>
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} isDarkMode={isDarkMode} />
                ))}
            </div>
        </div>
    )
}

export default ChatWindow