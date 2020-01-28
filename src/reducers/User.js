const userReducerDefaultState = {
    user: undefined,
    name: undefined,
    email: undefined,
    id: 0,

};


const userReducer = (state = userReducerDefaultState  , action) => {
    switch (action.type) {
        case 'LOGIN':
            console.log(state);
            console.log('heylisten');
            return{
                ...state,
            user: action.user,
            name: action.payload,
            email: action.email,
            id: action.id,
            };
        case 'LOGOUT':
            return{};
        case 'STATE':
            return state;
    default:
        return state;
    }

}

export default userReducer;