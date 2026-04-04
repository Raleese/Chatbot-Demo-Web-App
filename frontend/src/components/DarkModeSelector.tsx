type Props = {
    currentMode : boolean,
    onDarkModeChange : (mode: boolean) => void
}

function DarkModeSelector({currentMode, onDarkModeChange} : Props){

    function handleChangeMode(){
        onDarkModeChange(!currentMode)
    }

    return (
        <div>
            <button onClick={handleChangeMode}>{currentMode ? "Switch to Light Mode" : "Switch to Dark Mode"}</button>
        </div>
    )
}

export default DarkModeSelector