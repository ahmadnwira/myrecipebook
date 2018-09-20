import * as actionsTypes from './actionsTypes';

export const fetchRecipes = (data) => (
    {
        type: actionsTypes.fetchAllRecipes,
        data: data
    }
);

export const fetchFeatured = (data) => (
    {
        type: actionsTypes.fetchFeatured,
        data: data
    }
);

export const fetchRecipe = (data) => (
    {
        type: actionsTypes.fetchRecipe,
        data: data
    }
);