import {addVideoList,getVideoList,removeVideoList}from '../../actions/videoId';
import { italic } from 'ansi-colors';

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