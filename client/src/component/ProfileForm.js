import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

class ProfileForm extends Component {
    
    state = {
        username: this.props.user.username || '',
        // password: this.props.user.password,
        bio: this.props.user.bio || '',
        experience: this.props.user.experience || '',
        location: this.props.user.location || '',
        ask_salary: this.props.user.ask_salary || 0,
        current_position: this.props.user.current_position || '',
        desired_job_title: this.props.user.desired_job_title || '',
    }  
 
    componentDidMount(){
        // console.log("logged in")
          fetch('/me', {
            headers: {
              "authorization" : localStorage.token
            }
          })
            .then(res => res.json())
            .then(userInfo => {
                // console.log(userInfo)
                if (userInfo.token) {
                this.setState({
                    username: userInfo.user.username || '',
                    bio: userInfo.user.bio || '',
                    experience: userInfo.user.experience || '',
                    location: userInfo.user.location || '',
                    ask_salary: userInfo.user.ask_salary || 0,
                    current_position: userInfo.user.current_position || '',
                    desired_job_title: userInfo.user.desired_job_title || '',
              })
        } else {
          alert(userInfo.error)
        }
        })
      }
    
    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`/users/${this.props.user.id}`, {
            method: 'PATCH',
            headers: {"Content-type":"application/json"},
            body: JSON.stringify(this.state)
        })
        .then(res => res.json())
        .then(updatedInfo => {this.props.updateProfile(updatedInfo)
        this.props.history.push('/home')
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        // console.log(this.state)
        // console.log(this.props.user)
        return (
            <>
            <Link to='/home'>← Back to Home</Link>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='username'>Username</label>
                <input type ='text' name='username' id='username' defaultValue={this.state.username}/>
                {/* <input type ='password' name='password' id='password' value={this.state.password}/> */}
                <br/>
                <label htmlFor='bio'>Bio</label>
                <input type ='text' name='bio' id='bio' value={this.state.bio} onChange={this.handleChange}/>
                <br/>
                <label htmlFor='experience'>Experience</label>
                <input type ='text' name='experience' id='experience' value={this.state.experience} onChange={this.handleChange}/>
                <br/>
                <label htmlFor='location'>Location</label>                
                <input type ='text' name='location' id='location' value={this.state.location} onChange={this.handleChange}/>
                <br/>
                <label htmlFor='ask_salary'>Asking Salary</label>
                <input type ='number' name='ask_salary' id='ask_salary' value={this.state.ask_salary} onChange={this.handleChange}/>
                <br/>
                <label htmlFor='current_position'>Current Position</label>
                <input type ='text' name='current_position' id='current_position' value={this.state.current_position} onChange={this.handleChange}/>
                <br/>
                <label htmlFor='desired_job_title'>Desired job title</label>
                <input type ='text' name='desired_job_title' id='desired_job_title' value={this.state.desired_job_title} onChange={this.handleChange}/>
                <br/>
                <button type='submit'>Update</button>
            </form>
            </>
        )
    }
}
export default withRouter(ProfileForm)