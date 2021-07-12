import React from 'react'
import CommentContainer from './CommentContainer'
import { useState } from 'React'

export default function Post({post}) {
    
    const {comment, setComment} = useState('')

    const handleClick = (e) => {
        toggle = e.target.nextElementSibling.style.display = "none" ? "block" : "none"
        e.target.nextElementSibling.style = toggle
        e.target.text === '⌄' ? e.target.text='⌃' : e.target.text='⌄'
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        content = e.target.content.text
        comment = {
            user_id: id,
            post_id: post.id,
            content: content
        }
        fetch('/comments', {
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(comment)
        })
        .then(res => res.json())
        .then(commentObj => {
            if (commentObj.id) {
                addComment(commentObj)
            } else {
                alert(error)
            }
        })
    }

    const handleChange = (e) => {
        setComment({
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <p>{post.content}</p>
                <button onClick={handleClick}>⌄</button>
            <div style={{display: 'none'}}>
                <form classname='commentForm' onSubmit={handleSubmit}>
                    <label htmlFor={comment}>Comments</label>
                    <input name='content' type='text' value={comment} onChange={handleChange}/>
                </form>
                <CommentContainer comments={post.comments}/>
            </div>
        </div>
    )
}
