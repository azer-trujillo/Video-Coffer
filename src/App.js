import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Routes from './routes';
import './styles/app.css';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import addUser from './actions/User';

const App = (props) => {

  const usName = useSelector((state) => state.users);
  const { name } = usName;
  let dname;
  // store.subscribe(()=>{
    
  //   dname = store.getState().users.name;
  //   console.log(dname);
  //   //this.forceUpdate();
  // }); 
  // store.dispatch(addUser({user: 'boom' ,name: 'catapoom', email: 'chinchin'}));

  return (
    <div className="App container">
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Video Coffer</Navbar.Brand>
          <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           {
             name
           }
            {console.log(usName)}
            
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
};


// const mapStateToProps = state => ({
//   props: state.users
// });


export default App;
