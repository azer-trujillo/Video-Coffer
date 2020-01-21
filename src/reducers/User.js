import{createStore, combineReducers} from 'react';

const configureStore = () => {
    const store = createStore()
    store.subscribe(()=>{
        console.log(store.getState());
    });
}
const userReducerDefaultState = {
    user: 'Anon',
    name: undefined,
    email: undefined,
    id: 0
};
const addUser =(
    {
        user= '',
        name = '',
        email=''
    }={}
    ) =>({
    type: 'upUser',
    user,
    name,
    email,  
    id: 410

});
const userReducer = (state = userReducerDefaultState, action) => {
    switch (action.type) {
        case 'upUser':
            state.user = action.user;
            state.name = action.name;
            state.email = action.email;
            state.id = action.id;
    default:
        return state;
    }

}

//const store =createStore(userReducer);

export default  userReducer;
export {addUser};