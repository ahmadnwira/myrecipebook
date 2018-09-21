import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from './components/Nav/Nav';
import Home from './components/Home/Home';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import Profile from './components/Profile/Profile';


export const App = props => (
    <Router>
        <div>
            <Nav />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/recipe-title' component={RecipeDetails} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </div>
    </Router>

);