import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Menu from './components/Menu/Menu';
import Summary from './components/Summary/Summary';
import Preview from './components/Preview/Preview';
import WithDietaryMap from './components/HOC/WithDietaryMap/WithDietaryMap';
import WithSelectHandler from './components/HOC/WithSelectHandler/WithSelectHandler';
import WithDeselectHandler from './components/HOC/WithDeselectHandler/WithDeselectHandler';

import './App.css';

const App = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  return (
    <div className="wrapper">
      <WithDietaryMap items={selectedItems} WrappedComponent={Summary} />

      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <WithSelectHandler
              selectedItemsState={selectedItems}
              updateSelectedItemsState={setSelectedItems}
              WrappedComponent={Menu}
              items={items} />
          </div>

          <div className="col-8">
            <WithDeselectHandler
              selectedItemsState={selectedItems}
              updateSelectedItemsState={setSelectedItems}
              selectedItems={selectedItems}
              WrappedComponent={Preview}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

App.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default App;