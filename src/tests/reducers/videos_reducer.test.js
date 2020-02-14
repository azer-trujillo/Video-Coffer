import videoReducer  from '../../reducers/videos';

it('should set video-reducer default state',()=>{
    const state = videoReducer(undefined,{ type:'@@INIT'});
    expect(state).toEqual({
        fetching: false,
        fetched: false,
        error: null,
        nextPageToken: null,
        pageInfo: {
            totalResults: 0,
            resultsPerPage: 0,
        },
        items: []
    });
});

// it('should');
