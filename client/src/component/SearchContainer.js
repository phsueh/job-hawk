import React from 'react'
import SearchResult from './SearchResult'
import Grid from '@material-ui/core/Grid';


export default function SearchContainer(props) {

  let renderSearchResults = props.jobs.map((jobsObj) => {
      return <SearchResult key={jobsObj.MatchedObjectId} jobDescription={jobsObj.MatchedObjectDescriptor}/>
  })

  return (
    <Grid container spacing={3} direction='column'>
      {renderSearchResults}
    </Grid>
  )
    
}
