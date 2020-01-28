import React from 'react';
import { Route,Router , Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import NotFound from './components/notFound';
import VideoPlayer from './components/videoPlayer';
import { withRouter } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const Routes = () => {
    return (
       <Router history={history}>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={Home} />
            <Route path="/videoPlayer" exact component={VideoPlayer} />
            <Route component={NotFound} />
        </Switch>
        </Router>
    );
};

export default withRouter(Routes);