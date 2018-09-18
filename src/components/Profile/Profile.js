import React from 'react';

export const Profile = props => (
    <div className="container">
        <h1 className="border-bottom">Your Recipes</h1>

        <div className="row mt-4 text-center">
            <div className="col-sm-6 col-md-3">
                <a href="#" className="d-block mb-2 h-100 text-center">
                    <img className="img-fluid" src="./pic.jpg" alt="" />
                    <h4 className="m-0 text-white bg-dark">Title</h4>
                </a>
            </div>

            <div className="col-sm-6 col-md-3">
                <a href="#" className="d-block mb-2 h-100 text-center">
                    <img className="img-fluid" src="./moc/pic.jpg" alt="" />
                    <h4 className="m-0 text-white bg-dark">Title</h4>
                </a>
            </div>

            <div className="col-sm-6 col-md-3">
                <a href="#" className="d-block mb-2 h-100 text-center">
                    <img className="img-fluid" src="./moc/pic.jpg" alt="" />
                    <h4 className="m-0 text-white bg-dark">Title</h4>
                </a>
            </div>
        </div>
    </div>
);