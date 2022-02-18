import React, { useState, useEffect } from "react";
import LoginForm from "../LoginForm";
import { Flex, styled } from "reakit";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { getCategory } from "store/actions/categories";
import { getQuote } from "store/actions/quotes";

const FlexWrapperRight = styled(Flex)`
  flex-direction: column;
  flex: 1;
  background: palegoldenrod;
`;
const SiteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  min-height: 100vh;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Root = (props) => {
  const {
    logged,
    location: { pathname },
    getCategory,
    getQuote,
  } = props;

  useEffect(() => {
    getCategory();
  }, [getQuote({ id: pathname.split("/")[3] })]);

  return (
    <>
      {pathname === "/login" ? (
        <Wrapper>
          <LoginForm />
        </Wrapper>
      ) : (
        <SiteWrapper>
          <NavBar></NavBar>

          <FlexWrapperRight>
            <MainPage></MainPage>
            {/* <Footer></Footer> */}
          </FlexWrapperRight>
        </SiteWrapper>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    logged: state.logged,
  };
};

export default connect(mapStateToProps, {
  getCategory,
  getQuote,
})(Root);
