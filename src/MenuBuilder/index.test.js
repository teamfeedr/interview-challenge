import React from 'react';
import MenuBuilder from './index';
import items from '../items';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders empty', () => {
  const div = shallow(<MenuBuilder />);
  expect(div).toMatchSnapshot();
});

it('renders a list of menu items', () => {
  const div = shallow(<MenuBuilder items={items} />);
  expect(div).toMatchSnapshot();
});
