import React from 'react'
import Post from './Post'
import PostForm from './PostForm'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

const useStyles = makeStyles((theme) => ({
    
    root: {
      width: '100%',
      maxWidth: '100ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));



export default function PostContainer({posts, userId, addComment, addPost, deletePost, deleteComment}) {
    
    const classes = useStyles();
    // console.log(comments) 
    const postList = posts.map(post => {
        return <Post key={post.id} post={post} userId={userId} addComment={addComment} deletePost={deletePost} deleteComment={deleteComment}/>
    })
    
    return (
        <div className='border'>
            <h2>Job Forum</h2>
            {posts.length > 0 ? <PostForm userId={userId} addPost={addPost}/> : ''}
            <List className={classes.root}>
            {postList}
            </List>
        </div>
    )
}
