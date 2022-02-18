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
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { middleware as thunkMiddleware } from "redux-saga-thunk";

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

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunkMiddleware, sagaMiddleware)
    // other store enhancers if any
  )
);

sagaMiddleware.run(rootSaga).done.catch((err) => {
  console.log({
    message: err.message,
    source: "sagaError",
    stacktrace: err.sagaStack,
  });
});

export default store;
