
import { combineReducers } from 'redux'
import {
	RACING_LIST_REQUEST,
	RACING_LIST_SUCCESS,
	RACING_LIST_FAILURE
} from '../actions/types';

const add_item = (state = {items:[]},action) => {
	switch (action.type){
		case 'RACING_LIST':
			return {
				...state,
				items: action.id + 'redux'
			}
		default:
		return state
	}
}
const racingList = (state = {},action) => {
// const racingList = (state = [],action) => {
	switch (action.type){
		case 'RACING_LIST':
			return Object.assign({},state,{
				...state,
				[action.id]:add_item(state[action.id],action)
			})
		default:
			return state
	}
}
// export default racingList
const initialRacingListState = {
  isFetching: false,
  id:null,
  error: null,
  message: null,
  errorType: null,
};

const addList = (state = {id:null,data:null,error:null},action) =>{
	switch (action.type){
		case RACING_LIST_REQUEST:
			return {
				...state,
				id:action.id
			}
		case RACING_LIST_SUCCESS:
			return {
				...state,
				data: action.data
			}
		case RACING_LIST_FAILURE:
			return {
				...state,
				error:action.error
			}
		default:
			return state
	}
}

const getRacingList = (state = initialRacingListState,action) =>{
	switch (action.type){
		case RACING_LIST_REQUEST:
			return {
				...state,
				id:action.id,
				[action.id]:addList(state[action.id],action)
			}
		case RACING_LIST_SUCCESS:
			const data = action.data
			return {
				...state,
				[action.id]:addList(state[action.id],action)
			}
		case RACING_LIST_FAILURE:
			return {
				...state,
				[action.id]:addList(state[action.id],action)
			}
		default:
			return state
	}
}

export default combineReducers({
  racingList,
  getRacingList
})
// module.exports = {
// 	racingList:racingList
// }
export function getRacingInfo(state) {
 	// console.log(state.racingList.getRacingList,'getRacingInfo');
	return state.racingList.getRacingList;
}