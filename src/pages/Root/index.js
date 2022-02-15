import React from "react";
import LoginForm from "../LoginForm";
import { Flex, styled } from "reakit";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import { connect } from "react-redux";

const FlexWrapperRight = styled(Flex)`
  flex-direction: column;
  flex: 1;
`;
const SiteWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  min-height: 100vh;
`;

const Root = (props) => {
  const {
    logged,
    location: { pathname },
  } = props;
  return (
    <>
      {pathname === "/login" ? (
        <LoginForm />
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

export default connect(mapStateToProps)(Root);
