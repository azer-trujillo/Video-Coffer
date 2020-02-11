import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { startLogin } from '../actions/auth';
import '../styles/login.css';

export const LoginPage = ({ startLogin }) => {

  return (
    <div className="Login">
      <Button
        variant="danger"
        onClick={startLogin}
      >
        Sign in with Google
      </Button>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});



export default connect(undefined, mapDispatchToProps)(LoginPage);
