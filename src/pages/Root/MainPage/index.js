import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "../../Home";
import Profile from "../../Profile";
import StickyBox from "react-sticky-box";
import { Flex, styled } from "reakit";
import LoginForm from "../../LoginForm";
import AddCategory from "../../AddCategory";
import EditProfile from "../../Profile/EditProfile";

const WrapperContent = styled(StickyBox)`
  display: flex;
  z-index: 1;
  justify-content: center;
  padding-top: 60px;
`;

const MainPage = (props) => {
  return (
    <WrapperContent>
      <Switch>
        <Route path={"/category/:title/:id"}>
          <Home />
        </Route>
        <Route exact path="/" component={Home}></Route>

        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/addCategory" component={AddCategory} />
        <Route exact path="/edit_profile" component={EditProfile} />
      </Switch>
    </WrapperContent>
  );
};

export default MainPage;
