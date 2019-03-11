require('./test-setup');

import React from 'react';
import App from './App';

import { shallow } from 'enzyme';

describe('App', () => {
  it('renders correctly', () => {
    const div = shallow(<App />);

    expect(div).toMatchSnapshot();
  });
});
