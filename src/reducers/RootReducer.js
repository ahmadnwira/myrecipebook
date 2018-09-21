import { combineReducers } from 'redux';
import * as actionTypes from '../actions/actionsTypes';

const featured = (state={}, action) =>{
    switch (action.type)
    {
    case actionTypes.fetchFeatured:
        return {...action.data};
    default:
        return state;
    }
};

const recipes = (state=[], action) => {
    switch (action.type)
    {
    case actionTypes.fetchAllRecipes:
        return [...action.data];
    default:
        return state;
    }
};

const recipe = (state={}, action) => {
    switch (action.type)
    {
    case actionTypes.fetchRecipe:
        return {...action.data};
    default:
        return state;
    }
};

const userRecipes = (state=[], action) => {
    switch (action.type)
    {
    case actionTypes.fetchUserRecipes:
        return [...action.data];
    default:
        return state;
    }
};

const RootReducer = combineReducers({
    featured,
    recipes,
    recipe,
    userRecipes
});

export default RootReducer;