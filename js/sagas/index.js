/**
 * saga 入口文件
 */

import { take, put, call, fork, select, takeEvery, takeLatest } from 'redux-saga/effects'
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../actions/types'

import { loginSuccess, loginFailure, logoutSuccess, logoutFailure } from '../actions'
import { api } from '../services'
import { getLoginInfo } from '../reducers/account'
import {getRacingInfo} from '../reducers/racingList'
import {getRacingListSuccess, getRacingListFailure} from '../actions'
import {RACING_LIST_REQUEST} from '../actions/types'


function* login() {
  try {
    
    const loginParam = yield select(getLoginInfo);
    console.log('请求login',loginParam);
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

function* getRacingList(){
  try {
    const params = yield select(getRacingInfo);
    const data = yield call(api.getRacingList,params);
    // console.log(params.id,data,'------------------');
    yield put(getRacingListSuccess(params.id,data));
  }catch(error){
    console.log(error);
    yield put(getRacingListFailure(error));
  }
}

function* watchAccount(argument) {
  yield takeLatest(LOGIN_REQUEST, login);
  yield takeLatest(LOGOUT_REQUEST, logout);
  yield takeLatest(RACING_LIST_REQUEST, getRacingList);
}

export default function* root() {
  yield [
    fork(watchAccount),
  ]
}