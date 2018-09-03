import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import { hosting } from '../config';

function loginService(url, params = {}){
    
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
                return resolve(json.data)
            } else {
                return reject(json);
            }
        })
    });
}

function* loginRequest({ payload: { email, password } }){
    
    const options = {
      email, 
      password
    };

    try { 
        const data = yield call(loginService, '/auth/login', options);
        yield put({ type: LOGIN_SUCCESS, payload: data });
    } catch (error){
        yield put({ type: LOGIN_ERROR, payload: error });
        console.log(error);
    }
} 

function* loginSaga () {
    yield takeLatest(LOGIN_REQUEST, loginRequest)
}

export default loginSaga