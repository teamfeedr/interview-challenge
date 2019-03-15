import React from 'react';
import { reducer, initialState } from './reducer';

describe('select', () => {
  it('adds an item and increases the count', () => {
    const item = { id: 1, dietaries: [] };
    const result = reducer(
      { ...initialState },
      { type: 'select', payload: item }
    );
    expect(result).toEqual({
      ...initialState,
      count: 1,
      selectedIds: { 1: true },
      selectedItems: [item]
    });
  });

  it('only adds an item once', () => {
    const item = { id: 1, dietaries: [] };
    const result = reducer(
      {
        ...initialState,
        ...reducer({ ...initialState }, { type: 'select', payload: item })
      },
      { type: 'select', payload: item }
    );
    expect(result).toEqual({
      ...initialState,
      count: 1,
      selectedIds: { 1: true },
      selectedItems: [item]
    });
  });

  it('adds multiple items and increases the count', () => {
    const item1 = { id: 1, dietaries: [] };
    const item2 = { id: 2, dietaries: [] };
    const result = reducer(
      {
        ...initialState,
        ...reducer({ ...initialState }, { type: 'select', payload: item1 })
      },
      { type: 'select', payload: item2 }
    );
    expect(result).toEqual({
      ...initialState,
      count: 2,
      selectedIds: { 1: true, 2: true },
      selectedItems: [item2, item1]
    });
  });

  it('updates dietaries', () => {
    const item1 = { id: 1, dietaries: ['v', 've'] };
    const item2 = { id: 2, dietaries: ['v', 'n!'] };
    const result = reducer(
      {
        ...initialState,
        ...reducer({ ...initialState }, { type: 'select', payload: item1 })
      },
      { type: 'select', payload: item2 }
    );
    expect(result).toEqual({
      ...initialState,
      count: 2,
      selectedIds: { 1: true, 2: true },
      selectedItems: [item2, item1],
      dietaries: { v: 2, ve: 1, 'n!': 1 }
    });
  });
});

describe('remove', () => {
  it('removes the item and decreases counter', () => {
    const item1 = { id: 1, dietaries: ['v', 've'] };
    const result = reducer(
      {
        ...initialState,
        ...reducer({ ...initialState }, { type: 'select', payload: item1 })
      },
      { type: 'remove', payload: item1 }
    );
    expect(result).toEqual({
      ...initialState,
      count: 0,
      selectedIds: { '1': false },
      dietaries: { v: 0, ve: 0 }
    });
  });

  it('only removes an item if it exists', () => {
    const item1 = { id: 1, dietaries: ['v', 've'] };
    const item2 = { id: 2, dietaries: ['v', 'n!'] };
    const result = reducer(
      {
        ...initialState,
        ...reducer({ ...initialState }, { type: 'select', payload: item1 })
      },
      { type: 'remove', payload: item2 }
    );
    expect(result).toEqual({
      ...initialState,
      count: 1,
      selectedIds: { '1': true, '2': false },
      selectedItems: [item1],
      dietaries: { v: 1, ve: 1 }
    });
  });

  it('updates dietaries', () => {
    const item1 = { id: 1, dietaries: ['v', 've', 'n!'] };
    const result = reducer(
      {
        ...initialState,
        ...reducer({ ...initialState }, { type: 'select', payload: item1 })
      },
      { type: 'remove', payload: { ...item1, dietaries: ['v', 'n!'] } } // NOTE the diff on dietaries
    );
    expect(result).toEqual({
      ...initialState,
      selectedIds: { '1': false },
      dietaries: { v: 0, ve: 1, 'n!': 0 }
    });
  });
});

it('Throws on missing action', () => {
  expect(() => reducer({}, { type: 'missing', payload: {} })).toThrow();
});
