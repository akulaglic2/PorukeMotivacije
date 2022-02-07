import { ComponentClass, StatelessComponent } from "react";
import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";
import Theme from "./Theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<Theme>;

export default styled;
export { css, createGlobalStyle, keyframes, ThemeProvider };
