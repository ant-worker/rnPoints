import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	PixelRatio,
	TouchableHighlight,
} from 'react-native';
// import { Form, Widget, WidgetMixin, WidgetClassFactory, Validation, Message } from 'react-native-sk-validatable-form';
import {GiftedForm, GiftedFormManager} from 'react-native-gifted-form';

export default class FormTest extends Component {
	render() {
		return (
			<GiftedForm
				formName="signupForm" // GiftedForm instances that use the same name will also share the same states
				openModal={(route) => {
					// navigator.push(route); // The ModalWidget will be opened using this method. Tested with ExNavigator
				}}

				clearOnClose={false} // delete the values of the form when unmounted
				defaults={{
					fullName: '',
					/*
					username: 'Farid',
					'gender{M}': true,
					password: 'abcdefg',
					country: 'FR',
					birthday: new Date(((new Date()).getFullYear() - 18)+''),
					*/
				}}
				validators={{
					fullName: {
						title: 'Full name',
						validate: [{
							validator: 'isLength',
							arguments: [5, 23],
							message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters',
						}],
					},
				}}
			>
				<GiftedForm.TextInputWidget
					name="fullName"
					title=""
					inline
					image={require('./img/user.png')}

					placeholder="Marco Polo"
					clearButtonMode="while-editing"
				/>

				<GiftedForm.SubmitWidget
					title="Sign up"
					widgetStyles={{
						submitButton: {
							backgroundColor: 'red',
						},
					}}
					onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
						console.log(values);
						if (isValid === true) {
							// prepare object
							// values.gender = values.gender[0];
							// values.birthday = moment(values.birthday).format('YYYY-MM-DD');

							/* Implement the request to your server using values variable
							** then you can do:
							** postSubmit(); // disable the loader
							** postSubmit(['An error occurred, please try again']); // disable the loader and display an error message
							** postSubmit(['Username already taken', 'Email already taken']); // disable the loader and display an error message
							** GiftedFormManager.reset('signupForm'); // clear the states of the form manually. 'signupForm' is the formName used
							*/
						}
					}}
				/>
				<GiftedForm.ErrorsWidget

				/>
			</GiftedForm>
		);
	}
}
