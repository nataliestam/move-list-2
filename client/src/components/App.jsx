import React from 'react';
import 'bootstrap';
import MovieList from './MovieList.jsx'
import Search from './Search.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
  }

  render() {
    return (
      <div className="container">
        <Search />
        <MovieList />
      </div>
    )
  }
}

export default App;