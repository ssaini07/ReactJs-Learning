import React from 'react'

function HookCounterFour() {

    const [items, setItems] = React.useState([])
    // On first iteration items is an empty array so, id will be zero which is items.length
    // and value will be a random number between 1 and 10.

    const addItem = () => {
        // The arguments to set items be an array [] declared inside setItems. First we need to spread an array using
        // ... operator, and then we push a new object.
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    // Whenever addItems is called we make a copy of all the items in the array using spread operator(...items) see in 
    // in line no 10, and to that list of copied items we simply append other object as seen in line no 16, 17 that way 
    // we are not overriding the original array.

    return (

        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map((item) => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HookCounterFour