import type { Message } from "../types/chat";

type Props = {
    message: Message;
    isDarkMode: boolean;
}

function MessageBubble({ message, isDarkMode }: Props) {
    const isUser = message.role === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
        <div
            className={`max-w-[75%] rounded-2xl px-4 py-2 shadow-sm ${
            isUser
                ? "bg-blue-600 text-white"
                : isDarkMode
                    ? "bg-gray-800 text-gray-100 border border-gray-700"
                    : "bg-white text-gray-900 border border-gray-200"
            }`}
        >
            {message.text}
        </div>
        </div>
    );
}

export default MessageBubble;