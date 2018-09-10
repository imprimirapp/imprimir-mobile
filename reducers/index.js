import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import logoutReducer from './logoutReducer'
import signupReducer from './signupReducer'
import passwordRecoveryReducer from './passwordRecoveryReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    logout: logoutReducer,
    signup: signupReducer,
    passwordRecovery: passwordRecoveryReducer
})

export default rootReducer