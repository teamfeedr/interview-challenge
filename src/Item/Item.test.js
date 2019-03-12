require('../test-setup');

import Item from './index';
import { createRenderer } from '../test-utils';

describe('Item', () => {
  let render;
  const initProps = {
    id: 1234,
    name: 'Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens',
    dietaries: ['v', 've', 'df', 'gf', 'n!'],
  }

  beforeAll(() => {
    render = createRenderer(Item, initProps);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
