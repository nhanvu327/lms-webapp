import React from "react";
import styled from "styled-components";
import { Icon } from "antd";
import { IconProps } from "antd/lib/icon";

export const GlobalIcon = styled<IconProps>(props => <Icon {...props} />)`
  font-size: 20px;
  cursor: pointer;

  svg {
    fill: #0066cc;
  }
`;

interface IWrapper {
    isFixed?: Boolean;
  }

export const Wrapper = styled<IWrapper, "div">("div")`
  position: ${(props) => (props.isFixed ? "fixed" : "static")};
  top: 16px;
  right: 16px;
`;
