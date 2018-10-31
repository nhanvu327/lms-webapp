import React from "react";
import { IThemeInterface, withTheme } from "../../theme";
import { Form, Input, Icon, Checkbox } from "antd";
import { Formik } from "formik";
import {
  FormStyled,
  ForgotPassword,
  LoginButton,
  OtherSignIn,
  OtherSignInIcon,
  OtherActions,
  SignUp
} from "./styles/LoginForm";

const FormItem = Form.Item;

interface Props {
  theme: IThemeInterface;
  handleSubmit: (
    values: {
      username: string;
      password: string;
    }
  ) => void;
}

const LoginForm: React.StatelessComponent<Props> = props => {
  return (
    <Formik
      onSubmit={props.handleSubmit}
      initialValues={{
        username: "",
        password: ""
      }}
      render={({ handleChange }) => (
        <FormStyled>
          <FormItem>
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </FormItem>
          <FormItem>
            <OtherActions>
              <Checkbox>Remember me</Checkbox>
              <ForgotPassword href="/">Forgot password</ForgotPassword>
            </OtherActions>
            <LoginButton type="primary" htmlType="submit">
              Log in
            </LoginButton>
            <OtherActions>
              <OtherSignIn>
                Sign in with <OtherSignInIcon type="facebook" theme="filled" />
                <OtherSignInIcon type="google" theme="outlined" />
              </OtherSignIn>
              <SignUp href="">Sign up</SignUp>
            </OtherActions>
          </FormItem>
        </FormStyled>
      )}
    />
  );
};

export default withTheme(LoginForm);
