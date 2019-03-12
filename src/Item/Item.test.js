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

  it('should render remove button if `isRemovable` prop is set', () => {
    expect(render({
      isRemovable: true,
    }).find('button')).toHaveLength(1);
  });

  it('should call remove callback when remove button is clicked', () => {
    const mockCallback = jest.fn();
    const item = render({
      isRemovable: true,
      onRemove: mockCallback,
    });

    item.find('button').simulate('click');

    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
