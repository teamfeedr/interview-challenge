import React from 'react';
import { render, screen } from '@testing-library/react'
import List from './List';

describe('ListItem test', () => {
  it('renders', () => {
    render(<List />)
    const list = screen.getByTestId('list-test');
    expect(list).toBeInTheDocument();
  });
})
