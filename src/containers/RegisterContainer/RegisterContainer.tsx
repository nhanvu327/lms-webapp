import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import localStorage from "../../services/localStorage";
import { LOCALSTORAGE_TOKEN } from "../../constants/app";
import { saveProfile } from "../../actions/userActions";
import { RegisterForm, LogoBanner } from "../../components";
import registerAPI from "../../api/registerAPI";
import styled from "../../theme";

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  margin: ${({ theme }) => theme.spacing.lg} auto;
  width: 90%;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 500px;
    margin: 0;
    height: auto;
  }
`;

interface IProps {
  history: any;
  dispatchSaveProfile: Function;
}

const RegisterContainer = (props: IProps) => {
  async function handleSubmit(values: any) {
    delete values.consent;

    try {
      const res = await registerAPI(values);
      props.dispatchSaveProfile(res.payload.profile);
      localStorage.saveItem(LOCALSTORAGE_TOKEN, res.payload.token);
      props.history.push("/");
    } catch (err) {
      window.Sentry.captureException(err);
    }
  }

  return (
    <Wrapper>
      <LogoBanner />
      <RegisterForm handleSubmit={handleSubmit} />
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    dispatchSaveProfile: (data: any) => dispatch(saveProfile(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(RegisterContainer);
