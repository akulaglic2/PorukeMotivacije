import { combineReducers, createStore } from "redux";
import * as all from "./reducers";
import { reducer as formReducer } from "redux-form";
import isLogged from "./reducers/isLogged";
import user from "./reducers/user";
import quotes from "./reducers/quotes";

const rootReducer = combineReducers({
  logged: isLogged,
  user: user,
  quotes: quotes,
  form: formReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
