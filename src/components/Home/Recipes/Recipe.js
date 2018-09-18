import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export const Recipe = props => (
    <div className="col-sm-6 col-md-3">
        <Link to={props.url} className="d-block mb-2 h-100 text-center">
            <img className="img-fluid" src="./mock/pic.jpg" alt="" />
            <h4 className="m-0 text-white bg-dark">{props.title}</h4>
        </Link>
    </div>
);

Recipe.propTypes = {
    title: PropTypes.string.isRequired,
    imgUrl: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};