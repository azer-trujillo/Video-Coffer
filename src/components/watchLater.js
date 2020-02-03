import React from "react";
import "../styles/watchLater.css";
import SearchBar from "./searchBar";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { history } from "../routes";

const toplayer = () => {
  //ReactDOM.render(jsx, document.getElementById('root'));
  history.push("/videoPlayer");
};

const towatchlater = () => {
  history.push("/watchLater");
};

export const WatchLater = () => {
  return (
    <div className="WatchLater">
      <p />
      <p />
      <p />
      <div className="lander">
        <h1>Video Coffer</h1>
        <p>If you love a video, don't let it go</p>
        <div>
          Your saved videos will appear here.
          <p />
          <button
            onClick={function(event) {
              toplayer();
            }}
          >
            Video Player
          </button>
          <button
            onClick={function(event) {
              towatchlater();
            }}
          >
            Watch Later List
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchLater;
