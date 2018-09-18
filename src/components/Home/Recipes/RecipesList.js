import React from 'react';
import {Recipe} from './Recipe';

export const RecipesList = props => (
    <div className="row text-center">
        {/* loop over props */}
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
        <Recipe />
    </div>
);