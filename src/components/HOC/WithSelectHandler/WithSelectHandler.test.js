import React from "react";
import { shallow } from "enzyme";

import WithSelectHandler, { getSelectHandler } from "./WithSelectHandler";

describe("the WithSelectHandler HOC", () => {
  it("renders a wrapped component with the handleItemSelect function prop", () => {
    const TestComponent = () => {
      <div />;
    };

    const rendered = shallow(
      <WithSelectHandler
        selectedItemsState={[]}
        updateSelectedItemsState={() => {}}
        WrappedComponent={TestComponent}
      />
    );

    expect(rendered).toMatchSnapshot();
  });
});

describe("the getSelectHandler function", () => {
  it("handles item selection", () => {
    const state = [
      {
        id: 1
      }
    ];

    const updateState = jest.fn();

    const handleItemSelect = getSelectHandler({ state, updateState });

    handleItemSelect({ item: { id: 1 } });

    expect(updateState).toHaveBeenCalledTimes(0);

    handleItemSelect({ item: { id: 3 } });

    expect(updateState).toHaveBeenCalledTimes(1);
    expect(updateState).toHaveBeenCalledWith([{ id: 1 }, { id: 3 }]);
  });
});
