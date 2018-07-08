import {LOGIN_SUCCESS, LOGIN_ERROR} from '../actions'

const initialState = {
    success: null,
    error: null,
    isLogged: false
}

export default function loginReducer(state = initialState, { type, payload }){
    switch (type) {
      case LOGIN_SUCCESS: {
        console.log('payload in success', payload);
        return { ...state, success: payload, isLogged: true };
      }
      case LOGIN_ERROR: {
        console.log('payload in error', payload);
        return { ...state, error: payload, isLogged: false }
      }
      default:
        return state;
    }
};