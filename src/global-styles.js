import { createGlobalStyle } from "styled-components";

import * as style from "assets/common/Styles";

import "./index.css";
import "react-select/dist/react-select.css";

/* eslint no-unused-expressions: 0 */
export default createGlobalStyle`

html, body {
  overflow-x: hidden !important;
  overflow-y: auto !important;
}
  html {
   background: linear-gradient(
      180deg,
      #181053 -21.94%,
      #301840 17.1%,
      #3f033b 62.89%,
      #592635 110.93%
    );
    min-height: 100%;
    min-width: 100%;
    font-family: ${
      window.location.host === "zepter.se"
        ? style.Fonts.FontFamily.mainRegular
        : style.Fonts.FontFamily.cardsFontLight
    };
  }
  body {
    background-color: #fafafa;
    margin: 0;
    padding: 0;
    ${style.media.lessThan("sm")`
      /* for screen sizes less than 60em */
      font-size: ${style.Fonts.FontSize.small};
    `};
    ${style.media.between("xs", "md")`
      /* for screen sizes less than 60em */
      font-size: ${style.Fonts.FontSize.medium};
    `};
    ${style.media.lessThan("lg")`
      /* for screen sizes less than 60em */
      font-size: ${style.Fonts.FontSize.big};
    `};
  }
`;
