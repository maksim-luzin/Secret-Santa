import {
  applyMiddleware,
  CombinedState,
  compose,
  createStore,
  Middleware,
} from "redux";

import { TReducer, IStoreState } from "../interfaces";

interface ConfigureStoreParams {
  initialState: IStoreState;
  middlewares: Middleware[];
  rootReducer: TReducer<CombinedState<IStoreState>>;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const configureStore = (args: ConfigureStoreParams) => {
  const { initialState, middlewares, rootReducer } = args;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
};

export default configureStore;
