import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	// CameraRoll,
	Platform,
	PixelRatio,
	Image,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';


export default class CamerarollTest extends Component {
	state = {
		avatarSource: null,
		cameraSource: null,
		videoSource: null,
	};

	selectPhotoTapped() {
		const options = {
			title: null,
			cancelButtonTitle: '取消',
			takePhotoButtonTitle: '拍照',
			chooseFromLibraryButtonTitle: '从手机相册选择',

			// noData: true,
			// cameraType: 'back',
			// customButtons: [
			// 	{name: 'gallery', title: '从手机相册选择'},
			// 	{name: 'gallery1', title: 'suibian'},
			// ],

			// allowsEditing: true,
			quality: 1.0,
			// type
			// maxWidth: 500,  // 后期限制大小
			// maxHeight: 500,
			storageOptions: {
				skipBackup: true,
			},
		};

		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled photo picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				// 在此处进行数据传输

				var source;

				// You can display the image using either:
				// source = { uri: 'data:image/jpeg;base64,' + response.data };

				// Or:
				if (Platform.OS === 'android') {
					source = { uri: response.uri };
				} else {
					source = { uri: response.uri.replace('file://', '') };
				}

				this.setState({
					avatarSource: source
				});
			}
		});
	}
	selectCameraTapped() {
		const options = {
			// title: null,
			// cancelButtonTitle: '取消',
			// takePhotoButtonTitle: '拍照',
			// chooseFromLibraryButtonTitle: '从手机相册选择',

			// noData: true,
			// cameraType: 'back',
			// customButtons: [
			// 	{name: 'gallery', title: '从手机相册选择'},
			// 	{name: 'gallery1', title: 'suibian'},
			// ],

			// allowsEditing: true,
			quality: 1.0,
			// type
			// maxWidth: 500,  // 后期限制大小
			// maxHeight: 500,
			storageOptions: {
				skipBackup: true,
			},
		};
		// Launch Camera:
		ImagePicker.launchCamera(options, (response) => {
			console.log(response, 'selectCameraTapped');
			// Same code as in above section!
		});
	}
	selectVideoTapped() {
		const options = {
			title: 'Video Picker',
			takePhotoButtonTitle: 'Take Video...',
			mediaType: 'video',
			videoQuality: 'medium'
		};

		ImagePicker.showImagePicker(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled video picker');
			}
			else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			}
			else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
			}
			else {
				this.setState({
					videoSource: response.uri
				});
			}
		});
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
					<View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
					{ this.state.avatarSource === null ? <Text>Select a Photo</Text> :
						<Image style={styles.avatar} source={this.state.avatarSource} />
					}
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.selectCameraTapped.bind(this)}>
					<View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
					{ this.state.cameraSource === null ? <Text>拍照</Text> :
						<Image style={styles.avatar} source={this.state.cameraSource} />
					}
					</View>
				</TouchableOpacity>
			</View>
		);
	}

}

// <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
// 					<View style={[styles.avatar, styles.avatarContainer]}>
// 						<Text>Select a Video</Text>
// 					</View>
// 				</TouchableOpacity>

// 				{ this.state.videoSource &&
// 					<Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
// 				}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	avatarContainer: {
		borderColor: '#9B9B9B',
		borderWidth: 1 / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatar: {
		borderRadius: 75,
		width: 150,
		height: 150
	}
});
