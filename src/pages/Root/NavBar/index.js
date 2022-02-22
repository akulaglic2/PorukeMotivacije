import React, { useState, useEffect } from "react";

import { Colors, media, Fonts } from "assets/common/Styles";
import { Box, Flex, styled } from "reakit";
import ProfileIcon from "../assets/profile-icon.png";
import MenuButton from "components/MenuButton";
import LogoutIcon from "../assets/logout-icon.png";
import AddCategoryIcon from "../assets/add-category-icon.png";

import { Button } from "reakit";
import { userLogout } from "store/actions/login";
import { connect } from "react-redux";
import Tree from "../../Tree";
import { setCategory } from "store/actions/categories";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled(Box)`
  transition: 0.3s;
  left: 0px;
  top: 0px;
  bottom: -0.38px;

  /* Sidebar/Gradient */
  position: sticky;
  min-height: 100vh;
  background: linear-gradient(
    180deg,
    #181053 -21.94%,
    #301840 17.1%,
    #3f033b 62.89%,
    #592635 110.93%
  );
  width: ${(props) => (props.active ? "200px" : "90px")};
`;
const StickyWrapper = styled.div`
  flex-grow: 1; // fixed position without position:fixed
`;

const WrapperLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;

  position: static;
  width: 210px;
  height: 41px;
  left: 0px;
  top: 0px;
`;

const Styledlink = styled(NavLink)`
  display: flex;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  cursor: pointer;
  width: 100%;

  transition: 0.3s;
  padding: 0px;
  &:hover {
    opacity: 0.8;
  }

  &.active {
    background: #ffffff1f;
    border-radius: 1.94444px;
    width: ${(props) => (props.active ? "200px" : "90px")};
    border-left: 3px solid white;
    font-weight: 700;
    text-shadow: 0px 0px white;
  }
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
  padding: 12px 0 9px 30px;
`;

const Label = styled.label`
  display: ${(props) => (!props.active ? "none" : "block")};
  padding-top: 15px;
  padding-left: 10px;
  cursor: pointer;

  position: static;
  width: 180px;
  height: 20px;
  left: 0px;
  top: 7.78px;

  font-family: ${Fonts.FontFamily.poppinsRegular};
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height, or 167% */

  /* Text/White 100% */

  color: #fefdfd4f;
`;

const HorizontalLine = styled.div`
  width: ${(props) => (props.active ? "180px" : "70px")};
  margin: 5px 15px;
  transition: width 0.5s ease, margin-left 0.5s ease;

  position: static;

  border: 0.5px solid rgb(230 232 236 / 26%);
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
          <Tree active={isActive}></Tree>

          <HorizontalLine active={isActive}></HorizontalLine>

          <WrapperLink>
            <Styledlink active={isActive} to="/addCategory">
              <LogoIcon src={AddCategoryIcon} />
              <Label active={isActive}>Add Category</Label>
            </Styledlink>
          </WrapperLink>

          <HorizontalLine active={isActive}></HorizontalLine>
          <WrapperLink>
            <Styledlink active={isActive} to="/profile">
              <LogoIcon src={ProfileIcon} />
              <Label active={isActive}>Profile</Label>
            </Styledlink>
          </WrapperLink>
          <HorizontalLine active={isActive}></HorizontalLine>
        </FlexWrapper>
        <FlexWrapper style={{ position: "absolute", bottom: "20px" }}>
          <Styledlink
            active={isActive}
            to="/login"
            onClick={() => userLogout()}
          >
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
  setCategory,
};
export default connect(null, mapDispatchToProps)(NavBar);
