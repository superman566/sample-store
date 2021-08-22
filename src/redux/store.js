import { createStore, applyMiddleware, compose } from "redux";
// import logger from 'redux-logger';
import { persistStore } from "redux-persist";
import ReduxThunk from 'redux-thunk';

import rootReducer from './root-reducer';

const middlewares = [ReduxThunk];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);
// eslint-disable-next-line
export default {store, persistor};
