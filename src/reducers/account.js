import {
    GET_ME,
    GET_USERS,
    GET_USER
} from '../constants/ActionTypes';

const initialState = {
    me: {
        id:1,
        name: "Bulat Khabirov",
        role: "staff",
        email: "b.khabirov@innopolis.ru"
    },
    users: [
        {
            id:1,
            name: "Bulat Khabirov",
            role: "staff",
            email: "b.khabirov@innopolis.ru"
        },
        {
            id:2,
            name: "Mikhail Fadeev",
            role: "candidate",
            email: "idzeti@gmail.com"
        },
    ]
};

function accountReducer(state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                users: [action.payload]
            }
        case GET_ME:
            return {
                me: action.payload,
                users: []
            }
        case GET_USERS:
            return {
                ...state,
                users: action.payload||[]
            }
        default:
            return state;
    }
}

export default accountReducer;