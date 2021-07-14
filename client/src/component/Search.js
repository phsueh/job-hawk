import React from 'react'

export default function Search(props) {

    let searchedPosition = (e) => {
        props.handleSearch(e.target.value)
        console.log(e.target.value)
    }

    return (
        <form onSubmit={props.handleSubmit}>
            <input type="text" name="search" id="search" value={props.searchPosition} onChange={searchedPosition}/>
            <button type="submit">Search</button>
        </form>
    )
}