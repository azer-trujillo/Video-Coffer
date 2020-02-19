const INITIAL_STATE = {
    id: null
};

const videoIdReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'VIDEO_ID':
            return {
                ...state,
                id: action.payload
            };
        default:
            return state;
    };
};


export default videoIdReducer;