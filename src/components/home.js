import React from 'react';
import '../styles/home.css';
import { InputGroup, FormControl, Button, ListGroup } from 'react-bootstrap';
import { videoSearch } from '../actions/videos';

const Home = (props) => {
    return (
        <div className="Home">
            <div className="lander">
                <h1>Video Coffer</h1>
                <p>If you love a video, don't let it go</p>
                <InputGroup size="lg">
                    <FormControl
                     onSubmit={value => props.videoSearch({ keyword: value, maxResults: 50, pageToken: '' })}
                     placeholder="Search for your favorite videos..."
                    />
                    <InputGroup.Append>
                        <Button variant="outline-secondary">Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </div>
        </div>
    );
};

export default Home;