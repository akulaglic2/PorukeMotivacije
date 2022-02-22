import React from "react";
import * as style from "assets/common/Styles";
import { Flex, styled } from "reakit";
import { Field, reduxForm } from "redux-form";
import Input from "components/Input";
import { useHistory } from "react-router-dom";
import { setNewUsername } from "store/actions/user";
import Button from "components/Button";
import { useSelector, useDispatch } from "react-redux";

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 100px;
  gap: 20px;
  padding: 30px;
  background: #ffffff;
  border-radius: 38.8889px;
`;
const Label = styled.label`
  background-color: #cbb6b6;
  color: ${style.Colors.white};
  font-size: ${style.Fonts.FontSize.medium};
  padding: 30px;
`;

const EditProfile = (props) => {
  const history = useHistory();
  const { handleSubmit, setNewUsername } = props;

  const user = useSelector((state) => state.user);

  const doneEditProfile = (values) => {
    setNewUsername(values, user.login.username);
    history.push(`/profile`);
  };

  return (
    <Wrapper>
      <Field
        key={"usernameProfile"}
        name="usernameProfile"
        component={Input}
        type="input"
        content={user.login.username}
        label={"Username"}
      />
      <Button
        type="submit"
        id="done"
        onClick={handleSubmit(doneEditProfile)}
        text={"Done"}
      />
    </Wrapper>
  );
};

export default reduxForm({
  // a unique name for the form
  form: "profilEditForm",
})(EditProfile);
