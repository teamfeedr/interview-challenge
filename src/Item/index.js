import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onClick() {
    const {
      id,
      name,
      dietaries,
    } = this.props;

    if (!this.props.onClick) {
      return;
    }

    this.props.onClick({ id, name, dietaries });
  }

  onRemove(e) {
    e.stopPropagation();
    const {
      id,
      name,
      dietaries,
    } = this.props;

    this.props.onRemove({ id, name, dietaries });
  }

  render() {
    return (
      <li className="item" onClick={this.onClick}>
        <h2>{this.props.name}</h2>
        <p>
          {this.props.dietaries.map(dietary => <span key={dietary} className="dietary">{dietary}</span>)}
        </p>
        {this.props.onRemove &&
          <button onClick={this.onRemove} className="remove-item">x</button>
        }
      </li>
    );
  }
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  dietaries: PropTypes.arrayOf(PropTypes.string).isRequired,
  onRemove: PropTypes.func,
  onClick: PropTypes.func,
};

export default Item;
