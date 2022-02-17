import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, styled } from "reakit";
import Quote from "./Quote";
import * as style from "assets/common/Styles";
import Popup from "./Popup";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  min-width: 70%;
  background: lightgoldenrodyellow;
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
  const { quotes, categories } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Title>{props.match.params.title}</Title>
      <QuoteList>
        {quotes.map((data, index) => (
          <>
            {/* //here must go quote=... because it is defined in Quote component */}
            <Quote num={index} quote={data.description} />
          </>
        ))}
      </QuoteList>
      <ButtonWrapper>
        <StyledButton onClick={() => setIsOpen(true)}>Add quote</StyledButton>
      </ButtonWrapper>
      <Popup
        content={""}
        open={isOpen}
        onClose={setIsOpen}
        screen={"add_quote"}
      ></Popup>
    </Container>
  );
};

export default withRouter(
  connect((state) => ({
    quotes: state.quotes,
    categories: state.categories,
  }))(Home)
);
