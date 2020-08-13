import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {fetchByQuery} from '../../utils/fetchByQuery'
export default class MoviesPage extends Component {
    state= {
        query: '',
        moviesList: ''
    }
    componentWillMount() {
        if(this.props.location.state) {
            fetchByQuery(this.props.location.state)
            .then(res => this.setState({
                moviesList: res.results,
                query: this.props.location.state
            }))
        }
    }
    handleChange = (e) => {
        this.setState({query: e.target.value})
    }
    handleClick = (e) => {
        e.preventDefault()
        if (this.state.query) {
            fetchByQuery(this.state.query)
            .then(res => this.setState({
                moviesList: res.results
            }))
        }
    }
    render () {
        const {moviesList, query} = this.state
        const {url, params} = this.props.match
        
        return (
            <>
            <h1>Movies List</h1>
            <form>
                <input type="text" onChange={this.handleChange}></input>
                <button type="submit" onClick={this.handleClick}>Search</button>
            </form>
            <ul>{moviesList && moviesList.map(e => 
                <li key={e.id} >
                    <Link style={{textDecoration: "none"}} to={{ pathname: `${url + `/${e.id}`}`, state: query }}>{e.title}</Link>
                </li>)}</ul>
            </>
        )
    }
};
