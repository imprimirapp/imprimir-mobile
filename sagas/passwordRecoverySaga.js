import {PASSWORDRECOVERY_REQUEST, PASSWORDRECOVERY_SUCCESS, PASSWORDRECOVERY_ERROR} from '../actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import { hosting } from '../config';

function passwordRecoveryService(url, params = {}){
    
    return new Promise((resolve, reject) => {
        return fetch(hosting+url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params)
        })
        .then((response) => response.json())
        .then((json) => {
            if(json.status === 200){
                return resolve(json)
            } else {
                return reject(json);
            }
        })
    });
}

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