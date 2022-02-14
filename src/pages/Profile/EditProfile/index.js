import React from "react";
import * as style from "../../../assets/common/Styles";
import { Button, Flex, styled } from "reakit";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import Input from "../../../components/Input";
import { useHistory } from "react-router-dom";
import { setNewUsername } from "../../../store/actions/user";

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 100px;
  gap: 20px;
`;

const Label = styled.label`
  background-color: #cbb6b6;
  color: ${style.Colors.white};
  font-size: ${style.Fonts.FontSize.medium};
  padding: 30px;
`;

const StyledButton = styled(Button)`
  background-color: #7c7c7c;
  border: none;
  color: ${style.Colors.white};
  cursor: pointer;
  font-size: ${style.Fonts.FontSize.medium};
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

const EditProfile = (props) => {
  const history = useHistory();
  const { user, handleSubmit, setNewUsername } = props;

  const doneEditProfile = (values) => {
    setNewUsername(values, user.username);
    history.push(`/profile`);
  };

  return (
    <Wrapper>
      <Field
        key={"usernameProfile"}
        name="usernameProfile"
        component={Input}
        type="input"
        content={user.username}
        label={"Username"}
      />
      <StyledButton
        type="submit"
        id="done"
        onClick={handleSubmit(doneEditProfile)}
      >
        Done
      </StyledButton>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { setNewUsername })(
  reduxForm({
    // a unique name for the form
    form: "profilEditForm",
  })(EditProfile)
);
