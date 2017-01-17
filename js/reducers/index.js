/**
 * redux reducers 入口文件
 */

import { combineReducers } from 'redux';
import { networkIndicator } from './networkIndicator';
import {racingList} from './racingList';

import { default as account }  from './account';
console.log(account)
module.exports = combineReducers({
	networkIndicator,
	account,
	racingList
});
