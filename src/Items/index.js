import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';

const Items = (props) => {
  return (
    <div className="col-4">
      <ul className="item-picker">
        {props.items.map(item => <Item key={item.id} {...item} />)}
      </ul>
    </div>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(Item.propTypes)
  ),
};

Items.defaultProps = {
  items: [],
};

export default Items;
