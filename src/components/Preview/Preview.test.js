import React from "react";
import { shallow } from "enzyme";

import Preview from "./Preview";

describe("the Preview component", () => {
  it("renders with selectedItems", () => {
    const handleOnDeselect = () => {};
    const selectedItems = [
      {
        id: 1,
        name: "test1",
        dietaries: ["v", "vg"],
        handleOnDeselect
      },
      {
        id: 2,
        name: "test2",
        dietaries: ["vg", "gf"],
        handleOnDeselect
      }
    ];

    const rendered = shallow(
      <Preview selectedItems={selectedItems} handleDeselectItem={() => {}} />
    );

    expect(rendered).toMatchSnapshot();
  });
});
