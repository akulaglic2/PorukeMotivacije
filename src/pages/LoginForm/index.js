import React, { useState, useEffect } from "react";
import { styled } from "reakit";
import { Colors, Size, Fonts, style } from "assets/common/Styles";
import { useHistory } from "react-router-dom";
import { Field, formValues, reduxForm } from "redux-form";
import { isValid as isFormValid, submit as submitForm } from "redux-form";
import Input from "components/Input";
import Notification from "components/Notification";
import { validateLogin } from "assets/utils/validate";
import { useSelector, useDispatch } from "react-redux";
import { login } from "store/actions/login";
import Button from "components/Button";

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-width: 500px;
  gap: 20px;
  margin-top: 100px;
  border: groove;
  padding: 50px 100px;
  background: ivory;
`;

const FormHeader = styled.p`
  font-size: ${Fonts.FontSize.large};
  font-weight: bold;
  text-align: start;
`;

const LoginForm = (props) => {
  const { handleSubmit } = props;
  const category = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(login());
    // Safe to add dispatch to the dependencies array
  }, [dispatch]);

  const onSubmit = (values) => {
    if (values) {
      dispatch(
        login({
          username: values.username,
          password: values.password,
        })
      );
      // .then(() => {
      //   isLogged();
      //   dispatch(userLogin(values));

      // })
      // .catch((error) => {
      //   setIsOpen(true);
      // });
      history.push(`/category/` + category[0].name + "/" + category[0].id);
    }
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
      <Button
        type="submit"
        id="tInviteToCL.cancel"
        selfJustify="center"
        text={"Submit"}
      />
      {isOpen ? (
        <Notification
          message={"error"}
          show={true}
          type={"error"}
          onClose={setIsOpen}
        ></Notification>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default reduxForm({
  // a unique name for the form
  form: "loginForm",
  validate: validateLogin,
})(LoginForm);
