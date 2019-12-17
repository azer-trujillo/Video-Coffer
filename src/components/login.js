import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import '../styles/login.css';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        return email.length > 0 && password.length > 0;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formGroupEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    placeholder="Enter Email"
                    onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formGroupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                block
                variant="primary"
                disabled={!validateForm()}
                type="submit"
                >
                Login
                </Button>
            </Form>
        </div>
    );*/

    
    

    return(
      <div>
        <Button
        onClick={fireAuth} 
        >
          Sign in with google
        </Button>
      </div>
    );
      
}

    

export default Login;