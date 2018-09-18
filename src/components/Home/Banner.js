import React from 'react';
import PropTypes from 'prop-types';

export const Banner = (props, context) => {
    const data = context.store.getState().featured;

    return(
        <div className="row d-block">
            <div className="jumbotron jumbotron-fluid">
                <div className="container d-flex justify-content-between">
                    <h1 className="display-4">{data.title}</h1>
                    <img src={`./mock/${data.imgUrl}`} className="img-fluid rounded" alt="image"/>
                </div>
            </div>
        </div>
    );
};

Banner.contextTypes = {
    store: PropTypes.object
};