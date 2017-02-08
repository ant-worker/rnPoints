import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
	VibrationIOS,
} from 'react-native';
import Camera from 'react-native-camera';

class CancelButton extends Component {
	render() {
		const { onPress, title } = this.props;
		return (
			<View style={styles.cancelButton}>
				<TouchableOpacity onPress={onPress}>
					<Text style={styles.cancelButtonText}>{title}</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

export default class QRCodeScreen extends Component {
	static propTypes = {
		cancelButtonVisible: React.PropTypes.bool,
		cancelButtonTitle: React.PropTypes.string,
		onSucess: React.PropTypes.func,
		onCancel: React.PropTypes.func,
	}
	static defaultProps = {
		cancelButtonVisible: true,
		cancelButtonTitle: 'Cancel',
	}
	_onPressCancel = () => {
		requestAnimationFrame(() => {
			this.props.navigator.pop();
			if (this.props.onCancel) {
				this.props.onCancel();
			}
		});
	}

	_onBarCodeRead = (result) => {
		if (this.barCodeFlag) {
			this.barCodeFlag = false;

			setTimeout(() => {
				VibrationIOS.vibrate();
				this.props.navigator.pop();
				this.props.onSucess(result.data);
			}, 1000);
		}
	}

	render() {
		let cancelButton = null;
		this.barCodeFlag = true;

		if (this.props.cancelButtonVisible) {
			cancelButton = <CancelButton onPress={this._onPressCancel} title={this.props.cancelButtonTitle} />;
		}

		return (
			<Camera
				onBarCodeRead={this._onBarCodeRead}
				captureAudio={false}
				aspect={Camera.constants.Aspect.fill}
				defaultTouchToFocus
				showViewFinder={true}
				viewFinderBorderWidth={5}
				millisecondDelayBetweenScans={3000}
				viewFinderShowLoadingIndicator={false}
				viewFinderBorderColor="red"
				style={styles.camera}


			>
				<View style={styles.rectangleContainer}>
					<View style={styles.rectangle}/>
				</View>
				{cancelButton}
			</Camera>
		);
	}
}



const styles = StyleSheet.create({

	camera: {
		height: 568,
		alignItems: 'center',
	},

	rectangleContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'transparent',
	},

	rectangle: {
		height: 250,
		width: 250,
		borderWidth: 2,
		borderColor: 'red',
		backgroundColor: 'transparent',
	},

	cancelButton: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 3,
		padding: 15,
		width: 100,
		bottom: 10,
	},
	cancelButtonText: {
		fontSize: 17,
		fontWeight: '500',
		color: '#0097CE',
	},
});
