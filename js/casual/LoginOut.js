
import React, { Component  } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PixelRatio,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import { login, logout, networkIndicator } from '../actions';

class LoginOut extends Component {
	constructor(props) {
		super(props);
		
	}
	render() {
		const {login, logout} = this.props;
		return (
			<View style={styles.container} >
				<TouchableHighlight onPress={this._login}> 
					<Text style={styles.button} >登录 {login.isFetching && '正在请求中' }</Text>
				</TouchableHighlight>
				<View style={styles.row} >
					<Text style={styles.label} >姓名：</Text>
					<Text style={styles.input} >{ login.name }</Text>
					<Text style={styles.input} >{ logout.logout }</Text>
				</View>
				<Text style={styles.button} >注册</Text>
				<View style={styles.border} ></View>
			</View>
		)
	}
	_login = () => {
		var _this = this;
		console.log('login');
		this.props.loginReq({
			name: 'suibian',
			password: 'suibian password',
		});
		
		// const asyncFn = async () => {

	 //  	await _this.props.dispatch([login(obj), logout(obj)])
		// 	console.log(_this.props.logout.logout);
	 //  };
		
		// asyncFn();
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
	}
});

const mapStateToProps = state => {

	const {login, logout} = state.account;
	return {
		login: login,
		logout: logout,
	};
}
const mapDispatchToProps = (dispatch,props) => {
	return {
		loginReq: (obj) => {
			// const reqList = () => {
		 //    return dispatch(()=>{
		 //    	dispatch([login(obj), logout(obj)]);
		 //    }.then(function(){
		 //    	console.log('over');
		 //    }));
		 //    return dispatch(
		 //    	new Promise((resolve, reject) => {
			//     	dispatch([login(obj), logout(obj)]);
				    
			// 	  }).then(function(){
			// 			console.log(props.login);

			// 	  })
			//   );
		 //  }
			// const asyncFn = async () => {
		 //  	await reqList();
			// 	console.log(props.login);
		 //  };
			
			// asyncFn();
			return dispatch(
	    	new Promise((resolve, reject) => {
		    	dispatch([login(obj), logout(obj)]);
			    
			  }).then(function(){
					console.log('jiesulalalal');
			  	
			  })
		  );
			// dispatch([login(obj), logout(obj)])
		},
	};
}


module.exports = connect(mapStateToProps, mapDispatchToProps)(LoginOut);


