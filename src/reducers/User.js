import {connect} from 'react-redux';

const userReducerDefaultState = {
    user: 'Anon',
    name: 'undefined',
    email: undefined,
    id: 0,

};


const userReducer = (state = userReducerDefaultState  , action) => {
    switch (action.type) {
        case 'upUser':
            console.log(state);
            return{
                ...state,
            user: action.user,
            name: action.payload,
            email: action.email,
            id: action.id
        }
        case 'STATE':
            return state;
    default:
        return state;
    }

}

export default userReducer;