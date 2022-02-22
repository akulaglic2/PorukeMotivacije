import React, { useState } from "react";
import { Flex, styled } from "reakit";
import { Field, reduxForm } from "redux-form";
import { Colors, Fonts } from "assets/common/Styles";
import { useSelector } from "react-redux";
import Button from "components/Button";
import * as style from "assets/common/Styles";

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
  height: auto;
  max-height: 70vh;
  margin-top: calc(117vh - 85vh - 20px);
  background: #fff;
  border-radius: 35px;
  padding: 20px 100px;
  border: 1px solid #999;
  overflow: auto;
  flex-direction: column;
  gap: 100px;
`;

const FlexCloseAndSave = styled(Flex)`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
`;

const Label = styled.label`
  font-family: ${style.Fonts.FontFamily.poppinsRegular};
`;

const PopupTrash = (props) => {
  const quotes = useSelector((state) => state.quotes);

  const { open, onClose, content } = props;

  const onSubmit = () => {
    // removeQuote(itemID);
    onClose(false);
  };

  return open ? (
    <Container>
      <FlexStyled>
        <Label>{content}</Label>
        <FlexCloseAndSave>
          <Button onClick={onSubmit} text={"Yes"} />
          <Button
            type="submit"
            id="close"
            onClick={() => onClose(false)}
            text={"Close"}
          />
        </FlexCloseAndSave>
      </FlexStyled>
    </Container>
  ) : (
    ""
  );
};

export default reduxForm({
  // a unique name for the form
  form: "popupTrashForm",
})(PopupTrash);
