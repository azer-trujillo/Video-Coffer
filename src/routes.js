import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import NotFound from "./components/notFound";
import VideoPlayer from "./components/videoPlayer";
import { withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import WatchLater from "./components/watchLater";
import createHistory from 'history/createBrowserHistory';
import PrivateRoute from './components/privateRoute';
import PublicRoute from './components/publicRoute';

export const history = createHistory();


const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" exact component={Login} />
        <PrivateRoute path="/home" exact component={Home} />
        <PrivateRoute path="/videoPlayer" exact component={VideoPlayer} />
        <PrivateRoute path="/watchLater" exact component={WatchLater} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default withRouter(Routes);
