import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

import { App } from './App';
import RootReducer from './reducers/RootReducer';

const initialState = {
    featured: {imgUrl: 'pic.jpg', title:'Featured', url:'link to'},
    recipes: [
        {imgUrl: 'pic.jpg', title:'Title-1', url:'/recipe-title'},
        {imgUrl: 'pic.jpg', title:'Title-2', url:'/recipe-title'},
        {imgUrl: 'pic.jpg', title:'Title', url:'/recipe-title'},
        {imgUrl: 'pic.jpg', title:'Title', url:'/recipe-title'}
    ],
    recipe:
        {
            title: 'Title', imgUrl:'pic.jpg', author:'author name',
            ingredients: ['ingredient-a', 'ingredient-b', 'ingredient-c'],
            steps: ['step-a', 'step-b', 'step-c']
        }
};

const store = createStore(RootReducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);