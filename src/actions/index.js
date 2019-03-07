export const ADD_NEW_ITEM = 'ADD_NEW_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';

export const addNewItem = payload => {
  return {
    type: ADD_NEW_ITEM,
    payload
  };
};

export const deleteItem = payload => {
  return {
    type: DELETE_ITEM,
    payload
  };
};
