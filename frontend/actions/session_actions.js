import * as SessionaAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = "CLEAR_ERRORS"

const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER,
})

const receiveErrors = errors => ({
    type: RECEIVE_ERRORS,
    errors
})

export const clearErrors = errors => ({
    type: CLEAR_ERRORS
})


export const signup = user => dispatch => (
    SessionaAPIUtil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const login = user => dispatch => (
    SessionaAPIUtil.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const logout = () => dispatch => (
    SessionaAPIUtil.logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)