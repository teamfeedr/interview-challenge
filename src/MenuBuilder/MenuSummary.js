import React from 'react';

const MenuSummary = ({ count = 0, dietaries = {} }) => (
  <div className="menu-summary">
    <div className="container">
      <div className="row">
        <div className="col-6 menu-summary-left">
          <span>{count} items</span>
        </div>
        <div className="col-6 menu-summary-right">
          {Object.keys(dietaries).map(
            diet =>
              !!dietaries[diet] && (
                <span key={diet}>
                  {dietaries[diet]}x <span className="dietary">{diet}</span>
                </span>
              )
          )}
        </div>
      </div>
    </div>
  </div>
);

export default MenuSummary;
