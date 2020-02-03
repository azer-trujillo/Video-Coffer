const listReducerDefaultState = [{
    

}];

const video ={
    title: undefined,
    description: undefined,
    id: undefined,
    sid: undefined,
    thumbnail: undefined
}


const addList =(video)=>({
    type: 'ADD_LIST',
    video:{
        title: video.title,
        description: video.title,
        id: video.id,
        sid: video.sid,
        thumbnail: video.thumbnail
    }
});

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
        case 'STATE':
            return state;
    default:
        return state;
    }

}

export default listReducer;