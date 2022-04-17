import React from 'react'

function ChildComponent(props) {

    const listenToChildComponent = () => {
        props.greetHandler('Child')
    }

    return (
        <div>
            <button onClick={() => listenToChildComponent()}>
                Greet Parent
            </button>
        </div>
    )
}

export default ChildComponent