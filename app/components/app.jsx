import React, { Component } from 'react';
import headerContainer from '../containers/headerContainer';
import{ Header} from '../components/Header/Header';
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
          <Route path='/' component={headerContainer} />
          <Route path='/login' component={loginContainer} />
          <Route exact path='/'component={MovieCardListContainer} />
        </div>
      </Router>
    )
  }
}
