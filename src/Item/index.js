import React from 'react';
import PropTypes from 'prop-types';

const Item = (props) => {
  return (
    <li className="item" onClick={props.onClick}>
      <h2>{props.name}</h2>
      <p>
        {props.dietaries.map(dietary => <span key={dietary} className="dietary">{dietary}</span>)}
      </p>
      {props.isRemovable &&
        <button onClick={props.onRemove} className="remove-item">x</button>
      }
    </li>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
  isRemovable: PropTypes.bool,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
};

export default Item;
