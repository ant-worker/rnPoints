import {
	RACING_LIST_REQUEST,
	RACING_LIST_SUCCESS,
	RACING_LIST_FAILURE,
} from './types';

const racingList = id => ({
	type: 'RACING_LIST',
	id,
});

const getRacingListRequest = id => ({
	type: RACING_LIST_REQUEST,
	id,
});
const getRacingListSuccess = (id, data) => ({
	type: RACING_LIST_SUCCESS,
	id,
	data,
});
const getRacingListFailure = error => ({
	type: RACING_LIST_FAILURE,
	error,

});
module.exports = {
	racingList,
	getRacingListRequest,
	getRacingListSuccess,
	getRacingListFailure,
};
