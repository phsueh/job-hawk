import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './component/Home'
import PostContainer from './component/PostContainer'
import SignInForm from './component/SignInForm'
import SignUpForm from './component/SignUpForm'
import ProfileForm from './component/ProfileForm'
import Profile from './component/Profile'


class App extends Component {

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
      // console.log("Runs This")
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
    // console.log(userInfo)
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
        posts: userInfo.posts,
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
    this.props.history.push('/')
  }

  addComment = (newCommentObj) => {
    const CurrentPost = this.state.posts.find(post => post.id === newCommentObj.post_id)
    CurrentPost.comments = [...CurrentPost.comments, newCommentObj]
    const newPostArr = this.state.posts.map(post => {
      if (post.id === CurrentPost.id) {
        return CurrentPost
      } else {
        return post
      }
    })
    this.setState({
      posts: newPostArr
    })
  }

  render() {
    // console.log(this.state.posts)
    return (
      <Switch>
        <Route exact path='/'>
          <SignInForm login={this.login}/>
          <SignUpForm login={this.login}/>
          <Home username={this.state.username} logout={this.logOut}/>
        </Route>
        <Route exact path='/home'>
          <button onClick={this.logOut}>log out</button>
          <Profile user={this.state}/>
          <PostContainer posts={this.state.posts} userId={this.state.id} addComment={this.addComment}/>
        </Route>
        <Route exact path='/editprofile'>
          <ProfileForm updateProfile={this.updateProfile} user={this.state}/>
        </Route>
      </Switch>
    )
  }
}
export default withRouter(App)