import { GET_TESTS } from '../constants/ActionTypes';

const initialState = [
    {
        id: '',
        title: 'asdasd',
        tests: [],
    },
    {
        id: '',
        title: '1234',
        tests: [],
    },
    {
        id: '',
        title: '32133',
        tests: [],
    },
];


function programListReducer(state = initialState, action) {
    switch (action.type) {

        default:
            return state;
    }
}

export default programListReducer;