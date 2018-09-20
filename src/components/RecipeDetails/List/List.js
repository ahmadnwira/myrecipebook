import React from 'react';
import PropTypes from 'prop-types';

import { Element } from './Element';

export const List = props => {
    return (
        props.isOrdered ?
            <ol className="list-group ordered">
                {props.data.map(
                    (elm, k) => <Element isOrdered={props.isOrdered} text={elm} key={k} />
                )}
            </ol>

            :<ul className="list-group">
                {props.data.map(
                    (elm, k) => <Element isOrdered={props.isOrdered} text={elm} key={k} />
                )}
            </ul>
    );
};

List.propTypes = {
    data: PropTypes.array,
    isOrdered: PropTypes.bool
};