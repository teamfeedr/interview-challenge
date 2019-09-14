import React from 'react';
import PropTypes from 'prop-types';

import MenuItem from '../MenuItem/MenuItem';

const getPreviewItemElements = ({ selectedItems, handleDeselectItem }) => {
    return selectedItems.map((item) => (
        <MenuItem
            key={item.name}
            id={item.id}
            name={item.name}
            dietaries={item.dietaries}
            handleOnDeselect={() => {
                handleDeselectItem({ item: { ...item } });
            }}
        />
    ));
}

const Preview = ({ selectedItems, handleDeselectItem }) => {
    const menuItemElements = getPreviewItemElements({ selectedItems, handleDeselectItem });

    return (
        <>
            <h2>Menu preview</h2>
            <ul className="menu-preview">
                {menuItemElements}
            </ul>
        </>
    )
}

Preview.propTypes = {
    selectedItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleDeselectItem: PropTypes.func.isRequired
}

export default Preview;