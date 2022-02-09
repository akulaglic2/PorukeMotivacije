import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, styled } from "reakit";
import Quote from "./Quote";
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
const Home = (props) => {
  return (
    <Container>
      <Title>{"Kategorija 1"}</Title>
      <QuoteList>
        {props.data.map((data) => (
          //here must go quote=... because it is defined in Quote component
          <Quote quote={data.title} />
        ))}
      </QuoteList>
    </Container>
  );
};

export default connect((store) => ({
  data: store.data.posts,
}))(Home);
