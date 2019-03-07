import React from 'react';

export default ({ menuItems, dietariesCount }) => (
  <div className="menu-summary">
    <div className="container">
      <div className="row">
        <div className="col-6 menu-summary-left">
          <span>{`${menuItems.length} item${menuItems.length === 1 ? '' : 's'}`}</span>
        </div>
        <div className="col-6 menu-summary-right">
          {Object.keys(dietariesCount).map(objKey => (
            <span key={objKey}>
              {`${dietariesCount[objKey]}x`} <span className="dietary">{objKey}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);
