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
        sid: video.sid,
        description: video.description,
        id: video.id,
        thumbnail: video.thumbnail,
        title: video.title
    }
}); 


export const removeList =(id)=>({
    type: 'REMOVE_LIST',
    sid: id
});

export const getList =(list)=>({
    type: 'GET_LIST',
    list: list
})

