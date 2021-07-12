import React, { Component } from 'react'

export default class SignInForm extends Component {
    
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = this.state
        const loginInfo = {username: username, password: password}
        fetch('/login', {
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(loginInfo)
        })
        .then(res => res.json())
        .then(userInfo => {
            console.log(userInfo)
            if (userInfo.token) {
                this.props.login(userInfo)
            } else {
                const errorVar = userInfo.errors[0][0]
                alert(errorVar)
                // console.log(userInfo.errors)
            }
            this.setState({
                username: '',
                password: ''
            })
        })
    }
    
    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                <input type ='text' name='username' id='username' value={this.state.username} onChange={this.handleChange}/>
                <input type ='password' name='password' id='password' value={this.state.password} onChange={this.handleChange}/>
                <button type='submit'>Login</button>
            </form>
        )
    }
}
