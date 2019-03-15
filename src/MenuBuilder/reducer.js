export const initialState = {
  count: 0,
  items: [],
  selectedIds: {}, // ensure uniqueness
  selectedItems: [],
  dietaries: {}
};

export const reducer = (state, action = { type: '', payload: {} }) => {
  const id = action.payload.id;
  const hasItem = state.selectedIds[id];

  switch (action.type) {
    case 'select':
      return {
        ...state,
        count: hasItem ? state.count : state.count + 1,
        selectedIds: { ...state.selectedIds, [id]: true },
        selectedItems: hasItem
          ? [...state.selectedItems]
          : [action.payload, ...state.selectedItems],
        dietaries: hasItem
          ? state.dietaries
          : action.payload.dietaries.reduce(
              (dietaries, diet) => ({
                ...dietaries,
                [diet]: dietaries[diet] ? dietaries[diet] + 1 : 1
              }),
              state.dietaries
            )
      };
    case 'remove':
      return {
        ...state,
        count: hasItem ? state.count - 1 : state.count,
        selectedIds: { ...state.selectedIds, [id]: false },
        selectedItems: state.selectedItems.filter(item => item.id !== id),
        dietaries: hasItem
          ? action.payload.dietaries.reduce(
              (dietaries, diet) => ({
                ...dietaries,
                [diet]: dietaries[diet] ? dietaries[diet] - 1 : 0
              }),
              state.dietaries
            )
          : state.dietaries
      };
    default:
      throw new Error();
  }
};
