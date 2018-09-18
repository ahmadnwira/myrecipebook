import React from 'react';

import {Banner} from './Banner';
import {RecipesList} from './Recipes/RecipesList';

export const Home = props => (
    <div className="container">
        <Banner />
        <RecipesList />
    </div>
);