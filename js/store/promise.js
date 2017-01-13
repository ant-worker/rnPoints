/*
 * promise 中间件
 */

function warn(error) {
  console.warn(error.message || error);
  throw error; // To let the caller handle the rejection
}

module.exports = store => next => action =>
  typeof action.then === 'function'
    ? (console.log('11111'),Promise.resolve(action).then(next, warn))
    : next(action);
