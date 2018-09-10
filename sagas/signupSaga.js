import {SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_ERROR} from '../actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import { hosting } from '../config';

function signupService(url, params = {}){
    
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

function* signupRequest({ payload: { username, email, password } }){
    
    const options = {
      username,  
      email, 
      password
    };

    try { 
        const data = yield call(signupService, '/auth/signup', options);
        yield put({ type: SIGNUP_SUCCESS, payload: data });
    } catch (error){
        yield put({ type: SIGNUP_ERROR, payload: error });
        console.log(error);
    }
} 

function* signupSaga () {
    yield takeLatest(SIGNUP_REQUEST, signupRequest)
}

export default signupSaga