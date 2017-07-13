import React, { Component } from 'react';
import { Header } from './Header/Header';
import MovieCardListContainer from '../containers/movieCardListContainer';
import loginContainer from '../containers/loginContainer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route path='/login' component={loginContainer} />
          <MovieCardListContainer />
        </div>
      </Router>
    )
  }
}
