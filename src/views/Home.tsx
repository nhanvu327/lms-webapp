import React from "react";
import { Button } from "antd";
import CallingScreenContainer from '../containers/CallingScreenContainer/CallingScreenContainer';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Button type="primary">Primary</Button>
        <CallingScreenContainer />
      </div>
    );
  }
}

export default Home;
