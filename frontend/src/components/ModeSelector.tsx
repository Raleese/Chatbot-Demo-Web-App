import type { ChatMode } from "../types/chat";

type Props = {
    mode: ChatMode;
    onModeChange: (mode: ChatMode) => void;
};

function ModeSelector({ mode, onModeChange }: Props){
    return (
        <div>
            <select>
                <option value="rule" selected={mode === "rule"} onClick={() => onModeChange("rule")}>Rule-Based</option>
                <option value="ai" selected={mode === "ai"} onClick={() => onModeChange("ai")}>AI-Based</option>
            </select>
        </div>
    )
}

export default ModeSelector