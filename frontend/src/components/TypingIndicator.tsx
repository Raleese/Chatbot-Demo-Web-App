import "./TypingIndicator.css";

function TypingIndicator() {
    return (
        <div className="flex gap-1 items-center py-2 px-4">
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
        </div>
    );
}

export default TypingIndicator;
