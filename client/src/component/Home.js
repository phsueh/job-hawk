import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import Search from './Search'
import SearchContainer from './SearchContainer'
import { Pagination } from 'antd';

export default class Home extends Component {

    state = {
        jobs: {
            SearchResult: {SearchResultItems:[], SearchResultCountAll: 125}}, 
        searchPosition: ""
    }

    searched = ''

    jobsData = (page=1, searchedparam=this.state.searchPosition) => {
        // console.log(page)
        let host = "data.usajobs.gov";  
        let userAgent = "yisraelg3@gmail.com";  
        let authKey = "0swdO8Z858CFfgxyCfbD7BOetFc8Q+XbQnA56p2e9Lk=";    
        fetch(`https://data.usajobs.gov/api/search?Keyword=${searchedparam}&page=${page}`,      
            {    method: 'GET',      
            headers: {     
            "Content-type":"application/json",     
                "Host": host,          
                "User-Agent": userAgent,          
                "Authorization-Key": authKey      
            }  }
        ).then(res => res.json())
        .then((jobsObj) => {
            // console.log(jobsObj)
            this.setState({
                jobs: jobsObj
            })
        })
    }

    handleSearchResults = (searchedPosition) => {
        // console.log(searchedPosition)
        this.setState({
            searchPosition: searchedPosition
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.searched = this.state.searchPosition
        this.jobsData()
    }

    handleChange = (e) => {
        this.jobsData(e, this.searched)
    }

    render() {

        // console.log(this.state.searchPosition)

        // let searchedPosition = this.state.job.filter((positionObj, index) => {
        //     return positionObj.searchResult
        // })
        return (

            <div className="container" style={{backgroundImage: 'url(/background-3.jpg)'}}>
                {/* <Link to='/profile'>Profile</Link>
                <Link to='/posts'>Posts</Link> */}
                <Search handleSearch = {this.handleSearchResults}searchPosition = {this.state.searchPosition} handleSubmit = {this.handleSubmit}/>
                <SearchContainer jobs={this.state.jobs["SearchResult"]["SearchResultItems"]}/>
                <Pagination defaultCurrent={1} current total={this.state.jobs.SearchResult.SearchResultCountAll} onChange={this.handleChange} defaultPageSize={25} disabled={this.state.jobs.SearchResult.SearchResultItems.length === 0} showSizeChanger={false} style={{textAlign:'center'}}/>
            </div>
 
        )
    }
}
