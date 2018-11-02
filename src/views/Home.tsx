import React from "react";
import { Link } from "react-router-dom";
class Home extends React.Component {
  render() {
    return (
      <div>
        <p>
          <Link to="/login">Go to login page</Link>
        </p>
        <p>
          <Link to="/register">Go to register page</Link>
        </p>
      </div>
    );
  }
}

export default Home;
