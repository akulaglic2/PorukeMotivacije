import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, styled } from "reakit";
import { Colors, Fonts } from "assets/common/Styles";
import { useState } from "react";

const StyledButton = styled.button`
  background-color: ${Colors.SuccessGreen};
  border: none;
  color: ${Colors.white};
  cursor: pointer;
  font-size: ${Fonts.FontSize.small};
  font-weight: bold;
  text-transform: uppercase;
  margin: 1em 0;
  padding: 1em 2em;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
  border-radius: ${(props) => (props.radius ? "147.1rem" : "")};
  svg {
    margin-right: 0.5rem !important;
  }
  height: 70px;
  width: ${(props) => (props.width ? props.width : "100%")};
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
