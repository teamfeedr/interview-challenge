import React from 'react';
import { DropTarget } from 'react-dnd';

const handleDelete = (id, dispatch) => () => {
  dispatch(id);
};

const Types = {
  ITEM: 'item'
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget()
  };
};

const MenuPreview = ({ menuItems, deleteItem, connectDropTarget }) =>
  connectDropTarget(
    <div className="col-8">
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {menuItems.map(item => (
          <li key={`menu-${item.id}`} className="item">
            <h2>{item.name}</h2>
            <p>
              {item.dietaries.map(dietary => (
                <span key={`menu-${item.id}-${dietary}`} className="dietary">
                  {dietary}
                </span>
              ))}
            </p>
            <button className="remove-item" onClick={handleDelete(item.id, deleteItem)}>
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

export default DropTarget(Types.ITEM, {}, collect)(MenuPreview);
