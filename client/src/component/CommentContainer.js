import React from 'react'
import Comment from './Comment'

export default function CommentContainer({comments}) {
    
    const commentList = comments.map(comment => {
        return <Comment key={comment.id} comment={comment}/>
    })
    
    return (
        <div>
            {commentList}
        </div>
    )
}
