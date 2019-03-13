import React from 'react';
import { Provider } from 'mobx-react';

import './App.css';
import Items from './Items';
import Preview from './Preview';
import SummaryHeader from './SummaryHeader';
import ItemsModel from './model';
import data from './data';

const itemsStore = ItemsModel.create({
  items: data,
});

export const App = () => (
  <div className="wrapper">
    <SummaryHeader />

    <div className="container menu-builder">
      <div className="row">
        <Items />

        <Preview />
      </div>
    </div>
  </div>
);

export default () => (
  <Provider itemsStore={itemsStore}>
    <App />
  </Provider>
);
