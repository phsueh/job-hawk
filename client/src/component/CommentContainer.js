import React from 'react'
import Comment from './Comment'
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    root: {
      width: '100%',
      maxWidth: '50ch',
      backgroundColor: theme.palette.background.paper,
      display: 'block',
    },
    inline: {
      display: 'inline',
    },
  }));


export default function CommentContainer({comments, userId, deleteComment}) {

    const classes = useStyles();
    
    const commentList = comments.map(comment => {
        return <Comment key={comment.id} comment={comment} userId={userId} deleteComment={deleteComment}/>
    })

    return (
        <List className={classes.root}>
            {commentList}
        </List>
    )
}
