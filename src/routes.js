import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/home';
import Login from './containers/login';
import NotFound from './containers/notFound';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route component={NotFound} />
        </Switch>
    );
};

export default Routes;