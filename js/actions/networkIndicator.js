/**
 * networkIndicator action
 */

import { NETWORK_INDICATOR } from './types';

const networkIndicator = visible => ({
  type: NETWORK_INDICATOR,
  visible,
});

module.exports = {
  networkIndicator,
};
