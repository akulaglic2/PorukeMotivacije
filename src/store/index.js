import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import * as all from "./reducers";
import { reducer as formReducer } from "redux-form";
import isLogged from "./reducers/isLogged";
import user from "./reducers/user";
import login from "./reducers/login";
import quotes from "./reducers/quotes";
import categories from "./reducers/categories";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";

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
  login: login,
  categories: categories,
  form: formReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
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
