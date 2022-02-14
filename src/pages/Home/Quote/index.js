import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Flex, styled } from "reakit";
import TrashIcon from "../assets/trash-icon.png";
import Popup from "../Popup";
import PopupTrash from "../PopupTrash";

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  cursor: pointer;
  background-color: #6a696930;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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

const Quote = (props) => {
  const { num, quote } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTrashPopup, setIsOpenTrashPopup] = useState(false);

  return (
    <Container>
      <FlexStyled flex={11} onClick={() => setIsOpen(true)}>
        {quote}
      </FlexStyled>
      <FlexStyled flex={1}>
        <LogoIcon src={TrashIcon} onClick={() => setIsOpenTrashPopup(true)} />
      </FlexStyled>

      <Popup
        itemID={num}
        content={quote}
        open={isOpen}
        onClose={setIsOpen}
        screen={"quote"}
      ></Popup>
      <PopupTrash
        itemID={num}
        content={"Are you sure you want to delete this quote?"}
        open={isOpenTrashPopup}
        onClose={setIsOpenTrashPopup}
      ></PopupTrash>
    </Container>
  );
};

//validate props in Quote where was  <Quote/> called
Quote.propTypes = {
  quote: PropTypes.string.isRequired,
};

export default Quote;
