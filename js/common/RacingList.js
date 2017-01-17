import React, { Component } from 'react';
import {
    View,
    Navigator,
    TouchableOpacity,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import {racingList} from '../actions'

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
				<Text>{this.props.reduxData}</Text>
			</View>
		)
	}
}
const mapStateToProps = (state,props) => {
	console.log(state,props,'mapStateToProps');
	const { racingList } = state
	if(racingList[props.id] === undefined){
		return {
			reduxData:''
		}
	}
	return {
		reduxData:racingList[props.id].items
	}
}
function mapDispatchToProps(dispatch) {
  return {
  	getRacingList:(id) => {
  		console.log('dispatch',id,'mapDispatchToProps');
  		dispatch(racingList(id))	
  	}
  };
}


module.exports = connect(mapStateToProps,mapDispatchToProps)(RacingList);