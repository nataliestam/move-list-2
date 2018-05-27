import React from 'react';
import 'bootstrap';
import $ from 'jquery';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchedMovies: []
    }

    this.searchMovies = this.searchMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  searchMovies(searchMovie) {
    let search = searchMovie.toLowerCase();
    this.setState({
      searchedMovies: this.state.movies.filter(movie => 
        movie.title.toLowerCase().includes(search)
      )
    })
  }

  getMovies() {
    $.ajax({
      url: '/movies',
      type: 'GET'
    })
    .done((data) => {
      this.setState({movies: data, searchedMovies: data});
    });
  }

  render() {
    return (
      <div className="container">
        <Search onSubmit={this.searchMovies}/>
        <MovieList movies={this.state.searchedMovies} />
      </div>
    )
  }
}

export default App;