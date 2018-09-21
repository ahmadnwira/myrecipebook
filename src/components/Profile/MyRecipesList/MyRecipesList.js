import React from 'react';
import PropTypes from 'prop-types';

import { Element } from './Element';

export const MyRecipesList = props => {
    return (
        <div className="row mt-4 text-center">
            {props.recipes.map(
                (recipe, k) => <Element recipe={recipe} key={k}/>
            )}
        </div>
    );
};

MyRecipesList.propTypes = {
    recipes: PropTypes.array
};