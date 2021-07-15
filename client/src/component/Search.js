import React from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

export default function Search(props) {

    const classes = useStyles();

    let searchedPosition = (e) => {
        props.handleSearch(e.target.value)
        console.log(e.target.value)
    }

    return (
        <div align="center" style={{paddingBottom: "75px"}}>
          <img src='./job-hawk-logo.png' alt='Logo' style={{alignText: 'center', maxWidth: '60%'}}/>
            <h1 style={{width:"800px", alignText:"center", paddingTop: "70px", paddingBottom: "25px"}}>"What is the recipe for successful achievement? To my mind there are just four essential ingredients: Choose a career you love, give it the best there is in you, seize your opportunities, and be a member of the team." — Benjamin F. Fairless</h1>
            <form onSubmit={props.handleSubmit}>
                <TextField name="search" id="outlined-search" value={props.searchPosition} onChange={searchedPosition} label="Search Job Title" type="search" variant="outlined"/>
                <IconButton size="large" color="primary" className={classes.margin} type="submit" variant="contained" >Search</IconButton>
            </form>
        </div> 
    )
}