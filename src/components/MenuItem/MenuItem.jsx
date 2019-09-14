import React from 'react';
import PropTypes from 'prop-types';

import DietaryIcon from '../DietaryIcon/DietaryIcon';

const getDietaryIconElements = ({ dietaries }) =>
    dietaries.map((diet) => (<DietaryIcon diet={diet} key={diet} />));

const MenuItem = ({ handleOnSelect, handleOnDeselect, dietaries, name, id }) => {
    const dietaryIcons = getDietaryIconElements({ dietaries });
    const showRemoveIcon = handleOnDeselect;

    return (
        <li key={id} className="item" onClick={handleOnSelect}>
            <h2>{name}</h2>
            <p>
                {dietaryIcons}
            </p>
            {showRemoveIcon && (
                <button className="remove-item" onClick={handleOnDeselect}>x</button>
            )}
        </li>
    )
}

MenuItem.propTypes = {
    dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    handleOnDeselect: PropTypes.func,
    handleOnSelect: PropTypes.func
}

MenuItem.defaultProps = {
    handleOnDeselect: undefined,
    handleOnSelect: undefined
}

export default MenuItem;