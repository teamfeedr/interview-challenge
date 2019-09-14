import React from 'react';
import PropTypes from 'prop-types';

const DietaryIcon = ({ diet }) => {
    return (
        <span className="dietary">{diet}</span>
    )
}

DietaryIcon.propTypes = {
    diet: PropTypes.string.isRequired,
}

export default DietaryIcon;