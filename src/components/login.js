import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import {firebase} from '../firebase/firebaseConfig';
import { Route, Redirect, } from 'react-router';
import { useHistory } from 'react-router-dom';


export const LoginPage = ({ startLogin }) => {


  let history = useHistory();

    const handleClick = () => {
        //history.push('/home')
    };

  return (
    <div>
     <button onClick={function(event){ startLogin(); handleClick()}}>Login</button>
    </div>
  );
};  

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});



export default connect(undefined, mapDispatchToProps)(LoginPage);
