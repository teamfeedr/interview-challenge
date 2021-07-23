import React from 'react';

import Item from './Item';

export default ({ items, removeItem }) => (
  <ul className="menu-preview">
    {items.map((item) => <Item onRemove={() => removeItem(item.id)} key={item.id} {...item} />)}
  </ul>
);
