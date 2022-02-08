import React from "react";
import { Route, Switch, Link, BrowserRouter, Router } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import StickyBox from "react-sticky-box";
import { Flex, styled } from "reakit";
import NavBar from "./pages/Root/NavBar";
import LoginForm from "./pages/LoginForm";
import { reduxForm } from "redux-form";
import GlobalStyle from "./global-styles";

const FlexWrapperRight = styled(Flex)`
  flex-direction: column;
  flex: 1;
`;

export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exactly component={Root} pattern="/" />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
