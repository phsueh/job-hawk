import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import Home from './component/Home'
import PostContainer from './component/PostContainer'
import SignInForm from './component/SignInForm'
import SignUpForm from './component/SignUpForm'
import ProfileForm from './component/ProfileForm'
import Profile from './component/Profile'
import Header from './component/Header'
import { Divider } from 'antd'
import { Layout, Menu } from 'antd'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const { Footer, Sider, Content } = Layout;


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
    } else {
      fetch('/posts/public')
      .then(res => res.json())
      .then(publicPosts => {
        console.log(publicPosts)
        this.setState({
          posts: publicPosts,
        })
      })
    }
  }

  updateProfile = (updatedInfo) => {
    // console.log(updatedInfo)
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
      // console.log(this.props.history)
      if (this.props.history.location.pathname === '/') {
        this.props.history.push('/home')
      }
    } else {
        alert(userInfo.errors)
    }
  }

  logOut = () => {
    const publicposts = this.state.posts.filter(post => !!post.private === false)
    console.log(publicposts)
    this.setState({
      id: 0,
      username: '',
      bio: '',
      experience: '',
      location: '',
      ask_salary: 0,
      current_position: '',
      desired_job_title: '',
      posts: publicposts,
      token: ''
    })
    localStorage.clear()
    this.props.history.push('/')
  }

  addComment = (newCommentObj) => {
    console.log(newCommentObj)
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

  addPost = (newPostObj) => {
    const newPostArr = [...this.state.posts, newPostObj]
    this.setState({
      posts: newPostArr
    })
  }

  deletePost = (deletedPost) => {
    const newPostArray = this.state.posts.filter(post => post.id !== deletedPost.id)
    this.setState({
      posts: newPostArray
    })
  }

  deleteComment = (deletedComment) => {
    const CurrentPost = this.state.posts.find(post => post.id === deletedComment.post_id)
    const newCommentArray = CurrentPost.comments.filter(comment => comment.id !== deletedComment.id)
    CurrentPost.comments = newCommentArray
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
      <>
      <Route path='/:a'>
          <Header logOut={this.logOut} user={this.state}/>
      </Route>
      <Switch>
        <Route exact path='/'>
          <AppBar position="static" edge='end'>
            <Toolbar>
              <SignInForm login={this.login}/> 
              <SignUpForm login={this.login}/>
            </Toolbar>
          </AppBar>
          <div className='mainPageContainer'>
            <Home />
            {Array.isArray(this.state.posts) ? <PostContainer posts={this.state.posts} userId={this.state.id} addComment={this.addComment} addPost={this.addPost} deletePost={this.deletePost} deleteComment={this.deleteComment}/> : ''}
          </div>
        </Route>
        <Route exact path='/editprofile'>
          <ProfileForm updateProfile={this.updateProfile} user={this.state}/>
        </Route>
        <Route exact path='/home'>
          <div className='mainPageContainer'>
            <Profile user={this.state}/>
            <Divider type="vertical"/>
           {Array.isArray(this.state.posts) ? <PostContainer posts={this.state.posts} userId={this.state.id} addComment={this.addComment} addPost={this.addPost} deletePost={this.deletePost} deleteComment={this.deleteComment}/> : ''}
          </div>
        </Route>
      </Switch>
      </>
    )
  }
}
export default withRouter(App)