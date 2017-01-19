import React, { Component } from 'react';
import {
	StyleSheet,
	ListView,
	Platform,
	View,
	Text,
} from 'react-native';


const LIST_VIEW_PAGE_SIZE = Platform.OS === 'android' ? 20 : 1;

export default class PureListView extends Component {
	constructor(props) {
		super(props);
		// console.log('PureListView',this.props.data)
		var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: this.cloneWithData(dataSource, this.props.data),
		};
	}
	componentWillReceiveProps(nextProps: Props) {
		console.log(this.props.data,nextProps.data,'componentWillReceiveProps');
		if (this.props.data !== nextProps.data) {
			this.setState({
				dataSource: this.cloneWithData(this.state.dataSource, nextProps.data),
			});
		}
	}
	render(){
		console.log('PureListView',this.state.dataSource);
		return (
			<ListView
				initialListSize={10}
				pageSize={LIST_VIEW_PAGE_SIZE}
				{...this.props}
				dataSource={this.state.dataSource}
				enableEmptySections={true}
			/>
		)
	}
	cloneWithData = (dataSource, data) => {
		if (!data) {
			return dataSource.cloneWithRows([]);
		}
		if (Array.isArray(data)) {
			return dataSource.cloneWithRows(data);
		}
		return dataSource.cloneWithRowsAndSections(data);
	}
}
