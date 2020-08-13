import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {fetchPopular} from '../../utils/fetchPopular'

export default class Home extends Component {
    state = {
        movies: ''
    }
    componentWillMount() {
        fetchPopular()
        .then(res => this.setState({movies: res.results}))
    }
    render() {
        const {movies} = this.state
        return(
            <>
                <ul>{movies && movies.map(e => 
                <li key={e.id}>
                    <Link style={{textDecoration: "none"}}  to={{ pathname: `${'movies'+ `/${e.id}`}`}}>{e.title}</Link>
                </li>)}</ul>
            </>
        )
    }
};
