require('../test-setup');

import Items from './index';
import { createRenderer } from '../test-utils';

describe('Items', () => {
  let render;

  beforeAll(() => {
    render = createRenderer(Items);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
