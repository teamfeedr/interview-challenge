import React from "react";
import "../App.css";

export default ({ item, children }) => (
  <li className="item">
    <h2>{item.name}</h2>
    <p>
      {item.dietaries.map((diet, index) => (
        <span key={index} className="dietary">
          {diet}
        </span>
      ))}
    </p>
    {children}
  </li>
);
