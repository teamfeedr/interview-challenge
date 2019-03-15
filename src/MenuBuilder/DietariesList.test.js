import React from 'react';
import DieteriesList from './DietariesList';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders empty', () => {
  const div = shallow(<DieteriesList />);
  expect(div).toMatchSnapshot();
});

it('renders a list of dietery types', () => {
  const dietaries = ['v', 'n!'];
  const div = shallow(<DieteriesList dietaries={dietaries} />);
  expect(div).toMatchSnapshot();
});
