import React, { useState } from "react";
import { Button, styled } from "reakit";
import MenuIcon from "./assets/menu-icon.png";
import RightArrowIcon from "./assets/right-arrow-icon.png";

const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  padding: 12px 0 0 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const MenuButton = (props) => {
  return (
    <>
      {props.isActive ? (
        <LogoIcon src={MenuIcon} />
      ) : (
        <LogoIcon src={RightArrowIcon} />
      )}
    </>
  );
};

export default MenuButton;
