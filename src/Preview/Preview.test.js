require('../test-setup');

import Preview from './index';
import { createRenderer } from '../test-utils';

describe('Preview', () => {
  let setup;
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
  ];
  const initProps = {
    items: mockItems,
  };

  beforeAll(() => {
    setup = createRenderer(Preview.wrappedComponent, initProps);
  });

  it('should render all items', () => {
    const component = setup();
    const items = component.find('Item');

    expect(items).toHaveLength(mockItems.length);
    items.forEach((itemComponent, index) => {
      expect(itemComponent.props()).toEqual({
        ...mockItems[index],
        onRemove: component.instance().onItemRemove,
      });
    })
  });

  it('should remove item when `x` button is clicked', () => {
    const mockRemoveFn = jest.fn();
    const component = setup({
      removePreviewItem: mockRemoveFn,
    });
    const removeButton = component.find('Item').first().dive().find('button');

    removeButton.simulate('click', {
      stopPropagation: _ => _,
    });

    expect(mockRemoveFn).toHaveBeenCalledTimes(1);
    expect(mockRemoveFn).toHaveBeenCalledWith(mockItems[0].id);
  });
});
