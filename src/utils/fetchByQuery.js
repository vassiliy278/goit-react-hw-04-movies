const fetchByQuery = (query) => {
    return fetch(`https://api.themoviedb.org/3/search/movie?api_key=aa6b49b4a92b8bba4f60505b2dce7c94&language=en-US&page=1&include_adult=false&query=${query}`)
            .then(res => res.json())
}

export {fetchByQuery}