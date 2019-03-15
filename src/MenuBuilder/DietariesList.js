import React from 'react';

const DieteriesList = ({ dietaries = [] }) => (
  <p>
    {dietaries.map(diet => (
      <span key={diet} className="dietary">
        {diet}
      </span>
    ))}
  </p>
);

export default DieteriesList;
