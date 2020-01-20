import React from 'react';
import { useSelector } from 'react-redux';
import '../styles/videoPlayer.css';

const VideoPlayer = () => {

    const videos = useSelector(state => state.videos);
    const { items } = videos;

    return (
        <div className="container">
            <div className="mediaPlayer">
                <iframe
                    src={`https://www.youtube.com/embed/IU2wBKoDOzg`}
                    frameBorder='0'
                    height='390'
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