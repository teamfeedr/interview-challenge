import React, { useState } from 'react';
import { useFetch } from 'use-http';
import debounce from 'debounce';

import Item from './Item';

export default ({ items, selectItem, selectedItems = [] }) => {
  // Ignoring loading here for the sake of optimistic UI, we don't want the list
  // flickering while the user is typing.
  const { get, error } = useFetch();
  const [filteredItems, setFilteredItems] = useState(null);

  const filterItems = (value) => {
    get(`/api/items?filter=${value}`).then((data) => {
      setFilteredItems(data?.items);
    });
  }

  const handleInput = debounce(filterItems, 250);

  return (
    <>
      <div className="filters">
        <input
          className="form-control"
          placeholder="Name"
          onChange={(e) => handleInput(e.target.value)}
        />
      </div>
      {error && 'Something went wrong!'}
      {!error && <ul className="item-picker">
        {(filteredItems || items).map((item) => (
          <Item
            {...item}
            onClick={() => selectItem(item.id)}
            disabled={selectedItems.includes(item.id)}
            key={item.id}
          />
        ))}
      </ul>}
    </>
  );
};
