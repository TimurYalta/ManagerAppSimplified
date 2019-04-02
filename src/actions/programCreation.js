import {
    CREATE_PROGRAM,
    SET_PROGRAM_ID,
    ADD_TEST_TO_PROGRAM,
    DELETE_TEST_FROM_PROGRAM,
    SAVE_PROGRAM
} from '../constants/ActionTypes';

import * as programCreation from '../services/programCreation';


export const createProgram = (name) => {
    return (dispatch, getState) => {
        programsCreation.createProgram(getState().applicationReducer.token, name)
            .then((res)=>{
                dispatch(setId(res));
                dispatch({
                    type: CREATE_PROGRAM,
                    payload: name
                });
            })
            .catch((e) => {
                console.log(e)
            });
    }
}

export const setId = (id) => {
    return {
        type: SET_PROGRAM_ID,
        payload: id
    };
}

export const getTests = () => {
    return (dispatch, getState) => {
        try {
            testsList.getTests(getState().applicationReducer.token)
                .then((res)=>{
                    console.log(res);
                    dispatch({
                        type: GET_TESTS,
                        payload: res
                    });
                }
            );
        } catch(e) {
            console.log(e);
        }
    }
}

export const addTest = (id) => {
    return {
        type: ADD_TEST_TO_PROGRAM,
        payload: id
    }
}

export const deleteTest = (id) => {
    return {
        type: DELETE_TEST_FROM_PROGRAM,
        payload: id
    }
}

export const saveProgram = () => {
    return (dispatch, getState) => {
        token = getState().applicationReducer.token;
        id = getState().program.id;
        title = getState().program.title;
        tests = getState().program.tests;
        programCreation.modifyProgram(token, id, title, tests)
            .then(() => {
                dispatch({
                    type: SAVE_PROGRAM
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }
}