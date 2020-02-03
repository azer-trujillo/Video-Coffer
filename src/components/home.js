import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { history } from '../routes';
import SearchBar from './searchBar';
import '../styles/home.css';

const toplayer = () => {
    history.push('/videoPlayer')
};

export const Home = ({ startLogout }) => {
    return (
        <div className="Home">
            <div className="lander">
                <h1>Video Coffer</h1>
                <p>If you love a video, don't let it go</p>
                <SearchBar />
                <div>
                    <button onClick={function (event) { startLogout() }}>Logout</button>
                    <button onClick={function (event) { toplayer() }}>player</button>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Home);