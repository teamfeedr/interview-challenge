import { ADD_NEW_ITEM, DELETE_ITEM } from '../actions';

export const itemsReducer = (state = { itemIds: [] }, action) => {
  switch (action.type) {
    case ADD_NEW_ITEM:
      return {
        ...state,
        itemIds: !state.itemIds.includes(action.payload) ? [...state.itemIds, action.payload] : state.itemIds
      };

    case DELETE_ITEM:
      return {
        ...state,
        itemIds: state.itemIds.filter(id => id !== action.payload)
      };
    default:
      return state;
  }
};
