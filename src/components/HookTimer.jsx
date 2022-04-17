import React from 'react'

function HookTimer() {

    const [timer, setTimer] = React.useState(0)

    const intervalRef = React.useRef()

    React.useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        };
    }, [])

    return (
        <div>
            Hook timer: {timer}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    )
}

export default HookTimer