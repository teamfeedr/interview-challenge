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

  it('should render remove button if `onRemove` callback prop is set', () => {
    expect(render({
      onRemove: _ => _,
    }).find('button')).toHaveLength(1);
  });

  it('should call remove callback and pass item object when remove button is clicked', () => {
    const mockCallback = jest.fn();
    const item = render({
      isRemovable: true,
      onRemove: mockCallback,
    });

    item.find('button').simulate('click', {
      stopPropagation: _ => _,
    });

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(initProps);
  });

  it('should call `onClick` callback prop when clicked and pass item as argument', () => {
    const mockCallback = jest.fn();
    const item = render({
      onClick: mockCallback,
    });

    item.simulate('click');

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(initProps);
  });

  it('should not call `onClick` callback prop if none is passed', () => {
    const item = render();

    expect(() => item.simulate('click')).not.toThrow();
  });
});
