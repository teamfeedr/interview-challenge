import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  inject,
  observer,
} from 'mobx-react';

import Item from '../Item';

export class Items extends Component {
  constructor() {
    super();
    this.onItemClick = this.onItemClick.bind(this);
  }

  onItemClick(item) {
    this.props.addToPreview(item.id);
  }

  render() {
    return (
      <div className="col-4">
        <ul className="item-picker">
          {this.props.items.map(item => <Item onClick={this.onItemClick} key={item.id} {...item} />)}
        </ul>
      </div>
    );
  }
}

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape(Item.propTypes)
  ),
};

Items.defaultProps = {
  items: [],
};

export default inject(({
  itemsStore: {
    items,
    addToPreview,
  }
}) => ({
  items,
  addToPreview,
}))(observer(Items));
