import React from "react";
import { Route, Switch, Link, BrowserRouter, Router } from "react-router-dom";
import Root from "./pages/Root";
import { Flex, styled } from "reakit";
import GlobalStyle from "./global-styles";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path={`/`}
            render={(props) => (
              <Root {...this.state} {...this.props} {...props} />
            )}
          />
        </Switch>
        <GlobalStyle />
      </BrowserRouter>
    );
  }
}
