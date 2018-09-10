import  loginSaga  from './loginSaga';
import  logoutSaga from './logoutSaga';
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield[
    fork(loginSaga),
    fork(logoutSaga)
  ] 
}