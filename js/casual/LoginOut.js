
import React, { Component  } from 'react';
import {
	StyleSheet,
	View,
	Text,
	PixelRatio,
	TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { loginRequest, logoutRequest, networkIndicator } from '../actions';

class LoginOut extends Component {
	constructor(props) {
			super(props);
	}
	_login = () => {
		var _this = this;
		console.log('login');
		this.props.loginReq({
				name: 'suibianlalla',
				password: 'suibian password',
		});
	}
	_logout = () => {
		var _this = this;
		console.log('logout');
		this.props.logoutReq({
				name: 'suibianlalla',
				password: 'suibian password',
		});
	}
	render() {
		const { login, logout } = this.props;
		return (
			<View style={styles.container} >
				<TouchableHighlight onPress={this._login}>
					<Text style={styles.button} >登录 {login.isFetching && '正在请求中' }</Text>
				</TouchableHighlight>
				<View style={styles.row} >
					<Text style={styles.label} >姓名：</Text>
					<Text style={styles.input} >{ login.name }</Text>
					<Text style={styles.input} >{ !!login.error && '请求失败' }</Text>
				</View>
				<TouchableHighlight onPress={this._logout}>
					<Text style={styles.button} >退出 { logout.isFetching && '正在请求中'} </Text>
				</TouchableHighlight>
				<Text style={styles.input} >{ logout.logout }</Text>
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

	},
	row: {
		justifyContent: 'space-between',
		flexDirection: 'row',
		height: 56,
	},
	label: {
		height: 56,
	},
	input: {
	},
});

const mapStateToProps = state => {

		const {login, logout} = state.account;
		return {
				login: login,
				logout: logout,
		};
};
const mapDispatchToProps = (dispatch,props) => {
	return {
		loginReq: (obj) => {
				dispatch(loginRequest(obj));
		},
		logoutReq: (obj) => {
				dispatch(logoutRequest(obj));
		},
	};
};


module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginOut);
