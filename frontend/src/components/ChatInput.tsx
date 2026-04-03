function ChatInput(){
    return (
        <div className="flex gap-2 p-3 border-t bg-white">
            <input
                placeholder="Type your message..."
                className="flex-1 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent px-4 py-2"
            />
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                Send
            </button>
        </div>
    )
}

export default ChatInput