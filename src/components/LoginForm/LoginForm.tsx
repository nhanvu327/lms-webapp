import React from "react";
import { Form, Input, Icon, Checkbox } from "antd";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import {
  LoginButton,
  OtherSignIn,
  OtherSignInIcon,
  OtherActions
} from "./styles/LoginForm";
import { IThemeInterface, withTheme } from "../../theme";

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
        <form>
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
          <OtherActions>
            <Checkbox>Remember me</Checkbox>
            <Link to="/">Forgot password</Link>
          </OtherActions>
          <LoginButton type="primary" htmlType="submit">
            Log in
          </LoginButton>
          <OtherActions>
            <OtherSignIn>
              Sign in with <OtherSignInIcon type="facebook" theme="filled" />
              <OtherSignInIcon type="google" theme="outlined" />
            </OtherSignIn>
            <Link to="/register">Sign up</Link>
          </OtherActions>
        </form>
      )}
    />
  );
};

export default withTheme(LoginForm);
