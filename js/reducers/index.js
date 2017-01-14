/**
 * redux reducers 入口文件
 */

import { combineReducers } from 'redux';
import { networkIndicator } from './networkIndicator';

import { default as account }  from './account';
console.log(account)
module.exports = combineReducers({
	networkIndicator,
	account,
});
