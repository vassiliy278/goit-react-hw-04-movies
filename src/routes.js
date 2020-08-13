import {lazy} from 'react'

export default  [
    {
        path: '/',
        label: 'Home',
        exact: true,
        component: lazy(() => 
            import('./components/HomePage/HomePage' /* webpackChunkName: "home" */)
        ),
    },
    {
        path: '/movies',
        label: 'Movies',
        exact: true,
        component: lazy(() => 
            import('./components/MoviesPage/MoviesPage' /* webpackChunkName: "moviesPage" */)
        ),
    },
    {
        path: '/movies/:movieId',
        label: 'MovieDetails',
        exact: true,
        component: lazy(() => 
            import('./components/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */)
        ),
    },
    // {
    //     path: '/movies/:movieId/cast',
    //     label: 'Cast',
    //     exact: true,
    //     component: lazy(() => 
    //         import('./components/MovieDetailsPage/Cast' /* webpackChunkName: "Cast" */)
    //     ),
    // },
    {
        path: '/movies/:movieId/reviews',
        label: 'Review',
        exact: false,
        component: lazy(() => 
            import('./components/MovieDetailsPage/Reviews' /* webpackChunkName: "Review" */)
        ),
    }
]