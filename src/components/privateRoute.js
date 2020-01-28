import React, {useEffect, useState} from 'react';
import {firebase} from '../firebase/firebaseConfig';


// const privateRoute = props => {
//     const [authenticated, setAuthenticatedStatus] = 
//     useEffect(() => {
//         firebase.auth().onAuthStateChanged((user)=>{ 
//             if(user){
//               //console.log('logged in')
//               //window.location.replace('/home');
//               // set state
//               history.push('/home');
//             }else{
//               history.push('/');
//             }
//           });
//     }, [])

//     return (

//     )
// }
