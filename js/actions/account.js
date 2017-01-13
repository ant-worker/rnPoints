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
} from './actionTypes';


var login = ({name,password})=> {
  return {
    types: [LOGIN_REQUEST,LOGIN_SUCCESS, LOGIN_FAILURE],
    callAPI: () => fetch(`http://127.0.0.1:2000/api/login`),
    shouldCallAPI: (state) => {
    	const login = state.account.login;
      if (!login) return true;
      if (!!login.isFetching) return false;
      return true;
    },
    payload: {name,password}

  }
}

var logout = ({name,password})=> {
  return {
    types: [LOGOUT_REQUEST,LOGOUT_SUCCESS, LOGOUT_FAILURE],
    callAPI: () => fetch(`http://127.0.0.1:2000/api/logout`),
    shouldCallAPI: (state) => {
    	const logout = state.account.logout;
      if (!logout) return true;
      if (!!logout.isFetching) return false;
      return true;
    },
    payload: {name,password}

  }
}

module.exports = {
	login: login,
	logout: logout,
}