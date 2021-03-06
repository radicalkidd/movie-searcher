import React, { Component } from 'react';

class MovieRow extends Component {
  viewMovie() {
    console.log(this.props.movie.title)
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id;
    window.location.href = url;
  }

  render() {
    return <table key={this.props.movie.id}>
    <tbody>
      <tr>
        <td>
        <img alt='poster' width='100' src={this.props.movie.poster_src} />
        </td>
        <td>
          <h3>{this.props.movie.title}</h3>
          <h5>Release Date: {this.props.movie.release_date}</h5>
          <p>{this.props.movie.overview}</p>
          <input type="button" onClick={this.viewMovie.bind(this)} value="More Info" />
        </td>
      </tr>
    </tbody>
  </table>
  }
};

export default MovieRow;