import React, { useState } from "react";
import { Button, styled } from "reakit";
import { Colors, Size, Fonts, style } from "../../assets/common/Styles";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import MainPage from "../Root/MainPage";
import Home from "../Home";

import { reduxForm } from "redux-form";
import { isValid as isFormValid, submit as submitForm } from "redux-form";
import { connect } from "react-redux";

const Label = styled.label`
  padding: 0.2rem;
  color: ${Colors.DustGray};
  font-weight: bold;
  font-size: ${Fonts.FontSize.small};
`;
const LoginForm = (props) => {
  const { submitForm } = props;
  const history = useHistory();

  const routeChange = () => {
    submitForm("mainForm");
    history.push(`/`);
  };

  return (
    <div>
      <Label>
        Name:
        <input type="text" name="name" />
      </Label>
      <Button onClick={routeChange}>Login</Button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
const mapDispatchToProps = {
  submitForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
