import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchUserRecipes } from '../../actions/index';
import { RecipesList } from '../Recipes/RecipesList';

class Profile extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        fetch('/api/user/recipes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.context.store.dispatch(fetchUserRecipes(data));
            });
    }

    render() {
        return(
            <div className="container">
                <h1 className="border-bottom">Your Recipes</h1>
                <RecipesList recipes={this.props.recipes} />
            </div>
        );
    }
}

Profile.contextTypes = {
    store: PropTypes.object
};

Profile.propTypes = {
    recipes: PropTypes.array
};

const mapStateToProps = state => ({
    recipes: state.userRecipes
});

Profile = connect(mapStateToProps)(Profile);

export default Profile;