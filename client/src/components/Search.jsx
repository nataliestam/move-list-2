import React from 'react';

class Search extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    }

    this.updateSearch = this.updateSearch.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
  }

  updateSearch(e) {
    this.setState({search:e.target.value});
  }

  submitSearch(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.search);
    this.setState({search: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitSearch}>
          <input name="search" value={this.state.search} onChange={this.updateSearch} placeholder="Search.."></input>
          <button>Go!</button>
        </form>
      </div>
    )
  }
}

export default Search;