import { useState } from "react"
import type { ChatMode, Message } from "./types/chat"
import ChatInput from "./components/ChatInput"
import ChatWindow from "./components/ChatWindow"
import ModeSelector from "./components/ModeSelector"
import DarkModeSelector from "./components/DarkModeSelector"


function App() {
  const [mode, setMode] = useState<ChatMode>("rule")
  const [messages, setMessages] = useState<Message[]>([])
  const [isDarkModeActive, setIsDarkModeActive] = useState(false)

  function handleAppendMessage(role: "user" | "bot", text: string) {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role,
        text,
      },
    ])
  }

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors ${
        isDarkModeActive ? "bg-gray-950 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold underline" style={{ textAlign: "center"}}>
        Chatbot Demo
      </h1>
      <div className="flex flex-row justify-between">
        <ModeSelector mode={mode} onModeChange={setMode} />
        <DarkModeSelector currentMode={isDarkModeActive} onDarkModeChange={setIsDarkModeActive}/>
      </div>
      <div>
        <ChatWindow messages={messages} isDarkMode={isDarkModeActive} />
      </div>
      <div className="mt-auto">
        <ChatInput mode={mode} onAppendMessage={handleAppendMessage} isDarkMode={isDarkModeActive} />
      </div>
    </div>
  )
}

export default App
