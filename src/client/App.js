import React, { useEffect, useState } from 'react';
import { useFetch } from 'use-http';

import ItemPicker from './ItemPicker';
import MenuPreview from './MenuPreview';
import MenuSummary from './MenuSummary';

import './App.css';

export default () => {
  const { get, loading, error } = useFetch();

  const [items, setItems] = useState([])
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    get('/api/items').then((data) => {
      setItems(data?.items);
    });
  }, []);

  const selectItem = (itemId) => setSelectedIds(selectedIds.concat(itemId));

  const removeItem = (itemId) => {
    setSelectedIds(selectedIds.filter((id) => id !== itemId));
  };

  const selectedItems = items.filter((item) => selectedIds.includes(item.id))

  if (loading) {
    return 'Loading...';
  }

  if (error) {
    return 'Something went wrong, please try reloading.';
  }

  return (
    <div className="wrapper">
      <MenuSummary selectedItems={selectedItems} />
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <ItemPicker
              items={items}
              selectItem={selectItem}
              selectedItems={selectedIds}
            />
          </div>
          <div className="col-8">
            <h2>Menu preview</h2>
            <MenuPreview
              items={selectedItems}
              removeItem={removeItem}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
