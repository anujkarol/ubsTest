import { applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

const composeEnhancers =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      trace: true,
      traceLimit: 25,
    })) ||
  compose;

export const sagaMiddleware = createSagaMiddleware({
  onError(error) {
    setImmediate(() => {
      console.log("Saga Error handled from Middleware.ts", error);
      throw error;
    });
  },
});

const middleware = [sagaMiddleware];

export const Enhancers = composeEnhancers(applyMiddleware(...middleware));
