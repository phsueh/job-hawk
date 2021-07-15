import React from 'react'
import { Button, Menu} from 'antd';
import { NavLink, Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Header({logOut, user}) {

    const classes = useStyles();
  
  const handleClick = (e) => {
    if (window.confirm("Are you sure you want to delete your account?")) {
        
        fetch(`/users/${user.id}`, {
            method: "DELETE",
            headers: {"authorization": user.token}
        })
        .then(res => res.json())
        .then(response => {
            if (response.id) {
                logOut()
            } else {
                alert(response.error)
            }
        })
    } else {
        return
    }
  }
  
    return (
    <div >
        <div className='header' >
        <AppBar position="fixed" edge='start'>
            <Toolbar >
                <Typography variant="h6" className={classes.title}>
                    <NavLink to='/home' style={{color:'white'}}>Home</NavLink>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    <NavLink to='/search' style={{color:'white'}}>Search</NavLink>
                </Typography>
                <Typography variant="h3" className={classes.title}>
                    <Link to='/home' style={{color:'white'}}>JobHawk</Link>
                </Typography>
            <Menu id='menu' mode="inline" style={{ width: 180, height:50}} >
                <Menu.SubMenu key={2} title='Account' >
                    <Menu.Item key="1" onClick={handleClick} >Delete Account</Menu.Item>
                </Menu.SubMenu>
            </Menu>
            <Button id='logout' type="primary" className="button is-primary" onClick={logOut}>Log out</Button>
            </Toolbar>
          </AppBar>
           
        </div>
        <h1>Hello {user.username}</h1>
    </div>
  )
}
