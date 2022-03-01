import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './app/pages/home';
import Login from './app/pages/home/login'

export default function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route  exact path='/' component={Login} />
                <Route exact path='/principal' component={Home} />
            </Switch>
        </BrowserRouter>
    );
}