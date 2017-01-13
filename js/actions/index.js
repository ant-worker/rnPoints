/**
 * redux actions 入口文件
 */
import networkIndicatorActions from './networkIndicator';
import accountActions from './account';

module.exports = {
	...networkIndicatorActions,
	...accountActions,
};
