import React from 'react';
import { DragSource } from 'react-dnd';

const Types = {
  ITEM: 'item'
};
const itemSource = {
  beginDrag({ item }) {
    return item;
  },
  endDrag(
    {
      item: { id },
      addNewItem
    },
    monitor
  ) {
    if (!monitor.didDrop()) {
      return;
    }

    return addNewItem(id);
  }
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

const handleAdd = (id, dispatch) => () => {
  dispatch(id);
};

const Item = ({ item, addNewItem, connectDragSource }) =>
  connectDragSource(
    <li className="item" onClick={handleAdd(item.id, addNewItem)}>
      <h2>{item.name}</h2>
      <p>
        {item.dietaries.map(dietary => (
          <span key={`${item.id}-${dietary}`} className="dietary">
            {dietary}
          </span>
        ))}
      </p>
    </li>
  );

const DraggableItem = DragSource(Types.ITEM, itemSource, collect)(Item);

export default ({ items, addNewItem }) => (
  <div className="col-4">
    <ul className="item-picker">
      {items.map(item => (
        <DraggableItem key={`${item.id}`} item={item} addNewItem={addNewItem} />
      ))}
    </ul>
  </div>
);
