import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, styled } from "reakit";
import Quote from "./Quote";
import * as style from "assets/common/Styles";
import Popup from "./Popup";
import { withRouter } from "react-router-dom";
import { getQuote, searchQuotes } from "store/actions/quotes";
import { useSelector, useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import Input from "components/Input";

const Container = styled.form`
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
  const searchQuotes1 = useSelector((state) => state.searchQuotes);
  const dispatch = useDispatch();

  const {
    match: { params },
    onChange,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const [currentQuotes, setCurrentQuotes] = useState(quotes);

  useEffect(() => {
    dispatch(getQuote({ id: params.id }));
  }, [params.id]);

  useEffect(() => {
    setCurrentQuotes(quotes);
  }, [quotes]);

  const search = (values) => {
    dispatch(searchQuotes({ id: params.id, query: values }));
    setCurrentQuotes(searchQuotes1.quotes ? searchQuotes1.quotes : []);
  };

  return (
    <Container
      onChange={(e) => {
        const values = e.target.value;
        // whatever stuff you want to do
        search(values);
      }}
    >
      <Field
        key={"search"}
        name="search"
        component={Input}
        type="input"
        label={"Search"}
      />
      <Title>{params.title}</Title>
      <QuoteList>
        {currentQuotes.map((data, index) =>
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

export default withRouter(
  reduxForm({
    // a unique name for the form
    form: "homeForm",
  })(Home)
);
