import React, { useState } from "react";
import { styled } from "reakit";
import { Colors, Size, Fonts, style } from "assets/common/Styles";
import { useHistory } from "react-router-dom";

import { Field, reduxForm } from "redux-form";
import Input from "components/Input";
import Notification from "components/Notification";
import { connect } from "react-redux";
import Button from "components/Button";

import { setCategory } from "store/actions/categories";

const AddCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 126px;
`;

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

const FormHeader = styled.p`
  font-size: ${Fonts.FontSize.large};
  font-weight: bold;
  text-align: start;
  font-family: ${Fonts.FontFamily.poppinsRegular};
`;

const AddCategory = (props) => {
  const { setCategory, handleSubmit } = props;
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const onSubmit = (values) => {
    setIsOpen(true);
    setCategory(values);
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  return (
    <AddCategoryWrapper>
      <Wrapper {...props} onSubmit={handleSubmit(onSubmit)}>
        <FormHeader>New category</FormHeader>
        <Field
          key={"category_name"}
          id="category_name"
          name="category_name"
          component={Input}
          type="input"
          label={"Category name"}
        />
        <Button
          type="submit"
          id="tInviteToCL.cancel"
          text={"Add new category"}
        />
      </Wrapper>
      {isOpen ? (
        <Notification
          message={"success"}
          show={true}
          type={"success"}
          onClose={setIsOpen}
        ></Notification>
      ) : (
        ""
      )}
    </AddCategoryWrapper>
  );
};

export default connect(null, { setCategory })(
  reduxForm({
    // a unique name for the form
    form: "addCategoryForm",
  })(AddCategory)
);
