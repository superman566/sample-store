import { createStore, applyMiddleware, compose } from "redux";
// import logger from 'redux-logger';
import { persistStore } from "redux-persist";

import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';

import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares),
);

export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
// eslint-disable-next-line
export default {store, persistor};
