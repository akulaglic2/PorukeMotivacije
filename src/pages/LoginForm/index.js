import React, { useState } from "react";
import { Button, styled } from "reakit";
import { Colors, Size, Fonts, style } from "assets/common/Styles";
import { useHistory } from "react-router-dom";
import { Field, formValues, reduxForm } from "redux-form";
import { isValid as isFormValid, submit as submitForm } from "redux-form";
import { connect } from "react-redux";
import Input from "components/Input";
import Notification from "components/Notification";
import { isLogged } from "store/actions/isLogged";
import { userLogin } from "store/actions/user";
import { validateLogin } from "assets/utils/validate";

const Wrapper = styled.form`
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
  const { submitForm, isLogged, handleSubmit, userLogin, category } = props;
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (values) => {
    isLogged();
    userLogin(values);
    history.push(`/category/` + category);
    // if (values) {
    //   userLogin({
    //     username: values.username,
    //     password: values.password,
    //   })
    //     .then(() => {
    //       history.push(`/`);
    //     })
    //     .catch((error) => {});
    // }
  };

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
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
      <StyledButton type="submit" id="tInviteToCL.cancel" selfJustify="center">
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
    posts: state.quotes,
    category: state.categories[0].title,
  };
};
const mapDispatchToProps = {
  submitForm,
  isLogged,
  userLogin,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    // a unique name for the form
    form: "loginForm",
    validate: validateLogin,
  })(LoginForm)
);
