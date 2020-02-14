import {addVideoList,getVideoList,removeVideoList}from '../../actions/videoId';

it('It should create an add-video-list action object',()=>{
    const videoData={
        title: 'video title',
        description: 'video description',
        id:'asdf',
        thumbnail: 'video thumbnail',
        email: 'raul.lopez@partnerhero.com'
    };
    const action = addVideoList({videoData});
    expect(action).toEqual(({
        type: 'asdf'
    }))
});

// it('Should create get-video-list',()=>{
//     const action = getVideoList({emai:'raul_lopez@partnerhero.com'});
//     expect(action).toEqual({

//     })
// })