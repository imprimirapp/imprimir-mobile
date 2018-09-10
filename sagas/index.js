import  loginSaga  from './loginSaga';
import  logoutSaga from './logoutSaga';
import  signupSaga from './signupSaga';
import passwordRecoverySaga from './passwordRecoverySaga';
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield fork(loginSaga),
  yield fork(logoutSaga),
  yield fork(signupSaga),
  yield fork(passwordRecoverySaga)
}