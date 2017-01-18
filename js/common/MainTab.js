
import React, { Component } from 'react';
import {
	View,
	Navigator,
	TouchableOpacity,
	Text
} from 'react-native';

import ScrollableTabView,{ DefaultTabBar } from 'react-native-scrollable-tab-view';
import RacingList from './RacingList'

export default class MainTab extends Component{
	render(){
		return(
			<ScrollableTabView
				locked={false}
			>
				<RacingList tabLabel='报名中' id='4' />
				<RacingList tabLabel='进行中' id='5' />
				<RacingList tabLabel='已结束' id='6' />
			</ScrollableTabView>
		)
	}
}

