import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR} from '../actions'
import { call, put, takeLatest } from 'redux-saga/effects'
import loginService from '../services/loginService'

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