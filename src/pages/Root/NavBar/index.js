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
import AddCategoryIcon from "../assets/add-category-icon.png";

import { Button } from "reakit";
import LoginForm from "../../LoginForm";
import { userLogout } from "../../../store/actions/user";
import { connect } from "react-redux";

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
  width: ${(props) => (props.active ? "180px" : "60px")};
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
`;

const FlexWrapper = styled(Flex)`
  flex-direction: column;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 20px;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
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
  width: ${(props) => (props.active ? "140px" : "30px")};
  padding: 10px 5px;
  margin: 5px 15px;
  border-top: 1px solid #8c8b8b;
  transition: width 0.5s ease, margin-left 0.5s ease;
`;

const NavBar = (props) => {
  const { userLogout } = props;
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
        <FlexWrapper>
          <Styledlink to="/">
            <LogoIcon src={DownArrowIcon} />
            <Label active={isActive}>Category</Label>
          </Styledlink>
          <HorizontalLine active={isActive}></HorizontalLine>

          <Styledlink to="/addCategory">
            <LogoIcon src={AddCategoryIcon} />
            <Label active={isActive}>Add Category</Label>
          </Styledlink>
          <HorizontalLine active={isActive}></HorizontalLine>
          <Styledlink to="/profile">
            <LogoIcon src={ProfileIcon} />
            <Label active={isActive}>Profile</Label>
          </Styledlink>
          <HorizontalLine active={isActive}></HorizontalLine>
        </FlexWrapper>
        <FlexWrapper style={{ position: "absolute", bottom: "20px" }}>
          <Styledlink to="/login" onClick={() => userLogout()}>
            <LogoIcon src={LogoutIcon} />
            <Label active={isActive}>Logout</Label>
          </Styledlink>
        </FlexWrapper>
      </NavbarContainer>
    </StickyWrapper>
  );
};

const mapDispatchToProps = {
  userLogout,
};
export default connect(null, mapDispatchToProps)(NavBar);
