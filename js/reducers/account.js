/**
 * 账户 reducer
 */

import { LOGIN } from '../actions/actionTypes';


 const initialState = {
 	isLogin: false,
 	isLogin: false,
 	isLogin: false,
 }

const account = (state = initialState, action) => {
	switch (action.type) {
    case LOGIN:
      return {
        ...state,
        reddit: action.reddit,
        url: action.url || '',
        isSmallTab: action.isSmallTab || false
      }
    default:
      return state
  }
}