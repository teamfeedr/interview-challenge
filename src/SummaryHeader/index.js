import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

class SummaryHeader extends Component {
  getDietaryCounts() {
    const dietaries = {};

    this.props.items.forEach(item => {
      item.dietaries.forEach(dietaryItem => {
        if (dietaries[dietaryItem] === undefined) {
          dietaries[dietaryItem] = 0;
        } else {
          dietaries[dietaryItem] += 1;
        }
      })
    });

    return dietaries;
  }

  renderDietaryCounts() {
    const counts = this.getDietaryCounts();

    return Object.keys(counts).map(dietaryName => {
      const dietaryCount = counts[dietaryName];

      return (
        <Fragment key={dietaryName}>
          {dietaryCount}x <span className="dietary">{dietaryName}</span>
        </Fragment>
      )
    })
  }

  render() {
    return (
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>{this.props.items.length} items</span>
            </div>

            <div className="col-6 menu-summary-right">
              {this.renderDietaryCounts()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SummaryHeader.defaultProps = {
  items: [],
}

SummaryHeader.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)),
}

export default SummaryHeader;
