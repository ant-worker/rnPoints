import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { reduxForm } from 'redux-form';
import Input from './Input';
import { api } from '../services';

class Form1 extends Component {
	static defaultProps={
		countT: 10,
	}
	constructor(props){
		super(props);
		this.state = {
			count: this.props.countT,
			countBtn: false,
			seccode: null,
			Error: null,
			backendErrors: null,
			backendRejectValue: null,
		};
	}
	getCount = () => {
		const _this = this;
		this.setState({
			countBtn: true,
		});
		const timer = setInterval(() => {
			this.setState({
				count: --this.state.count,
			});
			if (this.state.count <= 0) {
				clearInterval(timer);
				this.setState({
					count: this.props.countT,
					countBtn: false,
				});
			}
		}, 1000);
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
	passwordConfirmValide = (v) => {
		const { password } = this.props.formValidate.values || {};
		if (v === password) {
			return true;
		}
		return false;
	}
	submit = values => {
		console.log('submitting form', values)
		setTimeout(()=>{
			// 需要存储后台返回的错误
			this.setState({
				backendErrors: { phone: '电话格式错误' },
				backendRejectValue: { phone: '13535535860' },
			});
		},500);
	}
	componentWillReceiveProps(nextProps) {
		const { formValidate } = nextProps;
		const { syncErrors = {}, fields, active, values } = formValidate;
		this.setState({
			Error: null,
		});
		// console.log(formValidate)
		if (!!active){
			if (fields && fields[active]){
				this.setState({
					Error: (<Text style={styles.errorTips}>{syncErrors[active]}</Text>),
				});
			}
		} else {
			for (let k in syncErrors) {
				if (fields && fields[k]) {
						this.setState({
							Error: (<Text style={styles.errorTips}>{syncErrors[k]}</Text>),
						});
				}
				break;
			}
		}
		if (!this.state.Error && !!this.state.backendErrors && JSON.stringify(this.state.backendErrors) !== '{}') {
			let backendErrors = this.state.backendErrors;
			for (let k in backendErrors) {
				if (values[k] != this.state.backendRejectValue[k]){
					delete backendErrors[k];
					this.setState({
						backendErrors,
					})
				} else {
					this.setState({
							Error: (<Text style={styles.errorTips}>{backendErrors[k]}</Text>),
						});
					break;
				}
			}
		}
	}
	render() {
		// submitting
		const { handleSubmit } = this.props;
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
						validator: this.passwordConfirmValide,
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
					<TouchableOpacity onPress={this.getCount}>
						<Text style={[styles.button, { width: 100, marginLeft: 20 }]}>{this.state.countBtn ? this.state.count : '发送验证码'}</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity onPress={handleSubmit(this.submit)}>
					<Text style={styles.button}>注册</Text>
				</TouchableOpacity>
				{this.state.Error}

			</View>
		);
	}
}
const connectForm = connect(
	state => {
		const formValidate = state.form.register || {};
		return {
			formValidate,
		};
	},
)(Form1);
export default reduxForm({
	form: 'register',
})(connectForm);

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
