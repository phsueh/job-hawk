import React from 'react'
import { useState } from 'react'

export default function CommentForm({postId, userId, addComment}) {
    
    const [comment, setComment] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let content = e.target.comment.textContent
        const CommentObj = {
            user_id: userId,
            post_id: postId,
            content: content
        }
        fetch('/comments', {
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(CommentObj)
        })
        .then(res => res.json())
        .then(newCommentObj => {
            if (newCommentObj.id) {
                // console.log(newCommentObj)
                addComment(newCommentObj)
            } else {
                alert(newCommentObj.errors)
            }
            setComment('')
        })
    }

    const handleChange = (e) => {
        setComment(e.target.value)
    }
    
    return (
    <form className='commentForm' onSubmit={handleSubmit}>
        <label htmlFor='comment'>New Comment: </label>
        <textarea name='comment' id='comment' value={comment} onChange={handleChange}/>
        <input type='submit' value='Submit'/>
    </form>
  )
}
