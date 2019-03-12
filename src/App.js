import React from 'react';
import './App.css';

import Items from './Items';
import Preview from './Preview';
import SummaryHeader from './SummaryHeader';

export default () => (
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
