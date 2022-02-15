import React, { useState } from "react";
import { Button, styled } from "reakit";
import { Colors, Size, Fonts, style } from "../../assets/common/Styles";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";

import { Field, reduxForm } from "redux-form";
import Input from "../../components/Input";
import Notification from "../../components/Notification";
import { connect } from "react-redux";

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

const AddCategory = (props) => {
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const routeChange = () => {
    history.push(`/category`);
  };

  return (
    <Wrapper {...props}>
      <FormHeader>New category</FormHeader>
      <Field
        key={"category_name"}
        id="category_name"
        name="category_name"
        component={Input}
        type="input"
        label={"Category name"}
      />

      <StyledButton
        type="button"
        onClick={routeChange}
        id="tInviteToCL.cancel"
        selfJustify="center"
      >
        {"Add new category"}
      </StyledButton>
      <Notification
        message={"success"}
        show={true}
        type={"success"}
        onClose={setIsOpen}
      ></Notification>
    </Wrapper>
  );
};

export default connect(null)(
  reduxForm({
    // a unique name for the form
    form: "addCategoryForm",
  })(AddCategory)
);
