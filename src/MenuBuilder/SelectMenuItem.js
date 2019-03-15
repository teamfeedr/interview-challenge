import React from 'react';
import DieteriesList from './DietariesList';

const SelectMenuItem = ({
  name,
  dietaries,
  disabled = false,
  select = () => {}
}) => (
  <li
    className={`item ${disabled ? 'item-disabled' : ''}`}
    onClick={() => select()}
  >
    <h2>{name}</h2>
    <DieteriesList dietaries={dietaries} />
  </li>
);

export default SelectMenuItem;
