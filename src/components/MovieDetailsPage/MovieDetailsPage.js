import React, {Component, lazy, Suspense} from 'react'
import {Route, Link, NavLink, Switch} from 'react-router-dom'

const Cast = lazy(() => import('./Cast' /*webpackChunkName: "Cast"*/))
const Reviews = lazy(() => import('./Reviews' /*webpackChunkName: "Reviews"*/))


export default class DetailsPage extends Component {
    state ={
        movieId: ''
    }
    goBack = () => {
        this.props.history.goBack()
    }
    componentDidMount() {
            fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.movieId}?api_key=aa6b49b4a92b8bba4f60505b2dce7c94&language=en-US`)
            .then(res => res.json())
            .then(fullInfo => this.setState({fullInfo}))
    }
    
    render () {
        const {fullInfo:fi} = this.state
        return(
            <>
                {this.props.location.state ? 
                <div><Link to={{ pathname: '/movies', state: this.props.location.state }}><button>Go+Back</button></Link><hr/></div>
                : <Link to="/"><button>Go+Back</button></Link>}
                
                {fi && 
                <div><h1>{fi.title} ({fi.release_date.substring(0,4)})</h1>
                    <img src={`http://image.tmdb.org/t/p/w185/`+`${fi.poster_path}`}/>
                    <h2>Rating: ★ {fi.vote_average}</h2>
                    <hr/>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <h3 style={{marginRight: "10px"}}>Genres:</h3>{fi.genres.map(e => ` ${e.name}`)}
                    </div>
                    <hr/>
                    <p>{fi.overview}</p>
                </div>
                }
                <hr/>
                <div style={{display: "flex", justifyContent: "space-evenly"}}>
                    <NavLink activeStyle={{border: "1px solid", color: "#ddd"}} style={{border: "1px solid rgba(0,0,0,0)", padding: "0px 10px",  textDecoration: "none", color: "#111", marginRight: "15px"}} to={this.props.match.url + `/cast`}><h3 style={{margin: "5px"}}>Show Cast</h3></NavLink>
                    <NavLink activeStyle={{border: "1px solid", color: "#ddd"}} style={{border: "1px solid rgba(0,0,0,0)", padding: "0px 10px",  textDecoration: "none", color: "#111"}} to={this.props.match.url + `/reviews`}><h3 style={{margin: "5px"}}>Reviews</h3></NavLink>
                </div>
                <Suspense>
                <Switch>
                    <Route path={this.props.match.path + `/cast`} component={Cast}/>
                    <Route path={this.props.match.path + `/reviews`} component={Reviews}/>
                </Switch>
                </Suspense>
            </>
        )
    }
};
