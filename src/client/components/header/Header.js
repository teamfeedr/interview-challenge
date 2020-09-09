import React from 'react';
import PropTypes from 'prop-types';
import { DietItem } from '../item/Item';

export default function Header({ previewData }) {
  let data = {};

  previewData.forEach((item) => {
    item.dietaries.forEach((dietary) => {
      { data[dietary] = (data[dietary] || 0) + 1; }
    })
  });

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{previewData.length} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            {Object.keys(data).map((diet, i) => (
              <DietItem key={i} diet={diet} qty={data[diet]} displayQty={true} />
            ))}
          </div>
        </div>
      </div>
    </div >
  )
}

Header.propTypes = {
  item: PropTypes.string,
  qty: PropTypes.number
}
