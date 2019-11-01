import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Login from './components/login';
import Routes from './routes';
import './styles/app.css';

const App = (props) => {
  return (
    <div className="App container">
      <Navbar fluid="true" collapseOnSelect>
          <Navbar.Brand>
            <Link to="/">Video Coffer</Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem href="/signup">Signup</NavItem>
            <NavItem href="/login">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
};

export default App;
