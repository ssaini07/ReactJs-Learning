import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef() //This is step 1. 
        // 2 step is to attach this Ref to our input element in the render method for that we will use Ref reserve attribute.
        // 3 step is to call the focus method on the input element.
        //Declaring Refs in the constructor so that they can be referenced in the component.
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef);
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo