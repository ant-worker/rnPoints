
import React, { Component } from 'react';
import {
		View,
		Navigator,
		TouchableOpacity,
		Text,
		StyleSheet,
} from 'react-native';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
// import test from '../tabs/news/test'
import RacingTab from '../tabs/news/RacingTab';

export default class MainTab extends Component{
	render (){
		return(
			<ScrollableTabView
				locked={false}
				tabBarPosition="bottom"
				style={styles.container}
			>
					<RacingTab tabLabel = '新闻' />
					<View tabLabel = '我的'>
            <Text >我的</Text>
					</View>
				</ScrollableTabView>
		);
	}
}
let styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
