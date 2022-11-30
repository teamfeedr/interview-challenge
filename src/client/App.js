import React, { useState, useEffect } from "react";
import "./App.css";
import ItemPicker from "./components/ItemPicker";
import MenuSummary from "./components/MenuSummary";
import MenuPreview from "./components/MenuPreview";

export default () => {
  const [itemsList, setItemsList] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [filter, setFilter] = useState("");

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setItemsList(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (filter) {
      fetchData(`http://localhost:8080/api/items/${filter}`);
    } else {
      fetchData("http://localhost:8080/api/items");
    }
  }, [filter]);

  return (
    <div className="wrapper">
      <MenuSummary selectedList={selectedList} />
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <div className="filters">
              <input
                className="form-control"
                value={filter}
                placeholder="Name"
                onChange={(event) => setFilter(event.target.value)}
              />
            </div>
            <ItemPicker
              itemsList={itemsList}
              setSelectedList={setSelectedList}
            />
          </div>
          <div className="col-8">
            <MenuPreview
              itemsList={selectedList}
              setSelectedList={setSelectedList}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
