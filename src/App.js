import React from "react";
import { Navbar } from "react-bootstrap";
import Routes from "./routes";
import "./styles/app.css";
import Clock from "./components/clock";

const App = (props) => {
  return (
    <div className="App container">
      <Clock />
      <Navbar bg="light" expand="lg">
        <img src="favicon.png" height="32" width="32" />
        <Navbar.Brand href="/">Video Coffer</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as: Anonymous</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
};

export default App;
