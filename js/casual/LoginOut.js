
import React, { Component  } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
} from 'react-native';

export default class LoginOut extends Component {
	render() {
		return (
			<View style={styles.container} >
				<Text style={styles.button} >登录</Text>
				<Text style={styles.button} >注册</Text>
				<View style={styles.border} ></View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		padding: 20,
		color: 'blue',
		
	},
	border: {
		borderBottomWidth: 1,
		borderColor: 'red',
		height: 100,
		
	}
});