import { createSelector } from 'reselect';

export const appGetItemIds = ({ app }) => app.itemIds;
export const appGetCurrentId = ({ app }) => app.currentId;

export const appGetItems = items =>
  createSelector(
    [appGetItemIds],
    itemIds => {
      return items.filter(item => itemIds.indexOf(item.id) === -1);
    }
  );

export const appGetMenuItems = items =>
  createSelector(
    [appGetItemIds],
    itemIds => {
      return items.filter(item => itemIds.indexOf(item.id) !== -1);
    }
  );

export const appGetDietariesCount = items =>
  createSelector(
    [appGetItemIds],
    itemIds => {
      return items
        .filter(item => itemIds.indexOf(item.id) !== -1)
        .reduce((acc, curr) => acc.concat(curr.dietaries), [])
        .reduce((acc, curr, i, arr) => ({ ...acc, [curr]: arr.filter(el => el === curr).length }), {});
    }
  );
