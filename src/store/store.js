import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import videosReducer from '../reducers/videos';
import userReducer from '../reducers/User';
import videoIdReducer from '../reducers/videoId';
import listReducer from '../reducers/list';


const configureStore = () => {
    const store = createStore(
        combineReducers({
            videos: videosReducer,
            users: userReducer,
            videoId: videoIdReducer,
            list: listReducer
        }),
        applyMiddleware(thunk, promise)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store;
};



export default configureStore;