import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './component/Home'
import PostContainer from './component/PostContainer'
import SignInForm from './component/SignInForm'
import SignUpForm from './component/SignUpForm'
import ProfileForm from './component/ProfileForm'


export default class App extends Component {

  state = {
    id: 0,
    username: '',
    bio: '',
    experience: '',
    location: '',
    ask_salary: 0,
    current_position: '',
    desired_job_title: '',
    posts: [],
    token: ''
  }

  componentDidMount(){
    if(localStorage.token) {
      fetch('/me', {
        headers: {
          "authorization" : localStorage.token
        }
      })
        .then(res => res.json())
        .then(this.login)
    }
  }

  updateProfile = (updatedInfo) => {
    console.log(updatedInfo)
    if (updatedInfo.id) {
      console.log("Runs This")
      this.setState({
        bio: updatedInfo.bio,
        experience: updatedInfo.experience,
        location: updatedInfo.location,
        ask_salary: updatedInfo.ask_salary,
        current_position: updatedInfo.current_position,
        desired_job_title: updatedInfo.desired_job_title,
      })
    } else {
      alert(updatedInfo.error)
    }
  }

  login = (userInfo) => {
    if (userInfo.token) {
      this.setState({
        id: userInfo.user.id,
        username: userInfo.user.username,
        bio: userInfo.user.bio,
        experience: userInfo.user.experience,
        location: userInfo.user.location,
        ask_salary: userInfo.user.ask_salary,
        current_position: userInfo.user.current_position,
        desired_job_title: userInfo.user.desired_job_title,
        posts: userInfo.user.posts,
        token: userInfo.token
      })
      localStorage.token = userInfo.token
    } else {
        alert(userInfo.errors)
    }
  }

  logOut = () => {
    this.setState({
      id: 0,
      username: '',
      bio: '',
      experience: '',
      location: '',
      ask_salary: 0,
      current_position: '',
      desired_job_title: '',
      posts: [],
      token: ''
    })
    localStorage.clear()
  }

  render() {
    console.log(localStorage.token)
    return (
      <Switch>
        <Route exact path='/'>
          <SignInForm login={this.login}/>
          <SignUpForm login={this.login}/>
          <Home username={this.state.username} logout={this.logOut}/>
        </Route>
        <Route path='/profile'>
          <ProfileForm updateProfile={this.updateProfile} user={this.state}/>
        </Route>
        <Route path='/posts'>
          <PostContainer/>
        </Route>
      </Switch>
    )
  }
}
