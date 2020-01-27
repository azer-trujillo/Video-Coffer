import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';

export const startLogin = () => {
    //return firebase.auth().signInWithPopup(googleAuthProvider);
    firebase.auth().signInWithPopup(googleAuthProvider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...
      var user = firebase.auth().currentUser;

      if (user) {
      
      } else {

      }
      //console.log(configureStore);
   
      console.log(user);
      return user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    console.log('lol');

};

