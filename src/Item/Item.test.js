require('../test-setup');

import Item from './index';
import { createRenderer } from '../test-utils';

describe('Item', () => {
  let render;

  beforeAll(() => {
    render = createRenderer(Item);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
