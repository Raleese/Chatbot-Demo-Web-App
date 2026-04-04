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
            <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                onClick={handleChangeMode}>{currentMode ? "Light" : "Dark"}</button>
        </div>
    )
}

export default DarkModeSelector