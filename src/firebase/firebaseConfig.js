import * as firebase from 'firebase';

/*const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };*/

  const firebaseConfig = {
    apiKey: "AIzaSyCdPaq4YbeaitnjRh-JXhZnlrBb1vrN4dc",
    authDomain: "video-coffer.firebaseapp.com",
    databaseURL: "https://video-coffer.firebaseio.com",
    projectId: "video-coffer",
    storageBucket: "video-coffer.appspot.com",
    messagingSenderId: "108204784254",
    appId: "1:108204784254:web:5fd1e4a28ef568b788f62f"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


// function hashCode(s) {
//   for(var i = 0, h = 0; i < s.length; i++)
//       h = Math.imul(31, h) + s.charCodeAt(i) | 0;
//   return h;
// };
// const hash = hashCode('raul.lopez@partnerhero.com')
// database.ref(`videolist/${hash}`).once('value').then((snapshot)=>{
//   const savedvideos =[];
//   snapshot.forEach((child)=>{
//       savedvideos.push({
//           sid: child.key,
//           ...child.val()
//       })
//   })
//  console.log( savedvideos);
// });


export { firebase, firebaseConfig, googleAuthProvider, database as default };