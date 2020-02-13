import {getList, addList, removeList } from '../../actions/list';

it('should set up list action object', ()=>{
    const video = {
        sid: 'sdf',
        description: 'This is a video',
        id: 'videoid',
        thumbnail: 'thumbnail.com',
        title: 'Video Title'
    }
    const action = addList(video);
    expect(action).toEqual({
        type: "ADD_LIST",
        video
    })
})

it('should set up list action object with default values', ()=>{
    const action = addList({});
    expect(action).toEqual({
        type: "ADD_LIST",
        video: {
        }
    })
})

it('should set up get-list action object',()=>{
    const action = getList(['a','b']);
    expect(action).toEqual({
        type: 'GET_LIST',
        list: ['a','b']
    })
})

it('should set up remove-list action object',()=>{
    const action = removeList('asdf');
    expect(action).toEqual({
        type:'REMOVE_LIST',
        sid: 'asdf'
    })
})