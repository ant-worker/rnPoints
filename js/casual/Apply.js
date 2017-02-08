import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
	KeyboardAvoidingView,
} from 'react-native';
import Input from './Input';
import formSubscription from './formSubscription';


class Apply extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seccode: null,
		};
	}
	submit = (values) => {
		console.log('submitting form', values);
	}
	render() {
		const { handleSubmit, error } = this.props;
		return (
			<ScrollView style={styles.container}>
				<KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
					<Input
						name="phone"
						type="inline"
						validations={[
							{
								validator: 'isMobile',
								message: '请输入格式正确的手机号',
							},
						]}
						placeholder="申请人手机号码"
					/>
					<Input
						name="address"
						type="inline"
						placeholder="企业运营地址"
						multiline
						inputStyle={{ lineHeight: 14, fontSize: 12 }}
					/>
					<Input
						name="address"
						type="inline"
						placeholder="企业运营地址"
						multiline
						inputStyle={{ lineHeight: 14, fontSize: 12 }}
					/>
					<Input
						name="address"
						type="inline"
						placeholder="企业运营地址"
						multiline
						inputStyle={{ lineHeight: 14, fontSize: 12 }}
					/>
					<Input
						name="address"
						type="inline"
						placeholder="企业运营地址"
						multiline
						inputStyle={{ lineHeight: 14, fontSize: 12 }}
					/>
					<Input
						name="address"
						type="inline"
						placeholder="企业运营地址"
						multiline
						inputStyle={{ lineHeight: 14, fontSize: 12 }}
					/>
					<Input
						name="info"
						type="textarea"
						placeholder="限200字以内"
						multiline
						maxLength={200}
						inputStyle={{ height: 260 }}
					/>
					<Input
						name="info1"
						type="textarea"
						placeholder="限200字以内"
						multiline
						maxLength={200}
						inputStyle={{ height: 260 }}
					/>
					<TouchableOpacity onPress={handleSubmit(this.submit)}>
						<Text style={styles.button}>确认信息并提交</Text>
					</TouchableOpacity>
					{!!error && <Text >{error}</Text>}
				</KeyboardAvoidingView>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// flex: 1,
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
});

module.exports = formSubscription('apply')(Apply);
