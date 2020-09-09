import React from 'react';
import { render, screen } from '@testing-library/react'
import Image from './Image';

describe('Image tests', () => {
  it('renders image', () => {
    render(<Image condition={true} />)
    const image = screen.getByTestId('image-test');
    expect(image).toBeInTheDocument();
  });

  it('does not renders image', () => {
    render(<Image condition={false} />)
    expect(screen.queryByTestId('image-test')).toBeNull();
  });
});

