import React from "react";
import "../styles/watchLater.css";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { startLogout } from "../actions/auth";
import { removeVideoList } from "../actions/videoId";
import {
  InputGroup,
  FormControl,
  Spinner,
  Card,
  Button,
  CardDeck
} from "react-bootstrap";
import videoId from "../actions/videoId";

export const WatchLater = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const videolist = useSelector(state => state.list);
  const sName = useSelector(state => state.users);
  const { email } = sName;

  const toPlayer = key => {
    dispatch(videoId(key));
    history.push("/videoPlayer");
  };

  const HandlePush = item => {
    const videoData = {
      sid: item.sid,
      email: email
    };
    dispatch(removeVideoList(videoData));
    history.push("/watchLater");
  };

  console.log(videolist);

  return (
    <div className="WatchLater">
      <p />
      <p />
      <p />
      <div className="lander">
        <h1>Video Coffer</h1>
        <p>If you love a video, don't let it go</p>
        {videolist.map(item => {
          return (
            <div key={item.id}>
              <CardDeck>
                <Card border="danger">
                  <Card.Img variant="top" src={item.thumbnail} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => {
                        toPlayer(item.id);
                      }}
                    >
                      Play
                    </Button>
                    <Button
                      variant="warning"
                      onClick={() => {
                        HandlePush(item);
                      }}
                    >
                      Remove from Watch List
                    </Button>
                  </Card.Body>
                </Card>
              </CardDeck>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WatchLater;

/*function mapStateToProps(state) {
  return { todos: state };
}
export default connect(mapStateToProps)(WatchLater);*/
