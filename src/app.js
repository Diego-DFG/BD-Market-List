import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Home from './app/pages/home';
import Login from './app/pages/home/login'

export default function App() {
    return(
        <HashRouter basename='/'>
            <Switch>
                <Route  exact path='/' component={Login} />
                <Route exact path='/principal' component={Home} />
            </Switch>
        </HashRouter>
    );
}