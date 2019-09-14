import React from 'react';
import PropTypes from 'prop-types';

export const getSelectHandler = ({ state, updateState }) => ({ item }) => {
    const itemAlreadyInState = state.find((stateItem) => stateItem.id === item.id);

    if (itemAlreadyInState) {
        return;
    }

    updateState([...state, item]);
}

const WithSelectHandler = ({ selectedItemsState, updateSelectedItemsState, WrappedComponent, ...childProps }) => {
    const handleSelectItem = getSelectHandler({ state: selectedItemsState, updateState: updateSelectedItemsState });

    return (<WrappedComponent handleSelectItem={handleSelectItem} {...childProps} />);
}

WithSelectHandler.propTypes = {
    selectedItemsState: PropTypes.array.isRequired,
    updateSelectedItemsState: PropTypes.func.isRequired,
    WrappedComponent: PropTypes.func.isRequired
}

export default WithSelectHandler;