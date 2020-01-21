import { createStore, combineReducers } from 'redux';
import videosReducer from '../reducers/videos';
import userReducer from '../reducers/User';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            videos: videosReducer,
            users: userReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
        
    return store;
};



export default configureStore;