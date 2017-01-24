import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Platform,
} from 'react-native';
import { Field } from 'redux-form';
import validatorjs from 'validator';

export default class Input extends Component {
	constructor(props) {
		super(props);
	}
	validate = (value='') => {
		// console.log(validatorjs.isEmpty(value));
		const { validations } = this.props;
		for(let i = 0, len = validations.length; i < len; i++) {
			let k = validations[i].validator;
			if (k === 'undefined') { continue; }
			let args = validations[i].arguments || [];
			args = !Array.isArray(args) ? [ args ] : args;
			let clonedArgs = args.slice(0);
			clonedArgs.unshift(value);

			if (typeof k === 'function') {
				isValid = k.apply(null, clonedArgs);
			} else {
				if (k === 'isRequired'){
					k = 'isEmpty';
					isValid = !validatorjs[k].apply(null, clonedArgs);
				} else if (k === 'isMobile'){
					k = 'isMobilePhone';
					clonedArgs.push('zh-CN');
					isValid = validatorjs[k].apply(null, clonedArgs);
				} else {
					if (typeof validatorjs[k] === 'undefined') {
						console.warn('FormError: Validator is not correct for: '+ k);
						continue;
					}
					if (k === 'isLength') {
						if (typeof clonedArgs[0] === 'string') {
							clonedArgs[0] = clonedArgs[0].trim();
						}
					}
					isValid = validatorjs[k].apply(null, clonedArgs);
				}
			}
			if (!isValid) {
				return (validations[i].message || '').replace(/{ARGS\[(\d+)\]}/g, function (replace, argIndex) {
					const val = args[argIndex];
					return val !== undefined ? val : '';
				});
			}
		}
	}
	renderInput = ({ input: { onChange,  ...restInput }, meta: { touched, error, warning, active }, ...restProps }) => {
		let styleStatus = {};
		if (touched && error) {
			styleStatus = styles.error;
		}
		console.log(restProps);
		// placeholder={restProps.placeholder}
		// 			password={restProps.password}
		// 			secureTextEntry={restProps.secureTextEntry} multiline
		return (
			<View style={[styles.inputWrap, styleStatus, restProps.style]} >
				<TextInput
					ref={(node)=>{this.textInput = node}}
					style={[styles.input]}
					onChangeText={onChange}
					{...restInput}
					placeholder={restProps.placeholder}
					password={restProps.password}
					secureTextEntry={restProps.secureTextEntry}
					autoCapitalize="none"

					clearButtonMode="while-editing" //ios
				/>
				{Platform.OS === 'android' && active && (<TouchableOpacity onPress={()=>{this.textInput.clear()}}><Text style={styles.close} >x</Text></TouchableOpacity>)}
			</View>
		);
	}
	render() {
		return (
			<Field component={this.renderInput} validate={this.validate} {...this.props} />
		);
	}
}

const styles = StyleSheet.create({
	inputWrap: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: '#333',
		borderWidth: 1,
		padding: 6,
		marginTop: 10,
	},
	close: {
		lineHeight: 26,
		color: '#999',
		fontSize: 14,
		paddingLeft: 6,
		paddingRight: 6,
		// backgroundColor: 'blue',
	},
	input: {
		flex: 1,
		lineHeight: 26,
		height: 26,
		fontSize: 16,
	},
	error: {
		borderColor: 'red',
	},
});
