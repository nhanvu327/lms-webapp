import React from "react";
import { LoginForm, LogoBanner } from "../../components";
import styled from "../../theme";

const Wrapper = styled.div`
  max-width: 368px;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  background-color: white;
  border-radius: ${({theme}) => theme.borderRadius.base};
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
