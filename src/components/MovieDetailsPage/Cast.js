import React, {Component} from 'react';
import {castFetch} from './../../utils/castFetch'

export default class Cast extends Component {
    state = {
        cast: ''
    }
    componentDidMount() {
        castFetch(this.props.match.params.movieId)
        .then(res => this.setState({cast: res.cast}))
        .catch(e => console.log(e))
    }
    render() {
        console.log('casted')
        const {cast} = this.state
        return(
            <>
            {cast && 
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "space-evenly"}}>{cast.map(e => 
                <div key={e.cast_id}>
                    {e.profile_path && <div style={{ padding: "5px", flexBasis: "22%", textAlign: "center"}}>
                    <h5 style={{fontStyle: "italic", margin: "5px"}}>{e.character}</h5>
                    <h6 style={{fontStyle: "italic", margin: "5px"}}>({e.name})</h6>
                    <img style={{width: "100%"}} src={`http://image.tmdb.org/t/p/w185/`+`${e.profile_path}`}/>
                    </div>}
                </div>)}
            </div>
            }
            </>
        )
    }
};
