import React from 'react'

export default function Comment({comment}) {
    return (
        <div>
            <h5>{comment.username}</h5>
            <p>{comment.content}</p>
        </div>
    )
}
