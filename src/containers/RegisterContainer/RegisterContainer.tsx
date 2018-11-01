import React from "react";
import { RegisterForm, LogoBanner } from "../../components";
import styled from "../../theme";

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  margin: ${({ theme }) => theme.spacing.md};

  @media screen and (min-width: ${({theme}) => theme.breakpoints.sm}) {
    width: 500px;
  }
`;

const RegisterContainer = () => {
  return (
    <Wrapper>
      <LogoBanner />
      <RegisterForm handleSubmit={values => console.log(values)} />
    </Wrapper>
  );
};

export default RegisterContainer;
