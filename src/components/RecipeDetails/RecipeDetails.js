import React from 'react';

import { List } from './List/List';

export const RecipeDetails = props => (
    <div className='container'>
        <div className="row d-block">
            <h1>Recipe Title</h1>
            <p className="text-muted">by: editor name</p>
            <button className="btn btn-primary">save to your recipes</button>
        </div>

        <div className="row mt-4">
            <div className="col-xs-6 col-md-4">
                <h1>Ingredients</h1>
                <List isOrdered={false} />
            </div>


            <div className="col-xs-6 col-md-4">
                <h1>Preparation</h1>
                <List isOrdered={true} />
            </div>

            <div className="col-sm-12 col-md-4 d-block">
                <p href="#" className="h-100 mt-2">
                    <img className="img-fluid" src="./mock/pic.jpg" alt="" />
                </p>
            </div>
        </div>
    </div>
);