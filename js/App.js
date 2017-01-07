/**
 * App 入口文件
 */

import React, { Component  } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator,
  StatusBar
} from 'react-native';

class App extends Component {
  componentDidMount() {
  }
  render() {
    return (
    	<View style={styles.container}>
	    	<View style={styles.StatusBar}>
	        <StatusBar
            translucent={true}
	          networkActivityIndicatorVisible = {false}
            height={20}
            backgroundColor="blue"
	         />
	      </View>
        <Navigator
          initialRoute={{statusBarHidden: false}}
          renderScene={(route, navigator) =>
            <View>
              <StatusBar hidden={route.statusBarHidden || false} />
              <Text>我是APP11</Text>
            </View>
           }
         />
        
      </View>
    )
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  StatusBar: {
  	// backgroundColor: 'blue',
   //  height: 20,
  }
});

module.exports = App;

