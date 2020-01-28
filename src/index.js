import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import configureStore from './store/store';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import {firebase} from './firebase/firebaseConfig';
import {history} from './routes';


const store = configureStore();
const jsx = (
  <Provider store={store}>
    <Router>
     <App />
    </Router>
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('root'));



firebase.auth().onAuthStateChanged((user)=>{ 
  if(user){
    history.push('/home');
    console.log('loged in')
  }else{
    console.log('loged out')
    history.push('/');
  }
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
