// Methods as props concepts

import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
    //   We are binding greetParent method here in the constructor because we are using this keyword
      this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parentName} form ${childName}`)
    }

  render() {
    return (
      <div>
          <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent