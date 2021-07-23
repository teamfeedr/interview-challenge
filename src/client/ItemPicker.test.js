import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import ItemPicker from './ItemPicker'
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const server = setupServer(
  rest.get('/api/items', (req, res, ctx) => {
    return res(ctx.json({
      items: [],
    }));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Item picker tests', () => {
  it('renders items passed in initially', () => {
    render(
      <ItemPicker
        items={[
          { id: 1, name: 'Pasta', dietaries: ['v']},
          { id: 2, name: 'Cheese', dietaries: ['v', 'gf']}
        ]}
      />
    );
    expect(screen.getByText('Pasta')).toBeInTheDocument()
    expect(screen.getByText('Cheese')).toBeInTheDocument()
    expect(screen.getByText('gf')).toBeInTheDocument()
  });


  it('renders filteredItems instead when filters are typed', async () => {
    server.use(
      rest.get('/api/items', (req, res, ctx) => {
        return res(ctx.json({
          items: [{ id: 1, name: 'Chocolate', dietaries: ['v']},],
        }));
      }),
    )
    render(
      <ItemPicker
        items={[
          { id: 1, name: 'Pasta', dietaries: ['v']},
          { id: 2, name: 'Cheese', dietaries: ['v', 'gf']}
        ]}
      />
    );

    fireEvent.change(screen.getByRole('textbox'), {target: {value: 'c'}});

    await waitFor(() => screen.getByText('Chocolate'))

    expect(screen.queryByText('Pasta')).not.toBeInTheDocument();
    expect(screen.queryByText('Cheese')).not.toBeInTheDocument();
  });

  it('handles server error', async () => {
    server.use(
      rest.get('/api/items', (req, res, ctx) => {
        return res(ctx.status(500));
      }),
    );

    render(
      <ItemPicker items={[]} />
    );

    fireEvent.change(screen.getByRole('textbox'), {target: {value: 'a'}});

    await waitFor(() => screen.getByText('Something went wrong!'));
  });
})
