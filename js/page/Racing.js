import React from 'react';
import {
    View,
    StyleSheet,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';
import MainTab from '../common/MainTab'
export default class Racing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  _pressButton() {
    const { navigator } = this.props;
    if(navigator) {
        navigator.pop();
    }
  }

  render() {
    return (
      <View style={styles.container}>

          <TouchableOpacity onPress={this._pressButton.bind(this)}>
              <Text>返回</Text>
          </TouchableOpacity>
          <MainTab></MainTab>
      </View>
    );
  }
}
const styles = StyleSheet.create({
	container:{
		flex: 1
	}
})
