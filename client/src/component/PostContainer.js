import React from 'react'

export default function PostContainer({posts}) {
    
    const posts = posts.map(post => {
        return <Post key={post.id} post={post}/>
    })
    
    return (
        <div>
            {posts}
        </div>
    )
}
