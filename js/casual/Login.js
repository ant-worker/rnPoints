import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import formSubscription from './formSubscription';
import Input from './Input';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			seccode: null,
		};
	}
	submit = values => {
		console.log('submitting form', values)
	}
	render() {
		// submitting
		const { handleSubmit, passwordConfirmValide, error } = this.props;

		return (
			<View style={styles.container}>
				<Input name="uname"
					validations={[
					{
						validator: 'isRequired',
						message: '请输入用户名/手机号码',
					}, {
						validator: 'isLength',
						arguments: [6, 16],
						message: '用户名由 {ARGS[0]} 到 {ARGS[1]} 位英文和数字组成',
					}]}
					placeholder="请输入用户名/手机号码" />
				<Input name="password"
					validations={[
					{
						validator: 'isRequired',
						message: '请输入密码',
					}, {
						validator: 'isLength',
						arguments: [6, 16],
						message: '请输入 {ARGS[0]} 到 {ARGS[1]} 位密码',
					}]}
					placeholder="请输入密码"
					password
					secureTextEntry />
				<TouchableOpacity onPress={handleSubmit(this.submit)}>
					<Text style={styles.button}>登录</Text>
				</TouchableOpacity>
				{!!error && <Text style={styles.errorTips}>{error}</Text>}


			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
	},
	button: {
		backgroundColor: 'blue',
		color: 'white',
		height: 30,
		lineHeight: 30,
		marginTop: 10,
		textAlign: 'center',
	},
	errorTips: {
		color: 'red',
		lineHeight: 40,
	},
	seccodeWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});

module.exports = formSubscription('login')(Login);
