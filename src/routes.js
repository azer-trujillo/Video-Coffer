import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import NotFound from './components/notFound';

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