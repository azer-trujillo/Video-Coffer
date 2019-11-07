import * as firebase from 'firebase';

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

export { firebaseConfig, googleAuthProvider, database as default };