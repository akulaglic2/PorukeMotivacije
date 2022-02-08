import React, { useState } from "react";
import { Box, Button, Flex, styled } from "reakit";
import CloseIcon from "../assets/close-icon.png";

const Container = styled.div`
  position: fixed;
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

const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  padding: 12px 0 0 30px;
  cursor: pointer;
`;

const Popup = (props) => {
  return (
    <Container>
      <FlexStyled>
        {props.content}

        <LogoIcon src={CloseIcon} onClick={props.handleClose} />
      </FlexStyled>
    </Container>
  );
};

export default Popup;
