import { 
	CREATE_NEW_TEST,
	SET_ID,
	CHANGE_NAME,
	ADD_QUESTION,
	SAVE_QUESTION, 
	DELETE_QUESTION,
	SEND_TEST    
} from '../constants/ActionTypes';

// The initial state of the App
const initialState = {
	id:'',
	name:'',
	educationalProgram:'',
	questions:[]
};

function testCreationReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_NEW_TEST:
			// Delete prefixed '@' from the github username
			return {
                ...state,
                name: action.payload.name,
                educationalProgram: action.payload.educationalProgram
            };
		case SET_ID:
            return {
                ...state,
                id: action.payload
            }; 
		case CHANGE_NAME:
            return {
                ...state,
                name: action.payload
            }; 
            
		case ADD_QUESTION:
			const newQuestion = {
				type: '',
				description: '',
				variants: [],
				right:''
			};
            return {
                ...state,
                questions: [...state.questions, newQuestion],
            }; 
		case SAVE_QUESTION:
			let newQuestions = [...state.questions];
			newQuestions[action.payload.questionNumber] = action.payload.newQuestion;
            return {
                ...state,
                questions: newQuestions
            }; 
		case DELETE_QUESTION:
			let questions = [...state.questions];
			questions.splice(action.payload, 1);
            return {
                ...state,
                questions: questions
            };
            
		case SEND_TEST:
            return initialState;
            
		default:
			return state;
	}
}

export default testCreationReducer;