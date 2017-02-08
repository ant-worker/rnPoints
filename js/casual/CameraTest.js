import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Dimensions,
	Platform,
	PixelRatio,
	Image,
} from 'react-native';

// import Camera from 'react-native-camera';
import QRCodeScreen from './QRCodeScreen';

export default class CameraTest extends Component {

	_onPressQRCode = () => {
    this.props.navigator.push({
      component: QRCodeScreen,
      title: 'QRCode',
      params: {
        onSucess: this._onSucess,
				navigator,
      },
    });
  }

  _onSucess(result) {
    console.log(result);
  }
	render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressQRCode}>
          <Text>Read QRCode</Text>
        </TouchableOpacity>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 500,
    width: Dimensions.get('window').width
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
