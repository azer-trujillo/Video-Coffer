import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import NotFound from './components/notFound';
import VideoPlayer from './components/videoPlayer';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/videoPlayer" exact component={VideoPlayer} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;