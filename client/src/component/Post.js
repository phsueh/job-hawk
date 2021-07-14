import React from 'react'
import CommentContainer from './CommentContainer'
import CommentForm from './CommentForm'


export default function Post({post, userId, addComment}) {
    
    const handleClick = (e) => {
        const toggle = e.target.nextElementSibling.style.display === "none" ? "block" : "none"
        e.target.nextElementSibling.style.display = toggle
        e.target.textContent === '︿' ? e.target.textContent='Comments' : e.target.textContent='︿'
    }
    
    return (
        <div>
            <h4>{post.username}</h4>
            <p>{post.content}</p>
                <button onClick={handleClick}>Comments</button>
            <div style={{display: 'none'}}>
                <CommentForm postId={post.id} userId={userId} addComment={addComment}/>
                <CommentContainer comments={post.comments}/>
            </div>
        </div>
    )
}
