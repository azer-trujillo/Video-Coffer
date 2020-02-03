import database from '../firebase/firebaseConfig';

const videoId = (key) => ({
    type: "VIDEO_ID",
    payload: key
});

function hashCode(s) {
    for(var i = 0, h = 0; i < s.length; i++)
        h = Math.imul(31, h) + s.charCodeAt(i) | 0;
    return h;
};
  

export const addVideoList = (videoData)=>{
    return (dispatch)=>{
        const {
            title = '',
            description = '',
            id='',
            thumbnail= '',
            email= ''
        }= videoData;
        const video = {
            title, description,id,thumbnail
        }
        const hash = hashCode(email)
        database.ref(`videolist/${hash}`).push(video).then(()=>{
            console.log('added to server')
        })
    };
};

export const getVideoList = (user)=>{
    return (dispatch)=>{
        database.ref(`videolist/${user}`).once('value').then((snapshot)=>{
            const savedvideos =[];
            snapshot.forEach((child)=>{
                savedvideos.push({
                    sid: child.key,
                    ...child.val()
                })
            })
           console.log( snapshot.val());
        });
    };
};

export const removeVideoList = (videoData)=>{
    return (dispatch)=>{
        const {
            title = '',
            description = '',
            id='',
            thumbnail= '',
            email = ''
        }= videoData;
        const video = {
            title, description,id,thumbnail
        }
        const hash = hashCode(email)
        database.ref(`videolist/${hash}/${id}`).remove(video).then(()=>{
            console.log('deleted from server')
        })
    };
};


export default videoId;