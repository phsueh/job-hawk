import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

class SignInForm extends Component {

    // useStyles = makeStyles((theme) => ({
    //     root: {
    //       flexGrow: 1,
    //     },
    //     menuButton: {
    //       marginRight: theme.spacing(2),
    //     },
    //     title: {
    //       flexGrow: 1,
    //     },
    //   }));
    
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
        })
    }
    // handleClick = (e) => {
    //     e.nextElementSibling//.style.display = 'block'
    // }

    
    
    render() {
        // console.log(this.state)
        // const classes = this.useStyles();

        return (
            <div>
            {/* <button onClick={this.handleClick} >login</button> */}
            {/* <AppBar position="static">
                <Toolbar>             */}
                    <form onSubmit={this.handleSubmit} style={{display:'block'}}>
                    <input style={{color:'black'}} type ='text' name='username' id='username' value={this.state.username} onChange={this.handleChange}/>
                    <input style={{color:'black'}} type ='password' name='password' id='password' value={this.state.password} onChange={this.handleChange}/>
                    <Button type='submit'>Login</Button>
                    </form>
                {/* </Toolbar>
            </AppBar> */}
            </div>
        )
    }
}
export default withRouter(SignInForm)