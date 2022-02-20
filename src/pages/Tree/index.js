import React from "react";
import { Hidden } from "reakit";
import DownArrowIcon from "../Root/assets/down-arrow-icon.png";
import UpArrowIcon from "../Root/assets/up-arrow-icon.png";
import * as style from "assets/common/Styles";

import { styled } from "reakit";
import { reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  padding: 10px 0 6px 33px;
`;

const Label = styled.label`
  display: ${(props) => (!props.active ? "none" : "block")};
  padding-top: 12px;
  padding-left: 10px;
  cursor: pointer;

  position: static;
  width: 180px;
  height: 20px;
  left: 0px;
  top: 7.78px;

  font-family: Inter;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height, or 167% */

  /* Text/White 100% */

  color: #fefdfd4f;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const HiddenStyled = styled(Hidden)`
  cursor: pointer;
  margin: 13px 40px;
  padding-top: 4px;
  padding-left: 10px;
  cursor: pointer;

  position: static;
  width: 180px;
  height: 20px;
  left: 0px;
  top: 7.78px;

  font-family: Inter;
  font-style: normal;
  font-size: 14px;
  line-height: 19px;
  /* identical to box height, or 167% */

  /* Text/White 100% */

  color: #fefdfd4f;
`;

const Styledlink = styled(NavLink)`
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

  &.active {
    background: #ffffff1f;
    border-radius: 1.94444px;
    width: 196px;
    border-left: 3px solid white;
    font-weight: 700;
    text-shadow: 0px 0px white;
  }
`;

const HorizontalLine = styled.div`
  width: ${(props) => (props.active ? "140px" : "50px")};
  margin: 5px 15px;
  transition: width 0.5s ease, margin-left 0.5s ease;

  position: static;

  border: 0.972222px solid rgb(230 232 236 / 26%);
`;

const Tree = (props) => {
  const categories = useSelector((state) => state.categories);
  const { active } = props;
  return (
    <Hidden.Container>
      {(hidden) => (
        <CategoryContent>
          <Hidden.Toggle {...hidden} style={{ color: "white" }}>
            <Wrapper>
              {!active ? (hidden.visible = false) : active}
              {!hidden.visible ? (
                <LogoIcon src={DownArrowIcon} />
              ) : (
                <LogoIcon src={UpArrowIcon} />
              )}
              <Label active={active}>Category</Label>
            </Wrapper>
          </Hidden.Toggle>
          {categories.map((data, index) => (
            <Styledlink to={"/category/" + data.name + "/" + data.id}>
              <HiddenStyled {...hidden}>{data.name}</HiddenStyled>
            </Styledlink>
          ))}
        </CategoryContent>
      )}
    </Hidden.Container>
  );
};

export default reduxForm({
  // a unique name for the form
  form: "TreeForm",
})(Tree);
