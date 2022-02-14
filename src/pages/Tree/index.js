import React from "react";
import { Hidden } from "reakit";
import DownArrowIcon from "../Root/assets/down-arrow-icon.png";
import UpArrowIcon from "../Root/assets/up-arrow-icon.png";
import * as style from "../../assets/common/Styles";

import { Flex, styled } from "reakit";

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

const Tree = (props) => {
  const { active } = props;
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
          <Hidden
            style={{
              color: "white",
              cursor: "pointer",
              margin: "13px 68px",
              fontSize: "medium",
            }}
            {...hidden}
          >
            Hidden
          </Hidden>
        </CategoryContent>
      )}
    </Hidden.Container>
  );
};

export default Tree;
