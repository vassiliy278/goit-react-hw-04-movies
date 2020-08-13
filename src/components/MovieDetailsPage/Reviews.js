import React, {Component} from 'react';
import {fetchReviews} from './../../utils/fetchReviews'
export default class Reviews extends Component {
    state = {
        reviews: ''
    }
    componentDidMount() {
        fetchReviews(this.props.match.params.movieId)
        .then(res => this.setState({reviews: res}))
        .catch(e => console.log(e))
    }
    render() {
        const {reviews} = this.state
        return(
            <>
            {reviews.total_results ? <div>{reviews.results.map(e =>
            <div key={e.id}>
                <h4 style={{textIndent: "20px", fontStyle: "italic", margin: "5px 0px"}}>{e.author}:</h4>
                <p style={{textIndent: "20px", margin: "0px 0px 30px 0px"}}>{e.content}</p>
            </div>
            )}</div> : <p style={{fontStyle: "italic"}}>No one review yet..(</p>}
            </>
        )
    }
};
