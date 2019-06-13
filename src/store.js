import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers/index";
import { routerMiddleware } from "connected-react-router";
import { rootSaga } from "./sagas/index";

export const history = createBrowserHistory();

export default function configureStore(initialState = {}) {
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        })
      : compose;

  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer(history),
    initialState,
    composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
