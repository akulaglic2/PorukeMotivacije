import React, { useState } from "react";
import { Box, Button, Flex, styled } from "reakit";
import { Field, reduxForm } from "redux-form";
import { Colors, Fonts } from "assets/common/Styles";
import { useSelector } from "react-redux";

const Container = styled.div`
  position: absolute;
  background: #00000050;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
`;

const FlexStyled = styled(Flex)`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 70%;
  margin: 0 auto;
  height: auto;
  max-height: 70vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  border-radius: 4px;
  padding: 20px;
  border: 1px solid #999;
  overflow: auto;
  flex-direction: column;
  gap: 100px;
`;

const FlexCloseAndSave = styled(Flex)`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  position: relative;
  left: 80px;
  cursor: pointer;
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
        <label>{content}</label>
        <FlexCloseAndSave>
          <StyledButton onClick={onSubmit}>{"Yes"}</StyledButton>
          <StyledButton type="submit" id="close" onClick={() => onClose(false)}>
            {"Close"}
          </StyledButton>
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
