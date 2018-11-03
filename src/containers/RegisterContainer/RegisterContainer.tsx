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

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 500px;
    margin: 0;
    height: auto;
  }
`;

const RegisterContainer = () => {
  async function handleSubmit(values: any) {
    delete values.consent;

    try {
      const res = await registerAPI(values);
      console.log(res);
    } catch (err) {
      console.log("hihi");
    }
  }

  return (
    <Wrapper>
      <LogoBanner />
      <RegisterForm handleSubmit={handleSubmit} />
    </Wrapper>
  );
};

export default RegisterContainer;
