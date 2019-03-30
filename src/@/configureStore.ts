
import {
 createStore, applyMiddleware, compose, Store,
} from 'redux';
import { createRootReducer } from './store';

export default function configureStore(initialState: {}): Store<{}> {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(createRootReducer(), initialState, composeEnhancers(
    applyMiddleware(...[]),
  ));

  if (__DEV__ && module.hot) {
    module.hot.accept('./store', () => store.replaceReducer(createRootReducer()));
  }

  return store;
}
