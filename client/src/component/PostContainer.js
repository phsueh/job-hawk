import React from 'react'
import Post from './Post'
import PostForm from './PostForm'


export default function PostContainer({posts, userId, addComment, addPost, deletePost, deleteComment}) {
    // console.log(comments) 
    const postList = posts.map(post => {
        return <Post key={post.id} post={post} userId={userId} addComment={addComment} deletePost={deletePost} deleteComment={deleteComment}/>
    })
    
    return (
        <div className='border'>
            <h2>Job Forum</h2>
            {postList}
            {posts.length > 0 ? <PostForm userId={userId} addPost={addPost}/> : ''}
        </div>
    )
}
