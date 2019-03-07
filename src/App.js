import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import './App.css';
import ItemsContainer from './containers/ItemsContainer';
import items from './items';
import MenuPreviewContainer from './containers/MenuPreviewContainer';
import HeaderContainers from './containers/HeaderContainers';

const App = () => (
  <div className="wrapper">
    <HeaderContainers items={items} />
    <div className="container menu-builder">
      <div className="row">
        <ItemsContainer items={items} />
        <MenuPreviewContainer items={items} />
      </div>
    </div>
  </div>
);

export default DragDropContext(HTML5Backend)(App);
