require('../test-setup');

import SummaryHeader from './index';
import { createRenderer } from '../test-utils';

describe('SummaryHeader', () => {
  let render;

  beforeAll(() => {
    render = createRenderer(SummaryHeader);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
