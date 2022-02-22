import React from "react";
import * as style from "assets/common/Styles";
import { styled } from "reakit";
import { reduxForm } from "redux-form";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "components/Button";

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 100px;
  gap: 20px;

  background: #ffffff;
  border-radius: 38.8889px;
`;

const Label = styled.label`
  color: ${style.Colors.black};
  padding: 30px;

  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  cursor: pointer;
  align-items: flex-start;

  position: static;
  left: 0px;
  top: 0px;

  background: #f8fafc;
  #box-shadow: 0px 1.94444px 13.6111px rgba(0, 99, 231, 0.06);
  border-radius: 23.3333px;
  font-family: ${style.Fonts.FontFamily.poppinsRegular};
`;

const StyledButton = styled(Button)`
  margin: 54px;
`;
const Profile = (props) => {
  const { handleSubmit } = props;
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const editProfile = () => {
    history.push(`/edit_profile`);
  };
  return (
    <Wrapper onSubmit={handleSubmit(editProfile)}>
      <Label>Username: {user.login.username}</Label>
      <StyledButton type="submit" id="tInviteToCL" text={"Edit"} />
    </Wrapper>
  );
};

export default reduxForm({
  // a unique name for the form
  form: "profilForm",
})(Profile);
