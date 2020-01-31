import React from "react";
import Routes from "./routes";
import "./styles/app.css";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
import Clock from "./components/clock";

const App = props => {
  const usName = useSelector(state => state.users);
  const { name } = usName;
<<<<<<< HEAD
  // store.subscribe(()=>{

  //   dname = store.getState().users.name;
  //   console.log(dname);
  //   //this.forceUpdate();
  // });
  // store.dispatch(addUser({user: 'boom' ,name: 'catapoom', email: 'chinchin'}));
=======
>>>>>>> db

  return (
    <div className="App container">
      <Clock />
      <Navbar bg="light" expand="lg">
        <img src="favicon.png" height="32" width="32" />
        <Navbar.Brand href="/">Video Coffer</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>{name}</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
};

<<<<<<< HEAD
// const mapStateToProps = state => ({
//   props: state.users
// });

=======
>>>>>>> db
export default App;
