export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS= 'LOGOUT_SUCCESS';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_ERROR   =  'SIGNUP_ERROR';

export const PASSWORDRECOVERY_REQUEST = 'PASSWORDRECOVERY_REQUEST';
export const PASSWORDRECOVERY_SUCCESS = 'PASSWORDRECOVERY_SUCCESS';
export const PASSWORDRECOVERY_ERROR = 'PASSWORDRECOVERY_ERROR';

export const login = (email, password) => ({
    type: LOGIN_REQUEST,
    payload: { email, password }
});

export const logout = ()  => ({
    type: LOGOUT_REQUEST
});

export const signup = (username, email, password) => ({
    type: SIGNUP_REQUEST,
    payload: { username, email, password }
});
export const passwordRecovery = (email) => ({
    type: PASSWORDRECOVERY_REQUEST,
    payload: { email }
});