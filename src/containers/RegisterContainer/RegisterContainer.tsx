import React from "react";
import { RegisterForm, LogoBanner } from "../../components";
import registerAPI from "../../api/registerAPI";
import styled from "../../theme";

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  margin: ${({ theme }) => theme.spacing.lg} auto;
  width: 90%;

  @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}) {
    width: 500px;
    margin: 0;
  }
`;

const RegisterContainer = () => {

  function handleSubmit(values: any) {
    registerAPI(values)
  }

  return (
    <Wrapper>
      <LogoBanner />
      <RegisterForm handleSubmit={handleSubmit} />
    </Wrapper>
  );
};

export default RegisterContainer;
