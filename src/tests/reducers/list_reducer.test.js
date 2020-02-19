import listReducer from '../../reducers/list';
import { stat } from 'fs';

const video ={
    title: 'title',
    description: 'this is a video',
    id: 1,
    sid: 1.1,
    thumbnail: 'this is a thumbnail'
};

it('should set default state',()=>{
    const state = listReducer(undefined,{ type:'@@INIT'});
    expect(state).toEqual([]);
});

it('should add store object', ()=>{
    const action = {
        type:'ADD_LIST',
        video:video
      };
      const prevState =[];
      const state= listReducer(prevState,action);
      expect(state).toEqual( [video]);
});

it('should remove store object', ()=>{
    const video = {
        type:'REMOVE_LIST',
        sid:1.1
      };
      const prevState =[];
      const state= listReducer(prevState,video);
      expect(state).toEqual([]);
});