import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { reduxForm } from 'redux-form';
import Input from './Input';

class Login extends Component {
	static defaultProps={
		countT: 10,
	}
	constructor(props){
		super(props);
		this.state = {
			count: this.props.countT,
			countBtn: false,
			seccode: null,
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
		const {password} = this.props.formValidate.values || {};
		if (v === password) {
			return true;
		}
		return false;
	}
	submit = values => {
		console.log('submitting form', values)
	}
	render() {
		// submitting
		const { handleSubmit, formValidate, submitting } = this.props;
		const { syncErrors = {}, fields, active } = formValidate;
		let Error = null;

		for (let k in syncErrors){
			if(!!active){
				if(fields && fields[active]){
						Error = (<Text style={styles.errorTips}>{syncErrors[active]}</Text>);
				}
			}else {
				if(fields && fields[k]){
						Error = (<Text style={styles.errorTips}>{syncErrors[k]}</Text>);
				}

			}
			break;
		}
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
					<Text style={styles.button}>注册</Text>
				</TouchableOpacity>
				{Error}

			</View>
		);
	}
}
const connectForm = connect(
	state => {
		const formValidate = state.form.login || {};
		return {
			formValidate,
		};
	},
)(Login);
export default reduxForm({
	form: 'login',
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
