import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import STORE from "./store";

class AppWrapper extends Component {
  render() {
    return (
      <div>
        <Provider store={STORE}>
          <Router>
            <Route path="/" component={App} />
          </Router>
        </Provider>
      </div>
    );
  }
}

ReactDOM.render(<AppWrapper />, document.getElementById("root"));
