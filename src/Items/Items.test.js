require('../test-setup');

import Items from './index';
import { createRenderer } from '../test-utils';

describe('Items', () => {
  let render;
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
  const initProps = {
    addToPreview: jest.fn(),
    items: [mockItems[0]],
  };

  beforeAll(() => {
    render = createRenderer(Items.wrappedComponent, initProps);
  });

  it('should render correctly', () => {
    expect(render()).toMatchSnapshot();
  });

  it('should render list of items from data prop and pass props to each', () => {
    const component = render({
      items: mockItems,
    });
    const items = component.find('Item');

    expect(items).toHaveLength(mockItems.length);
    items.forEach((itemComponent, itemIndex) => {
      expect(itemComponent.props()).toEqual({
        ...mockItems[itemIndex],
        onClick: component.instance().onItemClick,
      });
    });
  });

  it('adds selected item to preview', () => {
    const component = render({
      items: mockItems,
    });
    const item = component.find('Item').first().dive();

    item.simulate('click');

    expect(initProps.addToPreview).toHaveBeenCalledTimes(1);
    expect(initProps.addToPreview).toHaveBeenCalledWith(mockItems[0].id);
  });
});
