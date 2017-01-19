import PureListView from './PureListView'
import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';
export default class Center extends Component{
	constructor(props) {
    	super(props);
    	// console.log('constructor');
	}
	render(){
		let {items} = {'items': [{title:'1'},{title:'2'},{title:'3'}]};
		return(
			<PureListView
					data={items}
					abc='123'
					renderRow={this._renderRow}
					style={styles.itemContainer}
			/>
		)
	}
	_renderRow = (rowData, sectionID, rowID) =>{
		console.log('_renderRow',rowData);
    return (
    	<View style={styles.itemContainer}>
    		<Text>{rowData.title}</Text>
    	</View>
    )
  }
}

let styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
