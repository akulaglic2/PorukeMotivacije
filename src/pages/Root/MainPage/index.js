import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../../Home";
import { Colors, media } from "../../../assets/common/Styles";
import Profile from "../../Profile";
import StickyBox from "react-sticky-box";
import { Flex, styled } from "reakit";
import LoginForm from "../../LoginForm";
import { getFormValues, reduxForm } from "redux-form";

import { isValid as isFormValid, submit as submitForm } from "redux-form";
import { connect } from "react-redux";
import AddCategory from "../../AddCategory";
import EditProfile from "../../Profile/EditProfile";

const WrapperContent = styled(StickyBox)`
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fffefe;
  transition: 0.5s;
  padding-top: 60px;
  width: 100%;
`;

const MainPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <WrapperContent>
      <Switch>
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
