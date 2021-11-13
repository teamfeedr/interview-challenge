import React from "react";
import Item from "./Item";
import { useEffect } from "react";

const MenuList = ({ menuItems, addToMenu, deleteFromMenu }) => {
  useEffect(() => {}, [menuItems]);
  return (
    <div>
      {menuItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          addToMenu={addToMenu}
          deleteFromMenu={deleteFromMenu}
          onMenu={true}
        />
      ))}
    </div>
  );
};

export default MenuList;
