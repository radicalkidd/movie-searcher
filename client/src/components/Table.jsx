import React, { Component } from 'react';
import tmdbLogo from '../icons/tmdb_logo.png'
import '../styling/app.css';

class Table extends Component {
  render() {
    return (
      <div className='table'>
        <table className='titleBar'>
          <tbody>
            <tr>
              <td>
                <img width='60' src={tmdbLogo}/>
              </td>
              <td width="8" />
              <td>
                <h1>Search The MovieDB</h1>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;