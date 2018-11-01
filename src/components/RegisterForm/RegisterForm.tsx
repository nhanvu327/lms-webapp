import React from "react";
import { Input, Button, Checkbox, Form, Radio } from "antd";
import { Formik } from "formik";
import { IThemeInterface, withTheme } from "../../theme";
import { Title, AlreadyHaveAccount, Label } from "./styles/RegisterForm";

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

interface Props {
  theme: IThemeInterface;
  handleSubmit: (
    values: {
      email: string;
      password: string;
      confirmPassword: string;
    }
  ) => void;
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

const RegisterForm: React.StatelessComponent<Props> = props => {
  return (
    <Formik
      onSubmit={props.handleSubmit}
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        phone: ""
      }}
      render={({ handleChange }) => (
        <form>
          <Title>REGISTER</Title>
          <FormItem
            {...formItemLayout}
            label={<Label isRequired={true}>Email</Label>}
          >
            <Input name="email" onChange={handleChange} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<Label isRequired={true}>Password</Label>}
          >
            <Input type="password" name="password" onChange={handleChange} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<Label isRequired={true}>Confirm Password</Label>}
          >
            <Input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
            />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<Label isRequired={true}>Phone</Label>}
          >
            <Input type="tel" name="phone" onChange={handleChange} />
          </FormItem>
          <FormItem
            {...formItemLayout}
            label={<Label isRequired={true}>Role</Label>}
          >
            <RadioGroup name="radiogroup" defaultValue={1}>
              <Radio value={1}>Teacher</Radio>
              <Radio value={2}>Student</Radio>
            </RadioGroup>
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Checkbox>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </FormItem>
          <FormItem {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            <AlreadyHaveAccount to="/login">
              Already have an account?
            </AlreadyHaveAccount>
          </FormItem>
        </form>
      )}
    />
  );
};

export default withTheme(RegisterForm);
