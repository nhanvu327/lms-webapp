import React from "react";
import { Input, Button, Checkbox, Form, Radio } from "antd";
import { injectIntl, InjectedIntl } from "react-intl";
import { Formik } from "formik";
import * as yup from "yup";
import roles from "../../constants/roles";
import { IThemeInterface, withTheme } from "../../theme";
import { Title, AlreadyHaveAccount, Label } from "./styles/RegisterForm";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

interface Props {
  theme: IThemeInterface;
  intl: InjectedIntl;
  handleSubmit: (values: any) => void;
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 }
  }
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0
    },
    sm: {
      span: 16,
      offset: 8
    }
  }
};

const RegisterForm: React.StatelessComponent<Props> = ({
  intl,
  handleSubmit
}) => {
  const validationSchema = yup.object().shape({
    name: yup.string().required(
      intl.formatMessage({
        id: "FORMS.ERRORS.REQUIRED"
      })
    ),
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
      ),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password")],
        intl.formatMessage({
          id: "FORMS.ERRORS.PASSWORD_NOT_MATCH"
        })
      )
      .required(
        intl.formatMessage({
          id: "FORMS.ERRORS.REQUIRED"
        })
      ),
    role: yup.string().required(
      intl.formatMessage({
        id: "FORMS.ERRORS.REQUIRED"
      })
    ),
    phone: yup.string().required(
      intl.formatMessage({
        id: "FORMS.ERRORS.REQUIRED"
      })
    ),
    consent: yup.bool().test(
      "consent",
      intl.formatMessage({
        id: "FORMS.ERRORS.TERMS_CONDITIONS"
      }),
      value => value === true
    )
  });
  return (
    <Formik
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        phone: "",
        name: "",
        role: roles.Teacher,
        consent: false
      }}
      render={({ handleChange, handleSubmit, errors, touched }) => {
        const isNameFieldInValid = errors.name && touched.name;
        const isEmailFieldInValid = errors.email && touched.email;
        const isPasswordFieldInValid = errors.password && touched.password;
        const isConfirmPasswordFieldInValid =
          errors.confirmPassword && touched.confirmPassword;
        const isRoleFieldInvalid = errors.role && touched.role;
        const isPhoneFieldInvalid = errors.phone && touched.phone;
        const isConsentFieldInvalid = errors.consent && touched.consent;
        return (
          <form onSubmit={e => e.preventDefault()}>
            <Title>REGISTER</Title>
            <FormItem
              {...formItemLayout}
              label={<Label isRequired={true}>Full name</Label>}
              validateStatus={isNameFieldInValid ? "error" : undefined}
              help={isNameFieldInValid ? errors.name : undefined}
            >
              <Input type="text" name="name" onChange={handleChange} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<Label isRequired={true}>Email</Label>}
              validateStatus={isEmailFieldInValid ? "error" : undefined}
              help={isEmailFieldInValid ? errors.email : undefined}
            >
              <Input type="email" name="email" onChange={handleChange} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<Label isRequired={true}>Password</Label>}
              validateStatus={isPasswordFieldInValid ? "error" : undefined}
              help={isPasswordFieldInValid ? errors.password : undefined}
            >
              <Input type="password" name="password" onChange={handleChange} />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<Label isRequired={true}>Confirm Password</Label>}
              validateStatus={
                isConfirmPasswordFieldInValid ? "error" : undefined
              }
              help={
                isConfirmPasswordFieldInValid
                  ? errors.confirmPassword
                  : undefined
              }
            >
              <Input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
              />
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<Label isRequired={true}>Role</Label>}
              validateStatus={isRoleFieldInvalid ? "error" : undefined}
              help={isRoleFieldInvalid ? errors.role : undefined}
            >
              <RadioGroup
                name="role"
                onChange={handleChange}
                defaultValue={roles.Teacher}
              >
                <Radio value={roles.Teacher}>Teacher</Radio>
                <Radio value={roles.Student}>Student</Radio>
              </RadioGroup>
            </FormItem>
            <FormItem
              {...formItemLayout}
              label={<Label isRequired={true}>Phone</Label>}
              validateStatus={isPhoneFieldInvalid ? "error" : undefined}
              help={isPhoneFieldInvalid ? errors.phone : undefined}
            >
              <Input type="tel" name="phone" onChange={handleChange} />
            </FormItem>
            <FormItem
              {...tailFormItemLayout}
              validateStatus={isConsentFieldInvalid ? "error" : undefined}
              help={isConsentFieldInvalid ? errors.consent : undefined}
            >
              <Checkbox name="consent" onChange={handleChange}>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" onClick={handleSubmit as any}>
                Register
              </Button>
              <AlreadyHaveAccount to="/login">
                Already have an account?
              </AlreadyHaveAccount>
            </FormItem>
          </form>
        );
      }}
    />
  );
};

export default withTheme(injectIntl(RegisterForm));
