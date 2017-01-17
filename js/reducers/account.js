/**
 * 账户 reducer
 */
import { combineReducers } from 'redux'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../actions/types';


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
const login = (state=initialLoginState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:

      return {
        ...state,
        isFetching: true,
        name: action.loginInfo.name,
        password: action.loginInfo.password
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
      const error = action.error;
      return {
        ...state,
        isFetching: false,
        isLogin: false,
        status: error.status || null,
        error: error.error,
        message: error.message  || null,
      }
    default:
      return state
  }

}
// 此处需要优化
const logout = (state=initialLogoutState, action) => {
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

export default combineReducers({
  login,
  logout,
})

// export default (state = {login: initialLoginState, logout: initialLogoutState}, action) => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//     case LOGIN_SUCCESS:
//     case LOGIN_FAILURE:
//       return {
//         ...state,
//         login: loginFn(state.login, action)
//       }
//     case LOGOUT_REQUEST:
//     case LOGOUT_SUCCESS:
//     case LOGOUT_FAILURE:
//       return {
//         ...state,
//         logout: logoutFn(state.logout, action)
//       }
//     default:
//       return state
//   }
// }

export function getLoginInfo(state) {
 console.log(state);
  return state.account.login;
}

// module.exports = {
// 	account: account
// }