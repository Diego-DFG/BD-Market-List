import React from 'react';
import { BrowserRouter, Switch, Route, HashRouter } from 'react-router-dom';
import Home from './app/pages/home';
import Login from './app/pages/home/login'

export default function App() {
    return(
        <HashRouter basename='/'>
                <Route  exact path='/' component={Login} />
                <Route exact path='/principal' component={Home} />
        </HashRouter>
    );
}