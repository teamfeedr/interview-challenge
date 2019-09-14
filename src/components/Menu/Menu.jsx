import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../MenuItem/MenuItem';

const getMenuItems = ({ items, handleSelectItem }) => {
    return items.map((item) => (
        <MenuItem
            key={item.name}
            id={item.id}
            name={item.name}
            dietaries={item.dietaries}
            handleOnSelect={() => {
                handleSelectItem({ item: { ...item } })
            }}
        />
    ));
}

const Menu = ({ items, handleSelectItem }) => {
    const menuItemElements = getMenuItems({ items, handleSelectItem });

    return (
        <ul className="item-picker">
            {menuItemElements}
        </ul>
    )
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleSelectItem: PropTypes.func
}

Menu.defaultProps = {
    handleSelectItem: undefined
}

export default Menu