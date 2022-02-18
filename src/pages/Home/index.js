import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, styled } from "reakit";
import Quote from "./Quote";
import * as style from "assets/common/Styles";
import Popup from "./Popup";
import { withRouter } from "react-router-dom";
import { getQuote } from "store/actions/quotes";
import { useSelector, useDispatch } from "react-redux";

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
  const quotes = useSelector((state) => state.quotes);
  const dispatch = useDispatch();

  const {
    match: { params },
    getQuote,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {}, []);
  return (
    <Container>
      <Title>{params.title}</Title>
      <QuoteList>
        {quotes.map((data, index) =>
          data.category_id == params.id ? (
            <>
              {/* //here must go quote=... because it is defined in Quote component */}
              <Quote num={index} quote={data.description} />
            </>
          ) : null
        )}
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

export default withRouter(Home);
