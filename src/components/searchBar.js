import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InputGroup, FormControl, Spinner, Card, Button, CardDeck } from 'react-bootstrap';
import { debounce } from 'throttle-debounce';
import videoSearch from '../actions/videos';
import videoId from '../actions/videoId';
import '../styles/searchBar.css';


const SearchBar = () => {

    const dispatch = useDispatch();
    const videos = useSelector(state => state.videos);
    const { fetched, fetching, error } = videos;

    let history = useHistory();

    const handleOnChange = debounce(700, (e) => {
        dispatch(videoSearch({ keywords: e, maxResults: 50, pageToken: '' }))
    });

    const handleClick = (key) => {
        dispatch(videoId(key))
        history.push('/videoPlayer')
    };

    return (
        <div>
            <InputGroup size="lg">
                <FormControl
                    placeholder="Inject queries here..."
                    onChange={(value) => handleOnChange(value.target.value)}
                />
            </InputGroup>
            <div className="flex-container">
                {fetching &&
                    <Spinner
                        animation="border"
                        variant="danger"
                        role="status"
                    />
                }
                {error ? <p>We encountered an error :(</p> : null}
                {fetched && videos.items.map((item) => {
                    return (
                        <div key={item.id.videoId}>
                            <CardDeck className="results">
                                <Card border="danger" className="cardItem">
                                    <Card.Img variant="top" src={item.snippet.thumbnails.medium.url} />
                                    <Card.Body>
                                        <Card.Title>{item.snippet.title}</Card.Title>
                                        <Card.Text>{item.snippet.description}</Card.Text>
                                    </Card.Body>
                                    <Button
                                        variant="danger"
                                        onClick={() => { handleClick(item.id.videoId) }}
                                    >Play</Button>
                                    <Button variant="warning">Watch Later</Button>
                                </Card>
                            </CardDeck>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SearchBar;