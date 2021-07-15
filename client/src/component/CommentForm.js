import React from 'react'
import { useState } from 'react'
import { Form, Input, Button } from 'antd'

export default function CommentForm({postId, userId, addComment}) {
    
    const [comment, setComment] = useState('')
    
    const handleSubmit = (e) => {
        // e.preventDefault()
        // let content = e.target.comment.textContent
        const CommentObj = {
            user_id: userId,
            post_id: postId,
            content: comment
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
        <div>
            <Form className='commentForm' size='medium' layout='horizontal' name="basic" labelCol={{span: 0}} onFinish={handleSubmit} wrapperCol={{span: 18}}>
                <Form.Item label='New Comment: ' ><Input.TextArea type='text' name='comment' id='comment' value={comment} onChange={handleChange}/></Form.Item>
                <Form.Item wrapperCol={{span: 0, offset: 13}}><Button type='default' htmlType="submit">Submit</Button></Form.Item>
            </Form> 
            
        </div>
  )
}
