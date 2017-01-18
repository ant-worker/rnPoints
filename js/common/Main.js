import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Platform,
  TouchableOpacity,
} from 'react-native';
import LoginOut from '../casual/LoginOut';
import Racing from '../page/Racing';

export default class Main extends Component {
  _pressButton() {
    const { navigator } = this.props;
    console.log(navigator);
    if (navigator) {
      navigator.push({
        name: 'Racing',
        component: Racing,
      });
    }
  }
  render() {
    return (
      <View
        style={styles.container}
      >
        <TouchableOpacity onPress={this._pressButton.bind(this)}>
          <Text> Tab组件 Tab组件 Tab组件 </Text>
        </TouchableOpacity>

        <Text>fdsfds我是APP2221</Text>

        <LoginOut />    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        paddingTop: 20,
      },
      android: {
        paddingTop: Platform.Version <= 19 ? 0 : StatusBar.currentHeight,
      },
    }),
  },
});
