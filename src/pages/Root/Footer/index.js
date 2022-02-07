import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Home from "../../Home";
import { Colors, media } from "../../../assets/common/Styles";
import Profile from "../../Profile/Profile";
import StickyBox from "react-sticky-box";
import { Flex, styled } from "reakit";

const FooterContainer = styled(StickyBox)`
  height: 20%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #ababab;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  width: 100%;
`;

const Footer = (props) => {
  return (
    <FooterContainer>
      <h2>hhhh</h2>
    </FooterContainer>
  );
};

export default Footer;
