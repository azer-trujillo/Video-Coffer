import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import videosReducer from '../reducers/videos';
<<<<<<< HEAD
import userReducer from '../reducers/User';
=======
import videoIdReducer from '../reducers/videoId';
>>>>>>> origin/master

const configureStore = () => {
    const store = createStore(
        combineReducers({
            videos: videosReducer,
<<<<<<< HEAD
            users: userReducer
=======
            videoId: videoIdReducer
>>>>>>> origin/master
        }),
        applyMiddleware(thunk, promise)
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
<<<<<<< HEAD
        
=======
>>>>>>> origin/master
    return store;
};



export default configureStore;