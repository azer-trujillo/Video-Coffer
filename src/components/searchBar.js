import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { InputGroup, FormControl, ListGroup, Spinner, Card, Button } from 'react-bootstrap';
import { debounce } from 'throttle-debounce';
import videoSearch from '../actions/videos';
import videoId, {addVideoList} from '../actions/videoId';
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
    

    return (
        <div>
            <InputGroup size="lg">
                <FormControl
                    placeholder="Inject queries here..."
                    onChange={(value) => handleOnChange(value.target.value)}
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
                {fetched && videos.items.map((item) => {
                    const videoData = {
                        title: item.snippet.title,
                        description: item.snippet.description,
                        id:item.snippet.id,
                        thumbnail: item.snippet.thumbnails.medium.url,
                        email: email
                    };
                    console.log(email);
                    return (
                        <ListGroup className="container" key={item.id.videoId}>
                            <div className="row">
                                <Card border="primary" style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={item.snippet.thumbnails.medium.url} />
                                    <Card.Body>
                                        <Card.Title>{item.snippet.title}</Card.Title>
                                        <Card.Text>{item.snippet.description}</Card.Text>
                                    </Card.Body>
                                    <Button
                                        variant="primary"
                                        onClick={() => { handleClick(item.id.videoId) }}
                                    >Play</Button>
                                    <Button 
                                        variant="secondary"
                                        onClick={addVideoList(videoData)}>Watch Later</Button>
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