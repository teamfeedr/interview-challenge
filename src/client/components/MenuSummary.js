import React, { useEffect, useState } from "react";
import "../App.css";

export default ({ selectedList }) => {
  const [dietaries, setDietaries] = useState({});

  useEffect(() => {
    const listOfDietaries = selectedList.map((item) => item.dietaries);
    const dietariesObj = listOfDietaries.flat(1).reduce((acc, dietary) => {
      if (acc[dietary]) {
        acc[dietary] += 1;
      } else {
        acc[dietary] = 1;
      }
      return acc;
    }, {});
    setDietaries(dietariesObj);
  }, [selectedList]);

  return (
    <div className="menu-summary">
      <div className="container">
        <div className="row">
          <div className="col-6 menu-summary-left">
            <span>{selectedList.length} items</span>
          </div>
          <div className="col-6 menu-summary-right">
            {Object.keys(dietaries).map((dietary, index) => (
              <span key={index}>
                {dietaries[dietary]}x <span className="dietary">{dietary}</span>{" "}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
