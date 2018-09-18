import React from 'react';

export const Banner = props => (
    <div className="row d-block">
        <div className="jumbotron jumbotron-fluid">
            <div className="container d-flex justify-content-between">
                <div>
                    <h1 className="display-4">Recipe Title</h1>
                    <p className="lead">description lorem ipusm dolor.</p>
                </div>
                <img src="./mock/pic.jpg" className="img-fluid rounded" alt="image"/>
            </div>
        </div>
    </div>

);