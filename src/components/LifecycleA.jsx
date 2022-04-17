import React, { Component } from 'react'
import LifecycleB from './LifecycleB';

export class LifecycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Shubham'
        }
        console.log('LifecycleA Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps');
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount');
    }

    render() {
        console.log('LifecycleA render()');
        return (
            <>
                <div>
                    LifecycleA
                </div>
                <LifecycleB />
            </>
        )
    }
}

export default LifecycleA

// This is the order of execution during Mouting phase:-

// LifecycleA.jsx:11 LifecycleA Constructor
// LifecycleA.jsx:15 LifecycleA getDerivedStateFromProps
// LifecycleA.jsx:24 LifecycleA render()
// LifecycleA.jsx:20 LifecycleA componentDidMount