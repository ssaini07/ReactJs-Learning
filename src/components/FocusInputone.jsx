import React from 'react'
import { useRef } from 'react'

function FocusInputone() {

    const inputRef = useRef(null)
    // here inputRef is our reference variable

    React.useEffect(() => {
        // Focus the input element
        inputRef.current.focus()
        //Above line indicates that how we access the input element.
    }, [])

    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    )
}

export default FocusInputone

// How to useRefs in functional components
// step:1 Import useRef from react in the functional component.
// step:2 Create a Ref variable by calling useRef by passing in the initial value.
// step:3 Final step is to call the focus method on the input element.
