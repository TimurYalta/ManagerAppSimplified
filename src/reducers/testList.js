import {GET_TESTS} from '../constants/ActionTypes';

const initialState = [];


function testCreationReducer(state = initialState, action) {
	switch (action.type) {
        case GET_TESTS:
            return action.payload||[];
		default:
			return state;
	}
}

export default testCreationReducer;