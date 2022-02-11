import { combineReducers, createStore } from "redux";
import * as all from "./reducers";
import { reducer as form } from "redux-form";
import isLogged from "./reducers/isLogged";
import data from "./reducers/data";

const rootReducer = combineReducers({
  logged: isLogged,
  data: data,
  form: form,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
