import React from 'react';
import { shallow } from 'enzyme';

export function createRenderer(Component, props) {
  return (extraProps) => shallow(<Component {...props} {...extraProps} />);
}
