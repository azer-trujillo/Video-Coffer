import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Routes from './routes';
import './styles/app.css';

const App = (props) => {
  return (
    <div className="App container">
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Video Coffer</Navbar.Brand>
          <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/signup">Signup</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
};

export default App;
