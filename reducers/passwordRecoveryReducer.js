import {PASSWORDRECOVERY_SUCCESS, PASSWORDRECOVERY_ERROR} from '../actions'

const initialState = {
    isEmailSent: false,
}

export default function passwordRecoveryReducer(state = initialState, { type, payload }){
    switch (type) {
      case PASSWORDRECOVERY_SUCCESS: {
        console.log('payload in success', payload);
        return { ...state, isEmailSent: true };
      }
      case PASSWORDRECOVERY_ERROR: {
        console.log('payload in error', payload);
        return { ...state, isEmailSent: false }
      }
      default:
        return state;
    }
};