import React from 'react'
import { Button, Menu} from 'antd';

export default function Header({logOut, user}) {
  
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
            <Button id='logout' type="primary" className="button is-primary" onClick={logOut}>Log out</Button>
            <Menu id='menu' mode="inline" style={{ width: 180 }} >
                <Menu.SubMenu key={2} title='Account'>
                    <Menu.Item key="1" onClick={handleClick}>Delete Account</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </div>
        <h1>Hello {user.username}</h1>
    </div>
  )
}
