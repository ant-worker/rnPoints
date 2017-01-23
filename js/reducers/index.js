/**
 * redux reducers 入口文件
 */

import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { networkIndicator } from './networkIndicator';
import { default as racingList } from './racingList';
import { default as account } from './account';

module.exports = combineReducers({
	networkIndicator,
	account,
	racingList,
	form: formReducer,
});
