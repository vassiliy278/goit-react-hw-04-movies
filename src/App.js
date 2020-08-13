import React, {Component} from 'react';
import {Suspense, lazy} from 'react'
import {Route, Switch} from 'react-router-dom'
import Nav from './components/Nav/Nav'

const MoviesPage = lazy(() => import('./components/MoviesPage/MoviesPage' /*webpackChunkName: "MoviesPage"*/))
const MovieDetailsPage = lazy(() => import('./components/MovieDetailsPage/MovieDetailsPage' /*webpackChunkName: "MoviesDetailsPage"*/))
const Home = lazy(() => import('./components/HomePage/HomePage' /*webpackChunkName: "HomePage"*/))


const App = () => {
    return(
      <>
        <Nav/>
        <Suspense fallback={<h2>Loading</h2>}>
        <Switch>
          <Route path="/movies" exact component={MoviesPage}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="/movies/:movieId" component={MovieDetailsPage}></Route>
          <Route path="" component={Home}/>
        </Switch>
        </Suspense>
        
      </>
    )
  }

export default App