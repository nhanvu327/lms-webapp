import React from "react";
import { LoginForm, LogoBanner } from "../../components";

function LoginContainer() {
  return (
    <div>
      <LogoBanner />
      <LoginForm handleSubmit={values => console.log(values)} />
    </div>
  );
}

export default LoginContainer;
