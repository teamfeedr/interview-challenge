import { createStore } from 'redux';
import reducers from '../reducers';

export default preloadedState => {
  const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__();

  const store = createStore(reducers, preloadedState, composedEnhancer);

  return store;
};
