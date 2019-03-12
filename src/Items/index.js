import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

const Items = (props) => {
  return (
    <div className="col-4">
      <ul className="item-picker">
        {props.items.map(item => <Item key={item.id} />)}
      </ul>
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ),
};

Items.defaultProps = {
  items: [],
};

export default Items;
