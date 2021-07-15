import React from 'react'
import CommentContainer from './CommentContainer'
import CommentForm from './CommentForm'
import { Comment, Tooltip, Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { withRouter } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    
    root: {
      width: '100%',
      maxWidth: '50ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'block',
    },
  }));


function Post({post, userId, addComment, deletePost, deleteComment, history}) {
    
    const classes = useStyles();

    const handleClick = (e) => {
        console.log(e.target.className)
        if (e.target.className !== 'ant-btn ant-btn-primary ant-btn-sm') {
            let comments = e.target.parentElement.nextElementSibling
        // console.log(e.target.parentElement.nextElementSibling)
        const toggle = comments.style.display === "none" ? "block" : "none"
        comments.style.display = toggle
        e.target.textContent === 'Comments ▲' ? e.target.textContent='Comments ▼' : e.target.textContent='Comments ▲'
        }
    }

    const renderComments = () => {
        if (post.comments.length > 0) {
            return <CommentContainer comments={post.comments} deleteComment={deleteComment} userId={userId}/>
        }
    }

    const handleDelete = () => {
        fetch(`/posts/${post.id}`, {
            method: "DELETE"}
        )
        .then(res => res.json())
        .then(response => {
            if (response.id) {
                deletePost(response)
            } else {
                alert(response.error)
            }
        })
    }

    const deleteButton = () => {
        if (post.user_id === userId) {
            return [<Button danger onClick={handleDelete} icon={<DeleteOutlined />} size='small' shape='circle'/>]
        }
    }
    // console.log(localStorage.token)
    return (
        <div >
            <ListItem alignItems="flex-start">
            <ListItemText
            primary={<Comment author={post.username} content={post.content} actions={deleteButton()}>
            <Button type={post.comments ? 'primary' : 'disabled'} size='small' onClick={handleClick}>Comments ▼</Button>
            <div style={{display: 'none'}}>
                {renderComments()}
                {history.location.pathname === '/' ? '' : <CommentForm postId={post.id} userId={userId} addComment={addComment}/> }
            </div>
            </Comment>}
            /> 
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
    )
}
export default withRouter(Post)