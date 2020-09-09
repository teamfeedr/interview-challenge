import React from 'react';
import { render, screen } from '@testing-library/react'
import Main from './Main';

describe('Main test', () => {
  it('renders', () => {
    const { container } = render(<Main />)
    expect(container).toMatchSnapshot();
  });
})
