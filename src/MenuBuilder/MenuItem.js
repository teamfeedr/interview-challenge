import React from 'react';
import DieteriesList from './DietariesList';

const MenuItem = ({ id, name, dietaries, remove = () => {} }) => (
  <li className="item">
    <h2>{name}</h2>
    <DieteriesList dietaries={dietaries} />
    {
      <button className="remove-item" onClick={() => remove()}>
        x
      </button>
    }
  </li>
);

export default MenuItem;
