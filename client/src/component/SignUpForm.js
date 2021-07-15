import React from 'react'
import { useState } from 'react'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button';

function SignUpForm(props) {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // const [password, setPassword] = useState('');

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    } 

    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = formData
        const userData = {username: username, password: password}
        fetch('/users', {
            method: 'POST',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(userData)
        })
        .then(res => res.json())
        .then(userInfo => {props.login(userInfo)
            setFormData({
                username: '',
                password: ''
            })
        })
    }

    // console.log(formData)
    return (
        <form onSubmit={handleSubmit}>
            <input style={{color:'black'}} type ='text' name='username' id='username' value={formData.username} onChange={handleChange}/>
            <input style={{color:'black'}} type ='password' name='password' id='password' value={formData.password} onChange={handleChange}/>
            <Button type='submit' style={{color:'white'}}>Create Account</Button>
        </form>

    )
}
export default withRouter(SignUpForm)