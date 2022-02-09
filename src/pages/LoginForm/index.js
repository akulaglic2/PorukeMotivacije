import React, { useState } from "react";
import { Button, styled } from "reakit";
import { Colors, Size, Fonts, style } from "../../assets/common/Styles";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import MainPage from "../Root/MainPage";
import Home from "../Home";

import { Field, reduxForm } from "redux-form";
import { isValid as isFormValid, submit as submitForm } from "redux-form";
import { connect } from "react-redux";
import Input from "../../components/Input";
import Notification from "../../components/Notification";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 100px;
  gap: 20px;
`;

const StyledButton = styled(Button)`
  background-color: #88b15a;
  border: none;
  color: ${Colors.white};
  cursor: pointer;
  font-size: ${Fonts.FontSize.medium};
  font-weight: bold;
  margin: 1em 0;
  padding: 1em 2em;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
`;

const FormHeader = styled.p`
  font-size: ${Fonts.FontSize.large};
  font-weight: bold;
  text-align: start;
`;

const LoginForm = (props) => {
  const { submitForm } = props;
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const routeChange = () => {
    submitForm("mainForm");
    history.push(`/`);
  };

  return (
    <Wrapper>
      <FormHeader>Login</FormHeader>
      <Field
        key={"username"}
        name="username"
        component={Input}
        type="input"
        label={"Name"}
      />
      <Field
        key={"password"}
        name="password"
        component={Input}
        type="input"
        label={"Password"}
      />
      <StyledButton
        type="button"
        onClick={routeChange}
        id="tInviteToCL.cancel"
        selfJustify="center"
      >
        {"Submit"}
      </StyledButton>
      <Notification
        message={"error"}
        show={true}
        onClose={setIsOpen}
        type={"error"}
      ></Notification>
    </Wrapper>
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
