/**
 * array 中间件
 */

module.exports = store => next => action =>
  Array.isArray(action)
    ? action.map(next)
    : next(action);
