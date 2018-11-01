import React from "react";
import { RegisterContainer } from "../containers";
import { LanguageSwitcher } from "../components";
import BackgroundLarge from "../assets/images/background-large.jpg";
import BackgroundSmall from "../assets/images/background-small.jpg";
import styled from "../theme";

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundSmall});
  background-size: cover;

  @media (min-width: ${({theme}) => theme.breakpoints.sm} ) {
    background-image: url(${BackgroundLarge});
  }
`;

function Login() {
  return (
    <Wrapper>
      <RegisterContainer />
      <LanguageSwitcher isFixed={true} />
    </Wrapper>
  );
}

export default Login;
