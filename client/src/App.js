import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './component/Home'


export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/posts'>
          <PostContainer/>
        </Route>
      </Switch>
    )
  }
}
