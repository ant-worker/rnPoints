import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

const formSubscription = formKey => WrappedComponent => {
	class formCommon extends Component {
		static defaultProps={
			countTotal: 3,
		}
		constructor(props){
			super(props);
			this.state = {
				error: null,
				backendErrors: null,
				backendRejectValue: null,
				count: this.props.countTotal,

			};
		}
		componentWillReceiveProps(nextProps) {
			const { formValidate } = nextProps;
			const { syncErrors = {}, fields, active, values } = formValidate;
			this.setState({
				error: null,
			});

			// console.log(formValidate)
			if (!!active){
				if (fields && fields[active]){
					this.setState({
						error: syncErrors[active],
					});
				}
			} else {
				for (let k in syncErrors) {
					if (fields && fields[k]) {
							this.setState({
								error: syncErrors[k],
							});
					}
					break;
				}
			}

			if (!this.state.error && !!this.state.backendErrors && JSON.stringify(this.state.backendErrors) !== '{}') {
				let backendErrors = this.state.backendErrors;
				for (let k in backendErrors) {
					if (values[k] != this.state.backendRejectValue[k]){
						delete backendErrors[k];
						this.setState({
							backendErrors,
						})
					} else {
						this.setState({
								error: backendErrors[k],
							});
						break;
					}
				}
			}
		}
		/**
		 * 倒计时
		 */
		countDown = () => {
			const { countTotal } = this.props;
			this.setState({
				count: countTotal,
			});
			const timer = setInterval(() => {
				this.setState({
					count: --this.state.count,
				});
				if (this.state.count < 0) {
					clearInterval(timer);
					this.setState({
						count: countTotal,
						countBtn: false,
					});
				}
			}, 1000);
		}
		/**
		 * 设置后台返回的错误信息
		 */
		setBackendInfo = obj => {
			this.setState(obj);
		}
		/**
		 * 确认密码验证
		 */
		passwordConfirmValide = (v) => {
			const { password } = this.props.formValidate.values || {};
			if (v === password) {
				return true;
			}
			return false;
		}
		render() {
			return (<WrappedComponent setBackendInfo={this.setBackendInfo} countDown={this.countDown} passwordConfirmValide={this.passwordConfirmValide} {...this.props} {...this.state} />);
		}
	}
	const connectForm = connect(
		state => {
			const formValidate = state.form[formKey] || {};
			return {
				formValidate,
			};
		},
	)(formCommon);

	return reduxForm({
		form: formKey,
	})(connectForm);
};

export default formSubscription;

