import ItemsStore from './model';

describe('ItemsStore', () => {
  let store;

  beforeEach(() => {
    store = ItemsStore.create({
      items: [
        {
          id: 1002,
          name: 'Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots',
          dietaries: ['v', 've', 'rsfa'],
        },
        {
          id: 1003,
          name: 'Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots',
          dietaries: ['v', 've'],
        },
        {
          id: 1004,
          name: 'Hake & Smoky Chickpeas, Herby Potatoes & Turmeric Satay Broccoli',
          dietaries: ['rsf'],
        },
      ],
      preview: [],
    });
  });

  it('adds item to preview', () => {
    const itemId = 5132;

    store.addToPreview(itemId);

    expect(store.preview).toContain(itemId);
  });

  it('adds item to preview once', () => {
    const itemId = 5132;

    store.addToPreview(itemId);
    store.addToPreview(itemId);

    expect(store.preview).toEqual([itemId]);
  });
});
