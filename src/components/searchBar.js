import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InputGroup, FormControl, Spinner, Card, Button, CardDeck, Alert } from 'react-bootstrap';
import { debounce } from 'throttle-debounce';
import videoSearch from '../actions/videos';
import videoId, { addVideoList } from '../actions/videoId';
import '../styles/searchBar.css';


const SearchBar = () => {

    const dispatch = useDispatch();
    const videos = useSelector(state => state.videos);
    const sName = useSelector((state) => state.users);

    const { email } = sName;
    const { fetched, fetching, error } = videos;

    let history = useHistory();

    const handleOnChange = debounce(700, (e) => {
        dispatch(videoSearch({ keywords: e, maxResults: 50, pageToken: '' }))
    });

    const handleClick = (key) => {
        dispatch(videoId(key))
        history.push('/videoPlayer')
    };
    const HandlePush = (videoData) => {
        dispatch(addVideoList(videoData))
    }

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
                {error ?
                    <Alert variant="danger">
                        <Alert.Heading>Oops! We encountered an error! :(</Alert.Heading>
                        <p>Try searching again or refreshing the webpage!</p>
                    </Alert>
                    : null}
                {fetched && videos.items.map((item) => {
                    const videoData = {
                        title: item.snippet.title,
                        description: item.snippet.description,
                        id: item.id.videoId,
                        thumbnail: item.snippet.thumbnails.medium.url,
                        email: email
                    };
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
                                    <Button
                                        variant="warning"
                                        onClick={() => { HandlePush(videoData) }}>Watch Later</Button>
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