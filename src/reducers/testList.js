import {GET_TESTS} from '../constants/ActionTypes';

const initialState = [{
    title: 'Super Test',
    id: 'fucks',
    questions:[
        {
            type:"TEXT",
            description:"sss",
            variants:"aaaa",
            right:"",
        },
        {
            type:"RADIO",
            description:"sss",
            variants:["asd","dd","ff"],
            right:[1]
        },
        {
            type:"Check",
            description:"sss",
            variants:["asd","dd","ff"],
            right:[1,2]
        },
    ]
},{
    title: 'Super Test',
    id: 'fucks',
    questions:[
        {
            type:"TEXT",
            description:"sss",
            variants:"aaaa",
            right:"",
        },
        {
            type:"RADIO",
            description:"sss",
            variants:["asd","dd","ff"],
            right:[1]
        },
        {
            type:"Check",
            description:"sss",
            variants:["asd","dd","ff"],
            right:[1,2]
        },
    ]
},
];


function testCreationReducer(state = initialState, action) {
	switch (action.type) {
        case GET_TESTS:
            return action.payload||[];
		default:
			return state;
	}
}

export default testCreationReducer;