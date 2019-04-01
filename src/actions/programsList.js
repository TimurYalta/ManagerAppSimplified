import {
    GET_PROGRAMS,
    GET_PROGRAM
} from '../constants/ActionTypes';

import * as programsList from '../services/programsList';

export const getPrograms = () => {
    return (dispatch, getState) => {
        programsList.getPrograms(getState().applicationReducer.token)
            .then((programsList) => {
                dispatch({
                    type: GET_PROGRAMS,
                    payload: programsList
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }
}

export const getProgram = (id, name) => {
    return (dispatch, getState) => {
        programsList.getProgram(id, getState().applicationReducer.token)
            .then((res)=>{
                dispatch({
                    type: GET_PROGRAM,
                    payload: {id, name, tests:res.tests}
                });
            })
            .catch((e) => {
                console.log(e)
            });
    }
}

export const deleteProgram = (id) => {
    return (dispatch, getState) => {
        programsList.deleteProgram(id, getState().applicationReducer.token)
            .then(() => {
                dispatch(getPrograms());
            })
            .catch((e) => {
                console.log(e);
            });
    }
}