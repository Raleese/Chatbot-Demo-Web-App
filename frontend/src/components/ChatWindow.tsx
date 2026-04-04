import { useEffect, useRef } from "react";
import type { Message } from "../types/chat";
import MessageBubble from "./MessageBubble";

type Props = {
    messages: Message[];
    isDarkMode: boolean;
};

function ChatWindow({ messages, isDarkMode }: Props){
    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = chatContainerRef.current;
        if (!container) {
            return;
        }

        container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth",
        });
    }, [messages]);

    return (
        <div
            ref={chatContainerRef}
            className={`flex-1 max overflow-y-auto rounded-l border p-4 transition-colors ${
                isDarkMode
                    ? "border-gray-800 bg-gray-900"
                    : "border-gray-200 bg-gray-50"
            }`}
            style={{ height: "78vh", maxHeight: "78vh" }}
        >
            <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} isDarkMode={isDarkMode} />
                ))}
            </div>
        </div>
    )
}

export default ChatWindow