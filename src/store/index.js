import { combineReducers, createStore } from "redux";
import * as all from "./reducers";

const rootReducer = combineReducers({
  ...all,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
