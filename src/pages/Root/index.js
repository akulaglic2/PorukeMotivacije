import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MainPage from "./MainPage";
import { Flex, styled } from "reakit";

const FlexWrapper = styled(Flex)`
  flex-direction: row;
  flex: 4;
`;

const FlexWrapperRight = styled(Flex)`
  flex-direction: column;
  flex: 1;
`;

const Root = (props) => {
  return (
    <>
      <FlexWrapper>
        <NavBar></NavBar>
        <FlexWrapperRight>
          <MainPage></MainPage>
          <Footer></Footer>
        </FlexWrapperRight>
      </FlexWrapper>
    </>
  );
};

export default Root;
