const listReducerDefaultState = [];

const listReducer = (state = listReducerDefaultState  , action) => {
    switch (action.type) {
        case 'REMOVE_LIST':
            return state.filter(({id})=>{
                return id !== action.id
            })
        case 'ADD_LIST':
            return [
                ...state,
                action.video
            ]
        case 'GET_LIST':
            return [
                ...state,
                ...action.list
            ]
            
    default:
        return state;
    }

}

export default listReducer;