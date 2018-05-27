import React from 'react';
import MovieListItem from './MovieListItem.jsx'

const MovieList = (props) => {
  return (
    <div className="container">
      {props.movies.map(movie => <MovieListItem key={movie.title} movie={movie} />)}
    </div>
  )
}

export default MovieList;