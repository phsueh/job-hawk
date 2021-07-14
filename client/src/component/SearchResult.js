import React from 'react'

export default function SearchResult(props) {

    console.log(props)
    return (
        <div class="container">
            <p>{props.jobDescription.PositionTitle}</p> 
            <br></br>
            <p>{props.jobDescription.PositionLocationDisplay}</p>
            <br></br>
            <p>{props.jobDescription.OrganizationName}</p>
            <br></br>
            <a target="_blank" href={props.jobDescription.PositionURI}>Apply</a>
        </div>
    )
}
