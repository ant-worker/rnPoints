/**
 * @description redux数据注入
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  Provider,
} from 'react-redux';
import configureStore from './store/configureStore';
import App from './App';

global.LOG = (...args) => {
  console.log('/------------------------------\\');
  console.log(...args);
  console.log('\\------------------------------/');
  return args[args.length - 1];
};

export default class Root extends Component {
  constructor() {
    super();
    this.state = {
      store: configureStore(),
    };
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
