import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1>Hello {this.props.username}</h1>
                {/* <Link to='/profile'>Profile</Link>
                <Link to='/posts'>Posts</Link> */}
            </div>
        )
    }
}
