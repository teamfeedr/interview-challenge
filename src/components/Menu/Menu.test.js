import React from "react";
import { shallow } from "enzyme";

import Menu from './Menu';

describe("the Menu component", () => {
  it("renders with items", () => {
      const items = [
          {
              id: 1,
              name: 'test1',
              dietaries: ['v']
          },
          {
              id: 2,
              name: 'test2',
              dietaries: ['vg', 'gf']
          }
      ]

      const rendered = shallow(<Menu items={items}/>);
      expect(rendered).toMatchSnapshot();
  });
});
