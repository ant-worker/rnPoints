import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	Platform,
	TouchableOpacity,
} from 'react-native';
import LoginOut from '../casual/LoginOut';
import FormTest from '../casual/FormTest';
import Racing from '../page/Racing';
import test from '../tabs/news/test';

// console.log(test());
export default class Main extends Component {
	constructor(props) {
		super(props);
	}
	_pressButton = () => {
		const { navigator } = this.props;
		if (navigator) {
			navigator.push({
			  name: 'Racing',
			  component: Racing,
			});
		}
	}
	render() {
		return (
			<View
				style={styles.container}
			>
				<TouchableOpacity onPress={this._pressButton.bind(this)}>
					<Text> Tab组件 Tab组件 Tab组件 </Text>
				</TouchableOpacity>

				<Text>fdsfds我是APP2221</Text>

				{/* <LoginOut /> */}
				<FormTest/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		...Platform.select({
			ios: {
				paddingTop: 20,
			},
			android: {
				paddingTop: Platform.Version <= 19 ? 0 : StatusBar.currentHeight,
			},
		}),
	},
});
