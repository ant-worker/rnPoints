/**
 * networkIndicator action
 */

import { NETWORK_INDICATOR } from './actionTypes';
const networkIndicator = visible => ({
  type: 'NETWORK_INDICATOR',
  visible
});

module.exports = {
	networkIndicator: networkIndicator
}