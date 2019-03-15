import React from 'react';
import MenuSummary from './MenuSummary';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders empty', () => {
  const div = shallow(<MenuSummary />);
  expect(div).toMatchSnapshot();
});

it('renders the total count of menu items and a list of dietery types along with their counts', () => {
  const dietaries = {
    v: 1,
    'n!': 2
  };
  const div = shallow(<MenuSummary count={1} dietaries={dietaries} />);
  expect(div).toMatchSnapshot();
});
