import { CombinedState, combineReducers } from "redux";
import getDataReducer from "./getDataReducer";
import serverReducer from "./serverReducer";

const rootReducer: CombinedState<any> = combineReducers({
  getDataReducer,
  serverReducer,
});

export default rootReducer;
