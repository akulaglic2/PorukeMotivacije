import React, { useState, useEffect } from "react";
import LoginForm from "../LoginForm";
import { Flex, styled } from "reakit";
import Home from "../Home";
import Profile from "../Profile";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import MainPage from "./MainPage";
import Footer from "./Footer";
import { IntlProvider } from "react-intl";
import NavBar from "./NavBar";

const FlexWrapper = styled(Flex)`
  flex-direction: row;
  flex: 4;
`;

const FlexWrapperRight = styled(Flex)`
  flex-direction: column;
  flex: 1;
`;
const SiteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  min-height: 100vh;
`;

const Root = (props) => {
  return (
    <SiteWrapper>
      <NavBar></NavBar>

      {console.log("ffffff", props)}
      <FlexWrapperRight>
        <MainPage></MainPage>
        <Footer></Footer>
      </FlexWrapperRight>
    </SiteWrapper>
  );
};

export default Root;
