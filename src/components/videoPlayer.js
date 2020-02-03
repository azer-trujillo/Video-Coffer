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
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        src={`https://www.youtube.com/embed/${id}`}
                        allowFullScreen
                        title="video"
                    />
                </div>
            </div>
        </div>
    );
};

export default VideoPlayer;