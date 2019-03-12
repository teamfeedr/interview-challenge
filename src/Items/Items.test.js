require('../test-setup');

import Items from './index';
import { createRenderer } from '../test-utils';

describe('Items', () => {
  let render;
  const initProps = {
    items: [
      {
        id: 1001,
        name: 'Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens',
        dietaries: ['v', 've', 'df', 'gf', 'n!'],
      },
    ],
  };

  beforeAll(() => {
    render = createRenderer(Items, initProps);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should render list of items from data prop', () => {
    const mockItems = [
      {
        id: 1002,
        name: 'Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots',
        dietaries: ['gf', 'df', 'rsf'],
      },
      {
        id: 1003,
        name: 'Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots',
        dietaries: ['gf', 'df', 'v', 've', 'n!'],
      },
      {
        id: 1004,
        name: 'Hake & Smoky Chickpeas, Herby Potatoes & Turmeric Satay Broccoli',
        dietaries: ['df', 'gf', 'rsf', 'n!'],
      },
      {
        id: 1005,
        name: 'Cuban Beef, Brown Rice & Quinoa, Green Pepper & Butterbean Salad',
        dietaries: ['gf', 'df'],
      },
    ];
    const component = render({
      items: mockItems,
    });

    expect(component.find('Item')).toHaveLength(mockItems.length);
  });
});
