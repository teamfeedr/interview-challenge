import React from "react";
import { shallow } from "enzyme";

import WithDeselectHandler, { getDeselectHandler } from "./WithDeselectHandler";

describe("the WithDeselectHandler HOC", () => {
  it("renders a wrapped component with the handleDeselectItem function prop", () => {
    const TestComponent = () => {
      <div />;
    };

    const rendered = shallow(
      <WithDeselectHandler
        selectedItemsState={[]}
        updateSelectedItemsState={() => {}}
        WrappedComponent={TestComponent}
      />
    );

    expect(rendered).toMatchSnapshot();
  });
});

describe("the getDeselectHandler function", () => {
  it("handles item deselection", () => {
    const state = [
      {
        id: 1
      },
      {
        id: 2
      }
    ];

    const updateState = jest.fn();

    const deselectItem = getDeselectHandler({ state, updateState });

    deselectItem({ item: { id: 1 } });

    expect(updateState).toHaveBeenCalledTimes(1);
    expect(updateState).toHaveBeenCalledWith([{ id: 2 }]);
  });
});
