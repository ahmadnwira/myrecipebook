import React from 'react';
import {Link} from 'react-router-dom';

export const Recipe = props => (
    <div className="col-sm-6 col-md-3">
        <Link to="/recipe-title" className="d-block mb-2 h-100 text-center">
            <img className="img-fluid" src="./mock/pic.jpg" alt="" />
            <h4 className="m-0 text-white bg-dark">Title</h4>
        </Link>
    </div>
);