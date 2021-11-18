import React from "react";
import Item from "./Item";
import "../App.css";

export default ({ itemsList, setSelectedList }) => {
  const removeItem = (item) => {
    setSelectedList((previousList) => {
      return previousList.filter((lisItem) => lisItem !== item);
    });
  };
  return (
    <>
      <h2>Menu preview</h2>
      <ul className="menu-preview">
        {itemsList.map((item) => (
          <Item key={item.id} item={item}>
            <button className="remove-item" onClick={() => removeItem(item)}>
              x
            </button>
          </Item>
        ))}
      </ul>
    </>
  );
};
