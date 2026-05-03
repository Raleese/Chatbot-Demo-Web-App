import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Message } from "../types/chat";
import AnimatedText from "./AnimatedText";
import TypingIndicator from "./TypingIndicator";

type Props = {
    message: Message;
    isDarkMode: boolean;
}

function MessageBubble({ message, isDarkMode }: Props) {
    const isUser = message.role === "user";
    const markdownClassNames = isDarkMode
        ? "prose prose-invert prose-sm max-w-none prose-headings:mb-2 prose-headings:mt-4 prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-strong:text-inherit prose-code:text-inherit prose-code:bg-gray-700 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-gray-900 prose-pre:text-gray-100"
        : "prose prose-sm max-w-none prose-headings:mb-2 prose-headings:mt-4 prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-1 prose-strong:text-inherit prose-code:text-inherit prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-gray-100 prose-pre:text-gray-900";

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
                <div className={`leading-relaxed ${isUser ? "whitespace-pre-wrap" : ""}`}>
                    {isUser ? (
                        <AnimatedText text={message.text} speed={15} />
                    ) : (
                        <div className={markdownClassNames}>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {message.text}
                            </ReactMarkdown>
                        </div>
                    )}
                </div>
            )}
        </div>
        </div>
    );
}

export default MessageBubble;