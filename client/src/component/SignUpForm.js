import React from 'react'
import { useState } from 'react'

export default function SignUpForm(props) {

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
        .then(userInfo => {
            console.log(userInfo)
            if (userInfo.token) {
                props.login(userInfo)
            } else {
                alert(userInfo.error)
            }
            setFormData({
                username: '',
                password: ''
            })
        })

    }

    console.log(formData)
    return (
        <form onSubmit={handleSubmit}>
            <input type ='text' name='username' id='username' value={formData.username} onChange={handleChange}/>
            <input type ='password' name='password' id='password' value={formData.password} onChange={handleChange}/>
            <button type='submit'>Create Account</button>
        </form>

    )
}
