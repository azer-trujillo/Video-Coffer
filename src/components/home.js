import React from 'react';
import '../styles/home.css';
import SearchBar from './searchBar';

const Home = (props) => {
    return (
        <div className="Home">
            <div className="lander">
                <h1>Video Coffer</h1>
                <p>If you love a video, don't let it go</p>
                <SearchBar />
            </div>
        </div>
    );
};


export default Home;