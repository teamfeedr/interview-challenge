import React from "react";
import { shallow } from "enzyme";

import MenuItem from "./MenuItem";

describe("the MenuItem component", () => {
  it("renders with a list of dietaries", () => {
    const rendered = shallow(<MenuItem dietaries={["v", "gf"]} name={"testName"} id={1} />);

    expect(rendered).toMatchSnapshot();
  });

  it("renders with a remove button", () => {
    const rendered = shallow(<MenuItem dietaries={['v', 'gf']} name={'testItem'} id={1} handleOnDeselect={() => {}}/>);

    expect(rendered).toMatchSnapshot();
  });
});
