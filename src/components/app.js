import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
//npm install --save redux-promise
//npm install --save axios//this is same as ajax request of jquery which is simplest form