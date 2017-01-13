/**
 * App 入口文件
 */

import React, { Component  } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import { connect } from 'react-redux';
import { networkIndicator } from './actions';
import AppNavigator from './AppNavigator';
import { login, logout } from './actions';

class App extends Component {
  constructor(props) {
    super(props);
    
  }
  componentDidMount() {
    // this.props.dispatch(networkIndicator(true));
  }
  render() {
            // barStyle="light-content"
    return (
      <View style={styles.container}>
          <StatusBar
            networkActivityIndicatorVisible = {this.props.networkIndicator}
            translucent={true}
            backgroundColor="blue"
	         />
        <AppNavigator />       
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state => {
  return {
    networkIndicator: state.networkIndicator
  }
};

module.exports = connect(mapStateToProps)(App);

