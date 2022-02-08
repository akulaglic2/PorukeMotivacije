import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "../../Home";
import { Colors, media, Fonts } from "../../../assets/common/Styles";
import Profile from "../../Profile";
import StickyBox from "react-sticky-box";
import { Box, Flex, styled } from "reakit";
import HomeIcon from "../assets/home-icon.png";
import DownArrowIcon from "../assets/down-arrow-icon.png";
import ProfileIcon from "../assets/profile-icon.png";
import MenuButton from "../../../components/MenuButton";
import MenuIcon from "../assets/menu-icon.png";
import LogoutIcon from "../assets/logout-icon.png";
import { Button } from "reakit";
import LoginForm from "../../LoginForm";

const NavbarContainer = styled(Box)`
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  flex-direction: row;
  padding-top: 30px;
  width: ${(props) => (props.active ? "150px" : "60px")};
`;
const StickyWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Styledlink = styled(Link)`
  display: flex;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  transition: 0.3s;
  cursor: pointer;
  width: 100%;
  padding: 0px;
  &:hover {
    opacity: 0.8;
  }
`;

const Menulink = styled(Link)`
  padding-left: 50px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  cursor: pointer;
  width: 100%;
  padding: 0px;
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

const Label = styled.label`
  padding: 0.2rem;
  color: ${Colors.DustGray};
  font-size: ${Fonts.FontSize.medium};
  display: ${(props) => (!props.active ? "none" : "block")};
  padding-top: 15px;
  padding-left: 10px;
  cursor: pointer;
`;

const HorizontalLine = styled.div`
  margin-top: 0.2rem
  width: 31px;
  height: 31px;
  display: flex;
  align-items: center;
  display: ${(props) => (!props.active ? "none" : "block")};
  &:before {
    content: "";
    width: 130px;
    height: 1px;
    
    border-top: 2px solid #f9f2f266;
    display: block;
    position: absolute;
    margin-top: 20px;
    margin-left: 8.5px;
    border-radius: 2px;
  }
  
`;

const NavBar = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StickyWrapper>
      <NavbarContainer active={isActive}>
        <Button
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <MenuButton isActive={isActive} />
        </Button>
        <HorizontalLine active={isActive}></HorizontalLine>
        <FlexWrapper>
          <Styledlink to="/">
            <LogoIcon src={DownArrowIcon} />
            <Label active={isActive}>Category</Label>
          </Styledlink>
          <HorizontalLine active={isActive}></HorizontalLine>
          <Styledlink to="/profile">
            <LogoIcon src={ProfileIcon} />
            <Label active={isActive}>Profile</Label>
          </Styledlink>
        </FlexWrapper>
        <FlexWrapper style={{ position: "absolute", bottom: "20px" }}>
          <Styledlink to="/login">
            <LogoIcon src={LogoutIcon} />
            <Label active={isActive}>Logout</Label>
          </Styledlink>
        </FlexWrapper>
      </NavbarContainer>
    </StickyWrapper>
  );
};

export default NavBar;
