import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import allReducers from "./store/reducers";
import { createStore } from "redux";

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class AppWrapper extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Route path="/" component={App} />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
