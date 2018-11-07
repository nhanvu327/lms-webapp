import React from "react";
import CallingScreenContainer from "../containers/CallingScreenContainer/CallingScreenContainer";
import withPrivateLayout from "../containers/PrivateLayout/PrivateLayout";

function Home() {
  return (
    <div>
      <CallingScreenContainer />
    </div>
  );
}

export default withPrivateLayout(Home);
