import type { Message } from "../types/chat";
import AnimatedText from "./AnimatedText";
import TypingIndicator from "./TypingIndicator";

type Props = {
    message: Message;
    isDarkMode: boolean;
}

function MessageBubble({ message, isDarkMode }: Props) {
    const isUser = message.role === "user";

    return (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"} animate-fadeIn`}>
        <div
            className={`max-w-[75%] rounded-2xl px-4 py-2 shadow-md transition-all duration-300 ${
            isUser
                ? "bg-blue-600 text-white shadow-blue-500/20"
                : isDarkMode
                    ? "bg-gray-800 text-gray-100 border border-gray-700 shadow-gray-900/50"
                    : "bg-white text-gray-900 border border-gray-200 shadow-gray-200/50"
            }`}
        >
            {message.isLoading ? (
                <TypingIndicator />
            ) : (
                <div className="leading-relaxed">
                    <AnimatedText text={message.text} speed={15} />
                </div>
            )}
        </div>
        </div>
    );
}

export default MessageBubble;