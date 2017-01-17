
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
			console.log('RACING_LIST',state)
			return Object.assign({},state,{
				...state,
				[action.id]:add_item(state[action.id],action)
			})
		default:
			return state
	}
}
// export default racingList
module.exports = {
	racingList
}