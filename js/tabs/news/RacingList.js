import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import {racingList} from '../../actions'
import {getRacingListRequest} from '../../actions'

export default class RacingList extends Component{
	constructor(props) {
    	super(props);
    	// console.log('constructor');
    	this.props.getRacingList(this.props.id)
    	
	}
	// getDefaultProps(){
	// 	console.log(12211221);
	// 	this.props.getRacingList(this.props.id)
	// }
	render(){
		console.log('render')
		
		return(
			<View>
				<Text>{this.props.reduxData.name}</Text>
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


module.exports = connect(mapStateToProps,mapDispatchToProps)(RacingList);