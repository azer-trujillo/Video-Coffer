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
          <Navbar.Text>
            Signed in as: Anonymous
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
};

console.log(process.env.REACT_APP_FIREBASE_API_KEY);

export default App;
