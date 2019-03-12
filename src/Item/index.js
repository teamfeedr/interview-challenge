import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  return (
    <li className="item">
      <h2>{props.name}</h2>
      <p>
        {props.dietaries.map(dietary => <span key={dietary} className="dietary">{dietary}</span>)}
      </p>
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Item;
