import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
html, body {
    overflow-x: hidden !important;
    overflow-y: auto !important;
  }
    html {
      background-color: green;
      min-height: 100%;
      min-width: 100%;
     
    }
    body {
      background-color: green;
      margin: 0;
      padding: 0;
    }
`;
