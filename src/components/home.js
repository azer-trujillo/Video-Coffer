import React from "react";
import "../styles/home.css";
import SearchBar from "./searchBar";
import { useHistory } from "react-router-dom";
import { ButtonGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";


export const Home = ({ startLogout }) => {

  const history = useHistory();

  return (
    <div className="Home">
      <div className="d-flex flex-column">
        <ButtonGroup>
          <Button variant="warning" onClick={() => history.push("/videoPlayer")}>Video Player</Button>
          <Button variant="warning" onClick={() => history.push("/watchLater")}>My List</Button>
          <Button variant="warning" onClick={() => { startLogout() }}>Logout</Button>
        </ButtonGroup>
      </div>
      <div className="lander">
        <h1>Video Coffer</h1>
        <p>If you love a video, don't let it go</p>
        <SearchBar />
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Home);