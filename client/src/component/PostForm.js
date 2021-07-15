import React from 'react'
import { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd'


export default function PostForm({userId, addPost}) {
    
    const [post, setPost] = useState('')
    const [privateBool, setPrivateBool] = useState(false)


    const handleSubmit = (e) => {
        // e.preventDefault()
        // let content = e.target.post.textContent
        const postObj = {
            user_id: userId,
            content: post,
            private: privateBool
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
            console.log(newPostObj)
            if (newPostObj.id) {
                // console.log(newCommentObj)
                addPost(newPostObj)
            } else {
                alert(newPostObj.errors)
            }
            setPost('')
            setPrivateBool(false)
        })
    }

    const handleChange = (e) => {
        setPost(e.target.value)
    }

    const handleChangePrivate = (e) => {
        setPrivateBool(e.target.checked)
    }
    
    return (
        <div>
            <Form className='postForm' size='medium' layout='horizontal' name="basic" labelCol={{span: 4}} onFinish={handleSubmit} wrapperCol={{span: 18}}>
                <Form.Item label='New Post: ' ><Input.TextArea type='text' name='post' id='post' value={post} onChange={handleChange}/></Form.Item>
                <Form.Item style={{margin: 'auto'}}wrapperCol={{span: 0, offset: 8}}>
                <Button type='default' htmlType="submit">Post</Button>    
                <Checkbox style={{paddingLeft: '50px'}}onChange={handleChangePrivate}>Private</Checkbox>
               </Form.Item>
            </Form>
        </div>
  )
}
