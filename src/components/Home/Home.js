import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { Banner } from './Banner';
import { RecipesList } from './Recipes/RecipesList';
import { fetchRecipes, fetchFeatured } from '../../actions/index';

class Home extends React.Component{
    constructor() {
        super();
    }

    componentDidMount() {
        fetch('/api/recipe/featured')
            .then(res => res.json())
            .then(data => this.context.store.dispatch(fetchFeatured(data)));

        fetch('/api/recipe')
            .then(res => res.json())
            .then(data => this.context.store.dispatch(fetchRecipes(data)));
    }

    render() {
        return (
            <div className="container">
                <Banner featured={this.context.store.getState().featured}/>
                <RecipesList recipes={this.context.store.getState().recipes}/>
            </div>
        );
    }
}

Home.contextTypes = {
    store: PropTypes.object
};

const mapState = state => ({recipes: state.recipes, featured: state.featured});

Home = connect(mapState, ()=>({}))(Home);

export default Home;
