/**
 * account action
 */


import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from './types';

function loginRequest(obj) {
  return {
    type: LOGIN_REQUEST,
    loginInfo: obj
  }
}

function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data: data
  }
}
function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error: error
  }
}
function logoutRequest() {
  return {
    type: LOGOUT_REQUEST
  }
}

function logoutSuccess(data) {
  return {
    type: LOGOUT_SUCCESS,
    data: data
  }
}
function logoutFailure(error) {
  return {
    type: LOGOUT_FAILURE,
    error: error
  }
}
// var login = ({name,password})=> {
//   return {
//     types: [LOGIN_REQUEST,LOGIN_SUCCESS, LOGIN_FAILURE],
//     callAPI: () => fetch(`http://127.0.0.1:2000/api/login`),
//     shouldCallAPI: (state) => {
//     	const login = state.account.login;
//       if (!login) return true;
//       if (!!login.isFetching) return false;
//       return true;
//     },
//     payload: {name,password}

//   }
// }

// var logout = ({name,password})=> {
//   return {
//     types: [LOGOUT_REQUEST,LOGOUT_SUCCESS, LOGOUT_FAILURE],
//     callAPI: () => fetch(`http://127.0.0.1:2000/api/logout`),
//     shouldCallAPI: (state) => {
//     	const logout = state.account.logout;
//       if (!logout) return true;
//       if (!!logout.isFetching) return false;
//       return true;
//     },
//     payload: {name,password}

//   }
// }

module.exports = {
  loginRequest: loginRequest,
  loginSuccess: loginSuccess,
  loginFailure: loginFailure,
	logoutRequest: logoutRequest,
  logoutSuccess: logoutSuccess,
	logoutFailure: logoutFailure,
}