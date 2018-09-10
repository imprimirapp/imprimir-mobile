import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import logoutReducer from './logoutReducer'

const rootReducer = combineReducers({
    login: loginReducer,
    logout: logoutReducer
})

export default rootReducer