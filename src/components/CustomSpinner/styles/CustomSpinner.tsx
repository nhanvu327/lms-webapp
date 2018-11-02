import styled, { css } from "../../../theme";

export const Wrapper = styled<{ isFullScreen?: Boolean }, "div">("div")`
  ${({ isFullScreen }) =>
    isFullScreen &&
    css`
      height: 100vh;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
    `};
`;
