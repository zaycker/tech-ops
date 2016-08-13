import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import React from 'react';
import { WeatherApp } from './components';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IndexRedirect, Router, Route, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import * as actions from './actions';
import store from './store';

const history = syncHistoryWithStore(hashHistory, store);

store.dispatch(actions.loadCities(true));

render((
  <Provider store={store}>
    <Router history={history}>
      <Route path="/">
        <IndexRedirect to="cities" />
        <Route path="cities" component={WeatherApp}>
          <Route
            path=":id"
            onEnter={nextState => {
              store.dispatch(actions.loadDailyCityWeatherById(nextState.params.id))
            }}
          />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.querySelector('.main'));
