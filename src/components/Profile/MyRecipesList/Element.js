import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const Element = props => (
    <div className="col-sm-6 col-md-3">
        <Link to={props.recipe.url} className="d-block mb-2 h-100 text-center">
            <img className="img-fluid" src={`./mock/${props.recipe.imgUrl}`} alt="" />
            <h4 className="m-0 text-white bg-dark">{props.recipe.title}</h4>
        </Link>
    </div>
);

Element.propTypes = {
    recipe: PropTypes.object
};