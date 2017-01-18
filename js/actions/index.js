/**
 * redux actions 入口文件
 */
import networkIndicatorActions from './networkIndicator';
import accountActions from './account';
import racingList from './racing';

module.exports = {
  ...networkIndicatorActions,
  ...accountActions,
  ...racingList,
};
