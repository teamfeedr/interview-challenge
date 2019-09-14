import React from 'react';
import PropTypes from 'prop-types';

export const getDeselectHandler = ({ state, updateState }) => ({ item }) => {
    const newItemsState = state.filter((stateItem) => stateItem.id !== item.id);

    updateState([...newItemsState]);
}

const WithDeselectHandler = ({ selectedItemsState, updateSelectedItemsState, WrappedComponent, ...childProps }) => {
    const handleDeselectItem = getDeselectHandler({ state: selectedItemsState, updateState: updateSelectedItemsState });

    return (<WrappedComponent handleDeselectItem={handleDeselectItem} {...childProps} />);
}

WithDeselectHandler.propTypes = {
    selectedItemsState: PropTypes.array.isRequired,
    updateSelectedItemsState: PropTypes.func.isRequired,
    WrappedComponent: PropTypes.func.isRequired
}

export default WithDeselectHandler;