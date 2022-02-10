import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, styled } from "reakit";
import Quote from "./Quote";
import * as style from "../../assets/common/Styles";
import Popup from "./Popup";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;
const QuoteList = styled.div`
  padding: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const StyledButton = styled(Button)`
  border-radius: 147.1rem;
  background-color: #6db364;
  width: 30px;
  color: ${style.Colors.white};
  cursor: pointer;
  font-size: ${style.Fonts.FontSize.medium};
  font-weight: bold;
  margin: 20px;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.8;
  }
`;

const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Title>{"Kategorija 1"}</Title>
      <QuoteList>
        {props.data.map((data) => (
          //here must go quote=... because it is defined in Quote component
          <Quote quote={data.title} />
        ))}
      </QuoteList>
      <ButtonWrapper>
        <StyledButton onClick={() => setIsOpen(true)}>Add quote</StyledButton>
      </ButtonWrapper>
      <Popup content={""} open={isOpen} onClose={setIsOpen}></Popup>
    </Container>
  );
};

export default connect((store) => ({
  data: store.data.posts,
}))(Home);
