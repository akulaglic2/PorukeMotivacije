import React from "react";
import { styled, Flex } from "reakit";
import { Colors, Fonts, media } from "assets/common/Styles";
import { injectIntl } from "react-intl";

const Background = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Heading = styled.h2`
  font-weight: bolder;
  text-align: start;
  font-family: ${Fonts.FontFamily.mainBlack};
`;

const Message = styled.h6`
  font-weight: normal;
  text-align: justify;
  font-family: ${Fonts.FontFamily.mainRegular};
`;

const ButtonContainer = styled(Flex)`
  flex-direction: column;
  margin-right: auto;
  margin-left: 5rem;
  ${media.lessThan("md")`
    margin-right: 1rem;
    margin-left: 1rem;
  `};
`;

const NotFound = (props) => {
  const { intl } = props;
  return (
    <Background>
      <ButtonContainer>
        <Heading>Oops, You don't have access for this page!</Heading>

        {/* <StyledLink to="">
          <Button
            bold
            bgColor={Colors.black}
            text={intl.formatMessage({
              id: "NotFoundPage.Button",
              defaultMessage: "Back to home",
            })}
          />
        </StyledLink> */}
      </ButtonContainer>
    </Background>
  );
};

export default NotFound;
