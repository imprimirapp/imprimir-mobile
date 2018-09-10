import {LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_ERROR} from '../actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import { hosting } from '../config';

function logoutService(url){

    console.log('URL IN SAGA', url);
    
    return new Promise((resolve, reject) => {
        return fetch(hosting+url,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            if(json.status === 200){
                return resolve(json)
            } else {
                return reject(json);
            }
        })
    });
}

function* logoutRequest(){

    try { 
        const data = yield call(logoutService, '/auth/logout');
        if(data){
            console.log('DATA LOGOUT');
            yield put({ type: LOGOUT_SUCCESS });
        } else {
            console.log('NO DATA');
        }
        
    } catch (error){
        yield put({ type: LOGOUT_ERROR });
        console.log(error);
    }
} 

function* logoutSaga () {
     yield takeLatest(LOGOUT_REQUEST, logoutRequest)
}


export default logoutSaga