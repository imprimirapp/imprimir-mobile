import {PASSWORDRECOVERY_REQUEST, PASSWORDRECOVERY_SUCCESS, PASSWORDRECOVERY_ERROR} from '../actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import passwordRecoveryService from '../services/passwordRecoveryService'

function* passwordRecoveryRequest({ payload: { email } }){
    
    const options = {
      email
    };

    try { 
        const data = yield call(passwordRecoveryService, '/auth/recoverPass', options);
        yield put({ type: PASSWORDRECOVERY_SUCCESS, payload: data });
    } catch (error){
        yield put({ type: PASSWORDRECOVERY_ERROR, payload: error });
        console.log(error);
    }
} 

function* passwordRecoverySaga () {
    yield takeLatest(PASSWORDRECOVERY_REQUEST, passwordRecoveryRequest)
}

export default passwordRecoverySaga