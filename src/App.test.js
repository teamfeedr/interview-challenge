import React from "react";
import App from "./App";

import { shallow } from "enzyme";

describe("the App", () => {
  it("renders", () => {
    const div = shallow(<App items={[]} />);
    expect(div).toMatchSnapshot();
  });
});
