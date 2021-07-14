import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import SearchContainer from './SearchContainer'

export default class Home extends Component {

    state = {
        jobs: {
            SearchResult: {SearchResultItems:[]}}, 
        searchPosition: ""
    }

    jobsData = () => {
        let host = "data.usajobs.gov";  
        let userAgent = "hsueh.paul@gmail.com";  
        let authKey = "2+06EcOimnoYpNL8oC5YLCaoNk/xe5Q5Mvm0hS809Bs=";    
        fetch(`https://data.usajobs.gov/api/search?Keyword=${this.state.searchPosition}`,      
            {    method: 'GET',      
            headers: {     
            "Content-type":"application/json",     
                "Host": host,          
                "User-Agent": userAgent,          
                "Authorization-Key": authKey      
            }  }
        ).then(res => res.json())
        .then((jobsObj) => {
            this.setState({
                jobs: jobsObj
            })
        })
    }

    handleSearchResults = (searchedPosition) => {
        console.log(searchedPosition)
        this.setState({
            searchPosition: searchedPosition
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.jobsData()
    }

    render() {

        console.log(this.state.searchPosition)

        // let searchedPosition = this.state.job.filter((positionObj, index) => {
        //     return positionObj.searchResult
        // })
        return (
            <div>
                {/* <Link to='/profile'>Profile</Link>
                <Link to='/posts'>Posts</Link> */}
                <Search handleSearch = {this.handleSearchResults}searchPosition = {this.state.searchPosition} handleSubmit = {this.handleSubmit}/>
                <SearchContainer jobs={this.state.jobs["SearchResult"]["SearchResultItems"]}/>
            </div>
        )
    }
}
