import React from "react";
import { LoginForm, LogoBanner } from "../../components";
import loginAPI from "../../api/loginAPI";
import styled from "../../theme";

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
  history: any
}

function LoginContainer(props: IProps) {
  async function handleSubmit(values: any, formikActions: any) {
    delete values.consent;

    try {
      const res = await loginAPI(values);
      props.history.push('/');
      console.log(res);
    } catch (err) {
      formikActions.setSubmitting(false);
      console.log("hihi");
    }
  }
  return (
    <Wrapper>
      <LogoBanner />
      <LoginForm handleSubmit={handleSubmit} />
    </Wrapper>
  );
}

export default LoginContainer;
