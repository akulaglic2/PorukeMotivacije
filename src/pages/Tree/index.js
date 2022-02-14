import React from "react";
import { Hidden } from "reakit";
import DownArrowIcon from "../Root/assets/down-arrow-icon.png";
import UpArrowIcon from "../Root/assets/up-arrow-icon.png";
import * as style from "../../assets/common/Styles";

import { Flex, styled } from "reakit";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";

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
  margin: 13px 68px;
  font-size: ${style.Fonts.FontSize.medium};
`;

const Tree = (props) => {
  const { active, posts } = props;
  return (
    <Hidden.Container>
      {(hidden) => (
        <CategoryContent>
          <Hidden.Toggle {...hidden} style={{ color: "white" }}>
            <Wrapper>
              {!hidden.visible ? (
                <LogoIcon src={DownArrowIcon} />
              ) : (
                <LogoIcon src={UpArrowIcon} />
              )}
              <Label active={active}>Category</Label>
            </Wrapper>
          </Hidden.Toggle>

          {posts.map((data, index) => (
            <HiddenStyled {...hidden}>{data.title}</HiddenStyled>
          ))}
        </CategoryContent>
      )}
    </Hidden.Container>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.quotes,
  };
};

export default connect(mapStateToProps)(
  reduxForm({
    // a unique name for the form
    form: "TreeForm",
  })(Tree)
);
