import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Flex, styled } from "reakit";
import TrashIcon from "../assets/trash-icon.png";
import Popup from "../Popup";

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  cursor: pointer;
  background-color: #6a696930;
`;

const FlexStyled = styled(Flex)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  padding: 12px 0 0 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Quote = ({ quote }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showDialog = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container onClick={showDialog}>
      <FlexStyled>
        {quote}
        <LogoIcon src={TrashIcon} />
      </FlexStyled>
      {isOpen && <Popup content={quote} handleClose={showDialog}></Popup>}
    </Container>
  );
};

//validate props in Quote where was  <Quote/> called
Quote.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default Quote;
