import React from "react";
import "./App.css";
import getItems from "./services/ApiService";
import { useState, useEffect } from "react";
import Item from "./components/Item";
import MenuList from "./components/MenuList";
export default () => {
  const [items, setItems] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [dietaries, setDietaries] = useState({
    v: 0,
    ve: 0,
    df: 0,
    gf: 0,
    "n!": 0,
    rsf: 0,
  });
  async function fetchItems() {
    const itemList = await getItems();
    setItems(itemList.items);
    setFilteredItems(itemList.items);
  }

  useEffect(() => {
    fetchItems();
  }, []);

  const addToMenu = (item) => {
    menuItems.includes(item) || setMenuItems([...menuItems, item]);
    const prevState = dietaries;
    item.dietaries.forEach((el) => {
      prevState[el]++;
    });
    setDietaries(prevState);
  };

  const deleteFromMenu = (item) => {
    setMenuItems((prev) => prev.filter((el) => item !== el));
    const prevState = dietaries;
    item.dietaries.forEach((el) => {
      prevState[el]--;
    });
    setDietaries(prevState);
  };
  const filterItems = (e) => {
    const searchedItems = items;
    const temp = searchedItems.filter((el) => {
      return el.name.includes(e.target.value);
    });
    setFilteredItems(temp);
  };

  return (
    <div className="wrapper">
      <div className="menu-summary">
        <div className="container">
          <div className="row">
            <div className="col-6 menu-summary-left">
              <span>{menuItems.length} Items</span>
            </div>
            <div className="col-6 menu-summary-right">
              {Object.entries(dietaries).map((el) => (
                <>
                  {el[1] > 0 && (
                    <span>
                      {el[1]}x <span className="dietary">{el[0]}</span>
                    </span>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <div className="filters">
              <input
                className="form-control"
                placeholder="Name"
                onChange={filterItems}
              />
            </div>
            <div>
              {filteredItems.map((item) => (
                <Item
                  key={item.id}
                  item={item}
                  addToMenu={addToMenu}
                  deleteFromMenu={deleteFromMenu}
                  onMenu={false}
                />
              ))}
            </div>
          </div>
          <div className="col-8">
            <h2>Menu preview</h2>
            <MenuList
              menuItems={menuItems}
              addToMenu={addToMenu}
              deleteFromMenu={deleteFromMenu}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
