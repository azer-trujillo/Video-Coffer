import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import { useDispatch, useSelector } from 'react-redux';
import { InputGroup, FormControl, Button, ListGroup, Spinner, Card } from 'react-bootstrap';
import videoSearch from '../actions/videos';

const Home = () => {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.videos);
    const { fetched, fetching } = videos;

    const handleSubmit = (e) => {
        dispatch(videoSearch({ keywords: e, maxResults: 50, pageToken: '' }))
    };
    console.log(fetched)

    return (
        <div className="Home">
            <div className="lander">
                <h1>Video Coffer</h1>
                <p>If you love a video, don't let it go</p>
                <InputGroup size="lg">
                    <FormControl
                        placeholder="Inject queries here..."
                        onChange={(e) => handleSubmit(e)}
                    />
                </InputGroup>
                <div className="results">
                    {fetched ? <div>Displays items</div> : null}
                </div>
            </div>
        </div>
    );
};


export default Home;