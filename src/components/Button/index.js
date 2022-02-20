import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, styled } from "reakit";
import { Colors, Fonts } from "assets/common/Styles";
import { useState } from "react";

const StyledButton = styled.button`
  cursor: pointer;
  background: ${Colors.SuccessGreen};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;

  position: static;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  border: none;
  /* Gray / 300 */

  border-radius: ${(props) => (props.radius ? "147.1rem" : "8px")};
  svg {
    margin-right: 0.5rem !important;
  }
  height: 50px;
  width: ${(props) => (props.width ? props.width : "300px")};
`;

const Button = (props) => {
  const { text, radius, width } = props;

  return (
    <StyledButton radius={radius} width={width}>
      {text}
    </StyledButton>
  );
};

export default Button;
