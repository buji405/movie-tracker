import React, { Component } from 'react';
import Header from './Header/Header'
import MovieCardListContainer from '../containers/movieCardListContainer'

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <MovieCardListContainer />
      </div>
    )
  }
}
