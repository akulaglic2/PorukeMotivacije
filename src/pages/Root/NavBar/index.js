import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "../../Home";
import { Colors, media } from "../../../assets/common/Styles";
import Profile from "../../Profile/Profile";
import StickyBox from "react-sticky-box";
import { Flex, styled } from "reakit";
import HomeIcon from "./assets/home-icon.png";
import ProfileIcon from "./assets/profile-icon.png";
import MenuIcon from "./assets/menu-icon.png";

const NavbarContainer = styled(StickyBox)`
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  width: 100%;
  flex-direction: row;
  padding-top: 30px;
`;
const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Styledlink = styled(Link)`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  cursor: pointer;
  padding-left: 20px;
  &:hover {
    opacity: 0.8;
  }
`;

const FlexWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 30px;
`;

const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  padding: 12px 0 0 30px;
`;

const NavBar = (props) => {
  return (
    <StickyWrapper>
      <NavbarContainer>
        <LogoIcon src={MenuIcon} />
        <FlexWrapper>
          <Styledlink to="/">
            <LogoIcon src={HomeIcon} /> Home
          </Styledlink>
          <Styledlink to="/profile">
            <LogoIcon src={ProfileIcon} />
            Profile
          </Styledlink>
        </FlexWrapper>
      </NavbarContainer>
    </StickyWrapper>
  );
};

export default NavBar;
