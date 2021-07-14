import React from 'react'
import { Comment, Button} from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

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
            <Comment author={comment.username} content={comment.content} actions={deleteButton()}/>
        </div>
    )
}
