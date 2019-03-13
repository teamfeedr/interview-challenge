import React from 'react';
import { Provider } from 'mobx-react';

import './App.css';
import Items from './Items';
import Preview from './Preview';
import SummaryHeader from './SummaryHeader';
import { ItemsModel } from './model';

const itemsStore = ItemsModel.create({
  items: [
    {
      id: 1002,
      name: 'Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots',
      dietaries: ['v', 've', 'rsfa'],
    },
    {
      id: 1003,
      name: 'Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots',
      dietaries: ['v', 've'],
    },
    {
      id: 1004,
      name: 'Hake & Smoky Chickpeas, Herby Potatoes & Turmeric Satay Broccoli',
      dietaries: ['rsf'],
    },
  ],
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
