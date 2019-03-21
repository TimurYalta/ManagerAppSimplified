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
     GET_TESTS
 } from '../constants/ActionTypes';
import * as testsList from '../services/testsListServices';

export const getTests = () => {
    return (dispatch) => {
        try {
            testsList.getTests()
                .then((res)=>{
                    dispatch({
                        type: GET_TESTS,
                        tests: res
                    });
                }
            );
        } catch(e) {}
    }
}

export const deleteTest = (testId) => {
    return (dispatch) => {
        try {
            testsList.deleteTest(testId)
                .then(()=>{
                    dispatch(getTests())
                }
            );
        } catch(e) {}
    }
} 