import { createStore, applyMiddleware, compose } from "redux";
// import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

const store = createStore(rootReducer, enhancer);

export default store;