import React from "react";
import styled from "../../../theme";
import { Icon } from "antd";

export const MenuTriggerIcon = styled<any>(props => <Icon {...props} />)`
  font-size: 20px;
  cursor: pointer;
  margin-left: ${({ theme }) => theme.spacing.md};
`;

export const Logo = styled.div`
  height: 64px;
  position: relative;
  line-height: 64px;
  padding-left: 24px;
  transition: all 0.3s;
  background: #002140;
  overflow: hidden;
  font-size: ${({theme}) => theme.fontSize.lg};
  color: white;
`;
