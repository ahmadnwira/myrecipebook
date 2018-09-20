import React from 'react';
import PropTypes from 'prop-types';

export const Banner = props => {
    return(
        <div className="row d-block">
            <div className="jumbotron jumbotron-fluid">
                <div className="container d-flex justify-content-between">
                    <h1 className="display-4">{props.featured.title}</h1>
                    <img src={`./mock/${props.featured.imgUrl}`} className="img-fluid rounded" alt="image"/>
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    featured: PropTypes.object
};