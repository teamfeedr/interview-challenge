import React from "react";
import Item from "./Item";
import "../App.css";

export default ({ itemsList, setSelectedList }) => {
  const addItem = (item) => {
    setSelectedList((previousList) => {
      const index = previousList.indexOf(item);
      if (index === -1) {
        return [item, ...previousList];
      } else {
        return previousList;
      }
    });
  };

  return (
    <ul className="item-picker">
      {itemsList.map((item) => (
        <Item key={item.id} item={item}>
          <button className="add-item" onClick={() => addItem(item)}>
            √
          </button>
        </Item>
      ))}
    </ul>
  );
};
