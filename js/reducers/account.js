/**
 * 账户 reducer
 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../actions/actionTypes';


const initialLoginState = {
  isFetching: false,
  isLogin: false,
  name: null,
  password: null,
  identity: null,
  token: null,
  error: null,
  message: null,
  errorType: null,
};

const initialLogoutState = {
  isFetching: false,
  isLogout: false,
  logout: null,
  error: null,
  message: null,
  errorType: null,
};

// 此处需要优化
const loginFn = (state, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case LOGIN_SUCCESS:
      const data = action.data;
      return {
        ...state,
        isFetching: false,
        isLogin: true,
        name: data.name,
        password: data.password,
        identity: data.identity,
        token: data.token,

      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLogin: false,
        error: action.error,
        errorType: action.errorType,
        message: action.message,
      }
    default:
      return state
  }

}
// 此处需要优化
const logoutFn = (state, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    case LOGOUT_SUCCESS:
      const data = action.data;
      return {
        ...state,
        isFetching: false,
        isLogout: true,
        logout: data.logout,

      }
    case LOGOUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        isLogout: false,
        error: action.error,
        errorType: action.errorType,
        message: action.message,
      }
    default:
      return state
  }

}


const account = (state = {login: initialLoginState, logout: initialLogoutState}, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return {
        ...state,
        login: loginFn(state.login, action)
      }
    case LOGOUT_REQUEST:
    case LOGOUT_SUCCESS:
    case LOGOUT_FAILURE:
      return {
        ...state,
        logout: logoutFn(state.logout, action)
      }
    default:
      return state
  }
}

module.exports = {
	account: account
}