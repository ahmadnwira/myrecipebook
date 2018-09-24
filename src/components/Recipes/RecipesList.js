import React from 'react';
import PropTypes from 'prop-types';

import {Recipe} from './Recipe';

export const RecipesList = props => {
    return (
        <div className="row text-center">
            {
                props.recipes.map( (recipe, k) =>
                    <Recipe key={k}
                        title={recipe.title}
                        imgUrl={recipe.imgUrl}
                        url={recipe._id}
                    />
                )
            }
        </div>
    );
};

RecipesList.propTypes = {
    recipes: PropTypes.array
};