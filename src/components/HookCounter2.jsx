import React from 'react'

function HookCounter2() {

    const initialCount = 0
    const [count, setCount] = React.useState(initialCount)

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}

export default HookCounter2