import React from "react";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { Box, Flex, styled } from "reakit";
import { Colors, Fonts } from "assets/common/Styles";

const StyledButton = styled.button`
  background-color: ${Colors.DustyGray};
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

const CustomButton = (props) => {
  return <StyledButton> {props.text}</StyledButton>;
};

CustomButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
export default CustomButton;
