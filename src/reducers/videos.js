const videosReducerDefaultState = {
    fetching: false,
    fetched: false,
    error: null,
    nextPageToken: null,
    pageInfo: {
        totalResults: 0,
        resultsPerPage: 0,
    },
    videos: []
};

const videosReducer = (state = videosReducerDefaultState, action) => {
    switch (action.type) {
        case 'FETCH_VIDEOS_PROCESS':
            return {
                ...state,
                fetching: true
            };
        case 'FETCH_VIDEOS_FAIL':
            return {
                ...state,
                fetching: false,
                error: action.payload
            };
        case 'FETCH_VIDEOS_PASS':
            return {
                ...state,
                fetching: false,
                fetched: true,
                nextPageToken: action.payload.data.nextPageToken,
                pageInfo: action.payload.data.pageInfo,
                vids: action.payload.data.vids
            };
        default:
            return state;
    };
};

export default videosReducer;