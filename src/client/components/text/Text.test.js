import React from 'react';
import { render, screen, cleanup } from '@testing-library/react'
import { ErrorText, Title } from './Text';

afterEach(cleanup);

describe('Error Text tests', () => {
  it('displays text when condition is true ', () => {
    render(<ErrorText text='server error' condition={true} />)
    expect(screen.getByText('server error')).toBeInTheDocument();
  })
  it('does not display text when condition is false ', () => {
    render(<ErrorText text='server error' condition={false} />)
    expect(screen.queryByText('server error')).toBeNull();
  })
})
describe('Title test', () => {
  it('displays text ', () => {
    render(<Title text='Menu' condition={true} />)
    expect(screen.getByText('Menu')).toBeInTheDocument();
  })
})
