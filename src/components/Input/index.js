import React from "react";
import PropTypes from "prop-types";
import { Box, Flex, styled } from "reakit";
import { Colors, Fonts } from "assets/common/Styles";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  margin: 20px;
  }
`;

const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px 16px 0px 14px;

  position: static;
  width: 326px;
  height: 48px;
  left: 0px;
  top: calc(50% - 48px / 2);

  /* Gray/50 */

  background: #fefeff52;
  /* Gray / 300 */

  padding-left: 0.5rem;
  font-size: ${Fonts.FontSize.medium};
  font-family: inherit;

  border: 1px solid #d0d0d0;
  box-sizing: border-box;
  border-radius: 4px;
`;

const StyledFlex = styled(Flex)`
  border-radius: 4px;
  border: ${(props) => (props.error ? "1px solid " + Colors.ErrorRed : "none")};
  width: 266px;
  :focus {
    outline-color: transparent;
    outline-style: none;
    box-shadow: inset 0px 0px 4px 2px ${Colors.Mercury};
  }
`;
const ErrorMessage = styled.span`
  color: ${Colors.ErrorRed};
  padding: 0.2rem;
  font-size: ${Fonts.FontSize.small};
`;
const Label = styled.label`
  padding: 0.2rem;
  text-transform: uppercase;
  color: ${(props) =>
    props.error || props.acceptedStyling
      ? props.error
        ? Colors.ErrorRed
        : Colors.AcceptGreen
      : Colors.DustGray};
  font-weight: ${(props) => (props.error ? "bold" : "normal")};
  font-size: ${Fonts.FontSize.small};
`;

const Input = (props) => {
  const {
    input,
    content,
    label,
    meta: { touched, error },
    handleInputChange,
  } = props;

  const renderError = (touched, error) => {
    if (touched && error) {
      return <ErrorMessage>{error}</ErrorMessage>;
    }
  };

  const [inputText, setInputText] = useState(content);

  return (
    <Wrapper>
      <Label error={touched && error}>{label}</Label>
      <StyledFlex error={touched && error}>
        <StyledInput
          {...input}
          value={inputText}
          onChange={handleInputChange}
          error={touched && error}
        />
      </StyledFlex>
      {renderError(touched, error)}
    </Wrapper>
  );
};

Input.propTypes = {
  input: PropTypes.object.isRequired,
};

export default Input;
