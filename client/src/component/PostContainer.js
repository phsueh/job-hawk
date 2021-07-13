import React from 'react'
import Post from './Post'

export default function PostContainer({posts, userId, addComment}) {
    // console.log(comments) 
    const postList = posts.map(post => {
        return <Post key={post.id} post={post} userId={userId} addComment={addComment}/>
    })
    
    return (
        <div>
            <h2>Job Forum</h2>
            {postList}
        </div>
    )
}
