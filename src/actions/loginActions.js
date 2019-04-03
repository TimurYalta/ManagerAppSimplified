import {
    SUCCESSFUL_LOGIN,
    INCORRECT_LOGIN,
    LOGOUT
} from '../constants/ActionTypes';

import authorize from '../services/login';
var HttpStatus = require('http-status-codes');

export const login = (login, password) => {
    return (dispatch) => {
        authorize(login, password)
        .then((token) => {
            dispatch({
                type: SUCCESSFUL_LOGIN,
                payload: token
            });
        })
        .catch((e) => {
            if (e.status == HttpStatus.BAD_REQUEST) {
                alert("Incorrect login/password");
                dispatch({
                    type: INCORRECT_LOGIN
                });
            }
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}