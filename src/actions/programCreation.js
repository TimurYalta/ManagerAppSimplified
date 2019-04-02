import {
    CREATE_PROGRAM,
    SET_PROGRAM_ID,
    ADD_TEST_TO_PROGRAM,
    DELETE_TEST_FROM_PROGRAM
} from '../constants/ActionTypes';

import * as programCreation from '../services/programCreation';


export const createProgram = (name) => {
    return (dispatch, getState) => {
        programsCreation.createProgram(name, getState().applicationReducer.token)
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

//TODO implement after the API
export const getTests = () => {

}

//TODO implement after the API
export const addTest = (id) => {

}

//TODO implement after the API
export const deleteTest = (id) => {

}