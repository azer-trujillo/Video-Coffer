import { createStore, combineReducers } from 'redux';
import videosReducer from '../reducers/videos';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            videos: videosReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

    return store;
};

export default configureStore;