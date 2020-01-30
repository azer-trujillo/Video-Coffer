import uuid from 'uuid';
import database from '../firebase/firebaseConfig';

export const addVideo = (Video)=>({
    type: 'ADD_VIDEO',
    video
});