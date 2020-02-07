import React from 'react';
import { useSelector } from 'react-redux';
import { Navbar } from "react-bootstrap";
import Clock from "./components/clock";
import Routes from './routes';
import './styles/app.css';

const App = () => {

  const usName = useSelector(state => state.users);
  const { name } = usName;

  return (
    <div className="App container">
      <Clock />
      <Navbar bg="danger" variant="dark" expand="lg">
        <img src="favicon.png" height="32" width="32" alt="chest-icon" />
        <Navbar.Brand href="/">Video Coffer</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            <a>{name}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
};

export default App;