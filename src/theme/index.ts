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
    error: string;
  };
  fontSize: {
    sm: string;
    md: string;
    lg: string;
  };
  spacing: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string
  };
  borderRadius: {
    base: string;
    sm: string;
  }
}

export const theme: IThemeInterface = {
  color: {
    primary: "#ff9900",
    error: "#f5222d"
  },
  fontSize: {
    sm: "12px",
    md: "14px",
    lg: "16px"
  },
  spacing: {
    xxs: "4px",
    xs: "8px",
    sm: "12px",
    md: "16px",
    lg: "24px"
  },
  breakpoints: {
    xs: "480px", // Extra small screen / phone
    sm: "576px", // Small screen / tablet
    md: "768px", // Medium screen / desktop
    lg: "992px", // Large screen / wide desktop
    xl: "1200px", // Extra large screen / full hd
    xxl: "1600px" // Extra extra large screen / large descktop
  },
  borderRadius: {
    base: '4px',
    sm: '2px'
  }
};

export default styled;
export { css, keyframes, ThemeProvider, withTheme };
