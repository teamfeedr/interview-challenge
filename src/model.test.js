import ItemsStore from './model';

describe('ItemsStore', () => {
  let store;
  const mockItems = [
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
  ];

  beforeEach(() => {
    store = ItemsStore.create({
      items: mockItems,
      preview: [],
    });
  });

  it('adds item to preview', () => {
    store.addToPreview(mockItems[1].id);

    expect(store.preview).toContain(mockItems[1].id);
  });

  it('adds item to preview once', () => {
    const itemId = 5132;

    store.addToPreview(itemId);
    store.addToPreview(itemId);

    expect(store.preview).toEqual([itemId]);
  });

  it('gets items in preview', () => {
    store.addToPreview(mockItems[0].id);

    expect(store.previewItems).toEqual([
      mockItems[0]
    ]);
  });
});
