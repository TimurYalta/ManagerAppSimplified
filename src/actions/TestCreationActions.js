/*
 * Test Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { 
    CREATE_NEW_TEST, 
    SET_ID, 
    CHANGE_NAME, 
    ADD_QUESTION,
    DELETE_QUESTION,
    SEND_TEST, 
    SAVE_QUESTION
} from '../constants/ActionTypes';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The name of the recently created test
 * @param  {educationalProgram} educationalProgram The type
 * of the program for which the test is created
 * 
 * @return {object}    An action object with a type of CREATE_NEW_TEST
 */
export const createNewTest = (name, educationalProgram) => {
    return(dispatch) => {
        dispatch(
            {
                type: CREATE_NEW_TEST, 
                payload: [name, educationalProgram]
            }
        );
        //TODO service API call
    };
}

export const setId = (id) => {
    return {
        type: SET_ID,
        payload: id
    };
}

export const changeName = (name) => {
    return {
        type: CHANGE_NAME,
        payload: name
    };
}

export const addQuestion = () => {
    return {
        type: ADD_QUESTION
    };
}

export const saveQuestion = (questionNumber, newQuestion) => {
    return (dispatch) => {
        dispatch(
            {
                type: SAVE_QUESTION,
                payload: {questionNumber, newQuestion}
            }
        );
        //TODO API call
    };
}

export const deleteQuestion = (questionNumber) => {
    return(dispatch, getState) => {
        const questionType = getState().testCreationReducer.questions[questionNumber].type;
        if (questionType) {
            //TODO API call
        }
        
        dispatch(
            {
                type: DELETE_QUESTION,
                payload: questionNumber
            }
        );
    }
}

export const sendTest = () => {
    return(dispatch, getState) => {
        const id = getState().testCreationReducer.id;
        //TODO API call

        dispatch(
            {
                type: SEND_TEST
            }
        );
    };
}