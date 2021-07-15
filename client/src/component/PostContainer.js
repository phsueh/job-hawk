import React from 'react'
import Post from './Post'
import PostForm from './PostForm'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { withRouter } from 'react-router-dom';

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



function PostContainer({posts, userId, addComment, addPost, deletePost, deleteComment, history}) {
    
    const classes = useStyles();
    // console.log(comments) 
    const postList = posts.map(post => {
        return <Post key={post.id} post={post} userId={userId} addComment={addComment} deletePost={deletePost} deleteComment={deleteComment}/>
    })
    // console.log(history.location.pathname)
    return (
        <div id='postsContainer' className='border' style={{backgroundImage: 'url(/background-4.jpg)'}}>
            <h2>Job Forum</h2>
            {history.location.pathname === '/' ? '' : <PostForm userId={userId} addPost={addPost}/> }
            <List className={classes.root}>
            {postList}
            </List>
        </div>
    )
}
export default withRouter(PostContainer)