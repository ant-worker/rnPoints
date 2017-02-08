import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	StatusBar,
	Platform,
	TouchableOpacity,
} from 'react-native';
import LoginOut from '../casual/LoginOut';
import Racing from '../page/Racing';
import FormTest from '../casual/FormTest';
import Register from '../casual/Register';
import Login from '../casual/Login';
import Apply from '../casual/Apply';
import CamerarollTest from '../casual/CamerarollTest';
import TestKeyboardAvoidingView from '../casual/TestKeyboardAvoidingView';
import CameraTest from '../casual/CameraTest';


// console.log(test());
export default class Main extends Component {
  constructor(props) {
    super(props);
  }
  _pressButton = () => {
    const { navigator } = this.props;
    console.log(navigator);
    if (navigator) {
			navigator.push({
        name: 'Racing',
        component: Racing,
      });
    }
  }
  render() {
    const { navigator } = this.props;

    return (
      <ScrollView
        style={styles.container}
      >
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text> Tab组件 Tab组件 Tab组件 </Text>
        </TouchableOpacity>

				<Text>fdsfds我是APP2221</Text>

				{/* <LoginOut /> */}
				{/* <FormTest/> */}
				{/* <Register/> <Login />
				<Apply />
				<CamerarollTest />
				<CameraTest navigator={navigator} />*/}


				<Apply />
			</ScrollView>
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
