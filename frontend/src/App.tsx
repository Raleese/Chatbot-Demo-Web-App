import ChatInput from "./components/ChatInput"
import ChatWindow from "./components/ChatWindow"
import ModeSelector from "./components/ModeSelector"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-3xl font-bold underline" style={{ textAlign: "center"}}>
        Chatbot Demo
      </h1>
      <div>
        <ModeSelector mode="ai" onModeChange={() => {}} />
      </div>
      <div>
        <ChatWindow messages={[]} />
      </div>
      <div className="mt-auto">
        <ChatInput/>
      </div>
    </div>
  )
}

export default App
