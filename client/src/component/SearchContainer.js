import React from 'react'
import SearchResult from './SearchResult'

export default function SearchContainer(props) {

  let renderSearchResults = props.jobs.map((jobsObj) => {
      return <SearchResult key={jobsObj.MatchedObjectId} jobDescription={jobsObj.MatchedObjectDescriptor}/>
  })

  return renderSearchResults
    
}
