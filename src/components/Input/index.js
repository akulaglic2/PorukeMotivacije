import React from "react";
import PropTypes from "prop-types";
import Loadable from "react-loadable";
import { Box, Flex, styled } from "reakit";
import { Colors, Fonts } from "../../assets/common/Styles";
import { useState } from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
    box-shadow: 0 0 0px 1000px #fff inset;
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
  border: gray;
  ::placeholder {
    color: ${Colors.DustyGray};
  }
  :focus {
    outline-color: transparent;
    outline-style: none;
    box-shadow: inset 0px 0px 4px 2px ${Colors.Mercury};
  }
`;

const Input = (props) => {
  const [inputText, setInputText] = useState(props.content);

  return (
    <Wrapper>
      <label>{props.label}</label>
      <StyledFlex>
        <StyledInput
          type={props.type}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </StyledFlex>
    </Wrapper>
  );
};

Input.propTypes = {
  input: PropTypes.object.isRequired,
};

export default Input;
