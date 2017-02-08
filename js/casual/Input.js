import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Platform,
} from 'react-native';
import fieldSubscription from './fieldSubscription';

class Input extends Component {
	constructor(props) {
		super(props);
		this.state = {
			textLen: 0,
		};
	}
	countText = (v) => {
		this.setState({
			textLen: v.length,
		});
		// console.log(v)
	}
	renderInline = () => {
		const { input: { onChange,  ...restInput }, meta: { touched, error, warning, active }, ...restProps } = this.props;
		return (
			<View style={[styles.inputWrap, restProps.viewStyle]} >
				<Text style={[styles.text, styles.label]}>{restProps.placeholder}</Text>
				<TextInput
					style={[styles.text, styles.inputInline, restProps.inputStyle]}
					onChangeText={onChange}
					{...restInput}
					{...restProps}
					autoCapitalize="none"
					multiline={restProps.multiline}
				/>
			</View>

		);
	}
	renderTextarea = () => {
		const { input: { onChange,  ...restInput }, meta: { touched, error, warning, active }, ...restProps } = this.props;
		return (


			<View style={[styles.inputWrap, restProps.viewStyle]} >
				<TextInput
					ref={(node) => { this.textInput = node; }}
					style={[styles.text, styles.input, restProps.inputStyle]}
					onChangeText={(v) => {
						onChange(v);
						this.countText(v);
					}}
					{...restInput}
					{...restProps}
					autoCapitalize="none"
					multiline={restProps.multiline}
				/>
				<Text style={[styles.text, styles.textareaLabel]}>{this.state.textLen}/{restProps.maxLength}</Text>
			</View>
		);
	}
	render() {
		const { input: { onChange,  ...restInput }, meta: { touched, error, warning, active }, ...restProps } = this.props;
		if (restProps.type === 'inline') {
			return this.renderInline();
		} else if (restProps.type === 'textarea') {
			return this.renderTextarea();
		}
		let styleStatus = {};
		if (touched && error) {
			styleStatus = styles.error;
		}
		// console.log(this.textInput)
		//  multiline {...restInput}
		// placeholder={restProps.placeholder}
		// 			password={restProps.password}
		// 			secureTextEntry={restProps.secureTextEntry}
		return (
			<View style={[styles.inputWrap, styleStatus, restProps.viewStyle]} >
				<TextInput
					ref={(node)=>{this.textInput = node}}
					style={[styles.text, styles.input]}
					onChangeText={onChange}
					{...restInput}
					{...restProps}

					autoCapitalize="none"

					clearButtonMode="while-editing" //ios
				/>
				{
					Platform.OS === 'android' && active && (<TouchableOpacity onPress={()=>{this.textInput.clear()}}><Text style={styles.close} >x</Text></TouchableOpacity>)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	inputWrap: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		borderColor: '#333',
		borderWidth: 1,
		padding: 6,
		marginTop: 10,
		backgroundColor: '#fff',

	},
	close: {
		lineHeight: 26,
		color: '#999',
		fontSize: 14,
		paddingLeft: 6,
		paddingRight: 6,
		// backgroundColor: 'blue',
	},
	error: {
		borderColor: 'red',
	},
	input: {
		flex: 1,
	},
	text: {
		lineHeight: 26,
		height: 26,
		fontSize: 16,
	},
	label: {
		// flex: 1,
	},
	inputInline: {
		width: 200,
		textAlign: 'right',
	},
	textareaLabel: {
		position: 'absolute',
		bottom: 6,
		right: 6,
	},
});

module.exports = fieldSubscription(Input);
