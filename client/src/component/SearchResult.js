import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      maxWidth: 900
    },
  }));
  
  const useStyles2 = makeStyles({
    root: {
      minWidth: 260,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
      textAlign: 'center'
    },
  });
   
export default function SearchResult(props) {

    const classes2 = useStyles2();
    const classes = useStyles();
    // console.log(props)
    return (
        <div align='center'>
        <Grid item xs={12} className={classes.root}>
            <Card className={classes2.root}>
                <CardContent>
                    <Typography className={classes2.title} color="textSecondary" gutterBottom>
                        {props.jobDescription.OrganizationName}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {props.jobDescription.PositionTitle}     
                    </Typography>
                    <Typography className={classes2.pos} color="textSecondary">
                        {props.jobDescription.PositionLocationDisplay}
                    </Typography>
                    <Button size='medium' variant="contained" color="primary" target="_blank" href={props.jobDescription.PositionURI} >Apply</Button>
                </CardContent>
                    
            </Card>
        </Grid>
        </div>
    )
}
