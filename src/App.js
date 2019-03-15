import React, { useReducer } from 'react';
import items from './items';
import './App.css';

export const MenuSummary = ({ count = 0, dietaries = {} }) => (
  <div className="menu-summary">
    <div className="container">
      <div className="row">
        <div className="col-6 menu-summary-left">
          <span>{count} items</span>
        </div>
        <div className="col-6 menu-summary-right">
          {Object.keys(dietaries).map(
            diet =>
              !!dietaries[diet] && (
                <span key={diet}>
                  {dietaries[diet]}x <span className="dietary">{diet}</span>
                </span>
              )
          )}
        </div>
      </div>
    </div>
  </div>
);

export const DieteriesList = ({ dietaries = [] }) => (
  <p>
    {dietaries.map(diet => (
      <span key={diet} className="dietary">
        {diet}
      </span>
    ))}
  </p>
);

export const SelectMenuItem = ({
  name,
  dietaries,
  disabled = false,
  select = () => {}
}) => (
  <li
    className={`item ${disabled ? 'item-disabled' : ''}`}
    onClick={() => select()}
  >
    <h2>{name}</h2>
    <DieteriesList dietaries={dietaries} />
  </li>
);

export const MenuItem = ({ id, name, dietaries, remove = () => {} }) => (
  <li className="item">
    <h2>{name}</h2>
    <DieteriesList dietaries={dietaries} />
    {
      <button className="remove-item" onClick={() => remove()}>
        x
      </button>
    }
  </li>
);

export const initialState = {
  count: 0,
  items,
  selectedIds: {}, // ensure uniqueness
  selectedItems: [],
  dietaries: {}
};

export const reducer = (state, action) => {
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

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="wrapper">
      <MenuSummary count={state.count} dietaries={state.dietaries} />
      <div className="container menu-builder">
        <div className="row">
          <div className="col-4">
            <ul className="item-picker">
              {state.items.map(({ id, ...rest }) => (
                <SelectMenuItem
                  key={id}
                  id={id}
                  disabled={state.selectedIds[id]}
                  {...rest}
                  select={() =>
                    dispatch({
                      type: 'select',
                      payload: { id, ...rest }
                    })
                  }
                />
              ))}
            </ul>
          </div>
          <div className="col-8">
            <h2>Menu preview</h2>
            <ul className="menu-preview">
              {state.selectedItems.map(({ id, ...rest }) => (
                <MenuItem
                  key={id}
                  id={id}
                  {...rest}
                  remove={() =>
                    dispatch({
                      type: 'remove',
                      payload: { id, ...rest }
                    })
                  }
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
