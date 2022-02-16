import React from "react";
import * as style from "assets/common/Styles";
import { Button, styled } from "reakit";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

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

const Profile = (props) => {
  const { user, handleSubmit } = props;
  const history = useHistory();

  const editProfile = () => {
    history.push(`/edit_profile`);
  };
  return (
    <Wrapper>
      <Label>Username: {user.username}</Label>
      <StyledButton type="submit" id="tInviteToCL" onClick={editProfile}>
        Edit
      </StyledButton>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.login.login,
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    // a unique name for the form
    form: "profilForm",
  })(Profile)
);
