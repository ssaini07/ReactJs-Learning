import React, { Component } from 'react'

export class LifecycleB extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Shubham'
        }
        console.log('LifecycleB Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount');
    }

    render() {
        console.log('LifecycleB render()');
        return (
            <div>
                LifecycleB
            </div>
        )
    }
}

export default LifecycleB

// This is the order of execution during Mouting phase:-

// LifecycleA.jsx:11 LifecycleA Constructor
// LifecycleA.jsx:15 LifecycleA getDerivedStateFromProps
// LifecycleA.jsx:24 LifecycleA render()
// LifecycleA.jsx:20 LifecycleA componentDidMount