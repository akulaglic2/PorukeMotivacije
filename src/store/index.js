import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import * as all from "./reducers";
import { reducer as form } from "redux-form";
import isLogged from "./reducers/isLogged";
import user from "./reducers/user";
import login from "./reducers/login";
import quotes from "./reducers/quotes";
import searchQuotes from "./reducers/searchQuotes";

import categories from "./reducers/categories";
import createSagaMiddleware from "redux-saga";
import thunk from "redux-thunk";

const sagaMiddleware = createSagaMiddleware({
  onError: (e) => {
    console.log("Redux Saga Error : ----------------------");
    console.log(e.message);
    throw e;
  },
});

const rootReducer = combineReducers({
  logged: isLogged,
  user: user,
  quotes: quotes,
  searchQuotes: searchQuotes,
  user: login,
  categories: categories,
  form,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
