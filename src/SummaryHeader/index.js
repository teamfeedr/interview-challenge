import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  inject,
  observer,
} from 'mobx-react';

import Item from '../Item';

class SummaryHeader extends Component {
  getDietaryCounts() {
    const dietaries = {};

    this.props.previewItems.forEach(item => {
      item.dietaries.forEach(dietaryItem => {
        if (dietaries[dietaryItem] === undefined) {
          dietaries[dietaryItem] = 1;
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
        <span key={dietaryName}>
          {dietaryCount}x <span className="dietary">{dietaryName}</span>
        </span>
      )
    })
  }

  render() {
    return (
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>{this.props.previewItems.length} items</span>
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
  previewItems: [],
}

SummaryHeader.propTypes = {
  previewItems: PropTypes.arrayOf(PropTypes.shape(Item.propTypes)),
}

export default inject(({
  itemsStore: { previewItems }
}) => {
  return {
    previewItems,
  };
})(observer(SummaryHeader));
