import React from 'react'
import Comment from './Comment'

export default function CommentContainer({comments, userId, deleteComment}) {
    
    const commentList = comments.map(comment => {
        return <Comment key={comment.id} comment={comment} userId={userId} deleteComment={deleteComment}/>
    })

    return (
        <div>
            {commentList}
        </div>
    )
}
