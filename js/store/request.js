/**
 * @module 数据请求中间件
 * @author zengyanling
 */
'use strict';

import {networkIndicator} from '../actions';

module.exports = ({ dispatch, getState }) => next => action => {
  const {
    types,
    callAPI,
    shouldCallAPI = () => true,
    payload = {}
  } = action;

  if (!types) {
    return next(action);
  }
  if (
    !Array.isArray(types) ||
    types.length !== 3 ||
    !types.every(type => typeof type === 'string')
  ) {
    throw new Error('Expected an array of three string types.');
  }

  if (typeof callAPI !== 'function') {
    throw new Error('Expected fetch to be a function.');
  }
  if (!shouldCallAPI(getState())) {
    return;
  }
  const [requestType, successType, failureType] = types;

  dispatch([{
      ...payload,
      type: requestType
    }, networkIndicator(true)])

  return callAPI().then(
    response => {
      response.json().then(function(res){
        if (res.status === 0) {
          dispatch([{
            ...payload,
            type: successType,
            data: res.data
          },networkIndicator(false)]);
        }else {
          // errorType 5 是服务端错误
          // errorType 4 是客户端请求错误
          dispatch([{
            ...payload,
            type: failureType,
            errorType: 5,
            error: res.error,
            message: res.message,
          },networkIndicator(false)]);
        }
      });

    },
    error => {
      dispatch([{
        ...payload,
        type: failureType,
        errorType: 4,        
        message: error,
      }, networkIndicator(false)]);
    }
  );

}
