import React from 'react'
import { useState } from 'react'
import { Form, Input, Button } from 'antd'


export default function PostForm({userId, addPost}) {
    
    const [post, setPost] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        let content = e.target.post.textContent
        const postObj = {
            user_id: userId,
            content: content
        }
        fetch('/posts', {
            method: 'POST',
            headers: {
                "Content-type":"application/json"
            },
            body: JSON.stringify(postObj)
        })
        .then(res => res.json())
        .then(newPostObj => {
            if (newPostObj.id) {
                // console.log(newCommentObj)
                addPost(newPostObj)
            } else {
                alert(newPostObj.errors)
            }
            setPost('')
        })
    }

    const handleChange = (e) => {
        setPost(e.target.value)
    }
    
    return (
    <form className='commentForm' onSubmit={handleSubmit}>
        <label htmlFor='post'>New Post: </label>
        <textarea name='post' id='post' value={post} onChange={handleChange}/>
        <input type='submit' value='Submit'/>
    </form>
  )
}
