import React, { Component } from 'react';
import '../styling/app.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }
  
  searchChangeHandler(event) {
    const searchTerm = event.target.value;
    this.props.doSearch(searchTerm);
  }

  render() {
    const search = <input className='searchBar' onChange={this.searchChangeHandler} placeholder='Search for Movie' type='search'/>
    return (
      <div>
        {search}
      </div>
    );
  }
}

export default SearchBar;