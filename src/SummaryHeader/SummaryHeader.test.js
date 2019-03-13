require('../test-setup');

import SummaryHeader from './index';
import { createRenderer } from '../test-utils';

describe('SummaryHeader', () => {
  let render;
  const mockItems = [
    {
      id: 1002,
      name: 'Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots',
      dietaries: ['v', 've', 'rsf'],
    },
    {
      id: 1003,
      name: 'Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots',
      dietaries: ['v', 've'],
    },
    {
      id: 1004,
      name: 'Hake & Smoky Chickpeas, Herby Potatoes & Turmeric Satay Broccoli',
      dietaries: ['rsf'],
    },
    {
      id: 1005,
      name: 'Cuban Beef, Brown Rice & Quinoa, Green Pepper & Butterbean Salad',
      dietaries: ['v', 'rsf'],
    },
  ];
  const initProps = {
    totalCount: mockItems.length,
    items: mockItems,
  };

  beforeAll(() => {
    render = createRenderer(SummaryHeader.wrappedComponent, initProps);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });
});
