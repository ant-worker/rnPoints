import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import formSubscription from './formSubscription';
import Input from './Input';
import { api } from '../services';

class Register extends Component {

	constructor(props){
		super(props);
		this.state = {
			seccode: null,
		};
	}
	/**
	 * 若请求接口一致，此方法可以放在订阅器里面
	 */
	getSeccode = () => {
		const _this = this;
		this.props.countDown();
		api.getSeccode().then(function(res){
			_this.setState({
				seccode: res.code,
			});
		}, function(res){
			// 此处应有提示： 网络有问题，稍后再试
			console.log(res);
		});
	}
	seccodeValide = (v) => {
		if (v == this.state.seccode) {
			return true;
		}
		return false;
	}


	/**
	 * 提交表单
	 */
	submit = values => {
		console.log('submitting form', values)
		setTimeout(()=>{
			// 需要存储后台返回的错误
			this.props.setBackendInfo({
				backendErrors: { phone: '电话格式错误' },
				backendRejectValue: { phone: '13535535860' },
			});
		}, 500);
	}
	render() {
		// submitting
		const { handleSubmit, error, countTotal, count, passwordConfirmValide } = this.props;
		return (
			<View style={styles.container}>
				<Input name="uname"
					validations={[
					{
						validator: 'isRequired',
						message: '请输入用户名',
					}, {
						validator: 'isLength',
						arguments: [6, 16],
						message: '用户名由 {ARGS[0]} 到 {ARGS[1]} 位英文和数字组成',
					}]}
					placeholder="请输入用户名" />
				<Input name="phone"
					validations={[
					{
						validator: 'isRequired',
						message: '请输入手机号码',
					}, {
						validator: 'isMobile',
						message: '请输入格式正确的手机号',
					}]}
					placeholder="请输入手机号码" />
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
					<Input name="password-confirm"
						validations={[{
							validator: passwordConfirmValide,
							message: '两次密码不匹配',
						}]}
						placeholder="请再次输入密码"
						password
						secureTextEntry />
					<View style={styles.seccodeWrap} >
						<Input name="seccode"
							validations={[
							{
								validator: 'isRequired',
								message: '请输入验证码',
							}, {
								validator: this.seccodeValide,
								message: '验证码有误',
							}]}
							placeholder="请输入验证码"
							style={{ flex: 1 }}

						/>
						<TouchableOpacity onPress={this.getSeccode}>
							<Text style={[styles.button, { width: 100, marginLeft: 20 }]}>{count < countTotal ? count : '发送验证码'}</Text>
						</TouchableOpacity>
					</View>

				<TouchableOpacity onPress={handleSubmit(this.submit)}>
					<Text style={styles.button}>注册</Text>
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

module.exports = formSubscription('register')(Register);

