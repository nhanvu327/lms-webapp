import React from "react";
import { LoginContainer } from "../containers";

function Login() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <LoginContainer />
    </div>
  );
}

export default Login;
