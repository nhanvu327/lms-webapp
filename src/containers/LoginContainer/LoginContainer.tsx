import React from "react";
import { injectIntl, InjectedIntl } from "react-intl";
import { LoginForm, LogoBanner } from "../../components";
import loginAPI from "../../api/loginAPI";
import styled from "../../theme";
import errorCodes from "../../constants/errorCodes";

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  margin: auto;
  width: 90%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 400px;
    margin: 0;
  }
`;

interface IProps {
  history: any;
  intl: InjectedIntl;
}

function LoginContainer(props: IProps) {
  async function handleSubmit(values: any, formikActions: any) {
    delete values.consent;

    try {
      await loginAPI(values);
      props.history.push("/");
    } catch (err) {
      formikActions.setSubmitting(false);
      if (err.error_code === errorCodes.email_not_exist) {
        formikActions.setErrors({
          email: props.intl.formatMessage(
            {
              id: "FORMS.ERRORS.EMAIL_NOT_EXIST"
            },
            {
              email: values.email
            }
          )
        });
      }
      if (err.error_code === errorCodes.password_not_correct) {
        formikActions.setErrors({
          password: props.intl.formatMessage({
            id: "FORMS.ERRORS.PASSWORD_NOT_CORRECT"
          })
        });
      }
    }
  }
  return (
    <Wrapper>
      <LogoBanner />
      <LoginForm handleSubmit={handleSubmit} />
    </Wrapper>
  );
}

export default injectIntl(LoginContainer);
