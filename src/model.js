import { types } from "mobx-state-tree"

const ItemModel = types.model({
  id: types.number,
  name: types.string,
  dietaries: types.array(types.string),
});

const ItemsModel = types
  .model({
    items: types.array(ItemModel),
    preview: types.array(types.number),
  })
  .views(self => ({
    get previewItems() {
      return self.items.filter(item => {
        return self.preview.indexOf(item.id) !== -1;
      });
    }
  }))
  .actions(self => ({
    addToPreview: (itemId) => {
      if (self.preview.indexOf(itemId) !== -1) {
        return;
      }

      self.preview.push(itemId);
    },
    removePreviewItem: (itemId) => {
      self.preview = self.preview.filter(id => itemId !== id);
    }
  }));

export default ItemsModel;
