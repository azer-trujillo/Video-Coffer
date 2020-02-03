const video ={
    title: undefined,
    description: undefined,
    id: undefined,
    sid: undefined,
    thumbnail: undefined
}


export const addList =(video)=>({
    type: 'ADD_LIST',
    video:{
        title: video.title,
        description: video.title,
        id: video.id,
        sid: video.sid,
        thumbnail: video.thumbnail
    }
}); 


export const removeList =(id)=>({
    type: 'ADD_LIST',
    sid: id
});

export const getList =(list)=>({
    type: 'GET_LIST',
    list: list
})

