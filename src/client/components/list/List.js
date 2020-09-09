import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from '../item/Item';

export default function List({ className, data, displayButton, addItem, removeItem }) {
  return (
    <ul className={className} data-testid='list-test'>
      {data && data.map((item, index) => (
        <ListItem
          key={index}
          name={item.name}
          id={item.id}
          displayButton={displayButton}
          dietaries={item.dietaries}
          addItem={() => addItem(item)}
          removeItem={() => removeItem(index)} />
      ))}
    </ul>
  )
}

List.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  button: PropTypes.bool,
  dietaries: PropTypes.array,
  addItem: PropTypes.func,
  removeItem: PropTypes.func
}
