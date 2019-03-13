import { types } from "mobx-state-tree"

const ItemModel = types.model({
  id: types.number,
  name: types.string,
  dietaries: types.array(types.string),
});

export const ItemsModel = types.model({
  items: types.array(ItemModel),
});
