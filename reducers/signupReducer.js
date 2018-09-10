import {SIGNUP_SUCCESS, SIGNUP_ERROR} from '../actions'

const initialState = {
    success: null,
    error: null,
    isSignedUp: false,
}

export default function signupReducer(state = initialState, { type, payload }){
    switch (type) {
      case SIGNUP_SUCCESS: {
        console.log('payload in success', payload);
        return { ...state, success: payload, isSignedUp: true };
      }
      case SIGNUP_ERROR: {
        console.log('payload in error', payload);
        return { ...state, error: payload, isSignedUp: false }
      }
      default:
        return state;
    }
};