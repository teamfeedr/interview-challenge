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
  .actions(self => ({
    addToPreview: (itemId) => {
      if (self.preview.indexOf(itemId) !== -1) {
        return;
      }

      self.preview.push(itemId);
    }
  }));

export default ItemsModel;
