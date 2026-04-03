import type { Message } from "../types/chat";

type Props = {
    message: Message;
}

function MessageBubble({ message }: Props) {
    const isUser = message.role === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
        <div
            className={`max-w-[75%] rounded-2xl px-4 py-2 shadow-sm ${
            isUser
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-900 border border-gray-200"
            }`}
        >
            {message.text}
        </div>
        </div>
    );
}

export default MessageBubble;