import { combineReducers, createStore } from "redux";
import * as all from "./reducers";
import { reducer as formReducer } from "redux-form";
import isLogged from "./reducers/isLogged";
import data from "./reducers/data";
import user from "./reducers/user";

const rootReducer = combineReducers({
  logged: isLogged,
  data: data,
  user: user,
  form: formReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
