import {LOGOUT_SUCCESS, LOGOUT_ERROR} from '../actions'

const initialState = {
    isLoggedOut: false
}

export default function logoutReducer(state = initialState, { type }){
    switch (type) {
      case LOGOUT_SUCCESS: {
        console.log('LOGOUT SUCCESS');
        return { ...state, isLoggedOut: true };
      }
      case LOGOUT_ERROR: {
        console.log('LOGOUT ERROR');
        return { ...state, isLoggedOut: false }
      }
      default:
        return state;
    }
};