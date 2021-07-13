import React from 'react'

export default function Search(props) {

    const handleChange

    const handleSearch = (event) => {

    }

    return (
        <div>
            <form onSubmit={handleSearch}>
                <input type="text" name="search" id="search"/>
            <button type="submit">Search</button>
            </form>
        </div>
    )
}
