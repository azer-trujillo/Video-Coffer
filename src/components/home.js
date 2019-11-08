import React from 'react';
import '../styles/home.css';
import { connect } from 'react-redux';
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import videoSearch from '../actions/videos';

const Home = (props) => {
    return (
        <div className="Home">
            <div className="lander">
                <h1>Video Coffer</h1>
                <p>If you love a video, don't let it go</p>
                <InputGroup size="lg">
                    <FormControl
                     placeholder="Search for your favorite videos..."
                     onSubmit={value => props.videoSearch({ keywords: value, pageToken: '', maxResults: 50 })}
                    />
                    <InputGroup.Append>
                        <Button
                        variant="outline-secondary"
                        >
                        Search
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
                <div className="results">
                    <ListGroup>
                    </ListGroup>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    videoSearch: InputGroup => dispatch(videoSearch(InputGroup))
});

export default connect(mapDispatchToProps)(Home);