import React, { useState } from "react";
import { Button, styled } from "reakit";

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  cursor: pointer;
  background-color: #6a696930;
  &:hover {
    opacity: 0.8;
  }
`;

const Quote = (props) => {
  return <Container>{props.quote}</Container>;
};

export default Quote;
