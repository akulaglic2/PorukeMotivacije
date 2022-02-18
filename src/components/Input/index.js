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
  align-items: center;
  width: 100%;
  padding-left: 0.5rem;
  height: 2.7rem;
  font-size: ${Fonts.FontSize.medium};
  font-family: inherit;
  color: ${Colors.black};
  background: rgb(201 201 201 / 27%);
  border: none;
  :focus {
    outline-color: transparent;
    outline-style: none;
    box-shadow: inset 0px 0px 4px 2px ${Colors.Mercury};
  }
`;

const StyledFlex = styled(Flex)`
  flex-direction: row;
  align-items: center;
  width: 100%;
  position: relative;
  border: ${(props) =>
    props.error
      ? "1px solid " + Colors.ErrorRed
      : "1px solid " + Colors.OutlineGray};
  ::placeholder {
    color: ${Colors.DustyGray};
  }
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
