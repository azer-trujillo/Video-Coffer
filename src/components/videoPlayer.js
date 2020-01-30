import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/videoPlayer.css';

const VideoPlayer = () => {

    const videoId = useSelector(state => state.videoId);
    const { id } = videoId;

    let history = useHistory();

    const handleClick = () => {
        history.push('/home');
    }

    return (
        <div className="container">
            <div className="mediaPlayer">
                <Button
                    variant="danger"
                    onClick={handleClick}
                >Go Back</Button>
                <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder='0'
                    height='518'
                    width='1080'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
        </div>
    );
};

export default VideoPlayer;