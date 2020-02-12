'use strict';
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Layout from "./components/Layout";
import Game from './components/Game';
import store from "./store/store";
import '../styles/global.less';

const app = document.getElementById('app');
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/game" component={Game} />
      </Switch>
    </Router>
  </Provider>
, app);
