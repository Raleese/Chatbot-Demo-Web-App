import { useState } from "react"
import type { ChatMode } from "./types/chat"
import ChatInput from "./components/ChatInput"
import ChatWindow from "./components/ChatWindow"
import ModeSelector from "./components/ModeSelector"

function App() {
  const [mode, setMode] = useState<ChatMode>("rule")

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-3xl font-bold underline" style={{ textAlign: "center"}}>
        Chatbot Demo
      </h1>
      <div>
        <ModeSelector mode={mode} onModeChange={setMode} />
      </div>
      <div>
        <ChatWindow messages={[]} />
      </div>
      <div className="mt-auto">
        <ChatInput mode={mode} />
      </div>
    </div>
  )
}

export default App
