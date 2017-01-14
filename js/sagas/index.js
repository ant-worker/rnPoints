/**
 * saga 入口文件
 */

import { take, put, call, fork, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../actions/types'
import { loginSuccess, loginFailure, logoutSuccess, logoutFailure } from '../actions'
import { api } from '../services'
import { getLoginInfo } from '../reducers/account'


function* login() {
  try {
    console.log('请求login');
    const loginParam = yield select(getLoginInfo);
    const data = yield call(api.login,loginParam);
    yield put(loginSuccess(data));
  } catch(error) {
    console.log(error);
    yield put(loginFailure(error));
  }
}

function* logout() {
  try {
    console.log('请求logout');
    const data = yield call(api.logout);
    yield put(logoutSuccess(data));
  } catch(error) {
    console.log(error);
    yield put(logoutFailure(error));
  }
}

function* watchAccount(argument) {
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(LOGOUT_REQUEST, logout);
}

export default function* root() {
  yield [
    fork(watchAccount),
  ]
}