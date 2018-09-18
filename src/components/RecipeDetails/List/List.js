import React from 'react';
import PropTypes from 'prop-types';

import { Element } from './Element';

export const List = props => (
    props.isOrdered ?
        <ol className="list-group ordered">
            <Element isOrdered={props.isOrdered}/>
            <Element isOrdered={props.isOrdered}/>
            <Element isOrdered={props.isOrdered}/>
        </ol>

        :<ul className="list-group">
            <Element isOrdered={props.isOrdered}/>
            <Element isOrdered={props.isOrdered}/>
            <Element isOrdered={props.isOrdered}/>
        </ul>
);

List.propTypes = {
    isOrdered: PropTypes.bool
};