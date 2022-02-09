import React from "react";
import { Box, Flex, styled } from "reakit";
import * as style from "../../assets/common/Styles";
import CloseIcon from "../../assets/icons/close-icon.png";

const NotificationHolder = styled(Flex)`
  width: 100%;
  padding: 0 30px;
`;

const NotificationWrapper = styled(Flex)`
  padding: 0.6rem;
  margin: 0 auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  display: ${(props) => (props.show ? "flex" : "none")};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : style.Colors.DustyGray};
  color: ${style.Colors.white};
  border-radius: 0.1rem;
  align-items: center;
  max-width: 1440px;
  width: 100%;
`;
const LogoIcon = styled.img`
  height: 20px;
  width: 20px;
  padding: 12px 0 0 30px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

const Notification = (props) => {
  const { show, onClose, message, type } = props;
  switch (type) {
    case "error":
      return (
        <NotificationHolder>
          <NotificationWrapper
            backgroundColor={style.Colors.ErrorRed}
            show={show}
          >
            {message}

            <LogoIcon src={CloseIcon} onClick={() => onClose(false)} />
          </NotificationWrapper>
        </NotificationHolder>
      );
    case "success":
      return (
        <NotificationHolder>
          <NotificationWrapper
            backgroundColor={style.Colors.SuccessGreen}
            show={show}
          >
            {message}

            <LogoIcon src={CloseIcon} onClick={() => onClose(false)} />
          </NotificationWrapper>
        </NotificationHolder>
      );
  }
};

export default Notification;
