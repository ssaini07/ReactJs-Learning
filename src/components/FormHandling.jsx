import React, { Component } from 'react'

class FormHandling extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            comments: '',
            topic: 'ReactJs'
        }
    }

    // When you assign handler to onChange event the event itself is passed as a parameter to the handler
    handleUserNameChange = (event) => {
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' value={this.state.userName} onChange={this.handleUserNameChange} />
                </div>
                <div>
                    <label>
                        Comments
                    </label>
                    <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>
                        Topic
                    </label>
                    <select value={this.state.topic} onChange={this.handleTopicChange}>
                        <option value='ReactJs'>ReactJs</option>
                        <option value='Angular'>Angular</option>
                        <option value='VueJs'>VueJs</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default FormHandling