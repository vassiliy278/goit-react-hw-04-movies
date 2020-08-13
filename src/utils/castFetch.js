const castFetch = (movieId) => {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=aa6b49b4a92b8bba4f60505b2dce7c94`)
    .then(res => res.json())
}

export {castFetch}