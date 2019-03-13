import React, { Component } from 'react';
import {
  inject,
  observer,
} from 'mobx-react';

import Item from '../Item';

export class Preview extends Component {
  constructor() {
    super();
    this.onItemRemove = this.onItemRemove.bind(this);
  }

  onItemRemove(item) {
    this.props.removePreviewItem(item.id);
  }

  render() {
    return (
      <div className="col-8">
        <h2>Menu preview</h2>
        <ul className="menu-preview">
          {
            this.props.items.map(item => (
              <Item
                {...item}
                onRemove={this.onItemRemove}
                key={item.id}
              />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default inject(({
  itemsStore: {
    previewItems: items,
    removePreviewItem,
  }
}) => ({
  items,
  removePreviewItem,
}))(observer(Preview));
