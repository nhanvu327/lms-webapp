import React from "react";
import { LoginForm, LogoBanner } from "../../components";
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

function LoginContainer() {
  return (
    <Wrapper>
      <LogoBanner />
      <LoginForm handleSubmit={values => console.log(values)} />
    </Wrapper>
  );
}

export default LoginContainer;
