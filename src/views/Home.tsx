import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <Link to="/login">Go to login page</Link>
        <Link to="/register">Go to register page</Link>
      </div>
    );
  }
}

export default Home;
