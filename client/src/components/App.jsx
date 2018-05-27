import React from 'react';
import 'bootstrap';
import $ from 'jquery';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'
import AddMovie from './AddMovie.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      searchedMovies: [],
      searchMessage: ''
    }

    this.searchMovies = this.searchMovies.bind(this);
  }

  componentDidMount() {
    this.getMovies();
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

  searchMovies(searchMovie) {
    let search = searchMovie.toLowerCase();
    this.setState({
      searchedMovies: this.state.movies.filter(movie => 
        movie.title.toLowerCase().includes(search)
      )
    }, () => {
      if (this.state.searchedMovies.length === 0) {
        this.setState({searchMessage: 'no movies found :('})
      } else {
        this.setState({searchMessage: ''});
      }
    });
  }

  render() {
    return (
      <div className="container">
        <AddMovie />
        <Search onSubmit={this.searchMovies}/>
        {this.state.searchMessage}
        <MovieList movies={this.state.searchedMovies} />
      </div>
    )
  }
}

export default App;