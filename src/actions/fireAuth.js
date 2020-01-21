import firebase from 'firebase';
import firebaseConfig from '../firebase/firebaseConfig';
import configureStore from '../store/store';
import { useReducer, addUser } from '../reducers/User';
var provider = new firebase.auth.GoogleAuthProvider();
    /*firebase.auth().createUserWithEmailAndPassword("rara@google.com", "password").catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });*/

const user =({})=>({
  
})

const store = configureStore();
const session =({user}={})=>({
  type: 'upUser',
  user
});


const fireAuth= ()=>{
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      let user = result.user;
      // ...

      //console.log(configureStore);
      configureStore();
      store.subscribe(()=>{
        console.log(store.getState());
      });
      console.log(user);
      store.dispatch(addUser({user: user.uid ,name: user.displayName, email: user.email}));
      
      //store.dispatch(store.addUser({user: 'tamal'}));
      //console.log(store.dispatch('upUser'))
      
      //console.log(result);
      //console.log(token);
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
}
    export default fireAuth;