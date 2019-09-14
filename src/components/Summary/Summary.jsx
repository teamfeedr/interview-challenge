import React from 'react';
import PropTypes from 'prop-types';

import DietaryIcon from '../DietaryIcon/DietaryIcon';

const getDietaryIcons = ({ dietaryMap }) => {
    return Array.from(dietaryMap).map(([diet, dietCount]) => {
        return (
            <span key={diet}>
                {dietCount}x <DietaryIcon diet={diet} />
            </span>
        )
    })
}

const Summary = ({ selectedCount, dietaryMap }) => {
    const dietaryIcons = getDietaryIcons({ dietaryMap });

    return (
        <div className="menu-summary">
            <div className="container">
                <div className="row">
                    <div className="col-6 menu-summary-left">
                        <span>{selectedCount} items</span>
                    </div>

                    <div className="col-6 menu-summary-right">
                        {dietaryIcons}
                    </div>
                </div>
            </div>
        </div>
    )
}

Summary.propTypes = {
    dietaryMap: PropTypes.instanceOf(Map).isRequired,
    selectedCount: PropTypes.number.isRequired
}

export default Summary;