import type { Message } from "../types/chat";
import MessageBubble from "./MessageBubble";

type Props = {
    messages: Message[];
};

function ChatWindow({ messages }: Props){
    return (
        <div className="flex-1 h-full overflow-y-auto rounded-l border border-gray-200 bg-gray-50 p-4">
            <div className="flex flex-col gap-4">
                {messages.map((msg) => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
            </div>
        </div>
    )
}

export default ChatWindow