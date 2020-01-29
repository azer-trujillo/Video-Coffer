import React from 'react';
import { Route,Router , Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import NotFound from './components/notFound';
import VideoPlayer from './components/videoPlayer';
import { withRouter } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

export const history = createHistory();

const Routes = () => {
    return (
       <Router history={history}>
        <Switch>
            <Route path="/" exact component={Login} />
            <PrivateRoute path="/home" exact component={Home} />
            <PrivateRoute path="/videoPlayer" exact component={VideoPlayer} />
            <PublicRoute component={NotFound} />
        </Switch>
        </Router>
    );
};

export default withRouter(Routes);