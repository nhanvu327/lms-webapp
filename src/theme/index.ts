import * as styledComponents from "styled-components";

const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
  withTheme
} = styledComponents as styledComponents.ThemedStyledComponentsModule<
  IThemeInterface
>;

export interface IThemeInterface {
  color: {
    primary: string;
  };
  fontSize: {
    sm: string;
    md: string;
    lg: string;
  };
  spacing: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

export const theme: IThemeInterface = {
  color: {
    primary: "#ff9900"
  },
  fontSize: {
    sm: "12px",
    md: "14px",
    lg: "16px"
  },
  spacing: {
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px"
  }
};

export default styled;
export { css, keyframes, ThemeProvider, withTheme };
