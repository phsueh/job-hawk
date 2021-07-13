import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class SignInForm extends Component {
    
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
        .then(userInfo => {this.props.login(userInfo)
            this.setState({
                username: '',
                password: ''
            })
            this.props.history.push('/home')
        })
    }
    // handleClick = (e) => {
    //     e.nextElementSibling//.style.display = 'block'
    // }
    
    render() {
        // console.log(this.state)
        return (
            <div>
            <button onClick={this.handleClick} >login</button>
            <form onSubmit={this.handleSubmit} style={{display:'block'}}>
                <input type ='text' name='username' id='username' value={this.state.username} onChange={this.handleChange}/>
                <input type ='password' name='password' id='password' value={this.state.password} onChange={this.handleChange}/>
                <button type='submit'>Login</button>
            </form>
            </div>
        )
    }
}
export default withRouter(SignInForm)