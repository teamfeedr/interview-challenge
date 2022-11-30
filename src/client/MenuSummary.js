import React from 'react';

export default ({ selectedItems }) => {
  const dietaryMap = selectedItems.reduce((acc, { dietaries }) => {
    dietaries.forEach((label) => {
      if (acc[label]) {
        acc[label] += 1;
      } else {
        acc[label] = 1;
      }
    });

    return acc;
  }, {});

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{`${selectedItems.length} item${selectedItems.length === 1 ? '' : 's'}`}</span>
          </div>
          <div className="col-6 menu-summary-right">
            {Object.entries(dietaryMap).map(([label, count]) => (
              <span key={label}>{count}x <span className="dietary">{label}</span></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
