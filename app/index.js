import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import MovieIndex from './components/movieIndex';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers';

import ReduxThunk from 'redux-thunk';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = configureStore()

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// TODO: figure out how to get router: router

function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(ReduxThunk, middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
}
// const store = createStore(combineReducers({
//   router: routerReducer
// }),
//   devTools,
//   applyMiddleware(middleware),
//   applyMiddleware(thunk),
// )

ReactDOM.render(
<Provider store={store}>
  <ConnectedRouter history={history}>
    <App />
  </ConnectedRouter>
</Provider>, document.getElementById('main'))
