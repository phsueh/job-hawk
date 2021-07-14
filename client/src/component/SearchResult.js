import React from 'react'

export default function SearchResult(props) {

    console.log(props)
    return (
        <div>
            <p>{props.jobDescription.PositionTitle}</p>
            <p>{props.jobDescription.PositionLocationDisplay}</p>
            <p>{props.jobDescription.OrganizationName}</p>
            <a target="_blank" href={props.jobDescription.PositionURI}>Apply</a>
        </div>
    )
}
