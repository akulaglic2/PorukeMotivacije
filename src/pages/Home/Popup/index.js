import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Box, Button, Flex, styled } from "reakit";
import { Field, reduxForm } from "redux-form";
import { Colors, Fonts } from "../../../assets/common/Styles";
import Input from "../../../components/Input";
import CloseIcon from "../assets/close-icon.png";
import { connect } from "react-redux";

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

const Popup = (props) => {
  const { open, onClose, content } = props;
  const history = useHistory();

  const routeChange = () => {
    history.push(`/`);
  };

  return open ? (
    <Container>
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
          <StyledButton
            type="button"
            id="saveQuote"
            selfJustify="center"
            onClick={() => onClose(false)}
          >
            {"Save"}
          </StyledButton>
        </FlexCloseAndSave>
      </FlexStyled>
    </Container>
  ) : (
    ""
  );
};

export default connect(null)(
  reduxForm({
    // a unique name for the form
    form: "popupForm",
  })(Popup)
);
