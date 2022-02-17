import React from "react";
import { Hidden } from "reakit";
import DownArrowIcon from "../Root/assets/down-arrow-icon.png";
import UpArrowIcon from "../Root/assets/up-arrow-icon.png";
import * as style from "assets/common/Styles";

import { styled } from "reakit";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { NavLink } from "react-router-dom";

const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  padding: 12px 0 0 30px;
`;

const Label = styled.label`
  padding: 0.2rem;
  color: ${style.Colors.DustGray};
  font-size: ${style.Fonts.FontSize.medium};
  display: ${(props) => (!props.active ? "none" : "block")};
  padding-top: 15px;
  padding-left: 10px;
  cursor: pointer;
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
  color: white;
  cursor: pointer;
  margin: 13px 40px;
  font-size: ${style.Fonts.FontSize.medium};
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
    background: #ffffff21;
    margin-left: 16px;
  }
`;

const Tree = (props) => {
  const { active, categories } = props;
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
            <Styledlink to={"/category/" + data.name}>
              <HiddenStyled {...hidden}>{data.name}</HiddenStyled>
            </Styledlink>
          ))}
        </CategoryContent>
      )}
    </Hidden.Container>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.newCategory,
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    // a unique name for the form
    form: "TreeForm",
  })(Tree)
);
