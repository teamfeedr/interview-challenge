import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { ListItem, DietItem } from './Item';


afterEach(cleanup);

describe('ListItem tests', () => {
  it('renders list with onClick function', () => {
    const props = {
      addItem: jest.fn()
    }
    const addItem = props.addItem;
    const dietaries = ['vg', 'v', 'g'];
    render(<ListItem dietaries={dietaries} onClick={addItem} displayButton={false} {...props} />)
    const item = screen.getByTestId('item-test');
    userEvent.click(item);
    expect(addItem).toHaveBeenCalled();
    expect(item).toBeInTheDocument();
  });

  it('renders list without onClick function', () => {
    const props = {
      addItem: jest.fn()
    }
    const addItem = props.addItem;
    const dietaries = ['vg', 'v', 'g'];
    render(<ListItem dietaries={dietaries} onClick={addItem} displayButton={true} />)
    const item = screen.getByTestId('item-test');
    userEvent.click(item);
    expect(addItem).toHaveBeenCalledTimes(0);
    expect(item).toBeInTheDocument();
  });
})

describe('DietItem tests', () => {
  it('renders dietary values without quantities', () => {
    render(<DietItem displayQty={false} diet='vg' qty={3} />)
    expect(screen.getByText('vg')).toBeInTheDocument();
    expect(screen.queryByText('3x')).toBeNull();

  });
})
it('renders dietary values with quantities', () => {
  render(<DietItem displayQty={true} diet='vg' qty={3} />)
  expect(screen.getByText('vg')).toBeInTheDocument();
  expect(screen.getByText('3x')).toBeInTheDocument();
})
