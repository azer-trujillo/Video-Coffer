import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputGroup, FormControl, ListGroup, Spinner, Card, Button } from 'react-bootstrap';
import { debounce } from 'throttle-debounce';
import '../styles/searchBar.css';
import videoSearch from '../actions/videos';
import { useHistory } from 'react-router-dom';

const SearchBar = (props) => {
    const dispatch = useDispatch();
    const videos = useSelector(state => state.videos);
    const { fetched, fetching, error } = videos;
    let history = useHistory();

    console.log(videos);

    const handleOnChange = debounce(500, (e) => {
        console.log(e)
        dispatch(videoSearch({ keywords: e, maxResults: 50, pageToken: '' }))
    });

    const handleClick = () => {
        history.push('/videoPlayer')
    };

    return (
        <div>
            <InputGroup size="lg">
                <FormControl
                    placeholder="Inject queries here..."
                    onChange={(e) => handleOnChange(e)}
                />
            </InputGroup>
            <div className="results">
                {fetching &&
                    <Spinner
                        animation="border"
                        role="status"
                    />
                }
                {error ? <p>We encountered an error :(</p> : null}
                {fetched && videos.items.map((item, i) => {
                    return (
                        <ListGroup className="container">
                            <div className="row">
                                <Card border="primary" style={{ width: '18rem' }} key={i}>
                                    <Card.Img variant="top" src={item.snippet.thumbnails.medium.url} />
                                    <Card.Body>
                                        <Card.Title>{item.snippet.title}</Card.Title>
                                        <Card.Text>{item.snippet.description}</Card.Text>
                                    </Card.Body>
                                    <Button
                                        variant="primary"
                                        onClick={handleClick}
                                    >Play</Button>
                                    <Button variant="secondary">Watch Later</Button>
                                </Card>
                            </div>
                        </ListGroup>
                    )
                })}
            </div>
        </div>
    );
};

export default SearchBar;