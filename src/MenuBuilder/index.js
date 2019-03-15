import React, { useReducer } from 'react';
import MenuSummary from './MenuSummary';
import SelectMenuItem from './SelectMenuItem';
import MenuItem from './MenuItem';
import { reducer, initialState } from './reducer';

const MenuBuilder = ({ items = [] }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, items });

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

export default MenuBuilder;
