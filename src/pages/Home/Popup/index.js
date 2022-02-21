import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Flex, styled } from "reakit";
import { Field, reduxForm } from "redux-form";
import { Colors, Fonts } from "assets/common/Styles";
import Input from "components/Input";
import CloseIcon from "../assets/close-icon.png";
import Button from "components/Button";

// import { editQuote } from "store/actions/quotes";

const Container = styled.div`
  position: fixed;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 9999;
  cursor: auto;
`;

const FlexStyled = styled(Flex)`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 70%;
  margin: 0 auto;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  border-radius: 35px;
  border: 1px solid #999;
  overflow: auto;
  flex-direction: row;
  gap: 100px;
  height: 50vh;
`;

const FlexCloseAndSave = styled(Flex)`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  margin: 17px;
`;
const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  left: 255px;
  top: 17px;
  cursor: pointer;
`;

const Popup = (props) => {
  const { open, onClose, content, handleSubmit, screen, itemID } = props;
  const history = useHistory();
  const onSubmit = (values) => {
    //  if (screen === "add_quote") addQuote(values.quote);
    //  else editQuote(values.quote, itemID);
    onClose(false);
  };

  return open ? (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <FlexStyled>
        <Field
          key={"quote"}
          name="quote"
          component={Input}
          type="input"
          content={content}
        />

        <FlexCloseAndSave>
          <LogoIcon src={CloseIcon} onClick={() => onClose(false)} />
          <Button
            type="submit"
            id="saveQuote"
            selfJustify="center"
            text={"Save"}
          ></Button>
        </FlexCloseAndSave>
      </FlexStyled>
    </Container>
  ) : (
    ""
  );
};

export default reduxForm({
  // a unique name for the form
  form: "popupForm",
})(Popup);
