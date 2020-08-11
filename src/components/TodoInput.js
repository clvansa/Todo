import React, { Component } from 'react'

export class TodoInput extends Component {
    state = {
        title: "",
        error: null
    }
    onChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        if(e.target.value.length < 3 || e.target.value.length > 25 ){
            return 'red'
        }else {
            return 'green'
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.title === '') {
            return this.setState({ error: "must not to be empty" })
        } else {
            this.setState({ error: null })
            this.props.addTodo(this.state.title)
            this.setState({ title: "" })
        }
    }

    render() {
        let error = this.state.error && <p style={{ color: "red" }}>{this.state.error}</p>
        return (
            <>
                {error}
                <form
                    onSubmit={this.handleSubmit}
                    className='form'>
                    <input
                        type="text"
                        name="title"
                        placeholder="Add todo"
                        onChange={this.onChangeHandler}
                        value={this.state.title}
                        className='input-text'
                        minLength= '3'
                        // maxLength= '25'
                        style={this.state.title.length < 3 || this.state.title.length > 25 ? {color:'red'}:{color:'green'}} />
                    <button
                        type="submit"
                        className='input-submit'>
                        hinzufügen
                </button>
                </form>
            </>
        )
    }
}

export default TodoInput

