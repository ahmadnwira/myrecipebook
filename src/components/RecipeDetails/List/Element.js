import React from 'react';
import PropTypes from 'prop-types';

export const Element = props => (
    props.isOrdered ? <li className="ordered-group-item">ordered item</li>

        :<li className="list-group-item">unordered</li>
);

Element.propTypes = {
    isOrdered: PropTypes.bool
};
