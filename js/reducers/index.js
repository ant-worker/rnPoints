/**
 * redux reducers 入口文件
 */

import { combineReducers } from 'redux';
import { networkIndicator } from './networkIndicator';
import { account } from './account';

module.exports = combineReducers({
	networkIndicator: networkIndicator,
	account: account,
});
