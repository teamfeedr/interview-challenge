import React from 'react'
import { render, screen, cleanup, waitFor, fireEvent } from '@testing-library/react'
import "@testing-library/jest-dom";

import Button from './Button';

afterEach(cleanup);

describe('Button tests', () => {
  it('renders button', async () => {
    const props = {
      removeItem: jest.fn()
    }
    const removeItem = props.removeItem;
    render(<Button displayButton={true} onClick={removeItem} {...props} />);
    const button = await waitFor(() => screen.getByTestId('button-test'));
    fireEvent.click(button);
    expect(button).toBeInTheDocument();
    expect(removeItem).toHaveBeenCalled();

  });
});

it('does not render button', () => {
  render(<Button displayButton={false} />);
  expect(screen.queryByTestId('button-test')).toBeNull();
})
