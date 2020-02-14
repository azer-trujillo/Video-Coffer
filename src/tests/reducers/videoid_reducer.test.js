import videoIdReducer from '../../reducers/videoId';


it('should set video-reducer default state',()=>{
    const state = videoIdReducer(undefined,{ type:'@@INIT'});
    expect(state).toEqual( {"id": null});
});

it('should add video to state',()=>{
    const prevState = {
        id: null
    }
    const videoID ={
        type: "VIDEO_ID",
        payload: 'key'
    }
    const state = videoIdReducer(prevState,videoID);
    expect(state).toEqual({
        id: 'key'
    })
})