import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Routes from "./routes";
import "./styles/app.css";
import moment from "moment";

const App = props => {
  const now = moment().format();
  return (
    <div className="App container">
      <div id="dateTime" align="right">
        {now}
      </div>
      <Navbar bg="light" expand="lg">
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
