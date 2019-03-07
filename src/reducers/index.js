import { combineReducers } from 'redux';
import { itemsReducer } from './itemsReducer';

export default combineReducers({
  app: itemsReducer
});
