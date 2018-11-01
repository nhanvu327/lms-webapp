import styled, { css } from "../../../theme";
import { Link } from "react-router-dom";

export const Title = styled.h2`
  text-align: center;
`;

export const AlreadyHaveAccount = styled(Link)`
  float: right;
`;

export const Label = styled<{ isRequired: true }, "span">("span")`
  ${({ isRequired, theme }) =>
    isRequired &&
    css`
      &:before {
        display: inline-block;
        margin-right: ${theme.spacing.xxs};
        content: "*";
        font-family: SimSun;
        line-height: 1;
        font-size: ${theme.fontSize.md};
        color: ${theme.color.error};
      }
    `};
`;
