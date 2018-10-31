import React from "react";
import styled from "styled-components";
import { NativeButtonProps } from "antd/lib/button/button";
import { IconProps } from "antd/lib/icon";
import { Button, Icon } from "antd";

export const FormStyled = styled.form`
  max-width: 368px;
`;

export const ForgotPassword = styled.a`
`;

export const LoginButton = styled<NativeButtonProps>(props => (
  <Button {...props} />
))`
  width: 100%;
`;

export const OtherSignIn = styled.div`
  display: flex;
  align-items: center;
`;

export const OtherSignInIcon = styled<IconProps>(props => <Icon {...props} />)`
  font-size: 20px;
  margin-left: 8px;
  cursor: pointer;
`;

export const OtherActions = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignUp = styled.a``;
