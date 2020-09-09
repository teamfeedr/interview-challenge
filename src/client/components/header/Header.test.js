import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Header from './Header';

afterEach(cleanup);

describe('Header tests', () => {
  it('handles on change events', () => {
    const props = {
      previewData: [
        {
          id: 1000,
          dietaries: ['ve', 'vg', 'v']
        },
        {
          id: 1003,
          dietaries: ['gf', 'v']
        }
      ]
    }

    const previewData = props.previewData;
    const dietaries = props.previewData.dietaries;

    render(<Header previewData={previewData} dietaries={dietaries} />);
    expect(screen.getByText('2 items')).toBeInTheDocument();
  })
})
