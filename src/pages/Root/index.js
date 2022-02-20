import React, { useState, useEffect } from "react";
import LoginForm from "../LoginForm";
import { Container, Flex, styled } from "reakit";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import { getCategory } from "store/actions/categories";
import { getQuote } from "store/actions/quotes";
import { useSelector, useDispatch } from "react-redux";

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  min-height: 100vh;
  background: #f8fafc;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background: linear-gradient(
    180deg,
    #181053 -21.94%,
    #301840 17.1%,
    #3f033b 62.89%,
    #592635 110.93%
  );
`;

const ContainerWrap = styled.div``;

const Root = (props) => {
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();

  const {
    location: { pathname },
  } = props;

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  return (
    <ContainerWrap>
      {pathname === "/login" ? (
        <Wrapper>
          <LoginForm />
        </Wrapper>
      ) : (
        <SiteWrapper>
          <NavBar></NavBar>

          <MainPage></MainPage>
          {/* <Footer></Footer> */}
        </SiteWrapper>
      )}
    </ContainerWrap>
  );
};

export default Root;
