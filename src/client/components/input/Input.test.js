import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

afterEach(cleanup);

describe('Input tests', () => {
  it('handles on change events', () => {
    const props = {
      handleChange: jest.fn()
    }
    const handleChange = props.handleChange;
    render(<Input onChange={handleChange} {...props} />);
    const input = screen.getByTestId('input-test');
    userEvent.type(input, 'baked salmon');
    expect(handleChange).toHaveBeenCalledWith('baked salmon');
  })
})
