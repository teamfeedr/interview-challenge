const itemsHandler = require('./itemsHandler');
const items = require('./items');

const res = {
  send: jest.fn(),
};

describe('itemsHandler', () => {
  // If this was based on db call, I'd mock the db response
  // but no point mocking static data here to prove a point.

  it('returns all items when passed no filter', () => {
    itemsHandler({ query: {} }, res);
    expect(res.send).toHaveBeenCalledWith({ items });
  });

  it('returns a subset of items when passed a filter', () => {
    itemsHandler({ query: { filter: 'salad box' } }, res);
    expect(res.send).toHaveBeenCalledWith({ items: [items[8], items[9], items[10]] });
  });

  it('is case insensitive', () => {
    itemsHandler({ query: { filter: 'KALE CAESAR PASTA' } }, res);
    expect(res.send).toHaveBeenCalledWith({ items: [items[0]] });
  });
});
