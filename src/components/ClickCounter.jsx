import React, { Component } from 'react'
import withCounter from './WithCounter'

class ClickCounter extends Component {

    render() {
        // const { count } = this.state
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} times</button>
            </div>
        )
    }
}

export default withCounter(ClickCounter)