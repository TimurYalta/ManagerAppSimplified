import {
    SUCCESSFUL_LOGIN,
    INCORRECT_LOGIN
} from '../constants/ActionTypes';

import authorize from '../services/loginActions';
var HttpStatus = require('http-status-codes');

export const login = (login, password) => {
    return (dispatch) => {
        authorize(login, password)
        .then(token => {
            dispatch({
                type: SUCCESSFUL_LOGIN,
                payload: token
            });
        })
        .catch(e => {
            if (e.status == HttpStatus.BAD_REQUEST) {
                dispatch({
                    type: INCORRECT_LOGIN
                });
            }
        })
    }
}