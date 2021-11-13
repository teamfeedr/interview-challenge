import React from "react";
const Item = ({ item, addToMenu, onMenu, deleteFromMenu }) => {
  return (
    <div className="item">
      <h2>{item.name}</h2>
      <p>
        {item.dietaries.map((diet) => (
          <span className="dietary" key={diet}>
            {diet}
          </span>
        ))}
      </p>
      {onMenu ? (
        <button className="remove-item" onClick={() => deleteFromMenu(item)}>
          x
        </button>
      ) : (
        <button
          className="add-item"
          onClick={() => {
            addToMenu(item);
          }}
        >
          +
        </button>
      )}
    </div>
  );
};

export default Item;
