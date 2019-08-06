import React, { Component } from 'react';
import Table from './Table.jsx';
import SearchBar from './SearchBar.jsx';
import MovieRow from './MovieRow.jsx';
import '../styling/app.css';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {} 
    this.doSearch = this.doSearch.bind(this);
  };
  
  doSearch(searchTerm) {
    const urlStr = "https://api.themoviedb.org/3/search/movie?api_key=973eaee9d34cb2bd4a404045250138b5&query=" + searchTerm;
    $.ajax({
      url: urlStr,
      success: (searchResults) => {
        console.log('Data Fetched Successfully');
        const results = searchResults.results;
        var movieRows = [];
        
        results.forEach((movie) => {
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        });
        this.setState({rows: movieRows});
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data");
      }
    });
  };

  render() {
    return (
      <div className='body'>
        <Table />
        <SearchBar doSearch={this.doSearch} />
        {this.state.rows}
      </div>
    );
  }
};
export default App;