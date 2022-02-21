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
  const { text, radius, width, ...rest } = props;

  return (
    <StyledButton radius={radius} width={width} {...rest}>
      {text}
    </StyledButton>
  );
};

export default Button;
