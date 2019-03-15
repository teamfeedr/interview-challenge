import React from 'react';
import MenuItem from './MenuItem';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders empty', () => {
  const div = shallow(<MenuItem />);
  expect(div).toMatchSnapshot();
});

it('renders food details', () => {
  const div = shallow(
    <MenuItem id={1001} name="Yummy food" dietaries={['v', 'n!']} />
  );
  expect(div).toMatchSnapshot();
});

it('calls remove on click of the X', () => {
  const spy = jest.fn();

  const div = shallow(
    <MenuItem
      id={1001}
      name="Yummy food"
      dietaries={['v', 'n!']}
      remove={spy}
    />
  );
  div.find('.remove-item').simulate('click', {
    target: {
      parentElement: { id: 5 },
      id: 6
    }
  });

  expect(spy).toHaveBeenCalled();
});
