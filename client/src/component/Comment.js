import React from 'react'
import { Comment, Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

export default function CommentComponent({comment, deleteComment, userId}) {

    const handleDelete = () => {
        fetch(`/comments/${comment.id}`, {
            method: "DELETE"}
        )
        .then(res => res.json())
        .then(response => {
            if (response.id) {
                deleteComment(response)
            } else {
                alert(response.error)
            }
        })
    }

    const deleteButton = () => {
        if (comment.user_id === userId) {
            return [<Button danger onClick={handleDelete} icon={<DeleteOutlined />}size='small' shape='circle'/>]
        }
    }

    return (
        <div>
            <ListItem alignItems="flex-start">
                <ListItemText
                primary={<Comment author={comment.username} content={comment.content} actions={deleteButton()}/>}  
                />       
            </ListItem>
            <Divider variant="inset" component="li" />
        </div>
    )
}
