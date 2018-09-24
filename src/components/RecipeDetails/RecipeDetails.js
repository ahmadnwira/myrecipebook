import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { fetchRecipe } from '../../actions/index';
import { List } from './List/List';

class RecipeDetails extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        fetch('/api/recipe/5ba840615e0a7627544b0040')
            .then(res => res.json())
            .then(data => {
                this.context.store.dispatch(fetchRecipe(data));
            });
    }

    render() {
        const data = this.props.recipe;
        return (
            <div className='container'>
                <div className="row d-block">
                    <h1>{data.title}</h1>
                    <p className="text-muted">by: {data.author}</p>
                    <button className="btn btn-primary">save to your recipes</button>
                </div>

                <div className="row mt-4">
                    <div className="col-xs-6 col-md-4">
                        <h1>Ingredients</h1>
                        <List isOrdered={false} data={data.ingredients || []}/>
                    </div>


                    <div className="col-xs-6 col-md-4">
                        <h1>Preparation</h1>
                        <List isOrdered={true} data={data.steps || []}/>
                    </div>

                    <div className="col-sm-12 col-md-4 d-block">
                        <p href="#" className="h-100 mt-2">
                            <img className="img-fluid" src="./mock/pic.jpg" alt="" />
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

RecipeDetails.contextTypes = {
    store: PropTypes.object
};

RecipeDetails.propTypes = {
    recipe: PropTypes.object
};

const mapStateToProps = state => ({
    recipe: state.recipe
});

RecipeDetails = connect(mapStateToProps)(RecipeDetails);

export default RecipeDetails;