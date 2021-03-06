import React from "react";
import { message } from "antd";
import { injectIntl, InjectedIntl } from "react-intl";
import { connect } from "react-redux";
import { LoginForm, LogoBanner } from "../../components";
import loginAPI from "../../api/loginAPI";
import styled from "../../theme";
import errorCodes from "../../constants/errorCodes";
import { LOCALSTORAGE_TOKEN } from "../../constants/app";
import { saveProfile } from "../../actions/userActions";
import localStorage from "../../services/localStorage";
import { Dispatch } from "redux";

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
  dispatchSaveProfile: Function;
}

function LoginContainer(props: IProps) {
  async function handleSubmit(values: any, formikActions: any) {
    delete values.consent;

    try {
      const res = await loginAPI(values);
      props.dispatchSaveProfile(res.payload.profile);
      localStorage.saveItem(LOCALSTORAGE_TOKEN, res.payload.token);
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
      } else if (err.error_code === errorCodes.password_not_correct) {
        formikActions.setErrors({
          password: props.intl.formatMessage({
            id: "FORMS.ERRORS.PASSWORD_NOT_CORRECT"
          })
        });
      } else {
        message.error(err.message || "Oops, something wrong happened!");
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

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatchSaveProfile: (data: any) => dispatch(saveProfile(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(injectIntl(LoginContainer));
