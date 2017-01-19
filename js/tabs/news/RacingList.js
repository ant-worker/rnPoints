import React, { Component } from 'react';
import {
		View,
		Navigator,
		TouchableOpacity,
		Text,
		StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';
import {racingList} from '../../actions'
import {getRacingListRequest} from '../../actions'
import PureListView from '../../common/PureListView'

export default class RacingList extends Component{
	constructor(props) {
			super(props);
			// console.log('constructor');

	}
	componentWillMount(props) {
		this.props.getRacingList(this.props.id)
	}
	// getDefaultProps(){
	//  console.log(12211221);
	//  this.props.getRacingList(this.props.id)
	// }
	render(){
		const {reduxData} = this.props;
		var {stories} = reduxData || {'stories': []};
		let {items} = {'items': [{title:'1'},{title:'2'},{title:'3'}]};
		// let {items} = {'items': []};
		// console.log(items,'render');
		return(

			<PureListView
					data={stories}
					renderRow={this._renderRow}
					style={styles.container}
			/>
		)
		// console.log('this.props.reduxData');
		// return(

		// 	<View>
		// 		<Text>1213223321</Text>
		// 	</View>
		// )
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
const mapStateToProps = (state,props) => {
	const { racingList } = state
	console.log(racingList,state,props,'mapStateToProps');
	if(racingList.getRacingList[props.id] === undefined||racingList.getRacingList[props.id].data === null){
		return {
			reduxData:''
		}
	}
	// console.log(racingList.getRacingList[props.id]);
	return {
		reduxData:racingList.getRacingList[props.id].data
	}
}
function mapDispatchToProps(dispatch) {
	return {
		getRacingList:(id) => {
			console.log('dispatch',id,'mapDispatchToProps');
			dispatch(getRacingListRequest(id))
		}
	};
}
const styles = StyleSheet.create({
	container:{
		flex:1
	},
	itemContainer:{
		height:50
	}
})

module.exports = connect(mapStateToProps,mapDispatchToProps)(RacingList);
