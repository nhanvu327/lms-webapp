import React from "react";
import { Form, Input, Icon, Checkbox } from "antd";
import { injectIntl, InjectedIntl } from "react-intl";
import { Link } from "react-router-dom";
import { Formik, FormikActions } from "formik";
import * as yup from "yup";
import {
  LoginButton,
  OtherSignIn,
  OtherSignInIcon,
  OtherActions
} from "./styles/LoginForm";
import { IThemeInterface, withTheme } from "../../theme";

const FormItem = Form.Item;

interface IValue {
  email: string;
  password: string;
}

interface Props {
  theme: IThemeInterface;
  intl: InjectedIntl;
  handleSubmit: (values: IValue, formikActions: FormikActions<IValue>) => void;
}

const LoginForm: React.StatelessComponent<Props> = ({ intl, handleSubmit }) => {
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required(
        intl.formatMessage({
          id: "FORMS.ERRORS.REQUIRED"
        })
      )
      .email(
        intl.formatMessage({
          id: "FORMS.ERRORS.EMAIL_IS_REQUIRED"
        })
      ),
    password: yup
      .string()
      .min(
        6,
        intl.formatMessage({
          id: "FORMS.ERRORS.PASSWORD_NEEDS_MORE_THAN_6_CHARS"
        })
      )
      .required(
        intl.formatMessage({
          id: "FORMS.ERRORS.REQUIRED"
        })
      )
  });
  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        password: ""
      }}
      render={({
        handleChange,
        handleSubmit,
        errors,
        touched,
        isSubmitting
      }) => {
        const isEmailFieldInValid = errors.email && touched.email;
        const isPasswordFieldInValid = errors.password && touched.password;
        return (
          <form onSubmit={handleSubmit}>
            <FormItem
              validateStatus={isEmailFieldInValid ? "error" : undefined}
              help={isEmailFieldInValid ? errors.email : undefined}
            >
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="Email"
                name="email"
                onChange={handleChange}
              />
            </FormItem>
            <FormItem
              validateStatus={isPasswordFieldInValid ? "error" : undefined}
              help={isPasswordFieldInValid ? errors.password : undefined}
            >
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
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
            <LoginButton
              type="primary"
              loading={isSubmitting}
              htmlType="submit"
            >
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
        );
      }}
    />
  );
};

export default withTheme(injectIntl(LoginForm));
