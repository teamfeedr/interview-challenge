import React from 'react';
import PropTypes from 'prop-types';

const getDietaryMap = ({ items }) => items.reduce((dietaryMap, item) => {
    item.dietaries && item.dietaries.forEach((diet) => {
        if (dietaryMap.has(diet)) {
            dietaryMap.set(diet, dietaryMap.get(diet) + 1)
        }
        else {
            dietaryMap.set(diet, 1);
        }
    })

    return dietaryMap;
}, new Map());

const WithDietaryMap = ({ items, WrappedComponent, ...childProps }) => {
    const dietaryMap = getDietaryMap({ items });

    return (<WrappedComponent dietaryMap={dietaryMap} selectedCount={items.length} {...childProps} />);
}

WithDietaryMap.propTypes = {
    WrappedComponent: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default WithDietaryMap;