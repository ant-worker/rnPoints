/**
 * redux store 配置
 */

import { applyMiddleware, createStore, compose } from 'redux'
import { AsyncStorage } from 'react-native'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import { persistStore, autoRehydrate } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import { sagaMonitor } from 'redux-saga/utils'

import reducers from '../reducers'
import request from './request'
import promise from './promise'
import array from './array'


const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

const logger = createLogger({
  predicate: (getState, action) => isDebuggingInChrome,
  collapsed: true,
  duration: true,
});
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

// For: debugger redux
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  // autoRehydrate(),
  applyMiddleware(sagaMiddleware, thunk, promise, array, request, logger),
)


const store = createStore(
  reducers,
  {},
  enhancer,
)
sagaMiddleware.run(rootSaga)

function configureStore(onComplete) {
  // TODO: 建议开始把redux-persist关闭，因为它会对state进行缓存，可能对于一些state对象调试不是很方便
  // persistStore(store, { storage: AsyncStorage }, onComplete);

  if (isDebuggingInChrome) {
    window.store = store;
  }
  return store;
}

module.exports = configureStore;
