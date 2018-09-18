import React from 'react';
import PropTypes from 'prop-types';

export const Element = props => (
    props.isOrdered ? <li className="ordered-group-item">{props.text}</li>

        :<li className="list-group-item">{props.text}</li>
);

Element.propTypes = {
    text: PropTypes.string,
    isOrdered: PropTypes.bool
};
