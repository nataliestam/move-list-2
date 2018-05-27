import React from 'react';
import 'bootstrap';
import $ from 'jquery';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }

    this.searchMovies = this.searchMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
  }

  searchMovies(movie) {
    console.log(movie)
  }

  getMovies() {
    $.ajax({
      url: '/movies',
      type: 'GET'
    })
    .done((data) => {
      this.setState({movies: data});
    });
  }

  render() {
    return (
      <div className="container">
        <Search onSubmit={this.searchMovies}/>
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
}

export default App;