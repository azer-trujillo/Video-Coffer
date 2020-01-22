import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/videoPlayer.css';

const VideoPlayer = () => {

    const videoId = useSelector(state => state.videoId);
    const { id } = videoId;

    return (
        <div className="container">
            <div className="mediaPlayer">
                <iframe
                    src={`https://www.youtube.com/embed/${id}`}
                    frameBorder='0'
                    height='480'
                    width='640'
                    allow='autoplay; encrypted-media'
                    allowFullScreen
                    title='video'
                />
            </div>
        </div>
    );
};

export default VideoPlayer;