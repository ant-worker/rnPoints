import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';

import ScrollableTabView,{DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view';
import RacingList from './RacingList'

export default class RacingTab extends Component{
	render(){
		return(
			<ScrollableTabView
				locked={false}
        renderTabBar={() => <ScrollableTabBar
          style={{borderWidth: 0,height:44}}
          backgroundColor="#df0012"
          activeTextColor='#fff'
          inactiveTextColor='rgba(255,255,255,0.95)'
          underlineStyle={{ height: 0 }}
        />}
			>
		      <RacingList tabLabel='报名中' id='4' />
		      <RacingList tabLabel='进行中' id='5' />
		      <RacingList tabLabel='已结束' id='6' />
		    </ScrollableTabView>
		)
	}
}

