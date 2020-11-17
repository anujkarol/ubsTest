import { createStore } from "redux";
import { Enhancers, sagaMiddleware } from "./middleware";
import rootReducer from "./reducers";
import rootSaga from "./sagas";

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, {}, Enhancers);
sagaMiddleware.run(rootSaga);
