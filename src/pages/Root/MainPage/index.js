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

const WrapperContent = styled(StickyBox)`
  height: 500px;
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

  {
    console.log("fff", props.formValues);
  }
  return (
    <WrapperContent>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/addCategory" component={AddCategory} />
      </Switch>
    </WrapperContent>
  );
};

export default connect(
  (store) => {
    return { formValues: getFormValues("mainForm")(store) };
  },
  {
    submitForm,
  }
)(
  reduxForm({
    // a unique name for the form
    form: "mainForm",
  })(MainPage)
);
