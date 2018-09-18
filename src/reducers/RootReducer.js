import {combineReducers} from 'redux';

const featured = (state={}, action) => state;
const recipes = (state=[], action) => state;
const recipe = (state={}, action) => state;

const RootReducer = combineReducers({
    featured,
    recipes,
    recipe
});

export default RootReducer;