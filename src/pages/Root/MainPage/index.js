import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "../../Home";
import { Colors, media } from "../../../assets/common/Styles";
import Profile from "../../Profile/Profile";
import StickyBox from "react-sticky-box";
import { Flex, styled } from "reakit";
import HiddenMenu from "../HiddenMenu";

const WrapperContent = styled(StickyBox)`
  height: 500px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fffefe;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  width: 100%;
`;

const MainPage = (props) => {
  return (
    <WrapperContent>
      <Switch>
        <Route exact path="/">
          <HiddenMenu />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
      </Switch>
    </WrapperContent>
  );
};

export default MainPage;
