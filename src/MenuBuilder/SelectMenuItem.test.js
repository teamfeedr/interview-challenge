import React from 'react';
import SelectMenuItem from './SelectMenuItem';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('renders empty', () => {
  const div = shallow(<SelectMenuItem />);
  expect(div).toMatchSnapshot();
});

it('renders food details', () => {
  const div = shallow(
    <SelectMenuItem id={1001} name="Yummy food" dietaries={['v', 'n!']} />
  );
  expect(div).toMatchSnapshot();
});

it('calls select on click', () => {
  const spy = jest.fn();

  const div = shallow(
    <SelectMenuItem
      id={1001}
      name="Yummy food"
      dietaries={['v', 'n!']}
      select={spy}
    />
  );
  div.simulate('click', {
    target: {
      parentElement: { id: 5 },
      id: 6
    }
  });

  expect(spy).toHaveBeenCalled();
});
