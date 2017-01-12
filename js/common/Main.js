import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
} from 'react-native';
import LoginOut from '../casual/LoginOut';

export default class Main extends Component {
	render() {
		return (
			<View 
        style={styles.container}
			>	
        <Text>我是APP2221</Text>
        <LoginOut />
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
    ...Platform.select({
      ios: {
         paddingTop: 20,
      },
    }),
  },
});
