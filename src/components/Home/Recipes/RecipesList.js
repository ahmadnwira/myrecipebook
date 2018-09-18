import React from 'react';
import {Recipe} from './Recipe';

import PropTypes from 'prop-types';

export const RecipesList = (props, context) => {

    const recipes = context.store.getState().recipes;
    return (
        <div className="row text-center">
            {
                recipes.map( (recipe, k) =>
                    <Recipe key={k}
                        title={recipe.title}
                        imgUrl={recipe.imgUrl}
                        url={recipe.url}
                    />
                )
            }
        </div>
    );
};

RecipesList.contextTypes = {
    store: PropTypes.object
};