import React from 'react'
import { render, screen } from '@testing-library/react';

import MenuSummary from './MenuSummary';

const looseTextMatch = (text) => (content, node) => {
  const hasText = (node) => node.textContent === text;
  console.log(node.textContent);
  const nodeHasText = hasText(node);
  const childrenDontHaveText = Array.from(node.children).every(
    (child) => !hasText(child)
  );

  return nodeHasText && childrenDontHaveText;
};

describe('Menu Summary tests', () => {
  it('renders the correct number of items', () => {
    render(
      <MenuSummary
        selectedItems={[
          { id: 1, name: 'Pasta', dietaries: ['v']},
          { id: 2, name: 'Cheese', dietaries: ['v', 'gf']}
        ]}
      />
    );
    expect(screen.getByText('2 items')).toBeInTheDocument()
  });

  it('correctly handles pluralisation', () => {
    render(
      <MenuSummary
        selectedItems={[
          { id: 1, name: 'Pasta', dietaries: ['v']},
        ]}
      />
    );
    expect(screen.getByText('1 item')).toBeInTheDocument()
  });

  it('renders the correct dietary information', () => {
    render(
      <MenuSummary
        selectedItems={[
          { id: 1, name: 'Pasta', dietaries: ['v']},
          { id: 2, name: 'Cheese', dietaries: ['v', 'gf']},
          { id: 2, name: 'Cheese', dietaries: ['ve', 'gf']}
        ]}
      />
    );

    screen.getByText(looseTextMatch('2x gf'));
    screen.getByText(looseTextMatch('1x ve'));
    screen.getByText(looseTextMatch('2x v'));
  });

})
