import React from 'react'
import CommentContainer from './CommentContainer'
import CommentForm from './CommentForm'
import { Comment, Tooltip, Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
// import moment from 'moment';


export default function Post({post, userId, addComment, deletePost, deleteComment}) {
    
    const handleClick = (e) => {
        const toggle = e.target.nextElementSibling.style.display === "none" ? "block" : "none"
        e.target.nextElementSibling.style.display = toggle
        e.target.textContent === '︿' ? e.target.textContent='Comments' : e.target.textContent='︿'
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
    
    return (
        <div>
            <Comment author={post.username} content={post.content} actions={deleteButton()}
            // datetime={
                // <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                // <span>{moment().fromNow()}</span>
                // </Tooltip>}
            />           
                <button type='primary' onClick={handleClick}>Comments</button>
            <div style={{display: 'none'}}>
                <CommentForm postId={post.id} userId={userId} addComment={addComment}/>
                {renderComments()}
            </div>
        </div>
    )
}
