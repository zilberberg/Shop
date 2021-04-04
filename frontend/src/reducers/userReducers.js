import {USER_SIGNIN_FAIL, 
    USER_SIGNIN_REQUEST, 
    USER_SIGNIN_SUCCESS, 
    USER_SIGNOUT_FAIL, 
    USER_SIGNOUT_REQUEST, 
    USER_SIGNOUT_SUCCESS} from '../constants/userConstants';

function userSigninReducer(state = {}, action) {
    switch(action.type) {
        case USER_SIGNIN_REQUEST:
            return {loading: true}
        case USER_SIGNIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_SIGNIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_SIGNOUT_REQUEST:
            return {loading: true}
        case USER_SIGNOUT_SUCCESS:
            return {loading: false, userInfo: null}
        case USER_SIGNOUT_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state;
    }
}

export {
    userSigninReducer
}